"use client";

import { motion } from "framer-motion";
import { BadgeCheck } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import { fadeUp, SectionHeader, staggerContainer } from "./SectionHeader";

export function Awards() {
  return (
    <section id="awards" className="section-padding bg-sky-50/70 dark:bg-sky-950/20">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionHeader
          title="Awards & Certifications"
          description="Awards and certificates showing applied AI momentum across international AI applications, embedded systems, and student research conferences."
          align="center"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-12 grid gap-5 lg:grid-cols-[1.05fr_0.95fr]"
        >
          <div className="grid gap-5">
            {portfolio.awards.map((award) => {
              const Icon = award.icon;

              return (
                <motion.article
                  key={award.title}
                  variants={fadeUp}
                  className="rounded-lg border border-slate-200 bg-white/90 p-6 text-center shadow-sm dark:border-white/10 dark:bg-white/[0.04]"
                >
                  <div className="grid justify-items-center gap-4">
                    <div className="grid size-12 shrink-0 place-items-center rounded-lg bg-blue-500/10 text-blue-700 dark:text-blue-300">
                      <Icon size={23} aria-hidden="true" />
                    </div>
                    <div>
                      <div className="flex flex-wrap items-center justify-center gap-3">
                        <h3 className="text-xl font-semibold text-slate-950 dark:text-white">
                          {award.title}
                        </h3>
                        <span className="rounded-full bg-sky-500/10 px-3 py-1 text-xs font-semibold text-sky-700 dark:text-sky-300">
                          {award.date}
                        </span>
                      </div>
                      <p className="mt-2 font-semibold text-blue-700 dark:text-blue-300">
                        {award.achievement}
                      </p>
                      {award.project ? (
                        <p className="mt-3 text-sm font-semibold text-slate-800 dark:text-slate-100">
                          Project: {award.project}
                        </p>
                      ) : null}
                      {award.description ? (
                        <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                          {award.description}
                        </p>
                      ) : null}
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>

          <motion.div
            variants={fadeUp}
            className="rounded-lg border border-slate-200 bg-white/90 p-6 text-center shadow-sm dark:border-white/10 dark:bg-white/[0.04]"
          >
            <h3 className="text-xl font-semibold text-slate-950 dark:text-white">Certifications</h3>
            <div className="mt-6 grid gap-3">
              {portfolio.certifications.map((certificate) => (
                <div
                  key={certificate.title}
                  className="grid justify-items-center gap-3 rounded-lg border border-slate-200 p-4 dark:border-white/10"
                >
                  <BadgeCheck
                    size={19}
                    className="shrink-0 text-cyan-600 dark:text-cyan-300"
                    aria-hidden="true"
                  />
                  <div>
                    <p className="text-sm font-semibold leading-6 text-slate-950 dark:text-white">
                      {certificate.title}
                    </p>
                    <p className="mt-1 text-xs font-semibold text-slate-500 dark:text-slate-400">
                      {certificate.date}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
