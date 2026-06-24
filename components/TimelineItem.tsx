"use client";

import { motion } from "framer-motion";
import { CalendarDays } from "lucide-react";
import type { TimelineEntry } from "@/data/portfolio";
import { fadeUp } from "./SectionHeader";

type TimelineItemProps = {
  item: TimelineEntry;
  index: number;
};

export function TimelineItem({ item, index }: TimelineItemProps) {
  return (
    <motion.article
      variants={fadeUp}
      className="relative grid gap-5 border-l border-slate-200 pl-8 sm:grid-cols-[180px_1fr] sm:gap-8 sm:border-l-0 sm:pl-0 dark:border-white/10"
    >
      <div className="absolute -left-[7px] top-1 size-3 rounded-full border-2 border-sky-500 bg-white shadow-[0_0_0_6px_rgba(6,182,212,0.14)] sm:left-[191px] dark:bg-slate-950" />
      <div className="sm:text-right">
        <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold uppercase text-slate-600 shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-slate-300">
          <CalendarDays size={14} aria-hidden="true" />
          {item.period}
        </div>
        <p className="mt-3 font-mono text-sm text-sky-600 dark:text-sky-300">
          0{index + 1}
        </p>
      </div>
      <div className="rounded-lg border border-slate-200 bg-white/85 p-6 shadow-sm transition hover:-translate-y-1 hover:border-sky-300 hover:shadow-xl hover:shadow-sky-500/10 dark:border-white/10 dark:bg-white/[0.04] dark:hover:border-sky-300/60">
        <div className="flex flex-wrap items-center gap-3">
          <h3 className="text-xl font-semibold text-slate-950 dark:text-white">{item.role}</h3>
          <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-semibold text-cyan-700 dark:text-cyan-300">
            {item.type}
          </span>
        </div>
        <p className="mt-2 text-sm font-semibold text-blue-700 dark:text-blue-300">
          {item.company}
        </p>
        <ul className="mt-5 space-y-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
          {item.description.map((detail) => (
            <li key={detail} className="flex gap-3">
              <span className="mt-3 size-1.5 shrink-0 rounded-full bg-sky-500" />
              <span>{detail}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.article>
  );
}
