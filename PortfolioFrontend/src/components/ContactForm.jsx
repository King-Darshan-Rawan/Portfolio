import React, { useState } from "react";
import { useForm } from "react-hook-form";
import useWeb3Forms from "@web3forms/react";

const ContactForm = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const [message, setMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting }
  } = useForm();

  const accessKey = "2b914d9a-724c-4447-9853-59725ac4e3c9"; // Replace with your actual Access Key

  const { submit: onSubmit } = useWeb3Forms({
    access_key: accessKey,
    settings: {
      from_name: "Your Website Name",
      subject: "New Contact Message from your Website"
    },
    onSuccess: (msg, data) => {
      setIsSuccess(true);
      setMessage(msg);
      reset();
    },
    onError: (msg, data) => {
      setIsSuccess(false);
      setMessage(msg);
    }
  });

  return (
    <div className="w-full bg-[#1A1F29]">
      <div className="bg-[#1A1F29] text-white py-16 px-8 lg:px-32 flex flex-col lg:flex-row justify-between items-start w-[75%] mx-auto">
        <div className="mb-12 lg:mb-0 lg:w-[40%] text-center lg:text-left">
          <h2 className="text-2xl font-semibold mb-4">Contacting Me</h2>
          <p className="text-gray-300 leading-relaxed">
            Feel free to talk to me about anything that bothers you. Got a question on the
            services I provide? I'm just a click away.
            <br />
            I live in the England's time zone, if this helps.
          </p>
        </div>

        <div className="lg:w-1/2 w-full">
          <h2 className="text-2xl font-semibold mb-6">Say Hi to Me</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-4">
            <div className="flex flex-col lg:flex-row gap-4">
              <input
                type="text"
                name="name"
                placeholder="Name"
                {...register("name", { required: true })}
                className="flex-1 px-4 py-2 rounded bg-[#2C3440] text-white placeholder-gray-400 focus:outline-none"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                {...register("email", { required: true })}
                className="flex-1 px-4 py-2 rounded bg-[#2C3440] text-white placeholder-gray-400 focus:outline-none w-full"
                required
              />
            </div>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              {...register("subject")}
              className="px-4 py-2 rounded bg-[#2C3440] text-white placeholder-gray-400 focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Message"
              rows="6"
              {...register("message", { required: true })}
              className="px-4 py-2 rounded bg-[#2C3440] text-white placeholder-gray-400 focus:outline-none"
              required
            ></textarea>
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-green-600 hover:bg-green-500 text-white font-semibold py-2 px-6 rounded w-fit"
            >
              {isSubmitting ? "Sending..." : "SUBMIT"}
            </button>
            {message && (
              <p className={`text-sm mt-2 ${isSuccess ? "text-green-400" : "text-red-400"}`}>
                {message}
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
