"use client";
import CourseOffline from "@/components/course/CourseOffline";
import CourseOnline from "@/components/course/CourseOnline";
import PageAnimation from "@/components/formerMotion/page";
import { useSearchParams } from "next/navigation";

export default function Home() {
  const searchParams = useSearchParams();
  const mode = searchParams.get("mode");

  return (
    <PageAnimation>
      {mode === "offline" ? (
        <CourseOffline />
      ) : mode === "online" ? (
        <CourseOnline />
      ) : (
        "none"
      )}
    </PageAnimation>
  );
}
