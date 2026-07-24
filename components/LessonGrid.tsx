import Image from "next/image";
import Link from "next/link";
import { lessons } from "@/data/site";

const iconFiles: Record<string, string> = {
  guitar: "/icons/guitar.webp",
  vocals: "/icons/vocals.webp",
  drums: "/icons/drums.webp",
  piano: "/icons/piano.webp",
  bass: "/icons/bass.webp",
  other: "/icons/other.webp",
};

export default function LessonGrid({ detailed = false }: { detailed?: boolean }) {
  return (
    <div className={`lesson-grid${detailed ? " detailed" : ""}`}>
      {lessons.map((lesson) => {
        const size = detailed ? 56 : 48;
        const card = (
          <>
            <Image
              src={iconFiles[lesson.slug]}
              alt=""
              width={size}
              height={size}
              aria-hidden="true"
            />
            <h3>{lesson.title}</h3>
            <p>{detailed ? lesson.long : lesson.short}</p>
          </>
        );
        return detailed ? (
          <div key={lesson.slug} className="lesson-card">
            {card}
          </div>
        ) : (
          <Link
            key={lesson.slug}
            href="/lessons"
            className="lesson-card"
            aria-label={`${lesson.title} lessons`}
          >
            {card}
          </Link>
        );
      })}
    </div>
  );
}
