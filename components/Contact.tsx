"use client";

import { FormEvent } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { portfolio } from "@/data/portfolio";
import { fadeUp, SectionHeader, staggerContainer } from "./SectionHeader";

export function Contact() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "");
    const phone = String(formData.get("phone") ?? "");
    const email = String(formData.get("email") ?? "");
    const message = String(formData.get("message") ?? "");
    const subject = encodeURIComponent(`Portfolio contact from ${name || "visitor"}`);
    const body = encodeURIComponent(
      `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\n\n${message}`,
    );

    window.location.href = `mailto:${portfolio.personal.email}?subject=${subject}&body=${body}`;
  }

  return (
    <section id="contact" className="section-padding">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionHeader
          number="06"
          eyebrow="Contact me"
          title="Contact & Collaboration"
          description="Reach out for AI engineering opportunities, research collaborations, scholarships, conference work, or real-time AI deployment projects."
          align="center"
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-[0.85fr_1.15fr]">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="grid gap-4"
          >
            {portfolio.contacts.map((contact) => {
              const Icon = contact.icon;

              return (
                <motion.a
                  key={contact.label}
                  variants={fadeUp}
                  href={contact.href}
                  target={contact.href.startsWith("http") ? "_blank" : undefined}
                  rel={contact.href.startsWith("http") ? "noreferrer" : undefined}
                  className="group flex items-center gap-4 rounded-lg border border-slate-200 bg-white/85 p-5 shadow-sm transition hover:-translate-y-1 hover:border-sky-300 hover:shadow-xl hover:shadow-sky-500/10 dark:border-white/10 dark:bg-white/[0.04] dark:hover:border-sky-300/60"
                >
                  <div className="grid size-12 place-items-center rounded-lg bg-slate-950 text-sky-200 dark:bg-white/10">
                    <Icon size={21} aria-hidden="true" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold uppercase text-slate-500 dark:text-slate-400">
                      {contact.label}
                    </p>
                    <p className="mt-1 break-words text-sm font-semibold text-slate-950 group-hover:text-sky-700 dark:text-white dark:group-hover:text-sky-200">
                      {contact.value}
                    </p>
                  </div>
                </motion.a>
              );
            })}
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            onSubmit={handleSubmit}
            className="rounded-lg border border-slate-200 bg-white/90 p-6 shadow-sm sm:p-8 dark:border-white/10 dark:bg-white/[0.04]"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-semibold text-slate-700 dark:text-slate-200">
                Name
                <input
                  name="name"
                  required
                  autoComplete="name"
                  className="h-12 rounded-lg border border-slate-200 bg-white px-4 text-sm font-medium text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-sky-400 focus:ring-4 focus:ring-sky-400/10 dark:border-white/10 dark:bg-slate-950/70 dark:text-white"
                  placeholder="Your name"
                />
              </label>
              <label className="grid gap-2 text-sm font-semibold text-slate-700 dark:text-slate-200">
                Phone
                <input
                  name="phone"
                  autoComplete="tel"
                  className="h-12 rounded-lg border border-slate-200 bg-white px-4 text-sm font-medium text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-sky-400 focus:ring-4 focus:ring-sky-400/10 dark:border-white/10 dark:bg-slate-950/70 dark:text-white"
                  placeholder="Your phone"
                />
              </label>
            </div>
            <label className="mt-5 grid gap-2 text-sm font-semibold text-slate-700 dark:text-slate-200">
              Email
              <input
                name="email"
                type="email"
                required
                autoComplete="email"
                className="h-12 rounded-lg border border-slate-200 bg-white px-4 text-sm font-medium text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-sky-400 focus:ring-4 focus:ring-sky-400/10 dark:border-white/10 dark:bg-slate-950/70 dark:text-white"
                placeholder="you@example.com"
              />
            </label>
            <label className="mt-5 grid gap-2 text-sm font-semibold text-slate-700 dark:text-slate-200">
              Message
              <textarea
                name="message"
                required
                rows={7}
                className="resize-none rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-sky-400 focus:ring-4 focus:ring-sky-400/10 dark:border-white/10 dark:bg-slate-950/70 dark:text-white"
                placeholder="Tell me about the opportunity or collaboration."
              />
            </label>
            <button
              type="submit"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-slate-950 px-6 py-3.5 text-sm font-semibold text-white shadow-xl shadow-slate-950/15 transition hover:-translate-y-0.5 hover:bg-sky-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400 sm:w-auto dark:bg-white dark:text-slate-950 dark:hover:bg-sky-200"
            >
              Send Now
              <Send size={17} aria-hidden="true" />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
