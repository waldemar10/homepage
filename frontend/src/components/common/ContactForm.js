import React, { useState, useRef} from "react";
import { useTranslation } from "react-i18next";
import HCaptcha from "@hcaptcha/react-hcaptcha";
import { useIsMobile } from "../../hooks/useIsMobile";
import Modal from "./Modal";
import { ThemeContext } from "../../context/themeContext";
import i18n from "i18next";
import LoadingScreen from "./LoadingScreen";
const API_URL =
  process.env.REACT_APP_API_URL + "backend/public/index.php/contact/email";

const ContactForm = () => {
  const { t } = useTranslation("common");
  const { theme } = React.useContext(ThemeContext);
  const isMobile = useIsMobile();
  const captchaRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    msg: "",
    captcha: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const submitForm = (e) => {
    e.preventDefault();
    setLoading(true);
    fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        msg: formData.msg,
        captcha: formData.captcha,
      }),
    })
      .then(async(response) => {
        const data = await response.json();
      
        if (!response.ok) {
          throw new Error(data.errors);
        }
        return data;
      })
      .then((data) => {
        if (data.success) {
          showModal();
          resetData();
        } else {
          captchaRef.current?.resetCaptcha();
          setErrors(data.errors);
        }
      })
      .catch((error) => {
        setErrors([error.message]);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  function resetData() {
    setFormData({
      name: "",
      email: "",
      msg: "",
      captcha: "",
    });
    captchaRef.current?.resetCaptcha();
    setErrors({});
  }

  function showModal() {
    const modal = document.querySelector(".modal");
          const backdrop = document.querySelector(".modal__backdrop");
          modal.classList.add("modal--show");
          backdrop.classList.add("modal__backdrop--show");
  }
  return (
    <>
      {" "}
      {loading && (
        <LoadingScreen
          headline="Bitte warten..."
          msg="Deine Nachricht wird gesendet..."
        />
      )}
      {!loading && (
        <form
          className="contact-form"
          onSubmit={submitForm}
          name="contact-form">
          <h3>{t("contact.form.title","")}</h3>
          <input
            className="contact-form__input"
            name="name"
            type="text"
            placeholder={t("contact.form.name","")}
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && (
            <p className="contact-form__error-message">{errors.name}</p>
          )}
          <input
            className="contact-form__input"
            type="email"
            name="email"
            placeholder={t("contact.form.email","")}
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && (
            <p className="contact-form__error-message">{errors.email}</p>
          )}
          <textarea
            name="msg"
            className="contact-form__textarea"
            placeholder={t("contact.form.message","")}
            value={formData.msg}
            onChange={handleChange}></textarea>
          {errors.msg && (
            <p className="contact-form__error-message">{errors.msg}</p>
          )}
          <div className="contact-form__captcha">
            <HCaptcha
              size={isMobile ? "compact" : "normal"}
              theme={theme}
              languageOverride={i18n.language}
              ref={captchaRef}
              sitekey={process.env.REACT_APP_HCAPTCHA_SITE_KEY}
              onVerify={(token) => {
                console.log("Captcha token:", token);
                setFormData((prevState) => ({
                  ...prevState,
                  captcha: token,
                }));
              }}
              onExpire={() => {
                console.log("Captcha expired");
                setFormData((prevState) => ({
                  ...prevState,
                  captcha: "",
                }));
              }}
              onError={(error) => {
                console.error("Captcha error:", error);
              }}
            />
          </div>
          {errors.captcha && (
            <p className="contact-form__error-message">{errors.captcha}</p>
          )}
          <button className="contact-form__button" type="submit">
            {t("contact.form.submit","")}
          </button>
        </form>
      )}
      <Modal
        title={t("contact.form.modal.title","")}
        msg={t("contact.form.modal.text","")}
      />
    </>
  );
};

export default ContactForm;
