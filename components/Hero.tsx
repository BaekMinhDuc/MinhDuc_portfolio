"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { portfolio } from "@/data/portfolio";
import { fadeUp, staggerContainer } from "./SectionHeader";

export function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden pt-28 sm:pt-32">
      <div className="absolute inset-0 -z-10 hero-gradient" aria-hidden="true" />
      <div className="mx-auto grid min-h-[calc(100svh-5rem)] max-w-7xl items-center gap-12 px-5 pb-20 text-center sm:px-6 lg:px-8 xl:grid-cols-[1.15fr_0.85fr]">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="mx-auto max-w-5xl xl:mx-0"
        >
          <motion.h1
            variants={fadeUp}
            className="whitespace-nowrap text-[clamp(1.65rem,7.2vw,5.25rem)] font-semibold leading-[1.03] text-slate-950 dark:text-white"
          >
            {portfolio.personal.headline}
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="mx-auto mt-6 max-w-2xl whitespace-nowrap bg-gradient-to-r from-sky-600 via-blue-600 to-sky-600 bg-clip-text text-[clamp(1rem,3.6vw,2rem)] font-semibold text-transparent dark:from-sky-200 dark:via-sky-200 dark:to-blue-200"
          >
            {portfolio.personal.roleLine}
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-[430px]"
        >
          <div className="absolute inset-4 -z-10 rounded-[28px] border border-sky-300/40 bg-gradient-to-br from-sky-300/30 via-blue-300/20 to-sky-200/24 dark:border-sky-300/20 dark:from-sky-500/18 dark:via-blue-500/12 dark:to-sky-500/14" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] border border-sky-100/80 bg-white shadow-2xl shadow-sky-900/10 dark:border-sky-300/10 dark:bg-[#03111f] dark:shadow-sky-950/20">
            <Image
              src="/MinhDuc.png"
              alt="Portrait of Ngo Pham Minh Duc"
              fill
              sizes="(min-width: 1024px) 430px, 86vw"
              priority
              className="object-cover object-center"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
