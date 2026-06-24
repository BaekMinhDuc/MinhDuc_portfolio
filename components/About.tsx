"use client";

import { motion } from "framer-motion";
import { BookOpen, GraduationCap } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import { fadeUp, SectionHeader, staggerContainer } from "./SectionHeader";
import { SkillCard } from "./SkillCard";

export function About() {
  return (
    <section id="about" className="section-padding">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="About me"
          title="Education, Skills & Applied AI"
          description={portfolio.about}
          align="center"
        />

        <div className="mx-auto mt-12 grid max-w-6xl gap-5 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            className="rounded-lg border border-slate-200 bg-white/90 p-7 text-center shadow-sm dark:border-white/10 dark:bg-white/[0.04]"
          >
            <div className="mx-auto grid size-14 place-items-center rounded-lg bg-blue-500/10 text-blue-700 dark:text-blue-300">
              <GraduationCap size={26} aria-hidden="true" />
            </div>
            <p className="mt-5 text-xs font-semibold uppercase text-slate-500 dark:text-slate-400">
              Education
            </p>
            <h3 className="mx-auto mt-2 max-w-xl text-2xl font-semibold leading-tight text-slate-950 dark:text-white">
              {portfolio.education.school}
            </h3>
            <p className="mx-auto mt-4 max-w-2xl text-base font-semibold leading-7 text-slate-800 dark:text-slate-100">
              {portfolio.education.degree}
            </p>
            <div className="mt-6 grid gap-3 text-sm text-slate-600 sm:grid-cols-2 dark:text-slate-300">
              <p className="rounded-lg bg-slate-50 p-4 dark:bg-white/[0.04]">
                {portfolio.education.period}
              </p>
              <p className="rounded-lg bg-slate-50 p-4 dark:bg-white/[0.04]">
                {portfolio.education.cpa}
              </p>
            </div>
            <p className="mx-auto mt-5 inline-flex items-center justify-center gap-2 rounded-full bg-sky-500/10 px-4 py-2 text-sm font-semibold text-sky-700 dark:text-sky-300">
              <BookOpen size={16} aria-hidden="true" />
              {portfolio.education.focus}
            </p>
          </motion.article>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid gap-5"
          >
            {portfolio.skillGroups.map((group) => (
              <SkillCard key={group.title} group={group} />
            ))}
          </motion.div>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-14 grid gap-4 text-center sm:grid-cols-2 lg:grid-cols-3"
        >
          {portfolio.highlights.map((item) => {
            const Icon = item.icon;

            return (
              <motion.article
                key={item.title}
                variants={fadeUp}
                className="rounded-lg border border-slate-200 bg-white/85 p-6 shadow-sm transition hover:-translate-y-1 hover:border-sky-300 hover:shadow-xl hover:shadow-sky-500/10 dark:border-white/10 dark:bg-white/[0.04] dark:hover:border-sky-300/60"
              >
                <div className="mx-auto mb-5 grid size-12 place-items-center rounded-lg bg-slate-950 text-sky-200 dark:bg-white/10">
                  <Icon size={23} aria-hidden="true" />
                </div>
                <h3 className="text-lg font-semibold text-slate-950 dark:text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                  {item.description}
                </p>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
