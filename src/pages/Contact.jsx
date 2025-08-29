import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_1mefwhh",
        "template_gjebbzh",
        formData,
        "221iVkB6ixWWCHY8b"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setStatus("Message sent successfully ✅");
          setFormData({ name: "", email: "", message: "" });

          setTimeout(() => {
            setStatus("");
          }, 3000);
        },
        (err) => {
          console.log("FAILED...", err);
          setStatus("Something went wrong ❌");

          setTimeout(() => {
            setStatus("");
          }, 3000);
        }
      );
  };

  return (
    <>
      <div className="text-start h-auto px-14 w-full">
        <motion.h1
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-9xl font-bold text-gray-700 pt-14 text-start p-3"
        >
          Get In Touch
        </motion.h1>
        <motion.hr
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700"
        ></motion.hr>
        <motion.h2
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-gray-700 text-start p-3"
        >
          Let's Work Together
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-gray-600 mt-4 text-2xl font-semibold font-sans sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl"
        >
          Here are some of the projects I’ve worked on – each one focused on
          writing clean code, creating smooth user experiences, and solving
          real-world problems.
        </motion.p>
      </div>

      <div className="min-h-screen flex flex-col items-center justify-center p-6 w-full gap-10 ">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white shadow-2xl rounded-2xl p-8 w-full max-w-lg"
        >
          <h2 className="text-3xl font-bold text-gray-700 mb-6 text-center">
            Contact Me
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-gray-700 bg-gray-300 text-black"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-gray-700 bg-gray-300 text-black"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-gray-700 bg-gray-300 text-black"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full bg-blue-600 text-white p-3 rounded-lg font-semibold"
            >
              Send Message
            </motion.button>
          </form>

          {status && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className={`mt-4 text-center font-medium ${
                status.includes("successfully")
                  ? "text-green-600"
                  : "text-red-600"
              }`}
            >
              {status}
            </motion.p>
          )}
        </motion.div>

        {/* New Section for Email & Phone */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white shadow-xl rounded-2xl p-6 w-full max-w-lg text-center"
        >
          <h3 className="text-2xl font-bold text-gray-700 mb-4">
            Reach Me Directly
          </h3>
          <p className="text-xl text-gray-600 mb-2">
            📧 Email: <span className="font-semibold">akashakash44351@gmail.com</span>
          </p>
          <p className="text-xl text-gray-600">
            📞 Phone: <span className="font-semibold">+91 9919675774 </span>
          </p>
          <p className="text-xl text-gray-600">
            📞 Phone: <span className="font-semibold">+91 7784841923 </span>
          </p>
        </motion.div>
      </div>
    </>
  );
};

export default Contact;
