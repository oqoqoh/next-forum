import { connectDB } from "@/util/database";
import Link from "next/link";
import DetailLink from "./DetailLink";
import MoveToPostButton from "./../write/MoveToPostButton";

export default async function List() {
  const db = (await connectDB).db("forum");
  let result = await db.collection("post").find().toArray();

  return (
    <div className="list-bg">
      {result.map((data, i) => {
        return (
          <div className="list-item" key={i}>
            <Link href={`/list/${data._id}`}>
              <h4>{data.title}</h4>
            </Link>
            <p>1월 1일</p>
            {/* <DetailLink></DetailLink> */}
          </div>
        );
      })}
      <MoveToPostButton />
      {/* <button className="moveToPostBtn">POST</button> */}
    </div>
  );
}
