import { AiTwotoneCalendar } from "react-icons/ai";
import MarkdownViewer from "@/components/markdown/MarkdownViewer";
import { PostData } from "@/service/posts";

type Props = {
  post: PostData;
};
export default function PostContent({ post }: Props) {
  const { title, content, description, date } = post;

  return (
    <section className="flex flex-col p-4">
      <div className="flex items-center self-end text-sky-600">
        <AiTwotoneCalendar />
        <p className="ml-2 font-semibold">{date.toString()}</p>
      </div>
      <h1 className="text-4xl font-bold">{title}</h1>
      <p className="text-xl font-bold">{description}</p>
      <div className="mt-4 mb-8 border-2 w-44 border-sky-600"></div>
      <MarkdownViewer content={content} />
    </section>
  );
}
