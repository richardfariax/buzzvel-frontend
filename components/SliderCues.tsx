"use client";

interface SliderCuesProps {
  currentIndex: number;
  totalSlides: number;
}

export function SliderCues({ currentIndex, totalSlides }: SliderCuesProps) {
  return (
    <>
      {Array.from({ length: totalSlides }).map((_, index) => (
        <div
          key={index}
          className={`h-[8px] rounded-[10px] ${
            index === currentIndex
              ? "bg-[#0F172A] w-[20px]"
              : "bg-white w-[8px]"
          }`}
        ></div>
      ))}
    </>
  );
}
