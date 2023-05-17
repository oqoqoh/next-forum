import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function UpdatePage(props) {
  const db = (await connectDB).db("forum");

  let result = await db
    .collection("post")
    .findOne({ _id: new ObjectId(props.params.id) });

  return (
    <div className="post-form">
      <form action="/api/post/edit" method="POST">
        <input type="hidden" name="_id" defaultValue={props.params.id}></input>
        <input name="title" defaultValue={result.title}></input>
        <textarea
          name="content"
          row="15"
          cols="40"
          defaultValue={result.content}
        ></textarea>
        <button type="submit">edit</button>
      </form>
    </div>
  );
}
