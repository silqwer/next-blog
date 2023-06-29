import { getPostData } from "@/service/posts";

type Props = {
  params: {
    slug: string;
  };
};

export default async function PostPage({ params: { slug } }: Props) {
  const post = await getPostData(slug);
  const { title, content } = post;
  return (
    <>
      <h1>{title}</h1>
      <p>{content}</p>
    </>
  );
}
