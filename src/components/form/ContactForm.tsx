"use client";

import React, { FormEvent, useState } from "react";
import Banner, { BannerData } from "../banner/Banner";

type Form = {
  email: string;
  subject: string;
  message: string;
};

const LABEL_CLASS = "font-semibold text-white";

export default function ContactForm() {
  const [form, setForm] = useState<Form>({
    email: "",
    subject: "",
    message: "",
  });
  const [banner, setBanner] = useState<BannerData | null>(null);

  const onChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setBanner({ message: "성공", state: "success" });
    console.log(form);
    setTimeout(() => {
      setBanner(null);
    }, 3000);
  };

  return (
    <section className="w-full max-w-md">
      {banner && <Banner banner={banner} />}
      <form
        onSubmit={onSubmit}
        className="flex flex-col w-full gap-2 p-4 mt-4 text-black bg-slate-700 rounded-xl"
      >
        <label htmlFor="email" className={LABEL_CLASS}>
          Your Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          autoFocus
          value={form.email}
          onChange={onChange}
        />
        <label htmlFor="subject" className={LABEL_CLASS}>
          Subject
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          required
          value={form.subject}
          onChange={onChange}
        />
        <label htmlFor="message" className={LABEL_CLASS}>
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          value={form.message}
          onChange={onChange}
          rows={10}
          className="text-black"
        />
        <button className="font-bold text-black bg-yellow-300 hover:bg-yellow-400">
          Submit
        </button>
      </form>
    </section>
  );
}
