"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Download, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { portfolio } from "@/data/portfolio";
import { ThemeToggle } from "./ThemeToggle";

export function Navbar() {
  const [activeId, setActiveId] = useState("home");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const sections = portfolio.nav
      .map((item) => document.getElementById(item.id))
      .filter(Boolean) as HTMLElement[];

    if (!sections.length) {
      return;
    }

    let frameId: number | null = null;

    const updateActiveSection = () => {
      const navOffset = 112;
      const scrollPosition = window.scrollY + navOffset;
      const viewportBottom = window.scrollY + window.innerHeight;
      const pageBottom = document.documentElement.scrollHeight - 2;

      if (viewportBottom >= pageBottom) {
        setActiveId(sections[sections.length - 1].id);
        return;
      }

      let currentId = sections[0].id;

      for (const section of sections) {
        if (section.offsetTop <= scrollPosition) {
          currentId = section.id;
        } else {
          break;
        }
      }

      setActiveId(currentId);
    };

    const requestUpdate = () => {
      if (frameId !== null) {
        return;
      }

      frameId = window.requestAnimationFrame(() => {
        frameId = null;
        updateActiveSection();
      });
    };

    updateActiveSection();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);
    window.addEventListener("hashchange", requestUpdate);

    return () => {
      if (frameId !== null) {
        window.cancelAnimationFrame(frameId);
      }

      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
      window.removeEventListener("hashchange", requestUpdate);
    };
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-sky-100/80 bg-white/78 backdrop-blur-xl dark:border-sky-300/10 dark:bg-[#03111f]/80">
      <nav
        className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-6 lg:px-8"
        aria-label="Primary navigation"
      >
        <a
          href="#home"
          aria-label="Ngo Pham Minh Duc home"
          onClick={() => setActiveId("home")}
          className="group flex items-center gap-3"
        >
          <span className="grid size-11 place-items-center rounded-lg bg-sky-950 text-sm font-bold text-white shadow-lg shadow-sky-500/20 dark:bg-sky-100 dark:text-sky-950">
            ND
          </span>
          <span className="hidden leading-tight sm:block">
            <span className="block whitespace-nowrap text-sm font-semibold text-slate-950 dark:text-white">
              Ngo Pham Minh Duc
            </span>
            <span className="block text-xs text-slate-500 dark:text-slate-400">AI / Edge AI</span>
          </span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {portfolio.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setActiveId(item.id)}
              className={`rounded-full px-3 py-2 text-sm font-semibold transition ${
                activeId === item.id
                  ? "bg-sky-500/10 text-sky-700 dark:text-sky-200"
                  : "text-slate-600 hover:bg-slate-100 hover:text-slate-950 dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white"
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href={portfolio.personal.cv}
            download
            aria-label="Download Ngo Pham Minh Duc CV"
            className="hidden items-center gap-2 rounded-full bg-sky-950 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-sky-950/10 transition hover:bg-sky-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400 md:inline-flex dark:bg-sky-100 dark:text-sky-950 dark:hover:bg-sky-200"
          >
            <Download size={16} aria-hidden="true" />
            Resume
          </a>
          <ThemeToggle />
          <button
            type="button"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            title={isOpen ? "Close menu" : "Open menu"}
            onClick={() => setIsOpen((current) => !current)}
            className="grid size-10 place-items-center rounded-full border border-sky-200/80 bg-white/80 text-slate-700 shadow-sm backdrop-blur transition hover:border-sky-400 hover:text-sky-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400 lg:hidden dark:border-sky-300/10 dark:bg-[#03111f]/70 dark:text-slate-200"
          >
            {isOpen ? <X size={18} aria-hidden="true" /> : <Menu size={18} aria-hidden="true" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            className="border-t border-sky-100 bg-white px-5 py-4 shadow-xl lg:hidden dark:border-sky-300/10 dark:bg-[#03111f]"
          >
            <div className="mx-auto grid max-w-7xl gap-2">
              {portfolio.nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => {
                    setActiveId(item.id);
                    setIsOpen(false);
                  }}
                  className={`rounded-lg px-4 py-3 text-sm font-semibold transition ${
                    activeId === item.id
                      ? "bg-sky-500/10 text-sky-700 dark:text-sky-200"
                      : "text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-white/10"
                  }`}
                >
                  {item.label}
                </a>
              ))}
              <a
                href={portfolio.personal.cv}
                download
                onClick={() => setIsOpen(false)}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-sky-950 px-4 py-3 text-sm font-semibold text-white dark:bg-sky-100 dark:text-sky-950"
              >
                <Download size={16} aria-hidden="true" />
                Download CV
              </a>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
