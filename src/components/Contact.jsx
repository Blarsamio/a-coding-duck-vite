import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });
  const [isSent, setIsSent] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setIsSent('Message sent successfully!');
          setFormData({
            user_name: "",
            user_email: "",
            message: "",
          });
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <section className="section py-16 lg:section" id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          {/* text */}
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex justify-start items-center"
          >
            <div>
              <h4 className="text-xl text-reseda font-medium mb-2 tracking-wide">
                get in touch.
              </h4>
              <h2 className="text-[45px] lg:text-[90px] leading-none mb-12 font-secondary font-bold dark:text-isabelline">
                let's work <br />
                together!
              </h2>
            </div>
          </motion.div>
          {/* form */}
          <motion.form
            ref={form}
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 border flex flex-col gap-y-6 pb-24 p-6 items-start"
            onSubmit={sendEmail}
          >
            <input
              className="bg-transparent border-b py-3 outline-none w-full transition-all placeholder:text-reseda focus:border-reseda dark:placeholder:text-bone/50 dark:focus:placeholder:text-reseda dark:text-bone"
              type="text"
              name="user_name"
              placeholder="your name"
              value={formData.user_name}
              onChange={handleChange}
            />
            <input
              className="bg-transparent border-b py-3 outline-none w-full transition-all placeholder:text-reseda focus:border-reseda dark:placeholder:text-bone/50 dark:focus:placeholder:text-reseda dark:text-bone"
              type="email"
              name="user_email"
              placeholder="your email"
              value={formData.user_email}
              onChange={handleChange}
            />
            <textarea
              className="bg-transparent border-b py-12 outline-none w-full transition-all placeholder:text-reseda focus:border-reseda dark:placeholder:text-bone/50 dark:focus:placeholder:text-reseda dark:text-bone resize-none mb-12"
              name="message"
              placeholder="your message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            <button className="btn btn-lg" type="submit">
              send message
            </button>
            {isSent && <p>{isSent}</p>}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
