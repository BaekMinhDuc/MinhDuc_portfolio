"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Calendar, Layers3, Target, UserRoundCheck } from "lucide-react";
import type { Project } from "@/data/portfolio";
import { fadeUp } from "./SectionHeader";

type ProjectCardProps = {
  project: Project;
  index: number;
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  const tags = project.highlights ?? [...(project.technical ?? []), ...(project.tools ?? [])];

  return (
    <motion.article
      variants={fadeUp}
      className="group flex h-full flex-col rounded-lg border border-slate-200 bg-white/90 p-6 text-center shadow-sm transition hover:-translate-y-1 hover:border-sky-300 hover:shadow-2xl hover:shadow-sky-500/15 dark:border-white/10 dark:bg-white/[0.04] dark:hover:border-sky-300/60"
    >
      <div className="mb-6 flex items-start justify-between gap-4">
        <span className="font-mono text-sm font-semibold text-sky-600 dark:text-sky-300">
          / 0{index + 1}
        </span>
        <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-1 text-xs font-semibold text-slate-600 dark:border-white/10 dark:text-slate-300">
          <Calendar size={13} aria-hidden="true" />
          {project.period}
        </span>
      </div>
      <div className="flex-1">
        <h3 className="text-xl font-semibold leading-snug text-slate-950 dark:text-white">
          {project.title}
        </h3>
        <div className="mt-3 flex flex-wrap justify-center gap-2 text-xs font-semibold uppercase text-blue-700 dark:text-blue-300">
          {project.role ? <span>{project.role}</span> : null}
          {project.event ? <span>{project.event}</span> : null}
        </div>
        <p className="mt-5 text-sm leading-7 text-slate-600 dark:text-slate-300">
          {project.description}
        </p>

        <div className="mt-6 grid gap-3 text-left">
          {project.problem ? (
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4 dark:border-white/10 dark:bg-white/[0.04]">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase text-sky-700 dark:text-sky-300">
                <Target size={14} aria-hidden="true" />
                Problem
              </div>
              <p className="mt-2 text-sm leading-6 text-slate-700 dark:text-slate-300">
                {project.problem}
              </p>
            </div>
          ) : null}
          {project.contribution ? (
            <div className="rounded-lg border border-slate-200 bg-slate-50 p-4 dark:border-white/10 dark:bg-white/[0.04]">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase text-blue-700 dark:text-blue-300">
                <UserRoundCheck size={14} aria-hidden="true" />
                My Role
              </div>
              <p className="mt-2 text-sm leading-6 text-slate-700 dark:text-slate-300">
                {project.contribution}
              </p>
            </div>
          ) : null}
          {project.result ? (
            <div className="rounded-lg border border-green-200 bg-green-50 p-4 dark:border-green-400/20 dark:bg-green-400/10">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase text-green-700 dark:text-green-300">
                <Layers3 size={14} aria-hidden="true" />
                Result
              </div>
              <p className="mt-2 text-sm font-semibold leading-6 text-slate-800 dark:text-slate-100">
                {project.result}
              </p>
            </div>
          ) : null}
        </div>
      </div>
      <div className="mt-6 flex flex-wrap justify-center gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-semibold text-slate-700 dark:bg-white/[0.06] dark:text-slate-200"
          >
            {tag}
          </span>
        ))}
      </div>
      <a
        href="#contact"
        aria-label={`Discuss project: ${project.title}`}
        className="mx-auto mt-7 inline-flex w-fit items-center gap-2 text-sm font-semibold text-sky-700 transition hover:text-blue-700 dark:text-sky-300 dark:hover:text-blue-200"
      >
        <Layers3 size={16} aria-hidden="true" />
        View case details
        <ArrowUpRight size={16} aria-hidden="true" className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </a>
    </motion.article>
  );
}
