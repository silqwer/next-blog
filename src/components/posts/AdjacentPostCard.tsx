import Link from "next/link";
import Image from "next/image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { Post } from "@/service/posts";
type Props = {
  post: Post;
  type: "prev" | "next";
};

const ARROW_ICON_CLASS =
  "m-4 text-5xl text-yellow-300 transition-all group-hover:text-6xl";

export default function AdjacentPostCard({ post, type }: Props) {
  const { path, title, description } = post;

  return (
    <Link href={`/posts/${path}`} className="relative w-full bg-black max-h-56">
      <Image
        className="w-full opacity-40"
        src={`/images/posts/${path}.png`}
        alt={title}
        width={150}
        height={100}
      />
      <div className="absolute flex items-center justify-around w-full px-8 text-white -translate-x-1/2 -translate-y-1/2 group top-1/2 left-1/2">
        {type === "prev" && <FaArrowLeft className={ARROW_ICON_CLASS} />}
        <div className="w-full text-center">
          <h3 className="text-3xl font-bold ">{title}</h3>
          <p className="font-bold">{description}</p>
        </div>
        {type === "next" && <FaArrowRight className={ARROW_ICON_CLASS} />}
      </div>
    </Link>
  );
}
