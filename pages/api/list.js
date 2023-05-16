import { connectDB } from "@/util/database";

export default async function ListHandler(req, res) {
  let db = (await connectDB).db("forum");
  let result = await db.collection("post").find().toArray();
  console.log(result);

  return res.status(200).json(result);
}
