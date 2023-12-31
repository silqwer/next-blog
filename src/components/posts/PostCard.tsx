import Image from "next/image";
import Link from "next/link";
import { Post } from "@/service/posts";

type Props = {
  post: Post;
};

export default function PostCard({ post }: Props) {
  const { title, description, date, category, path } = post;
  return (
    <Link href={`/posts/${path}`}>
      <article className="overflow-hidden rounded-md shadow-md hover:shadow-xl">
        <Image
          className="w-full"
          src={`/images/posts/${path}.png`}
          alt={title}
          width={300}
          height={200}
        />
        <div className="flex flex-col items-center">
          <time className="self-end text-gray-700">{date.toString()}</time>
          <h3 className="text-lg font-bold">{title}</h3>
          <p className="w-full text-center truncate">{description}</p>
          <span className="px-2 my-2 text-sm bg-green-100 rounded-lg">
            {category}
          </span>
        </div>
      </article>
    </Link>
  );
}
