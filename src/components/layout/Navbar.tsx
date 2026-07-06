import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Radar, ArrowRight, Menu, X } from "lucide-react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#how", label: "How It Works" },
    { href: "#features", label: "Features" },
    { href: "#users", label: "Target Users" },
    { href: "#pricing", label: "Pricing" },
    { href: "#faq", label: "FAQ" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4 pointer-events-none">
      {/* Floating Pill Navbar */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className={`pointer-events-auto w-full max-w-5xl transition-all duration-300 ${
          scrolled
            ? "bg-[rgba(245,243,239,0.92)] shadow-[0_8px_32px_-8px_rgba(17,17,17,0.18)] ring-1 ring-black/[0.05]"
            : "bg-[rgba(245,243,239,0.82)]"
        } backdrop-blur-[14px] rounded-full`}
      >
        <div className="flex h-12 items-center justify-between px-4">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group shrink-0">
            <span className="grid h-7 w-7 place-items-center rounded-full bg-forest text-lime shadow-[0_0_12px_rgba(198,241,53,0.3)]">
              <Radar className="h-3.5 w-3.5" strokeWidth={2.4} />
            </span>
            <span className="font-display text-[15px] font-bold tracking-tight text-ink">
              OriginSearch<span className="text-ink-2/70 font-medium">.one</span>
            </span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="relative px-3 py-1.5 text-[13px] font-medium text-ink/70 hover:text-ink transition-colors rounded-full hover:bg-forest/5 after:content-[''] after:absolute after:left-3 after:right-3 after:-bottom-0.5 after:h-[1.5px] after:bg-lime after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-2 shrink-0">
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-lime px-4 py-1.5 text-[13px] font-semibold text-forest transition-transform hover:scale-105 active:scale-100 shadow-[0_6px_20px_-6px_rgba(198,241,53,0.65)]"
            >
              Get Started <ArrowRight className="h-3.5 w-3.5" />
            </a>
            <button
              className="lg:hidden grid h-8 w-8 place-items-center rounded-full border border-hairline text-ink hover:bg-muted transition-colors"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </motion.div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.97 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="pointer-events-auto absolute top-[68px] left-4 right-4 mx-auto max-w-sm bg-[rgba(245,243,239,0.96)] backdrop-blur-[14px] rounded-3xl shadow-[0_20px_50px_-16px_rgba(17,17,17,0.25)] ring-1 ring-black/[0.06] p-4 grid gap-1"
          >
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-2.5 text-sm font-medium text-ink hover:bg-forest hover:text-paper transition-all"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-1 flex items-center justify-center gap-2 rounded-full bg-lime px-4 py-2.5 text-sm font-semibold text-forest shadow-[0_4px_16px_-4px_rgba(198,241,53,0.5)]"
            >
              Get Started <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
