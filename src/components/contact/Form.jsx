import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import toast from "react-hot-toast";

const Form = () => {
  const form = useRef();
  const schema = yup.object().shape({
    name: yup.string().required("Your name is required!"),
    email: yup.string().email().required("Your email is required!"),
    message: yup.string().required("Please enter a message before sending."),
  });

  const sendEmail = () => {
    emailjs
      .sendForm(
        `${process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID}`,
        `${process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID}`,
        form.current,
        `${process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY}`
      )
      .then(
        (result) => {
          toast.success(
            "Thank you for reaching out. I'll be in touch shortly.",
            {
              duration: 5000,
            }
          );
        },
        (error) => {
          toast.error("Something went wrong! please try again later.");
        }
      );
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    sendEmail();
    reset();
  };

  return (
    <form
      ref={form}
      className="flex flex-col justify-center items-start gap-3 w-full lg:w-[30vw] lg:ml-64 my-4 mx-4 md:mx-8 "
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="relative flex flex-col gap-1 justify-center items-start w-full lg:w-full">
        <label>Name</label>
        <input
          type="text"
          name="name"
          placeholder="your name"
          className="rounded-md p-2 w-full text-black outline-none"
          {...register("name")}
        />
        {errors.name && <p className="text-red-500">{errors.name?.message}</p>}
      </div>
      <div className="flex flex-col gap-1 justify-center items-start  relative w-full">
        <label>Email</label>
        <input
          type="text"
          name="email"
          className="rounded-md p-2 w-full text-black outline-none"
          placeholder="email@example.com"
          {...register("email")}
        />
        {errors.email && (
          <p className="text-red-500">{errors.email?.message}</p>
        )}
      </div>
      <div className="flex flex-col gap-1 justify-center items-start relative w-full">
        <label>Message</label>
        <textarea
          className="rounded-md p-2 w-full min-h-[120px] text-black outline-none max-h-[250px]"
          name="message"
          placeholder="your message"
          {...register("message")}
        />
        {errors.message && (
          <p className="text-red-500">{errors.message?.message}</p>
        )}
      </div>
      <div className="relative w-full">
        <button
          type="submit"
          className="w-full bg-[#da4ea2] text-white text-[20px] p-1 rounded-md outline-none"
        >
          send
        </button>
      </div>
    </form>
  );
};

export default Form;
