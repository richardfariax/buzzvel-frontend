"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";

type Report = {
  name: string;
  role: string;
  content: string;
  image: string;
};

const reports: Report[] = [
  {
    name: "Hellen Jummy",
    role: "Financial Counselor",
    content:
      "Lacus vestibulum ultricies mi risus, duis non, volutpat nullam non. Magna congue nisi maecenas elit aliquet eu sed consectetur. Vitae quis cras vitae praesent morbi adipiscing purus consectetur mi.",
    image: "https://randomuser.me/api/portraits/women/10.jpg",
  },
  {
    name: "Ralph Edwards",
    role: "Math Teacher",
    content:
      "Odio rhoncus ornare ut quam. Molestie vel duis quis scelerisque ut id. In tortor turpis viverra sagittis ultrices nisi, nec tortor. Vestibulum, ultrices ultricies neque, hac ultricies dolor.",
    image: "https://randomuser.me/api/portraits/men/20.jpg",
  },
  {
    name: "Hellena John",
    role: "Psychology Student",
    content:
      "Sagittis nunc egestas leo et malesuada urna risus. Morbi proin et cras aliquam. Diam tellus, amet, hac imperdiet. Tellus mi volutpat tellus, congue malesuada sit nisl donec a.",
    image: "https://randomuser.me/api/portraits/women/30.jpg",
  },
  {
    name: "David Oshodi",
    role: "Manager",
    content:
      "Sapien, sollicitudin et vitae id et laoreet sapien consectetur. Felis egestas egestas amet aliquam sit euismod. Pellentesque neque, sed ut volutpat. Ullamcorper in at nulla dignissim.",
    image: "https://randomuser.me/api/portraits/men/40.jpg",
  },
  {
    name: "Charolette Hanlin",
    role: "CEO",
    content:
      "Magna egestas aliquet ut integer non. Sed diam enim nibh sit. Aliquam laoreet aenean metus nibh eu scelerisque.",
    image: "https://randomuser.me/api/portraits/women/50.jpg",
  },
];

export const ReportsSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const amount = scrollRef.current.offsetWidth * 0.8;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -amount : amount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-16 bg-gray-50 w-full overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8 px-4">
          <h2 className="text-5xl font-bold text-gray-800">
            What everyone says
          </h2>
          <div className="flex gap-3 items-center">
            <button
              onClick={() => scroll("left")}
              className="w-10 h-10 border-2 border-orange-500 text-orange-500 rounded-full hover:bg-orange-50 transition flex items-center justify-center hidden sm:flex"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-10 h-10 border-2 border-orange-500 text-orange-500 rounded-full hover:bg-orange-50 transition flex items-center justify-center hidden sm:flex"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide w-full"
        >
          {reports.map((report, index) => (
            <div
              key={index}
              className={`flex flex-col justify-between min-w-[300px] max-w-sm h-[270px] bg-white p-6 rounded-2xl ${
                index === 0
                  ? "ml-4"
                  : index === reports.length - 1
                  ? "mr-4"
                  : ""
              } mb-8 mt-8 shadow-[0px_4px_12px_rgba(0,0,0,0.1)]`}
            >
              <p className="text-gray-700">{report.content}</p>
              <div className="mt-auto flex items-center gap-3 pt-4">
                <Image
                  src={report.image}
                  alt={report.name}
                  width={48}
                  height={48}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold">{report.name}</p>
                  <p className="text-sm text-gray-500">{report.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
