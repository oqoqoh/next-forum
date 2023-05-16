import { connectDB } from "@/util/database";

export default async function handler(req, res) {
  if (req.method == "POST") {
    if (!req.body.title | !req.body.content) {
      return res.status(500).json("내용을 입력해주세요.");
    }
    try {
      const db = (await connectDB).db("forum");
      await db.collection("post").insertOne(req.body);
      return res.redirect(302, "/list");
    } catch (error) {
      return res.status(500).json("데이터 저장 문제 발생.");
    }
  }
}

//res.redirect(302,'/url')
