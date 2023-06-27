import React from "react";
import profileImage from "/public/images/profile.jpeg";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="text-center">
      <Image
        className="mx-auto rounded-full"
        src={profileImage}
        alt="Picture of the author"
        width={250}
        height={250}
      />
      <h2 className="mt-2 text-3xl font-bold">{"Hi, I`m silqwer"}</h2>
      <h3 className="text-xl font-semibold">Front Engineer</h3>
      <p>아침을 여는 얼리버드, 칼퇴요정 silqwer</p>
      <Link href="/contact">
        <button className="px-4 py-1 mt-2 font-bold bg-yellow-500 rounded-xl">
          Contact Me
        </button>
      </Link>
    </section>
  );
}
