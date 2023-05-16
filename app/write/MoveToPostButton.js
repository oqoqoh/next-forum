"use client";
import { useRouter } from "next/navigation";

export default function MoveToPostButton() {
  const router = useRouter();
  return (
    <button
      className="moveToPostBtn"
      onClick={() => {
        router.push("/write");
      }}
    >
      POST
    </button>
  );
}
