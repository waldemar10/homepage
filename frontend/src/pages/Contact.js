import React, { useEffect } from "react"
import ContactForm from "../components/common/ContactForm";
import { useTranslation } from "react-i18next";
const Contact = () => {
  const { t } = useTranslation("common");

  return (
    <div className="contact">
      <div className="contact__content">
        <h2 className="contact__title">{t("header.contact","")}</h2>
        <p className="contact__text">
        {t("contact.text1","")}
          <br />
          <br />
          {t("contact.text2","")}
        </p>
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
