"use client";

import { Check } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { AboutSectionHighlight } from "@/types/AboutSectionHighlight";
import { TakeLessonCard } from "./TakeLessonCard";

export function AboutSection() {
  const highlights: AboutSectionHighlight[] = [
    {
      title: "The map of mathematics",
      description:
        "Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse.",
      tag: "Featured",
      tagColor: "bg-purple-100 text-purple-800",
    },
    {
      title: "Design for how people think",
      description:
        "Aliquam ut euismod condimentum elementum ultricies volutpat sit non",
      tag: "Popular",
      tagColor: "bg-blue-100 text-blue-800",
    },
    {
      title: "International & commercial law",
      description:
        "Molestie integer eu arcu, mauris bibendum rhoncus imperdiet dui.",
      tag: "New",
      tagColor: "bg-green-100 text-green-800",
    },
  ];

  return (
    <section className="w-full max-w-[1440px] px-6 py-20 mx-auto flex flex-col gap-12">
      <div className="flex flex-col md:flex-row gap-12 items-center relative justify-between">
        <div className="flex flex-col gap-8 max-w-[544px]">
          <h3 className="text-[44px] md:text-[56px] leading-[110%] font-extrabold text-[#0F172A]">
            An{" "}
            <span className="relative inline-block">
              <span className="relative z-10">all-in-one</span>
              <Image
                src="/assets/underline.svg"
                alt=""
                width={300}
                height={30}
                className="absolute -bottom-2 left-0 w-[300] h-[30px] z-0"
              />
            </span>{" "}
            app
            <br />
            that makes it easier
          </h3>

          <div className="flex flex-col gap-4">
            <p className="flex items-center gap-2 text-[18px] leading-[160%] text-[#0F172A]">
              <Check className="w-5 h-5 text-[#0F172A]" />
              Est et in pharetra magna adipiscing ornare aliquam.
            </p>
            <p className="flex items-center gap-2 text-[18px] leading-[160%] text-[#0F172A]">
              <Check className="w-5 h-5 text-[#0F172A]" />
              Tellus arcu sed consequat ac velit ut eu blandit.
            </p>
            <p className="flex items-center gap-2 text-[18px] leading-[160%] text-[#0F172A]">
              <Check className="w-5 h-5 text-[#0F172A]" />
              Ullamcorper ornare in et egestas dolor orci.
            </p>
          </div>

          <Link
            href="#"
            className="mt-4 text-[#2563EB] text-[16px] font-semibold flex items-center gap-1 group"
          >
            Find more about the app
            <span className="inline-block transform transition-transform group-hover:translate-x-1">
              →
            </span>
          </Link>
        </div>

        <div className="relative flex-shrink-0 w-[700px] ">
          <Image
            src="/assets/image.svg"
            alt="about-image"
            width={800}
            height={500}
            className="w-full h-full object-cover relative z-10 rounded-2xl"
            priority
          />

          <div className="absolute -bottom-[90px] right-[60px] px-2 py-4 rounded-xl z-20">
            <div className="flex gap-2 md:gap-4">
              {highlights.map((item: AboutSectionHighlight, index: number) => (
                <TakeLessonCard item={item} key={index} />
              ))}
            </div>
          </div>
          <motion.div
            className="absolute -bottom-4 -left-16 z-0"
            initial={{ y: 0 }}
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, repeatType: "loop" }}
          >
            <Image
              src="/assets/blob.svg"
              alt="blob"
              width={390}
              height={390}
              className="w-[390px] h-auto"
            />
            <Image
              src="/assets/particles.svg"
              alt="overlay"
              width={150}
              height={150}
              className="absolute -top-12 -left-12 w-[130px] h-auto"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
