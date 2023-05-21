import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]";

export default async function handler(req, res) {
  
  const session = await getServerSession(req,res,authOptions);
  console.log('session :: ', session)
  
  if (req.method == "POST") {
    try {
      let db = (await connectDB).db("forum");

      const findOne = await db
        .collection("post")
        .findOne({ _id: new ObjectId(req.body) });
      console.log('findOne :: ', findOne)

      if (findOne.auth) {
        if (findOne.auth === session.user.email) {
          console.log('본인 글')
          let result = await db
            .collection("post")
            .deleteOne({ _id: new ObjectId(req.body) });
          console.log(result);
          res.status(200).json("삭제완료");

        } else {
          console.log('본인 글 아님')
          res.status(500).json("본인이 작성한 글만 삭제 가능.");
        }
      } else {
        res.status(500).json("본인이 작성한 글만 삭제 가능.");
      }

      
    } catch (error) {
      console.log(error);
      res.status(500).json("문제 발생.");
    }
  }
}
