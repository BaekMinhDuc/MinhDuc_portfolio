"use client";

import { motion } from "framer-motion";
import { portfolio } from "@/data/portfolio";
import { ProjectCard } from "./ProjectCard";
import { SectionHeader, staggerContainer } from "./SectionHeader";

export function Projects() {
  return (
    <section id="projects" className="section-padding bg-sky-50/70 dark:bg-sky-950/20">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionHeader
          number="03"
          eyebrow="Technical Projects"
          title="Technical AI Projects"
          description="Technical project work focused on object detection, face recognition, model compression, and edge AI deployment for real-time multi-camera systems."
          align="center"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mx-auto mt-12 grid max-w-3xl gap-5"
        >
          {portfolio.projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
