import React from "react";
import PostsGrid from "./PostsGrid";
import { getAllPosts } from "@/service/posts";

export default async function FeaturedPosts() {
  const posts = await getAllPosts();

  return (
    <section>
      <PostsGrid posts={posts} />
    </section>
  );
}
