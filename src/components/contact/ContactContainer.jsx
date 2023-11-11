import ContactForm from "./ContactForm";
import Intro from "./Intro";

const ContactContainer = () => {
  return (
    <div className="flex flex-col justify-center gap-4 mt-10">
      <Intro />
      <ContactForm />
    </div>
  );
};

export default ContactContainer;
