import { BriefcaseBusiness, Code2, Mail } from "lucide-react";
import { portfolio } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-sky-100 bg-white py-8 dark:border-sky-300/10 dark:bg-[#03111f]">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 px-5 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <div>
          <p className="text-sm font-semibold text-slate-950 dark:text-white">
            Ngo Pham Minh Duc
          </p>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
            AI Engineer | AI Researcher | Computer Vision | Speech AI
          </p>
        </div>
        <div className="flex items-center gap-3">
          <a
            href={`mailto:${portfolio.personal.email}`}
            aria-label="Email Ngo Pham Minh Duc"
            className="grid size-10 place-items-center rounded-full border border-slate-200 text-slate-600 transition hover:border-sky-400 hover:text-sky-700 dark:border-white/10 dark:text-slate-300 dark:hover:border-sky-300 dark:hover:text-sky-200"
          >
            <Mail size={18} aria-hidden="true" />
          </a>
          <a
            href={portfolio.personal.github}
            target="_blank"
            rel="noreferrer"
            aria-label="Open GitHub profile"
            className="grid size-10 place-items-center rounded-full border border-slate-200 text-slate-600 transition hover:border-sky-400 hover:text-sky-700 dark:border-white/10 dark:text-slate-300 dark:hover:border-sky-300 dark:hover:text-sky-200"
          >
            <Code2 size={18} aria-hidden="true" />
          </a>
          <a
            href={portfolio.personal.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="Open LinkedIn profile"
            className="grid size-10 place-items-center rounded-full border border-slate-200 text-slate-600 transition hover:border-sky-400 hover:text-sky-700 dark:border-white/10 dark:text-slate-300 dark:hover:border-sky-300 dark:hover:text-sky-200"
          >
            <BriefcaseBusiness size={18} aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
