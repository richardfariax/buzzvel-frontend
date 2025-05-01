"use client";
import Link from "next/link";

import { motion } from "framer-motion";

export function MeetSection() {
  return (
    <section className="bg-gray-50 py-20 px-6 lg:px-20 max-w-[1440px] mx-auto">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="font-roboto font-bold text-[32px] lg:text-[48px] text-[#0F172A]">
          Meet international students & teachers
        </h2>
        <p className="font-roboto font-normal text-[18px] lg:text-[22px] text-[#4B5563] mt-4">
          Morbi sit egestas dignissim pharetra, sed amet. Tempus justo senectus
          risus ac vel, velit, nunc. Eget commodo eget in aliquam facilisi
          facilisi nec magna hendrerit. Placerat ipsum sit tellus urna, faucibus
          aenean lorem faucibus integer.
        </p>
      </motion.div>

      <motion.div
        className="text-center mt-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Link
          href="/explore"
          className="inline-flex items-center justify-center py-3 px-8 bg-[#2563EB] text-white font-bold text-[20px] rounded-lg hover:bg-[#1d4ed8] transition-all duration-300"
        >
          Explore teachers and students
        </Link>
      </motion.div>
    </section>
  );
}
