"use client";

import { motion } from "framer-motion";
import { portfolio } from "@/data/portfolio";
import { fadeUp, SectionHeader, staggerContainer } from "./SectionHeader";

export function AcademicResearch() {
  return (
    <section id="research" className="section-padding">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionHeader
          title="Conference Research"
          description="Academic research projects from HUST student research conferences, built around multi-camera monitoring, Vietnamese speech AI, and CPU-only face detection."
          align="center"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-12 grid gap-5 lg:grid-cols-3"
        >
          {portfolio.research.map((item) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.title}
                variants={fadeUp}
                className="rounded-lg border border-slate-200 bg-white/85 p-6 text-center shadow-sm transition hover:-translate-y-1 hover:border-cyan-300 hover:shadow-xl hover:shadow-cyan-500/10 dark:border-white/10 dark:bg-white/[0.04] dark:hover:border-cyan-300/60"
              >
                <div className="mb-6 grid justify-items-center gap-4">
                  <div className="grid size-12 place-items-center rounded-lg bg-cyan-500/10 text-cyan-700 dark:text-cyan-300">
                    <Icon size={23} aria-hidden="true" />
                  </div>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold leading-5 text-slate-600 dark:bg-white/[0.06] dark:text-slate-300">
                    {item.focus}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-slate-950 dark:text-white">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">
                  {item.description}
                </p>
                <div className="mt-6 flex flex-wrap justify-center gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-600 dark:border-white/10 dark:text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
