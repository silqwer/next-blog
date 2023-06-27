import Hero from "@/components/Hero";
import FeaturedPosts from "@/components/posts/FeaturedPosts";
import Image from "next/image";

export default function Home() {
  return (
    <section>
      <Hero />
      <FeaturedPosts />
    </section>
  );
}
