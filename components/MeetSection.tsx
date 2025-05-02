"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function MeetSection() {
  return (
    <section className="flex flex-row items-center px-20 py-4 gap-20 w-[1440px] mx-auto relative">
      <div className="flex flex-row items-center gap-4 w-[600px] h-[651px]">
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
        className="flex flex-col items-start gap-8 w-[600px]"
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
            className="absolute -top-12 right-24"
          />
          <h2 className="font-roboto font-extrabold text-[56px] text-[#0F172A] leading-[110%]">
            Meet international
          </h2>
          <h2 className="font-roboto font-extrabold text-[56px] text-[#0F172A] leading-[110%]">
            students & teachers
          </h2>
          <p className="font-roboto font-normal text-[20px] leading-[180%] text-[#0F172A]">
            Morbi sit egestas dignissim pharetra, sed amet. Tempus justo
            senectus risus ac vel, velit, nunc. Eget commodo eget in aliquam
            facilisi facilisi nec magna hendrerit. Placerat ipsum sit tellus
            urna, faucibus aenean lorem faucibus integer.
          </p>
        </div>
        <Link
          href="/explore"
          className="inline-flex items-center justify-center text-[#2563EB] font-medium text-[20px] gap-2"
        >
          Explore teachers and students <ArrowRight size={24} />
        </Link>
      </motion.div>
    </section>
  );
}
