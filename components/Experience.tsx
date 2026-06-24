"use client";

import { motion } from "framer-motion";
import { portfolio } from "@/data/portfolio";
import { SectionHeader, staggerContainer } from "./SectionHeader";
import { TimelineItem } from "./TimelineItem";

export function Experience() {
  return (
    <section id="experience" className="section-padding bg-sky-50/70 dark:bg-sky-950/20">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionHeader
          title="AI Work & Research Experience"
          description="A timeline of AI internships and research roles focused on practical computer vision, surveillance intelligence, optimization, and AIoT prototypes."
          align="center"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="relative mt-14 grid gap-10"
        >
          <div className="absolute left-[197px] top-0 hidden h-full w-px bg-slate-200 sm:block dark:bg-white/10" />
          {portfolio.experience.map((item, index) => (
            <TimelineItem key={`${item.company}-${item.role}`} item={item} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
