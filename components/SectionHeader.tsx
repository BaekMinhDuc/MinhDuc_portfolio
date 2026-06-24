"use client";

import { motion } from "framer-motion";

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeaderProps) {
  const isCenter = align === "center";

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className={isCenter ? "mx-auto max-w-6xl text-center" : "max-w-6xl"}
    >
      <motion.div
        variants={fadeUp}
        className={`mb-5 flex items-center gap-3 ${isCenter ? "justify-center" : ""}`}
      >
        <span className="h-px w-14 bg-gradient-to-r from-transparent via-sky-500 to-blue-500" />
        <span className="text-base font-semibold uppercase text-slate-600 sm:text-lg dark:text-slate-300">
          {eyebrow}
        </span>
        {isCenter ? (
          <span className="h-px w-14 bg-gradient-to-r from-blue-500 via-sky-500 to-transparent" />
        ) : null}
      </motion.div>
      <motion.h2
        variants={fadeUp}
        className="mx-auto whitespace-nowrap text-[clamp(1.18rem,4vw,3.25rem)] font-semibold leading-tight text-slate-950 dark:text-white"
      >
        {title}
      </motion.h2>
      {description ? (
        <motion.p
          variants={fadeUp}
          className={`mt-5 text-base leading-8 text-slate-600 sm:text-lg dark:text-slate-300 ${
            isCenter ? "mx-auto" : ""
          }`}
        >
          {description}
        </motion.p>
      ) : null}
    </motion.div>
  );
}
