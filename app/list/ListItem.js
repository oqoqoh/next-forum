"use client";
import MoveToUpdateButton from "../list/MoveToUpdateButton";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function ListItem({ result }) {
  const router = useRouter();
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
                })
                  .then((res) => res.json())
                  .then((result) => {
                    console.log(result);
                    router.push("/list");
                  });
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
