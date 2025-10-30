import React, { useState } from "react";

const AskQuestionForm = () => {
  const [form, setForm] = useState({
    name: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Your message has been sent!");
    setForm({ name: "", subject: "", message: "" });
  };

  return (
    <div className="!p-8">
      <h2 className="text-xl font-semibold text-[#1a1442] !mb-5">
        Ask a Question
      </h2>

      <form onSubmit={handleSubmit} className="!space-y-8">
        <input
          type="text"
          name="name"
          placeholder="Your Name*"
          value={form.name}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-md !px-3 !py-2 focus:outline-none focus:!ring-2 focus:ring-pink-400"
          required
        />

        <input
          type="text"
          name="subject"
          placeholder="Subject*"
          value={form.subject}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-md !px-3 !py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
          required
        />

        <textarea
          name="message"
          placeholder="Type Your Message*"
          rows="5"
          value={form.message}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-md !px-3 !py-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
          required
        ></textarea>

        <button
          type="submit"
          className="bg-pink-500 hover:bg-pink-600 text-white !px-6 !py-2 rounded-sm font-medium"
        >
          Send Mail
        </button>
      </form>
    </div>
  );
};

export default AskQuestionForm;
