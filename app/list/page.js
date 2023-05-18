import { connectDB } from "@/util/database";
import Link from "next/link";
import DetailLink from "./DetailLink";
import MoveToPostButton from "../list/MoveToPostButton";
import ListItem from "./ListItem";

export default async function List() {
  const db = (await connectDB).db("forum");
  let result = await db.collection("post").find().toArray();

  result = result.map((data) => {
    data._id = data._id.toString();
    return data;
  });

  return (
    <div className="list-bg">
      <ListItem result={result} />
      <MoveToPostButton />
    </div>
  );
}
