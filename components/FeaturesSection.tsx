"use client";

import { ArrowRight } from "lucide-react";
import NextLink from "next/link";
import Image from "next/image";
import { TakeLessonCard } from "./TakeLessonCard";
import { AboutSectionHighlight } from "@/types/AboutSectionHighlight";
import { motion } from "framer-motion";

export function FeaturesSection() {
  const cardData: AboutSectionHighlight = {
    title: "Design for how people think",
    description:
      "Aliquam ut euismod condimentum elementum ultricies volutpat sit non.",
    tag: "Popular",
    tagColor: "bg-blue-100 text-blue-800",
  };

  return (
    <section className="flex flex-row items-center px-20 gap-20 pb-20">
      <div className="flex flex-col max-w-[50%] gap-4 max-w-3xl">
        <h2 className="text-6xl font-bold leading-tight">
          All the cool{" "}
          <span className="relative inline-block">
            <span className="relative z-10">features</span>
            <Image
              src="/assets/underline.svg"
              alt=""
              width={246}
              height={45}
              className="absolute -bottom-[10px] right-0 w-[246px] h-[45px] z-0"
            />
          </span>
        </h2>
        <p className="text-muted-foreground text-xl leading-loose">
          Mauris consequat, cursus pharetra et, habitasse rhoncus quis odio ac.
          In et dolor eu donec maecenas nulla. Cum sed orci, sit pellentesque
          quisque feugiat cras ullamcorper. Ultrices in amet, ullamcorper non
          viverra a, neque orci.
        </p>
        <NextLink
          href="/explore"
          className="inline-flex items-center justify-start text-[#2563EB] font-medium text-[20px] gap-2 text-left"
        >
          View all the features <ArrowRight size={24} />
        </NextLink>
      </div>

      <motion.div
        className="flex-1 relative isolation-auto"
        animate={{ y: [0, -10, 0] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "loop",
        }}
      >
        <Image
          src="/assets/features.svg"
          alt="persons"
          width={1600}
          height={800}
          className="w-full h-full object-cover"
          priority
        />
        <div className="absolute top-[40px] left-4 z-20">
          <TakeLessonCard item={cardData} />
        </div>
      </motion.div>
    </section>
  );
}
