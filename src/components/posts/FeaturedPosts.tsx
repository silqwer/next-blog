import React from "react";
import PostsGrid from "./PostsGrid";
import { getFeaturedPosts } from "@/service/posts";

export default async function FeaturedPosts() {
  const posts = await getFeaturedPosts();

  return (
    <section className="my-4">
      <h2 className="my-2 text-2xl font-bold">Featured Post</h2>
      <PostsGrid posts={posts} />
    </section>
  );
}
