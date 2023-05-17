"use client";
import { useRouter } from "next/navigation";

export default function MoveToUpdateButton(props) {
  const router = useRouter();

  return (
    <div
      onClick={() => {
        router.push(`/update/${props.id}`);
      }}
    >
      ✏️
    </div>
  );
}
