import { connectDB } from "@/util/database";
import MoveToPostButton from "../list/MoveToPostButton";
import ListItem from "./ListItem";
import { getServerSession } from "next-auth";
import {authOptions} from "@/pages/api/auth/[...nextauth]"


export default async function List() {
  const db = (await connectDB).db("forum");
  let result = await db.collection("post").find().toArray();
  const session = getServerSession(authOptions);

  result = result.map((data) => {
    data._id = data._id.toString();
    return data;
  });

  return (
    <div className="list-bg">
      {
        session
        ? <ListItem result={result} session={session}/>
        : <ListItem result={result}/>
      }
      
      <MoveToPostButton />
      
    </div>
  );
}
