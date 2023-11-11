import React from "react";
import ContactModel from "./ContactModel";

const ContactForm = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between gap-12 items-center lg:mx-64 mx-4">
      <div className="flex flex-1 w-full min-h-[450px] relative">
        <ContactModel />
      </div>
      <div className="flex flex-1 w-full">
        <form className="flex flex-col justify-center items-start gap-3 w-full my-4">
          <div className="relative flex flex-col gap-1 justify-center items-start w-full">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="your name"
              className="rounded-md p-2 w-full text-black"
            />
          </div>
          <div className="flex flex-col gap-1 justify-center items-start  relative w-full">
            <label>Email</label>
            <input
              type="text"
              name="email"
              className="rounded-md p-2 w-full text-black"
              placeholder="email@example.com"
            />
          </div>
          <div className="flex flex-col gap-1 justify-center items-start relative w-full">
            <label>Message</label>
            <textarea
              className="rounded-md p-2 w-full min-h-[120px] text-black"
              placeholder="your message"
            />
          </div>
          <div className="relative w-full">
            <button
              type="submit"
              className="w-full bg-transparent text-white border border-white p-2 rounded-md"
            >
              send
            </button>
          </div>
        </form>
      </div>

      {/*  3d model goes here */}
    </div>
  );
};

export default ContactForm;
