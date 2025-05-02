import NextLink from "next/link";
import { AboutSectionHighlight } from "@/types/AboutSectionHighlight";

interface TakeLessonCardProps {
  item: AboutSectionHighlight;
}

export function TakeLessonCard({ item }: TakeLessonCardProps) {
  return (
    <div className="flex flex-col px-4 pt-4 w-[220px] h-[232px] bg-white shadow-xl rounded-[10px]">
      <span
        className={`inline-block mb-2 px-3 py-1 text-xs rounded ${item.tagColor}`}
      >
        {item.tag}
      </span>
      <h4 className="text-[18px] font-semibold text-[#0F172A] leading-[22px] h-[44px]">
        {item.title}
      </h4>
      <p className="text-sm text-[#475569] leading-[20px] h-[60px] mt-2">
        {item.description}
      </p>
      <div className="w-full mt-auto pb-4">
        <NextLink
          href="#"
          className="block text-[#2563EB] text-sm font-medium border-2 border-[#2563EB] rounded-[8px] px-4 py-2 text-center w-full"
        >
          Take Lesson
        </NextLink>
      </div>
    </div>
  );
}
