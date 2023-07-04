import * as yup from "yup";
import { sendEmail } from "@/service/email";

// 데이터의 대한 형태를 지정해준다.
const bodySchema = yup.object().shape({
  from: yup.string().email().required(),
  subject: yup.string().required(),
  message: yup.string().required(),
});

export async function POST(req: Request) {
  const body = await req.json();

  if (!bodySchema.isValidSync(body)) {
    return new Response("유효하지 않은 포맷", {
      status: 400,
    });
  }

  return sendEmail(body)
    .then(
      () =>
        new Response(
          JSON.stringify({ message: "메일을 성공적으로 보냈습니다." }),
          { status: 200 }
        )
    )
    .catch((error) => {
      new Response(JSON.stringify({ message: "메일 전송에 실패함!" }), {
        status: 400,
      });
    });
}
