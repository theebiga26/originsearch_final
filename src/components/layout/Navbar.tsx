import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Menu, X } from "lucide-react";
import { Link, useLocation } from "@tanstack/react-router";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const location = useLocation();

  const isDarkHeader = false;

  const links = [
    { href: "/#home", label: "Home" },
    { href: "/#about", label: "About" },
    { href: "/#how", label: "How It Works" },
    { href: "/#pricing", label: "Pricing" },
    { href: "/#contact", label: "Contact" },
  ];

  const getHref = (href: string) => {
    const hashIndex = href.indexOf("#");
    if (hashIndex === -1) return href;
    const hash = href.substring(hashIndex);
    if (typeof window !== "undefined" && window.location.pathname === "/") {
      return hash;
    }
    return href;
  };

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Handle scroll styling (transparent vs background)
    const handleScrollStyle = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScrollStyle, { passive: true });
    handleScrollStyle();

    // If not on the homepage, active section highlighting is not active
    if (location.pathname !== "/") {
      return () => {
        window.removeEventListener("scroll", handleScrollStyle);
      };
    }

    const linkEls = links.map((l) => {
      const hashIndex = l.href.indexOf("#");
      const hash = hashIndex !== -1 ? l.href.substring(hashIndex) : "";
      const el = hash ? (document.querySelector(hash) as HTMLElement | null) : null;
      return { href: l.href, el };
    });

    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollPosition = window.scrollY + window.innerHeight / 3;
          let currentSection = "";

          for (const { href, el } of linkEls) {
            if (el && el.offsetTop <= scrollPosition) {
              currentSection = href;
            }
          }

          if (window.innerHeight + Math.round(window.scrollY) >= document.body.offsetHeight - 50) {
            currentSection = "/#contact";
          }

          if (currentSection && currentSection !== activeSection) {
            setActiveSection(currentSection);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScrollStyle);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeSection, location.pathname]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4 pointer-events-none">
      {/* Floating Pill */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className={`pointer-events-auto w-full max-w-5xl transition-all duration-300 ${
          isDarkHeader
            ? "bg-[#1A2E22] shadow-[0_8px_32px_-8px_rgba(0,0,0,0.37)] border border-[#C6F135]/20"
            : scrolled
              ? "bg-[rgba(245,243,239,0.92)] shadow-[0_8px_32px_-8px_rgba(17,17,17,0.18)] border border-[#1A2E22]/10"
              : "bg-[rgba(245,243,239,0.82)] border border-[#1A2E22]/20"
        } backdrop-blur-[14px] rounded-full`}
      >
        <div className="flex h-16 items-center justify-between px-6">
          <Link to="/" className="flex items-center shrink-0">
            <img
              src={isDarkHeader ? "/logo2.svg" : "/logo.svg"}
              alt="OriginSearch Logo"
              className={`h-9 w-auto object-contain ${isDarkHeader ? "brightness-0 invert" : ""}`}
              width="140"
              height="36"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-0.5">
            {links.map((l) => {
              const isActive = activeSection === l.href;
              return (
                <a
                  key={l.href}
                  href={getHref(l.href)}
                  className={`relative px-3 py-1.5 text-[13px] font-medium transition-colors rounded-full ${
                    isDarkHeader ? "hover:bg-white/5" : "hover:bg-forest/5"
                  }
                    ${
                      isDarkHeader
                        ? isActive
                          ? "text-white"
                          : "text-[#F5F3EF]/70 hover:text-white"
                        : isActive
                          ? "text-ink"
                          : "text-ink/70 hover:text-ink"
                    }
                    after:content-[''] after:absolute after:left-3 after:right-3 after:-bottom-0.5 after:h-[1.5px] after:bg-lime 
                    after:transition-transform after:origin-left
                    ${isActive ? "after:scale-x-100" : "after:scale-x-0 hover:after:scale-x-100"}`}
                >
                  {l.label}
                </a>
              );
            })}
          </nav>

          {/* CTA + Toggle */}
          <div className="flex items-center gap-2 shrink-0">
            <Link
              to="/products"
              className="hidden sm:inline-flex items-center gap-3 bg-[#C6F135] hover:bg-[#b5e022] text-[#1A2E22] rounded-full p-1.5 pl-5 hover:scale-[1.02] active:scale-95 transition-transform shadow-[0_6px_20px_-6px_rgba(198,241,53,0.65)] group"
            >
              <span className="font-semibold text-[13px]">Products</span>
              <div className="w-7 h-7 rounded-full bg-[#1A2E22] text-[#C6F135] flex items-center justify-center shadow-inner group-hover:bg-black transition-colors">
                <ArrowRight size={14} strokeWidth={2.5} />
              </div>
            </Link>
            <button
              className={`lg:hidden grid h-8 w-8 place-items-center rounded-full border ${
                isDarkHeader
                  ? "border-white/10 text-white hover:bg-white/10"
                  : "border-hairline text-ink hover:bg-muted"
              } transition-colors`}
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </motion.div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.97 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className={`pointer-events-auto absolute top-[68px] left-4 right-4 mx-auto max-w-sm ${
              isDarkHeader
                ? "bg-[#1A2E22]/98 text-white border border-[#C6F135]/20 shadow-[0_20px_50px_-16px_rgba(0,0,0,0.5)]"
                : "bg-[rgba(245,243,239,0.97)] backdrop-blur-[14px] shadow-[0_20px_50px_-16px_rgba(17,17,17,0.25)] ring-1 ring-black/[0.06]"
            } rounded-3xl p-4 grid gap-1`}
          >
            {links.map((l) => {
              const isActive = activeSection === l.href;
              return (
                <a
                  key={l.href}
                  href={getHref(l.href)}
                  onClick={() => setOpen(false)}
                  className={`rounded-xl px-4 py-2.5 text-sm font-medium transition-all ${
                    isActive
                      ? "bg-forest text-paper"
                      : isDarkHeader
                        ? "text-[#F5F3EF]/80 hover:bg-white/10 hover:text-white"
                        : "text-ink hover:bg-forest/10"
                  }`}
                >
                  {l.label}
                </a>
              );
            })}
            <Link
              to="/products"
              onClick={() => setOpen(false)}
              className="mt-1 flex items-center justify-between bg-[#C6F135] hover:bg-[#b5e022] text-[#1A2E22] rounded-full p-2 pl-6 hover:scale-[1.02] active:scale-95 transition-transform shadow-[0_4px_16px_-4px_rgba(198,241,53,0.5)] group"
            >
              <span className="font-semibold text-sm">Products</span>
              <div className="w-8 h-8 rounded-full bg-[#1A2E22] text-[#C6F135] flex items-center justify-center shadow-inner group-hover:bg-black transition-colors">
                <ArrowRight size={16} strokeWidth={2.5} />
              </div>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
