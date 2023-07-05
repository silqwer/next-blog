import React from "react";
import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";
import ContactForm from "@/components/form/ContactForm";

export const metadata = {
  title: "Contact Me",
  description: "silqwer에게 메일 보내기",
};

const LINKS = [
  {
    icon: <AiFillGithub />,
    url: "",
  },
  {
    icon: <AiFillLinkedin />,
    url: "",
  },
  {
    icon: <AiFillYoutube />,
    url: "",
  },
];

export default function ContactPage() {
  return (
    <section className="flex flex-col items-center">
      <h2 className="my-2 text-3xl font-bold">Contact Me</h2>
      <p>silqwer@gmail.com</p>
      <ul className="flex gap-4 my-2">
        {LINKS.map(({ icon, url }, index) => (
          <li key={index}>
            <a
              href={url}
              target="_blank"
              rel="noreferrer"
              className="text-5xl hover:text-yellow-400"
            >
              {icon}
            </a>
          </li>
        ))}
      </ul>
      <h2>Or Send me an email</h2>
      <ContactForm />
    </section>
  );
}
