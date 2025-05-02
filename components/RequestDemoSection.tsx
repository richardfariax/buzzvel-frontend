"use client";

import React, { useState } from "react";

export function RequestDemoSection() {
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value);
  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
    setMessage(e.target.value);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Mensagem:", message);
  };

  return (
    <section className="flex flex-col items-center justify-center gap-12 px-6 py-12 w-full min-h-[80vh] bg-[#EA580C]">
      <div className="flex flex-col items-center gap-6 w-full max-w-3xl text-center">
        <h1 className="text-white text-5xl font-extrabold leading-tight">
          Ready for your next project?
        </h1>
      </div>

      <p className="w-full text-white text-3xl font-light text-center">
        Sit elit feugiat turpis sed integer integer accumsan turpis.
      </p>
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg flex flex-col items-center"
      >
        <div className="mb-6 w-full">
          <label
            htmlFor="email"
            className="block text-white text-lg font-medium mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={email}
            onChange={handleEmailChange}
            required
            className="w-full h-12 p-4 bg-white border border-gray-300 rounded-xl text-black"
          />
        </div>

        <div className="mb-6 w-full">
          <label
            htmlFor="message"
            className="block text-white text-lg font-medium mb-2"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            placeholder="What are you say?"
            value={message}
            onChange={handleMessageChange}
            required
            className="w-full h-20 p-4 bg-white border border-gray-300 rounded-xl text-black"
          />
        </div>

        <button
          type="submit"
          className="w-52 h-16 bg-[#0F172A] border-2 border-[#0F172A] rounded-lg text-white text-xl font-bold flex items-center justify-center"
        >
          Request Demo
        </button>
      </form>
    </section>
  );
}
