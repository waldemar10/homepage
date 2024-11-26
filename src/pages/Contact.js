import ContactForm from "../components/common/ContactForm";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import "../styles/contact.css";
const Contact = () => {
  return (
    <>
      <Header></Header>
      <div className="contact-wrapper">
        <h1>Kontakt</h1>
        <ContactForm />
      </div>
      <Footer />
    </>
  );
};

export default Contact;
