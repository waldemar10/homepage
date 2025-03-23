const ContactForm = () => {
  return (
    <form className="contact-form">
      <input type="text" placeholder="Name" />
      <input type="email" placeholder="E-Mail" />
      <textarea placeholder="Nachricht.. "></textarea>
      <button type="submit">Senden</button>
    </form>
  );
};

export default ContactForm;
