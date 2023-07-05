import React from "react";
import Hero from "@/components/Hero";

export const metadata = {
  title: "About Me",
  description: "silqwer 커리어 소개",
};

const TITLE_CLASS = "m-2 text-2xl font-bold text-gray-800";
export default function AboutPage() {
  return (
    <>
      <Hero />
      <section className="p-8 m-8 bg-gray-100 shadow-lg">
        <h2 className={TITLE_CLASS}>Who Am I?</h2>
        <p>Front Engineer</p>
        <p>아침을 여는 얼리버드, 칼퇴요정 silqwer</p>
        <h2 className={TITLE_CLASS}>Career</h2>
        <p>
          더블미 (-Now) <br />
          버넥트 (-2019) <br />
          테크빌 (-2015) <br />
        </p>
        <h2 className={TITLE_CLASS}>Skills</h2>
        <p>
          React, Vue, Node <br />
          git, clean code <br />
          VS Code <br />
        </p>
      </section>
    </>
  );
}
