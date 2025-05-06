"use client";

import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { SliderCues } from "./SliderCues";
import { SuccessStoriesStory } from "@/types/SucessStoriesStory";

export function SuccessStories() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const stories: SuccessStoriesStory[] = [
    {
      text: "Id urna, nisl, ut quam. Diam suspendisse fringilla quam arcu mattis est velit in. Nibh in purus sit convallis phasellus ut. At vel erat ultricies commodo. Neque suspendisse a habitasse commodo.",
      name: "Marie Poirot",
      company: "Bigapp",
    },
    {
      text: "Pellentesque euismod scelerisque purus, ut viverra sapien tristique a. Proin at enim eros. Vivamus tristique euismod ultricies. Donec vehicula lorem vitae elit dignissim tempor.",
      name: "John Doe",
      company: "TechCorp",
    },
    {
      text: "Curabitur cursus lorem nec massa auctor, sed egestas orci varius. Aenean egestas urna sed orci tristique, nec vehicula nisl venenatis. Nulla facilisi. Fusce eget risus nec arcu consequat tincidunt.",
      name: "Alice Johnson",
      company: "Innovative Solutions",
    },
  ];

  const nextStory = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % stories.length);
  };

  const prevStory = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + stories.length) % stories.length
    );
  };

  return (
    <section className="relative w-screen bg-[#FACC15] py-36 my-20 px-6 lg:px-20 overflow-visible h-[580px]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <div className="max-w-[528px] pr-6 pl-16">
            <p className="font-roboto font-normal text-xxl lg:text-xl text-[#0F172A]">
              {stories[currentIndex].text}
            </p>
            <p className="font-roboto font-normal text-xxl mt-8 lg:text-xl text-[#0F172A]">
              {stories[currentIndex].name},
            </p>
            <p className="font-roboto font-bold text-xxl lg:text-xl text-[#0F172A]">
              {stories[currentIndex].company}
            </p>
          </div>
        </motion.div>
      </div>

      {/* Quadrado azul e imagens - Visíveis somente em desktop */}
      <div className="hidden lg:block absolute right-[150px] top-[30px] z-20">
        <div
          className="relative bg-[#0F172A] rounded-[50px]"
          style={{
            width: "495.63px",
            height: "573.11px",
            transform: "rotate(-30deg)",
          }}
        ></div>
        <Image
          src="/assets/image.png"
          alt="image"
          width={550}
          height={450}
          className="absolute bottom-28 -left-6"
        />
        <Image
          src="/assets/dots.svg"
          alt="dots"
          width={150}
          height={150}
          className="absolute bottom-12 left-4"
        />
        <Image
          src="/assets/marks.svg"
          alt="marks"
          width={60}
          height={60}
          className="absolute -top-4 right-2"
        />
      </div>

      {/* Quadrado azul e imagens - Visíveis somente em mobile */}
      <div className="lg:hidden absolute top-[100%] left-0 transform translate-y-4 z-10 w-full">
        <div
          className="relative bg-[#0F172A] rounded-[50px] mx-auto"
          style={{
            width: "495.63px",
            height: "573.11px",
            transform: "rotate(-30deg)",
          }}
        ></div>
        <Image
          src="/assets/image.png"
          alt="image"
          width={550}
          height={450}
          className="absolute bottom-28 left-6 mx-auto"
        />
        <Image
          src="/assets/dots.svg"
          alt="dots"
          width={150}
          height={150}
          className="absolute bottom-12 left-4 mx-auto"
        />
        <Image
          src="/assets/marks.svg"
          alt="marks"
          width={60}
          height={60}
          className="absolute -top-4 left-4 mx-auto"
        />
      </div>

      <div className="absolute top-1/2 left-0 transform -translate-y-1/2 z-30 ml-8">
        <button
          onClick={prevStory}
          className="text-[#0F172A] text-3xl font-bold hover:text-[#2563EB] transition-all"
        >
          <ChevronLeft color="white" size={50} />
        </button>
      </div>
      <div className="absolute top-1/2 right-0 transform -translate-y-1/2 z-30 mr-8">
        <button
          onClick={nextStory}
          className="text-[#0F172A] text-3xl font-bold hover:text-[#2563EB] transition-all"
        >
          <ChevronRight color="black" size={50} />
        </button>
      </div>
      <div className="absolute bottom-36 left-44 transform -translate-x-1/2 flex gap-2">
        <SliderCues currentIndex={currentIndex} totalSlides={stories.length} />
      </div>
    </section>
  );
}
