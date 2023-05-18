"use client";
import MoveToUpdateButton from "../list/MoveToUpdateButton";
import Link from "next/link";

export default function ListItem({ result }) {
  return (
    <>
      {result.map((data, i) => {
        return (
          <div className="list-item" key={i}>
            <Link href={`/list/${data._id}`}>
              <h4>{data.title}</h4>
            </Link>
            <MoveToUpdateButton id={data._id.toString()} />
            <p
              onClick={() => {
                console.log("test");
                console.log(data._id);
                fetch("/api/post/delete", {
                  method: "POST",
                  body: data._id.toString(),
                }).then(console.log("fetch send"));
              }}
            >
              ❌
            </p>
          </div>
        );
      })}
    </>
  );
}
