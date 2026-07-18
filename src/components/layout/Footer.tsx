import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import logoSrc from "../../assets/Logo_1.svg";

export function Footer() {
  const cols = [
    {
      title: "Quick Links",
      links: [
        { label: "About", href: "/#about" },
        { label: "Features", href: "/#features" },
        { label: "Pricing", href: "/#pricing" },
        { label: "FAQ", href: "/#faq" },
        { label: "Contact", href: "/#contact" },
      ],
    },
    {
      title: "Products",
      links: [
        { label: "Overview", href: "/products#overview" },
        { label: "How It Works", href: "/products#architecture" },
        { label: "Roadmap", href: "/products#roadmap" },
      ],
    },
  ];

  const socials = [
    {
      label: "Facebook",
      href: "https://www.facebook.com/OriginSearch/",
      svg: (
        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
        </svg>
      ),
    },
    {
      label: "Twitter / X",
      href: "https://x.com/OriginSearchAi",
      svg: (
        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
    {
      label: "Pinterest",
      href: "https://www.pinterest.com/OriginSearch/",
      svg: (
        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
        </svg>
      ),
    },
    {
      label: "YouTube",
      href: "https://www.youtube.com/@OriginSearch",
      svg: (
        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      ),
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/company/originsearch/",
      svg: (
        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
  ];

  const getHref = (href: string) => {
    if (typeof window === "undefined") return href;

    const hashIndex = href.indexOf("#");
    if (hashIndex === -1) return href;

    const pathPart = href.substring(0, hashIndex);
    const hashPart = href.substring(hashIndex);

    // If the link points to the page we are currently on, return JUST the hash.
    // This allows native smooth scrolling without triggering a full page reload.
    if (
      pathPart === window.location.pathname ||
      (pathPart === "" && window.location.pathname === "/") ||
      (pathPart === "/" && window.location.pathname === "/")
    ) {
      return hashPart;
    }

    return href;
  };

  return (
    <footer className="relative bg-[#F5F3EF] px-4 sm:px-6 lg:px-8 pt-12 sm:pt-20 pb-6 sm:pb-10 overflow-hidden flex flex-col items-center">
      {/* Massive background text contained within the padding bounds */}
      <div className="absolute top-0 w-full px-4 sm:px-6 lg:px-8 overflow-hidden flex justify-center select-none pointer-events-none mt-10">
        <h1 className="font-display font-black text-[13.5vw] lg:text-[11.5vw] leading-[0.8] text-[#1A2E22] whitespace-nowrap opacity-90 tracking-tight">
          ORIGINSEARCH
        </h1>
      </div>

      {/* Floating Footer Card */}
      <div className="relative z-10 w-full bg-[#1A2E22] rounded-[2.5rem] sm:rounded-[3.5rem] border-t border-white/10 p-8 sm:p-16 shadow-[0_-20px_60px_rgba(0,0,0,0.5)] flex flex-col mt-16 sm:mt-24">
        <div className="grid gap-10 lg:grid-cols-4">
          {/* Logo Column */}
          <div className="lg:col-span-1 flex flex-col justify-start">
            <Link to="/" className="flex items-center shrink-0">
              <img
                src={logoSrc}
                alt="OriginSearch Logo"
                className="h-9 w-auto object-contain"
              />
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-[#F5F3EF]/60">
              Enterprise AI deployment, orchestration, and lifecycle management platform.
            </p>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-2 grid grid-cols-2 gap-10">
            {cols.map((c) => (
              <div key={c.title} className="flex flex-col lg:items-center">
                <div className="w-full max-w-[170px]">
                  <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-[#C6F135]">
                    / {c.title}
                  </h4>
                  <ul className="mt-4 space-y-2.5">
                    {c.links.map((l) => (
                      <li key={l.label}>
                        <a
                          href={getHref(l.href)}
                          className="group flex items-center text-sm text-[#F5F3EF]/70 transition-all hover:text-[#C6F135] hover:translate-x-1"
                        >
                          <ChevronRight className="w-3 h-3 mr-2 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                          {l.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Socials Column */}
          <div className="flex flex-col lg:items-end">
            <div>
              <h4 className="font-mono text-xs font-bold uppercase tracking-widest text-[#C6F135]">
                / FOLLOW US
              </h4>
              <div className="mt-6 flex flex-wrap items-center gap-4">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="relative group flex-shrink-0 w-11 h-11 rounded-full flex items-center justify-center z-10 transition-transform duration-300 hover:-translate-y-1"
                  >
                    <div className="absolute inset-0 bg-[#C6F135] rounded-full translate-x-1 translate-y-1 transition-transform group-hover:translate-x-1.5 group-hover:translate-y-1.5"></div>
                    <div className="absolute inset-0 bg-[#24382C] rounded-full border border-white/10 group-hover:border-[#C6F135]/50 transition-colors"></div>
                    <div className="relative z-10 text-white group-hover:text-[#C6F135] transition-colors">
                      {s.svg}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Copyright & Policies */}
        <div className="mt-14 flex flex-col items-center gap-6 border-t border-[#F5F3EF]/10 pt-8 sm:flex-row sm:justify-between">
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
            <p className="text-xs text-[#F5F3EF]/50">
              © 2026 OriginSearch.one. All rights reserved.
            </p>
            <div className="flex items-center gap-4 sm:gap-6">
              <Link
                to="/privacy"
                className="text-xs text-[#F5F3EF]/50 hover:text-[#C6F135] transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/cookies"
                className="text-xs text-[#F5F3EF]/50 hover:text-[#C6F135] transition-colors"
              >
                Cookie Policy
              </Link>
              <Link
                to="/terms"
                className="text-xs text-[#F5F3EF]/50 hover:text-[#C6F135] transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
          <p className="text-xs font-mono uppercase tracking-widest text-[#F5F3EF]/40">
            Built for production AI · v4 runtime
          </p>
        </div>
      </div>
    </footer>
  );
}
