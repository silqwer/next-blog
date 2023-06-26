import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header className="flex items-center justify-between p-4">
      <Link href={"/"}>
        <h1 className="text-3xl font-bold">{"silqwer's Blog"}</h1>
      </Link>
      <nav className="flex gap-4">
        <Link href={"/"}>Home</Link>
        <Link href={"/about"}>About</Link>
        <Link href={"/posts"}>Posts</Link>
        <Link href={"/contact"}>Contact</Link>
      </nav>
    </header>
  );
}
