import React, { useState } from "react";
import axios from "axios";
import {toast, Toaster } from "react-hot-toast";

function Contact() {
  const contact_info = [
    { logo: "mail", text: "hamzabelakri92@gmail.com" },
    { logo: "call-outline", text: "50386630" },
    {
      logo: "location",
      text: "Mourouj III",
    },
  ];

  const [message, setMessage] = useState({ name: "", email: "", message: "" });
  const handleChange = (event) => {
    setMessage({ ...message, [event.target.name]: event.target.value });
  };
  const onClick = async (event) => {
    setMessage({ name: "", email: "", message: "" });
    event.preventDefault();
 
    try {
      const response = await axios.post(
        "https://portfolio-uxpz.onrender.com",
        message
      );
      toast.success(response.data.msg);
      console.log(response);
    } catch (error) {
      toast.error(error)
      console.log(error);
    }
  };
  return (
    <section id="contact" className="py-10 px-3 text-white">
        <Toaster position="top-center" reverseOrder={false} />
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          Contact <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">Get in touch</p>

        <div
          className="mt-16 flex md:flex-row flex-col
       gap-6 max-w-5xl bg-gray-800 md:p-6 p-2 rounded-lg mx-auto"
        >
          <form className="flex flex-col flex-1 gap-5">
            <input
              type="text"
              placeholder="Your Name"
              value={message.name}
              required
              name="name"
              onChange={handleChange}
            />
            <input
              type="Email"
              placeholder="Your Email Address"
              value={message.email}
              required
              name="email"
              onChange={handleChange}
            />
            <textarea
              placeholder="Your Message"
              name="message"
              value={message.message}
              required
              rows={5}
              onChange={handleChange}
            ></textarea>
            <button className="btn-primary w-fit" onClick={onClick}>
              Send Message
            </button>
          </form>
          <div className="flex flex-col  gap-7 ">
            {contact_info.map((contact, i) => (
              <div
                key={i}
                className="flex flex-row  
                text-left gap-4 flex-wrap items-center"
              >
                <div className="min-w-[3.5rem]  text-3xl min-h-[3.5rem] flex items-center justify-center text-white bg-cyan-600 rounded-full">
                  <ion-icon name={contact.logo}></ion-icon>
                </div>
                <p className="md:text-base text-sm  break-words">
                  {contact.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
