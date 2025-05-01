"use client";

import { motion } from "framer-motion";

export function SuccessStories() {
  return (
    <section className="bg-gray-100 py-20 px-6 lg:px-20 max-w-[1440px] mx-auto">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <h2 className="font-roboto font-bold text-[32px] lg:text-[48px] text-[#0F172A]">
          Success Stories
        </h2>
        <p className="font-roboto font-normal text-[18px] lg:text-[22px] text-[#4B5563] mt-4">
          Id urna, nisl, ut quam. Diam suspendisse fringilla quam arcu mattis
          est velit in. Nibh in purus sit convallis phasellus ut. At vel erat
          ultricies commodo. Neque suspendisse a habitasse commodo.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Caso  de sucesso 1 */}
        <motion.div
          className="bg-white p-8 rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <p className="font-roboto font-normal text-[18px] lg:text-[22px] text-[#0F172A]">
            Building apps just got easier
          </p>
          <p className="font-roboto font-medium text-[20px] lg:text-[24px] text-[#2563EB] mt-4">
            Marie Poirot,
          </p>
          <p className="font-roboto font-bold text-[18px] lg:text-[22px] text-[#0F172A]">
            Bigapp
          </p>
        </motion.div>

        <motion.div
          className="bg-white p-8 rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <p className="font-roboto font-normal text-[18px] lg:text-[22px] text-[#0F172A]">
            Building apps just got easier
          </p>
          <p className="font-roboto font-medium text-[20px] lg:text-[24px] text-[#2563EB] mt-4">
            John Doe,
          </p>
          <p className="font-roboto font-bold text-[18px] lg:text-[22px] text-[#0F172A]">
            TechCorp
          </p>
        </motion.div>
      </div>
    </section>
  );
}
