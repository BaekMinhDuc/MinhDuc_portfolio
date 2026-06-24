"use client";

import { motion } from "framer-motion";
import type { SkillGroup } from "@/data/portfolio";
import { fadeUp } from "./SectionHeader";

type SkillCardProps = {
  group: SkillGroup;
};

export function SkillCard({ group }: SkillCardProps) {
  const Icon = group.icon;

  return (
    <motion.article
      variants={fadeUp}
      className="rounded-lg border border-slate-200 bg-white/85 p-6 text-center shadow-sm transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-500/10 dark:border-white/10 dark:bg-white/[0.04] dark:hover:border-blue-300/60"
    >
      <div className="mb-5 grid justify-items-center gap-3">
        <div className="grid size-11 place-items-center rounded-lg bg-sky-500/10 text-sky-700 dark:text-sky-300">
          <Icon size={21} aria-hidden="true" />
        </div>
        <h3 className="text-lg font-semibold text-slate-950 dark:text-white">{group.title}</h3>
      </div>
      <div className="flex flex-wrap justify-center gap-2">
        {group.skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-sm font-medium text-slate-700 transition hover:border-sky-300 hover:bg-sky-50 hover:text-sky-700 dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-200 dark:hover:border-sky-300/60 dark:hover:bg-sky-300/10 dark:hover:text-sky-200"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.article>
  );
}
