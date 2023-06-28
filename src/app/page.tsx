import Hero from "@/components/Hero";
import CarouselPosts from "@/components/posts/CarouselPosts";
import FeaturedPosts from "@/components/posts/FeaturedPosts";

export default function Home() {
  return (
    <section>
      <Hero />
      <FeaturedPosts />
      <CarouselPosts />
    </section>
  );
}
