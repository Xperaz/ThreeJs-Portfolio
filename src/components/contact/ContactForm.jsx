import { Toaster } from "react-hot-toast";
import ContactModel from "./ContactModel";
import Form from "./Form";

const ContactForm = () => {
  return (
    <div className="relative flex flex-col lg:flex-row justify-between gap-12 items-center ">
      <div className="hidden sm:flex flex-1 w-full min-h-[350px] lg:min-h-[450px] lg:my-10">
        <ContactModel />
      </div>
      <div className="flex flex-1 w-full xl:mx-64 sm:mx-10 mx-4 my-10 sm:my-0">
        <Form />
      </div>
      <Toaster />
    </div>
  );
};

export default ContactForm;
