"use client";
import CourseDetailOffline from "@/components/course/CourseDetailOffline";
import { useSearchParams } from "next/navigation";

export default function Course({ params }) {
  const searchParams = useSearchParams();
  const mode = searchParams.get("mode");

  return (
    <>
      {mode === "offline" ? (
        <CourseDetailOffline params={params} />
      ) : mode === "online" ? (
        "online"
      ) : (
        "none"
      )}
    </>
  );
}
