import { Toaster } from "react-hot-toast";
import ContactModel from "./ContactModel";
import Form from "./Form";

const ContactForm = () => {
  return (
    <div className="relative flex flex-col lg:flex-row justify-between gap-12 items-center lg:mx-64 mx-4">
      <div className="flex flex-1 w-full min-h-[450px]">
        <ContactModel />
      </div>
      <div className="flex flex-1 w-full">
        <Form />
      </div>
      <Toaster />
    </div>
  );
};

export default ContactForm;
