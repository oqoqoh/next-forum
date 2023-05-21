import { connectDB } from "@/util/database";
import { getServerSession } from "next-auth";
import {authOptions} from "@/pages/api/auth/[...nextauth]"


export default async function handler(req, res) {
  const session = await getServerSession(req,res,authOptions); 
  if (session) {
    req.body.auth = session.user.email;
  }
  

  if (req.method == "POST") {
    if (!req.body.title | !req.body.content) {
      return res.status(500).json("내용을 입력해주세요.");
    }
    try {
      const db = (await connectDB).db("forum");
      const result = await db.collection("post").insertOne(req.body);
      console.log("result :: ", result);
      return res.redirect(302, "/list");
    } catch (error) {
      console.log(error);
      return res.status(500).json("데이터 저장 문제 발생.");
    }
  }
}

//res.redirect(302,'/url')
