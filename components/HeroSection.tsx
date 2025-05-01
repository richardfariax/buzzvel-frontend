"use client";

import Link from "next/link";
import Image from "next/image";
import { Play } from "lucide-react";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="flex flex-row items-center p-20 gap-20 max-w-[1440px] mx-auto">
      <div className="flex flex-col gap-8 flex-1 max-w-[575px] relative">
        <motion.h1
          className="font-roboto font-extrabold text-[72px] leading-[1.1] text-[#0F172A]"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Teach students worldwide
        </motion.h1>

        <motion.p
          className="font-roboto font-normal text-[22px] leading-[1.6] text-[#0F172A]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Amet nunc diam orci duis ut sit diam arcu, nec. <br />
          Eleifend proin massa tincidunt viverra lectus pulvinar. <br />
          Nunc ipsum est pellentesque turpis ultricies.
        </motion.p>

        <div className="flex flex-row items-center gap-8 mt-8">
          <Link
            href="/signup"
            className="flex justify-center items-center w-[239px] h-[64px] bg-[#EA580C] border-2 border-[#EA580C] rounded-lg font-roboto font-bold text-[24px] leading-[1] text-white tracking-[0.5px]"
          >
            Sign Up Now
          </Link>
          <Link
            href="/demo"
            className="flex items-center gap-2 text-[#2563EB] font-bold"
          >
            <div className="w-8 h-8 rounded-full border-2 border-[#2563EB] flex items-center justify-center">
              <Play size={20} strokeWidth={2} />
            </div>
            View Demo
          </Link>
        </div>

        <motion.div
          className="flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <Image
            src="/assets/trusted-by.svg"
            alt="hero-image"
            width={350}
            height={70}
            className="w-full h-full object-cover"
            priority
          />
        </motion.div>
      </div>

      <motion.div
        className="flex-1 relative w-[624px] h-[544px] isolation-auto"
        animate={{ y: [0, -10, 0] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "loop",
        }}
      >
        <Image
          src="/assets/hero.svg"
          alt="hero-image"
          width={624}
          height={544}
          className="w-full h-full object-cover"
          priority
        />
      </motion.div>
    </section>
  );
}
