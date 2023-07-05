import FilterablePosts from "@/components/posts/FilterablePosts";
import { getAllPosts } from "@/service/posts";

export const metadata = {
  title: "All Posts",
  description: "개발 관련 블로그 글",
};

export default async function PostsPage() {
  const posts = await getAllPosts();
  const categories = [...new Set(posts.map((post) => post.category))];
  return (
    <div>
      <FilterablePosts posts={posts} categories={categories} />
    </div>
  );
}
