"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function MeetSection() {
  return (
    <section className="flex flex-col md:flex-row items-center px-6 md:px-20 py-10 gap-12 md:gap-20 w-full max-w-[1440px] mx-auto relative">
      <div className="w-full md:w-[600px] h-auto md:h-[651px]">
        <Image
          src="/assets/meet.svg"
          alt="meet"
          width={600}
          height={651}
          className="w-full h-full object-cover"
          priority
        />
      </div>

      <motion.div
        className="flex flex-col items-start gap-8 w-full md:w-[600px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="flex flex-col gap-2 relative">
          <Image
            src="/assets/plane.svg"
            alt="plane"
            width={64}
            height={64}
            className="absolute -top-12 right-0 md:right-24"
          />
          <h2 className="font-roboto font-extrabold text-[36px] md:text-[56px] text-[#0F172A] leading-[110%]">
            Meet international
          </h2>
          <h2 className="font-roboto font-extrabold text-[36px] md:text-[56px] text-[#0F172A] leading-[110%]">
            students & teachers
          </h2>
          <p className="font-roboto text-[16px] md:text-[20px] leading-[180%] text-[#0F172A]">
            Morbi sit egestas dignissim pharetra, sed amet. Tempus justo
            senectus risus ac vel, velit, nunc. Eget commodo eget in aliquam
            facilisi facilisi nec magna hendrerit. Placerat ipsum sit tellus
            urna, faucibus aenean lorem faucibus integer.
          </p>
        </div>
        <Link
          href="/explore"
          className="inline-flex items-center justify-center text-[#2563EB] font-medium text-[18px] md:text-[20px] gap-2"
        >
          Explore teachers and students <ArrowRight size={24} />
        </Link>
      </motion.div>
    </section>
  );
}
