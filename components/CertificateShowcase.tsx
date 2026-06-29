"use client";

import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ExternalLink, Sparkles } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import type { FeaturedCertificate } from "@/data/portfolio";
import { fadeUp } from "./SectionHeader";

type CertificateShowcaseProps = {
  certificates: FeaturedCertificate[];
};

export function CertificateShowcase({ certificates }: CertificateShowcaseProps) {
  const [direction, setDirection] = useState<"left" | "right">("left");
  const loopingCertificates = [...certificates, ...certificates];

  return (
    <motion.div
      variants={fadeUp}
      className="mt-8 overflow-hidden rounded-lg border border-sky-200/80 bg-white/90 p-4 shadow-sm sm:p-6 dark:border-sky-300/10 dark:bg-white/[0.04]"
    >
      <div className="flex flex-col gap-5 text-center md:flex-row md:items-center md:justify-between md:text-left">
        <div>
          <div className="mx-auto inline-flex items-center gap-2 rounded-full bg-sky-500/10 px-3 py-1 text-xs font-semibold uppercase text-sky-700 md:mx-0 dark:text-sky-300">
            <Sparkles size={14} aria-hidden="true" />
            Verified Certificates
          </div>
          <h3 className="mt-3 text-2xl font-semibold text-slate-950 dark:text-white">
            Certificate Gallery
          </h3>
        </div>

        <div className="flex justify-center gap-2">
          <button
            type="button"
            title="Scroll left"
            aria-label="Scroll certificate gallery left"
            aria-pressed={direction === "left"}
            onClick={() => setDirection("left")}
            className={`grid size-10 place-items-center rounded-full border transition ${
              direction === "left"
                ? "border-sky-500 bg-sky-500 text-white shadow-lg shadow-sky-500/20"
                : "border-slate-200 bg-white text-slate-600 hover:border-sky-300 hover:text-sky-700 dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-300"
            }`}
          >
            <ChevronLeft size={18} aria-hidden="true" />
          </button>
          <button
            type="button"
            title="Scroll right"
            aria-label="Scroll certificate gallery right"
            aria-pressed={direction === "right"}
            onClick={() => setDirection("right")}
            className={`grid size-10 place-items-center rounded-full border transition ${
              direction === "right"
                ? "border-sky-500 bg-sky-500 text-white shadow-lg shadow-sky-500/20"
                : "border-slate-200 bg-white text-slate-600 hover:border-sky-300 hover:text-sky-700 dark:border-white/10 dark:bg-white/[0.04] dark:text-slate-300"
            }`}
          >
            <ChevronRight size={18} aria-hidden="true" />
          </button>
        </div>
      </div>

      <div className="certificate-marquee mt-6" aria-label="Certificate gallery">
        <div className="certificate-track" data-direction={direction}>
          {loopingCertificates.map((certificate, index) => (
            <a
              key={`${certificate.title}-${index}`}
              href={certificate.pdf}
              target="_blank"
              rel="noreferrer"
              className="group w-[min(82vw,370px)] shrink-0 rounded-lg border border-slate-200 bg-white p-3 text-center shadow-sm transition hover:-translate-y-1 hover:border-sky-300 hover:shadow-2xl hover:shadow-sky-500/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400 dark:border-white/10 dark:bg-[#03111f]/70 dark:hover:border-sky-300/60"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-md bg-slate-50 dark:bg-white/[0.04]">
                <Image
                  src={certificate.image}
                  alt={`Certificate preview: ${certificate.title}`}
                  fill
                  sizes="(max-width: 640px) 82vw, 370px"
                  className="object-contain p-2 transition duration-500 group-hover:scale-[1.03]"
                />
                <span className="absolute right-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-sky-700 shadow-sm backdrop-blur dark:bg-slate-950/80 dark:text-sky-200">
                  {certificate.date}
                </span>
              </div>

              <div className="px-2 pb-2 pt-4">
                <h4 className="text-base font-semibold leading-6 text-slate-950 dark:text-white">
                  {certificate.title}
                </h4>
                <p className="mt-2 text-xs font-semibold uppercase leading-5 text-blue-700 dark:text-blue-300">
                  {certificate.issuer}
                </p>
                <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
                  {certificate.description}
                </p>
                <span className="mt-4 inline-flex items-center justify-center gap-2 text-sm font-semibold text-sky-700 transition group-hover:text-blue-700 dark:text-sky-300 dark:group-hover:text-blue-200">
                  Open Certificate
                  <ExternalLink
                    size={15}
                    aria-hidden="true"
                    className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
