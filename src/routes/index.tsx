import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence, useInView, useScroll, useTransform, animate } from "motion/react";
import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  Rocket,
  Cpu,
  GitBranch,
  Gauge,
  Activity,
  Cloud,
  ShieldCheck,
  BarChart3,
  Layers,
  LineChart,
  Workflow,
  Plus,
  ArrowRight,
  Check,
  Briefcase as LinkedinIcon,
  Code2 as GithubIcon,
  Send as TwitterIcon,
  Menu,
  X,
  Zap,
  Server,
  Radar,
  ChevronRight,
  Brain,
  Settings,
  Database,
  Globe,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: LandingPage,
});

/* ---------- Motion helpers ---------- */
const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] } },
};
const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};

function Reveal({ children, className, delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      variants={fadeUp}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function Stagger({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      variants={stagger}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function Counter({ to, suffix = "", duration = 2 }: { to: number; suffix?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration,
      ease: "easeOut",
      onUpdate: (v) => setVal(v),
    });
    return () => controls.stop();
  }, [inView, to, duration]);
  const display =
    to >= 100 ? Math.round(val).toLocaleString() : val.toFixed(to % 1 === 0 ? 0 : 2);
  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

/* ---------- Nav (Floating Pill) ---------- */
function Nav() {
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
    { href: "#pricing", label: "Pricing" },
    { href: "#faq", label: "FAQ" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4 pointer-events-none">
      {/* Floating Pill */}
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
          <a href="#home" className="flex items-center shrink-0">
            <img src="/logo.svg" alt="OriginSearch Logo" className="h-9 w-auto object-contain" />
          </a>

          {/* Desktop Nav */}
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

          {/* CTA + Toggle */}
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

      {/* Mobile Dropdown */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -8, scale: 0.97 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="pointer-events-auto absolute top-[68px] left-4 right-4 mx-auto max-w-sm bg-[rgba(245,243,239,0.97)] backdrop-blur-[14px] rounded-3xl shadow-[0_20px_50px_-16px_rgba(17,17,17,0.25)] ring-1 ring-black/[0.06] p-4 grid gap-1"
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
    </header>
  );
}

/* ---------- Cursor glow (desktop) ---------- */
function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const onMove = (e: MouseEvent) => {
      if (!ref.current) return;
      ref.current.style.transform = `translate(${e.clientX - 200}px, ${e.clientY - 200}px)`;
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);
  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[1] h-[400px] w-[400px] rounded-full opacity-40 mix-blend-screen"
      style={{
        background: "radial-gradient(closest-side, rgba(198,241,53,0.28), transparent 70%)",
      }}
    />
  );
}



/* ---------- Hero ---------- */
function Hero() {
  const stats = [
    { value: 99.99, suffix: "%", label: "Uptime SLA" },
    { value: 10, suffix: "M+", label: "Inference" },
    { value: 500, suffix: "+", label: "Deployments" },
    { value: 30, suffix: "+", label: "Regions" },
  ];

  const orbitIcons = [
    { Icon: Cpu, label: "AI Processing" },
    { Icon: Database, label: "Data Storage" },
    { Icon: Cloud, label: "Cloud Deploy" },
    { Icon: Server, label: "Infrastructure" },
    { Icon: Globe, label: "Global Edge" },
    { Icon: Zap, label: "Fast Inference" },
  ];

  return (
    <section id="home" className="relative bg-paper px-4 sm:px-6 lg:px-8 pt-24 pb-8 overflow-hidden">
      
      {/* Main Dark Container */}
      <div className="relative w-full bg-forest rounded-[2.5rem] sm:rounded-[3.5rem] overflow-visible flex flex-col lg:flex-row items-center min-h-[70vh]">
        
        {/* Background glow for the image */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-lime/20 blur-[120px] rounded-full pointer-events-none" />

        {/* Left Column (Content) */}
        <div className="w-full lg:w-[55%] z-10 px-8 sm:px-16 lg:px-24 pt-16 pb-44 lg:pb-40">
          
          <Reveal>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-lime/25 bg-lime/8 px-4 py-1.5 text-xs font-mono uppercase tracking-widest text-lime backdrop-blur-sm shadow-[0_0_15px_rgba(198,241,53,0.15)] mb-6"
            >
              <Zap className="h-3.5 w-3.5" /> OriginSearch AI Runtime
            </motion.span>
          </Reveal>

          <Reveal delay={0.1}>
            <motion.h1
              variants={stagger}
              initial="hidden"
              animate="show"
              className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-[5rem] font-bold leading-[1.05] tracking-tight text-paper max-w-2xl"
            >
              {["Redefining ", "How ", "AI ", "Gets ", "Deployed"].map((w, i) => (
                <motion.span
                  key={i}
                  variants={fadeUp}
                  className={/AI|Deployed/.test(w) ? "text-lime" : "text-paper"}
                >
                  {w}
                </motion.span>
              ))}
            </motion.h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-6 max-w-xl text-lg text-paper/70 leading-relaxed font-light">
              At the heart of everything we do is a commitment to making your AI infrastructure stronger, faster, and more resilient across any environment.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-3 rounded-full bg-lime px-8 py-4 text-sm font-bold text-forest transition-transform hover:scale-105 active:scale-100 shadow-[0_20px_50px_-16px_rgba(198,241,53,0.4)]"
              >
                Get Started <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </Reveal>
        </div>

        {/* Right Column — Circular Image + Orbiting Icons */}
        <div className="w-full lg:w-[45%] relative z-0 h-[360px] lg:h-full flex items-center justify-center lg:absolute lg:right-0 lg:top-0 lg:bottom-0">
          <div className="relative" style={{ width: '320px', height: '320px' }}>
            
            {/* Circular image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="absolute inset-0 rounded-full overflow-hidden shadow-[0_20px_60px_-10px_rgba(0,0,0,0.5)] ring-2 ring-lime/20"
            >
              <img
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000&auto=format&fit=crop"
                alt="AI Infrastructure"
                className="w-full h-full object-cover grayscale contrast-125 brightness-90"
              />
              <div className="absolute inset-0 bg-lime/10 mix-blend-overlay" />
            </motion.div>

            {/* Outer glow ring */}
            <div
              className="absolute rounded-full pointer-events-none"
              style={{
                inset: '-35px',
                border: '1px solid rgba(198,241,53,0.12)',
                boxShadow: '0 0 80px -10px rgba(198,241,53,0.2)',
              }}
            />

            {/* Second outer ring */}
            <div
              className="absolute rounded-full pointer-events-none"
              style={{
                inset: '-70px',
                border: '1px dashed rgba(198,241,53,0.08)',
              }}
            />

            {/* Orbiting icons — the whole ring spins */}
            <div className="hero-orbit-ring">
              {orbitIcons.map(({ Icon, label }, i) => {
                const angle = (360 / orbitIcons.length) * i;
                return (
                  <div
                    key={label}
                    className="hero-orbit-icon-slot"
                    style={{ '--slot-angle': `${angle}deg` } as React.CSSProperties}
                  >
                    <div className="hero-orbit-icon-counter">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* --- The Scooped Cutout at Bottom-Left --- */}
        <div className="absolute bottom-0 left-0 bg-paper w-72 h-28 sm:w-80 sm:h-32 rounded-tr-[2.5rem] sm:rounded-tr-[3.5rem] z-20">
          
          {/* Top-Left SVG Transition */}
          <svg className="absolute bottom-full left-0 w-10 h-10 sm:w-14 sm:h-14 text-paper" viewBox="0 0 48 48" fill="currentColor">
            <path d="M0 48 L0 0 A48 48 0 0 0 48 48 Z" />
          </svg>
          
          {/* Bottom-Right SVG Transition */}
          <svg className="absolute bottom-0 left-full w-10 h-10 sm:w-14 sm:h-14 text-paper" viewBox="0 0 48 48" fill="currentColor">
            <path d="M0 48 L0 0 A48 48 0 0 0 48 48 Z" />
          </svg>

          {/* Pill inside the cutout */}
          <div className="absolute top-1/2 left-8 -translate-y-1/2 bg-paper flex items-center p-1.5 pr-6 rounded-full border border-forest/10 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.1)]">
            <div className="flex -space-x-3">
              <img className="w-10 h-10 rounded-full border-2 border-paper grayscale" src="https://i.pravatar.cc/100?img=1" alt="User 1" />
              <img className="w-10 h-10 rounded-full border-2 border-paper grayscale" src="https://i.pravatar.cc/100?img=2" alt="User 2" />
              <img className="w-10 h-10 rounded-full border-2 border-paper grayscale" src="https://i.pravatar.cc/100?img=3" alt="User 3" />
            </div>
            <span className="ml-4 text-[11px] font-bold text-ink uppercase tracking-wider">Trusted by AI Teams</span>
          </div>
        </div>

      </div>

      {/* Bottom Stats Strip — full width with staggered animation */}
      <Stagger className="w-full mt-10 grid grid-cols-2 md:grid-cols-4 bg-forest rounded-2xl overflow-hidden">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            variants={fadeUp}
            className={`flex flex-col items-center justify-center py-8 px-4 text-center ${
              i < stats.length - 1 ? 'md:border-r md:border-lime/10' : ''
            } ${i < 2 ? 'border-b md:border-b-0 border-lime/10' : ''}`}
          >
            <dt className="font-display text-4xl sm:text-5xl font-bold text-lime">
              <Counter to={s.value} suffix={s.suffix} />
            </dt>
            <dd className="mt-2 text-xs font-mono uppercase tracking-widest text-paper/60">
              {s.label}
            </dd>
          </motion.div>
        ))}
      </Stagger>

    </section>
  );
}

/* ---------- Stats Bar ---------- */
function StatsBar() {
  return null;
}

/* ---------- PerspectiveGridCanvas ---------- */
function PerspectiveGridCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = 0, h = 0;
    let animId: number;
    let offset = 0;

    const resize = () => {
      w = canvas.offsetWidth;
      h = canvas.offsetHeight;
      canvas.width = w;
      canvas.height = h;
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    // circuit lines (glows)
    const circuits = Array.from({ length: 25 }).map(() => ({
      x: Math.random() * 3000 - 1500, // will be mapped to grid cols
      y: Math.random() * 2000,
      length: 100 + Math.random() * 200,
      speed: 1 + Math.random() * 4,
      isVertical: Math.random() > 0.4
    }));

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      
      const gridSize = 60;
      offset = (offset + 1.5) % gridSize;

      // Draw Grid
      ctx.beginPath();
      // vertical lines
      for (let x = (w/2) % gridSize; x < w; x += gridSize) {
        ctx.moveTo(x, 0); ctx.lineTo(x, h);
      }
      for (let x = (w/2) % gridSize - gridSize; x > 0; x -= gridSize) {
        ctx.moveTo(x, 0); ctx.lineTo(x, h);
      }
      // horizontal lines (moving down to simulate forward movement)
      for (let y = offset; y < h; y += gridSize) {
        ctx.moveTo(0, y); ctx.lineTo(w, y);
      }
      ctx.strokeStyle = "rgba(198,241,53,0.15)"; // faint lime grid
      ctx.lineWidth = 1;
      ctx.stroke();

      // Draw Circuits
      circuits.forEach(c => {
        // snap to grid
        const cx = Math.floor(c.x / gridSize) * gridSize + (w/2)%gridSize;
        let cy = c.y + offset;
        
        ctx.beginPath();
        if (c.isVertical) {
          ctx.moveTo(cx, cy);
          ctx.lineTo(cx, cy + c.length);
          c.y += c.speed;
        } else {
          const cy_snap = Math.floor(cy / gridSize) * gridSize + offset;
          ctx.moveTo(cx, cy_snap);
          ctx.lineTo(cx + c.length, cy_snap);
          c.x += c.speed;
        }
        
        ctx.strokeStyle = "#C6F135"; // lime
        ctx.lineWidth = 2;
        ctx.shadowColor = "#C6F135";
        ctx.shadowBlur = 10;
        ctx.stroke();

        ctx.shadowBlur = 0; // reset shadow for other drawing

        // glow dot at front
        ctx.beginPath();
        if (c.isVertical) {
          ctx.arc(cx, cy + c.length, 3, 0, Math.PI*2);
        } else {
          ctx.arc(cx + c.length, Math.floor(cy / gridSize) * gridSize + offset, 3, 0, Math.PI*2);
        }
        ctx.fillStyle = "#ffffff";
        ctx.shadowColor = "#C6F135";
        ctx.shadowBlur = 15;
        ctx.fill();
        ctx.shadowBlur = 0;

        // reset
        if (c.y > h + 200 || c.x > w + 200) {
          c.y = -200 - Math.random() * 500;
          c.x = Math.random() * w * 2 - w/2;
        }
      });

      animId = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(animId);
      ro.disconnect();
    };
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ perspective: '1200px' }}>
      <canvas
        ref={canvasRef}
        className="absolute w-[150%] h-[150%] bottom-[-20%] left-[-25%] opacity-60"
        style={{ transform: 'rotateX(75deg)', transformOrigin: 'bottom center' }}
      />
      {/* Gradient to fade out the top of the grid into the dark background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1A2E22] via-[#1A2E22]/80 to-transparent" />
    </div>
  );
}

/* ---------- About ---------- */

function About() {
  const cards = [
    {
      icon: Rocket,
      title: "AI Deployment",
      desc: "Ship models to production with a single command and zero-downtime rollouts.",
    },
    {
      icon: Cpu,
      title: "Infrastructure Automation",
      desc: "Provision GPUs, networks, and storage automatically across any cloud.",
    },
    {
      icon: GitBranch,
      title: "Lifecycle Management",
      desc: "Version, promote, and roll back models with full lineage and audit trails.",
    },
    {
      icon: Activity,
      title: "Enterprise Monitoring",
      desc: "Deep observability across latency, throughput, drift, and cost — in real time.",
    },
  ];
  return (
    <section id="about" className="relative overflow-hidden py-12 sm:py-16 bg-forest">
      {/* Animated Perspective Grid Background */}
      <PerspectiveGridCanvas />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <span className="font-mono text-xs uppercase tracking-widest text-lime">
              / About OriginSearch
            </span>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-paper">
              Built for Modern <span className="text-lime">AI Operations</span>
            </h2>
            <p className="mt-5 text-lg text-paper/70 leading-relaxed">
              OriginSearch simplifies the journey from AI development to production deployment.
              Automate infrastructure provisioning, model versioning, deployment orchestration,
              runtime monitoring, and scaling through a unified platform.
            </p>
          </Reveal>
          <Reveal delay={0.2} className="relative mt-12 lg:mt-0 h-[400px] sm:h-[480px] w-full">
            {/* Background shape matching the reference's angled shape */}
            <div className="absolute top-6 bottom-10 left-12 right-2 bg-lime/10 rounded-tl-[100px] rounded-br-[100px] rounded-tr-3xl rounded-bl-3xl transform rotate-3" />
            
            {/* Dotted pattern top right */}
            <div className="absolute top-0 right-0 w-32 h-32 opacity-20" style={{ backgroundImage: 'radial-gradient(#C6F135 2px, transparent 2px)', backgroundSize: '16px 16px' }} />

            {/* Dotted pattern bottom left */}
            <div className="absolute bottom-4 left-4 w-32 h-32 opacity-20" style={{ backgroundImage: 'radial-gradient(#C6F135 2px, transparent 2px)', backgroundSize: '16px 16px' }} />

            {/* Main top-left image */}
            <div className="absolute top-8 left-0 w-2/3 h-[250px] sm:h-[320px] rounded-3xl overflow-hidden shadow-2xl border border-lime/20 z-10 bg-forest-2">
              <img src="/infrastructure_graphic.png" alt="Infrastructure Overview" className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-105" />
            </div>

            {/* Overlapping bottom-right image */}
            <div className="absolute bottom-0 right-4 w-3/5 h-[200px] sm:h-[260px] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.6)] border-[6px] border-forest z-20 bg-forest-2">
              <img src="/dashboard_mockup.png" alt="Dashboard Interface" className="w-full h-full object-cover object-left-top transform transition-transform duration-700 hover:scale-105" />
            </div>
          </Reveal>
        </div>

        <Stagger className="mt-20 grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6 pb-12">
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              variants={fadeUp}
              className={`group relative flex flex-col items-center text-center rounded-3xl border border-lime/10 bg-forest-2 p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-12px_rgba(198,241,53,0.15)] hover:border-lime/40 overflow-hidden ${
                i % 2 === 1 ? "lg:mt-16 lg:-mb-16" : ""
              }`}
            >
              <span className="relative grid h-16 w-16 place-items-center rounded-2xl bg-forest border border-lime/20 text-lime transition-colors duration-500 group-hover:bg-lime group-hover:text-forest mb-6 shadow-sm">
                <c.icon className="h-7 w-7" />
              </span>
              <h3 className="relative font-display text-xl font-bold text-paper">{c.title}</h3>
              <p className="relative mt-4 text-sm leading-relaxed text-paper/60">{c.desc}</p>
            </motion.div>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

/* ---------- How It Works ---------- */
function HowItWorks() {
  const steps = [
    {
      icon: Cloud,
      title: "Connect Infrastructure",
      desc: "Link AWS, GCP, Azure, or on-prem clusters through a single control plane.",
    },
    {
      icon: Rocket,
      title: "Deploy Models",
      desc: "Push containerized or framework-native models with automatic packaging.",
    },
    {
      icon: LineChart,
      title: "Monitor Performance",
      desc: "Track latency, throughput, drift, and cost with real-time telemetry.",
    },
    {
      icon: Gauge,
      title: "Scale Automatically",
      desc: "Elastic autoscaling responds to demand — up, down, or across regions.",
    },
  ];
  return (
    <section id="how" className="relative py-24 sm:py-32 bg-muted/40">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-3xl">
          <span className="font-mono text-xs uppercase tracking-widest text-ink-2">
            / Workflow
          </span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-ink">
            From Development to Production in <span className="text-forest">Four Steps</span>
          </h2>
        </Reveal>

        <div className="relative mt-16">
          {/* Line - desktop */}
          <div className="hidden lg:block absolute left-[8%] right-[8%] top-8 h-[2px] overflow-hidden z-0">
            <div 
              className="w-full h-full"
              style={{
                backgroundImage: 'linear-gradient(90deg, #1A2E22 0%, #C6F135 50%, #1A2E22 100%)',
                backgroundSize: '200% 100%',
                animation: 'flow-horizontal 4s linear infinite'
              }}
            />
          </div>
          {/* Line - mobile */}
          <div className="lg:hidden absolute left-8 top-8 bottom-8 w-[2px] overflow-hidden z-0">
            <div 
              className="w-full h-full"
              style={{
                backgroundImage: 'linear-gradient(180deg, #1A2E22 0%, #C6F135 50%, #1A2E22 100%)',
                backgroundSize: '100% 200%',
                animation: 'flow-vertical 4s linear infinite'
              }}
            />
          </div>

          <Stagger className="grid gap-8 lg:grid-cols-4">
            {steps.map((s, i) => (
              <motion.div
                key={s.title}
                variants={fadeUp}
                className="relative pl-20 lg:pl-0"
              >
                <div className="lg:flex lg:justify-center">
                  <span className="absolute left-0 top-0 lg:static grid h-16 w-16 place-items-center rounded-2xl bg-forest text-lime ring-8 ring-muted/40 shadow-[0_18px_40px_-18px_rgba(26,46,34,0.5)]">
                    <s.icon className="h-6 w-6" />
                  </span>
                </div>
                <div className="lg:mt-6 lg:text-center">
                  <div className="font-mono text-xs uppercase tracking-widest text-forest">
                    Step {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="mt-1 font-display text-xl font-semibold text-ink">{s.title}</h3>
                  <p className="mt-2 text-sm text-ink-2 leading-relaxed lg:mx-auto lg:max-w-[240px]">
                    {s.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}

/* ---------- Target Users ---------- */
function TargetUsers() {
  const users = [
    {
      role: "Machine Learning Engineers",
      description: "Streamline model deployment, versioning, and inference optimization without managing infrastructure overhead.",
      icon: <Brain className="h-6 w-6 text-lime" />,
    },
    {
      role: "DevOps & Platform Teams",
      description: "Automate AI infrastructure provisioning, scaling, and monitoring with enterprise-grade reliability and security.",
      icon: <Settings className="h-6 w-6 text-lime" />,
    },
    {
      role: "Data Scientists",
      description: "Focus on building better models and analyzing results while we handle the complexities of production deployment.",
      icon: <Database className="h-6 w-6 text-lime" />,
    },
    {
      role: "AI Product Managers",
      description: "Accelerate time-to-market for AI features with predictable deployment pipelines and clear performance metrics.",
      icon: <LineChart className="h-6 w-6 text-lime" />,
    },
  ];

  return (
    <section className="bg-[#F5F3EF] py-24 sm:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-16 lg:gap-8 items-center">
          
          {/* Left Column: Text */}
          <div className="max-w-xl z-20">
            <span className="font-mono text-xs uppercase tracking-widest text-[#1A2E22]/60 mb-3 block">
              / Target Audience
            </span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-ink drop-shadow-sm leading-tight"
            >
              Built for AI Pioneers
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, width: 0 }}
              whileInView={{ opacity: 1, width: 64 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mt-6 h-1 bg-lime rounded-full"
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="mt-8 text-lg text-ink/70 leading-relaxed drop-shadow-sm"
            >
              OriginSearch empowers every member of your team to deliver intelligent applications faster, safer, and at scale.
            </motion.p>
          </div>

          {/* Right Column: Orbiting UI */}
          <div className="relative flex items-center justify-center h-[400px] lg:h-[500px] w-full mt-10 lg:mt-0">
            {/* Background Orbits */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-80">
              <svg width="600" height="600" viewBox="0 0 600 600" fill="none" className="text-forest/70">
                <circle cx="300" cy="300" r="110" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 8" />
                <circle cx="300" cy="300" r="180" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.6" />
                <circle cx="300" cy="300" r="250" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 12" />
              </svg>
            </div>
            
            {/* Center Core */}
            <motion.div 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              className="relative z-10 flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-br from-lime to-lime/80 shadow-[0_0_50px_rgba(198,241,53,0.4)]"
            >
              <span className="font-display text-3xl font-bold text-forest tracking-tighter">AI Ops</span>
            </motion.div>

            {/* Orbiting Items */}
            {users.map((user, i) => {
              // Mathematical coordinates matching the scaled-down SVG radii (250, 110, 180, 180)
              const configs = [
                { x: 70, y: -240, align: "left" },    // ML Engineers (r=250, top-right)
                { x: 110, y: 0, align: "left" },      // DevOps (r=110, right)
                { x: 30, y: 177, align: "left" },     // Data Scientists (r=180, bottom)
                { x: -145, y: 110, align: "right" },  // Product Managers (r=180, bottom-left)
              ];
              const cfg = configs[i];

              return (
                <motion.div
                  key={user.role}
                  initial={{ opacity: 0, scale: 0.5, x: cfg.x, y: cfg.y }}
                  whileInView={{ opacity: 1, scale: 1, x: cfg.x, y: cfg.y }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 + 0.3, type: "spring", stiffness: 100 }}
                  className="absolute left-1/2 top-1/2 z-20 group cursor-default"
                >
                  {/* Icon perfectly centered on the coordinate */}
                  <div className="absolute -left-6 -top-6 flex h-12 w-12 items-center justify-center rounded-full bg-forest border-2 border-lime/30 shadow-[0_0_15px_rgba(26,46,34,0.1)] text-lime group-hover:border-lime group-hover:bg-lime group-hover:text-forest group-hover:shadow-[0_0_20px_rgba(198,241,53,0.4)] group-hover:scale-110 transition-all duration-300">
                    <div className="scale-95">{user.icon}</div>
                  </div>
                  
                  {/* Text box offset to the side */}
                  <div className={`absolute -top-4 w-52 ${cfg.align === 'left' ? 'left-10 text-left' : 'right-10 text-right'}`}>
                    <h3 className="font-bold text-ink font-display text-sm leading-tight mb-0.5 group-hover:text-forest transition-colors">{user.role}</h3>
                    <p className="text-[11px] text-ink/70 leading-snug line-clamp-2 group-hover:line-clamp-none transition-all duration-300">{user.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Features ---------- */
function Features() {
  const items = [
    { icon: Rocket, title: "AI Deployment Engine", desc: "One-click deploys with automatic packaging and rollback." },
    { icon: Workflow, title: "Inference Orchestration", desc: "Intelligent routing across models, regions, and hardware." },
    { icon: GitBranch, title: "Model Version Control", desc: "Full lineage, promotion pipelines, and safe rollbacks." },
    { icon: Gauge, title: "Auto Scaling Infrastructure", desc: "Elastic capacity that tracks load in seconds, not minutes." },
    { icon: Activity, title: "Runtime Monitoring", desc: "Latency, throughput, drift, and cost — in one console." },
    { icon: Cloud, title: "Cloud & Edge Deployment", desc: "Ship the same model to AWS, GCP, Azure, or edge nodes." },
    { icon: ShieldCheck, title: "Security & Compliance", desc: "SOC 2, ISO 27001, HIPAA-ready with private networking." },
    { icon: BarChart3, title: "Deployment Analytics", desc: "Business KPIs mapped to model performance and spend." },
  ];
  return (
    <section id="features" className="relative overflow-hidden bg-forest text-paper py-12 sm:py-16">
      <div className="absolute inset-0 bg-grid-dark opacity-40" />
      <div className="absolute top-0 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-lime/5 blur-[100px] pointer-events-none" />
      
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 z-10">
        <Reveal className="max-w-3xl mx-auto text-center">
          <span className="font-mono text-xs uppercase tracking-widest text-lime">
            / Platform Capabilities
          </span>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl lg:text-6xl font-bold">
            Everything You Need to <span className="text-lime">Deploy AI at Scale</span>
          </h2>
          <p className="mt-5 text-lg text-paper/70">
            A complete deployment fabric — from provisioning to production telemetry — engineered
            for enterprise AI teams.
          </p>
        </Reveal>

        {/* 3D Carousel Container */}
        <div 
          className="relative mt-10 h-[420px] w-full flex items-center justify-center"
          style={{ perspective: '1200px' }}
        >
          {/* Glowing 3D Floor Grid */}
          <div 
            className="absolute bottom-[-80px] w-[600px] h-[600px] rounded-full flex items-center justify-center opacity-60 pointer-events-none"
            style={{ transform: 'rotateX(75deg)' }}
          >
            <div className="absolute inset-0 rounded-full border border-lime/10 shadow-[inset_0_0_80px_rgba(198,241,53,0.1)]" />
            <div className="absolute w-[600px] h-[600px] rounded-full border border-lime/20 border-dashed" />
            <div className="absolute w-[400px] h-[400px] rounded-full border border-lime/30" />
            <div className="absolute w-[200px] h-[200px] rounded-full border-2 border-lime bg-lime/10 shadow-[0_0_80px_rgba(198,241,53,0.5)]" />
          </div>

          {/* Rotating Carousel */}
          <motion.div
            animate={{ rotateY: [0, -360] }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            className="relative w-[300px] h-[400px] flex items-center justify-center"
            style={{ transformStyle: 'preserve-3d' }}
          >
            {items.map((c, i) => {
              const rotateY = i * (360 / items.length);
              return (
                <div
                  key={c.title}
                  className="absolute w-[220px] h-[260px] rounded-2xl bg-forest/90 border-2 border-lime/30 shadow-[0_0_30px_rgba(198,241,53,0.15)] backdrop-blur-md p-5 flex flex-col items-center justify-center text-center group transition-colors hover:border-lime hover:shadow-[0_0_50px_rgba(198,241,53,0.5)] backface-hidden"
                  style={{
                    transform: `rotateY(${rotateY}deg) translateZ(380px)`,
                    backfaceVisibility: 'hidden',
                  }}
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-forest border border-lime/50 text-lime mb-4 shadow-[0_0_20px_rgba(198,241,53,0.3)] group-hover:scale-110 group-hover:bg-lime group-hover:text-forest transition-all duration-500">
                    <c.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-paper mb-2 group-hover:text-lime transition-colors">{c.title}</h3>
                  <p className="text-xs text-paper/70 leading-relaxed">{c.desc}</p>
                  
                  {/* Decorative corner accents */}
                  <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-lime/40 rounded-tl-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-lime/40 rounded-br-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Testimonials ---------- */
const TESTIMONIALS_DATA = [
  {
    quote: "Our ad campaigns finally speak to the right audience with clarity resulting in high CTR and ROI.",
    trust: "Trust her work, the words that she delivered completely transformed our brand presence.",
    name: "Kathrine Katija",
    role: "Marketing Manager",
    company: "ABC Ad Services",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop",
  },
  {
    quote: "Deploying AI models used to take days of infrastructure setup. Now it's a matter of minutes with zero downtime.",
    trust: "Their automated pipeline takes away all compliance and scaling headaches instantly.",
    name: "Marcus Vance",
    role: "Lead ML Architect",
    company: "Vertex Grid Systems",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop",
  },
  {
    quote: "The deep telemetry logs gave us immediate visibility into token latency and model drift in real time.",
    trust: "A must-have control center for any production-level deep learning product.",
    name: "Elena Rostova",
    role: "Head of AI Operations",
    company: "Edge Intelligence",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop",
  }
];

function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="testimonials" className="relative py-20 sm:py-28 bg-[#F5F3EF] overflow-hidden">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        
        {/* Section Title */}
        <Reveal className="mb-14 text-center md:text-left">
          <span className="font-mono text-xs uppercase tracking-widest text-[#1A2E22]/60">
            / Customer Success
          </span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-black">
            Loved by leading <span className="text-[#1A2E22]">AI innovators</span>
          </h2>
        </Reveal>

        <div className="flex flex-col md:flex-row items-center gap-12">
          
          {/* Left Column: Scrolling Avatar Indicator */}
          <div className="flex md:flex-col gap-5 items-center shrink-0">
            {TESTIMONIALS_DATA.map((t, idx) => {
              const isActive = activeIndex === idx;
              return (
                <button
                  key={t.name}
                  onClick={() => setActiveIndex(idx)}
                  className={`relative w-20 h-28 rounded-2xl overflow-hidden border-2 transition-all duration-500 hover:scale-105 ${
                    isActive 
                      ? "border-[#E53E3E] shadow-[0_0_20px_rgba(229,62,62,0.4)] scale-110 z-10" 
                      : "border-transparent opacity-60 hover:opacity-90"
                  }`}
                >
                  <img src={t.avatar} alt={t.name} className="w-full h-full object-cover grayscale" />
                  {isActive && (
                    <div className="absolute inset-0 border-2 border-[#E53E3E] rounded-2xl" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Right Column: Modern Animated Quote Card */}
          <div className="relative flex-grow w-full min-h-[300px] flex items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 50, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -50, scale: 0.95 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="w-full bg-white rounded-3xl p-8 sm:p-10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.06)] border border-hairline relative overflow-hidden text-left"
              >
                {/* Decorative Giant quote mark */}
                <span className="absolute right-6 top-2 font-display text-[150px] font-bold text-gray-200 select-none pointer-events-none leading-none">
                  “
                </span>

                <div className="relative z-10">
                  <h3 className="font-display text-2xl sm:text-3xl font-semibold text-gray-800 leading-snug">
                    "{TESTIMONIALS_DATA[activeIndex].quote}"
                  </h3>
                  
                  <p className="mt-4 text-sm text-gray-500 font-light leading-relaxed">
                    {TESTIMONIALS_DATA[activeIndex].trust}
                  </p>

                  <div className="mt-8 pt-6 border-t border-hairline flex flex-wrap items-center justify-between gap-4">
                    <div>
                      <h4 className="font-display font-bold text-base text-gray-800">
                        {TESTIMONIALS_DATA[activeIndex].name}
                      </h4>
                      <p className="text-xs text-gray-400 font-mono uppercase tracking-wider mt-0.5">
                        {TESTIMONIALS_DATA[activeIndex].role}, {TESTIMONIALS_DATA[activeIndex].company}
                      </p>
                    </div>

                    {/* Star ratings */}
                    <div className="flex gap-1 text-[#E53E3E]">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <span key={i} className="text-lg">★</span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}

/* ---------- Pricing ---------- */
function Pricing() {
  const tiers = [
    {
      name: "BASIC",
      price: "$49",
      period: "/Month",
      icon: Cpu,
      isHighlighted: false,
      features: [
        "Basic Deployments",
        "Community Support",
        "Up to 5 active models",
        "Standard telemetry logs",
      ],
      cta: "START NOW",
    },
    {
      name: "STANDARD",
      price: "$199",
      period: "/Month",
      icon: Gauge,
      isHighlighted: true, // Shows with special lime green highlights or accents
      features: [
        "Unlimited Deployments",
        "Elastic Auto Scaling",
        "Advanced telemetry logs",
        "REST & gRPC API Access",
      ],
      cta: "START NOW",
    },
    {
      name: "PREMIUM",
      price: "Custom",
      period: "",
      icon: Globe,
      isHighlighted: false,
      features: [
        "Dedicated Infrastructure",
        "SLA guaranteed support",
        "Private networks & VPCs",
        "Custom enterprise API Integrations",
      ],
      cta: "START NOW",
    },
  ];

  return (
    <section id="pricing" className="relative py-24 sm:py-32 bg-[#F5F3EF]">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-3xl mx-auto text-center mb-16">
          <span className="font-mono text-xs uppercase tracking-widest text-[#1A2E22]/60">/ Pricing</span>
          <h2 className="mt-3 font-display text-4xl sm:text-5xl font-bold text-black">
            Flexible Pricing for <span className="text-[#1A2E22]">Every Team</span>
          </h2>
        </Reveal>

        <Stagger className="grid gap-8 lg:grid-cols-3 max-w-5xl mx-auto">
          {tiers.map((t) => (
            <motion.div
              key={t.name}
              variants={fadeUp}
              whileHover={{ y: -12, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className={`relative rounded-[2rem] p-8 flex flex-col justify-between text-white shadow-xl bg-[#1A2E22] border-2 ${
                t.isHighlighted ? 'border-[#C6F135]' : 'border-transparent'
              } min-h-[580px] overflow-hidden`}
            >
              {/* Card Content Header */}
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                      <t.icon className="h-5 w-5 text-[#C6F135]" />
                    </div>
                    <span className="font-display font-black tracking-widest text-sm uppercase text-white/90">
                      {t.name}
                    </span>
                  </div>
                  {t.isHighlighted && (
                    <span className="rounded-full bg-[#C6F135] px-3 py-1 text-[10px] font-black text-[#1A2E22]">
                      POPULAR
                    </span>
                  )}
                </div>

                {/* Price Capsule Badge */}
                <div className="relative mb-8 -ml-8 w-[calc(100%+4rem)] bg-[#F5F3EF] rounded-r-full py-4 pl-8 pr-4 shadow-sm flex flex-col justify-center">
                  <div className="flex items-baseline gap-1">
                    <span className="font-display text-4xl font-extrabold text-[#1A2E22]">
                      {t.price}
                    </span>
                    {t.period && (
                      <span className="text-sm font-semibold uppercase tracking-wider text-[#1A2E22]/70">
                        {t.period}
                      </span>
                    )}
                  </div>
                </div>

                {/* Features List */}
                <ul className="space-y-4 mb-8">
                  {t.features.map((f, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-[13px] sm:text-sm font-medium text-white/90">
                      <Check className="h-5 w-5 shrink-0 text-[#C6F135]" strokeWidth={3} />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <div>
                <div className="w-full h-px bg-white/10 mb-8" />
                <a
                  href="#contact"
                  className={`inline-flex w-full items-center justify-center rounded-full border-2 py-3.5 text-sm font-bold tracking-widest transition-all uppercase active:scale-95 shadow-md ${
                    t.isHighlighted
                      ? 'bg-[#C6F135] border-[#C6F135] text-[#1A2E22] hover:bg-transparent hover:text-white'
                      : 'bg-transparent border-white text-white hover:bg-white hover:text-[#1A2E22]'
                  }`}
                >
                  {t.cta}
                </a>
              </div>
            </motion.div>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

/* ---------- FAQ ---------- */
function FAQ() {
  const items = [
    {
      q: "What is OriginSearch?",
      a: "OriginSearch is an enterprise AI deployment platform that automates model deployment, orchestration, monitoring, and scaling across cloud, edge, and hybrid infrastructure.",
    },
    {
      q: "Which cloud providers are supported?",
      a: "AWS, Google Cloud, Microsoft Azure, and on-premises Kubernetes clusters — with unified networking and a single control plane.",
    },
    {
      q: "Can I deploy containerized models?",
      a: "Yes. Bring your own container, or use our framework-native runtimes for PyTorch, TensorFlow, ONNX, JAX, and vLLM.",
    },
    {
      q: "Does it support auto scaling?",
      a: "Elastic autoscaling reacts to traffic in seconds, scaling replicas, GPUs, and regions based on latency and throughput targets.",
    },
    {
      q: "Is model versioning included?",
      a: "Every deployment has a versioned artifact with lineage, promotion pipelines, canary rollouts, and one-click rollback.",
    },
    {
      q: "Is there an API available?",
      a: "A full REST and gRPC API, plus SDKs for Python, TypeScript, and Go — everything in the UI is available programmatically.",
    },
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="relative py-24 sm:py-32 bg-white">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <Reveal className="text-center">
          <span className="font-mono text-xs uppercase tracking-widest text-ink-2">/ FAQ</span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-ink">
            Frequently Asked <span className="text-forest">Questions</span>
          </h2>
        </Reveal>

        <Stagger className="mt-14 grid gap-3">
          {items.map((it, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={it.q}
                variants={fadeUp}
                className={`rounded-2xl border transition-colors ${
                  isOpen ? "border-forest bg-muted/40" : "border-hairline bg-card"
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left"
                >
                  <span className="font-display text-base sm:text-lg font-semibold text-ink">
                    {it.q}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-forest text-lime"
                  >
                    <Plus className="h-4 w-4" />
                  </motion.span>
                </button>
                <motion.div
                  initial={false}
                  animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                  transition={{ duration: 0.28, ease: "easeOut" }}
                  className="overflow-hidden"
                >
                  <p className="px-6 pb-6 text-sm sm:text-base text-ink-2 leading-relaxed">
                    {it.a}
                  </p>
                </motion.div>
              </motion.div>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}

/* ---------- Contact ---------- */
function Contact() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");
  return (
    <section id="contact" className="relative overflow-hidden bg-paper py-16 sm:py-24">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden bg-forest text-paper rounded-[2rem] p-8 sm:p-12 lg:p-16 shadow-[0_30px_70px_-20px_rgba(26,46,34,0.4)]">
          <div className="absolute inset-0 bg-grid-dark opacity-35" />
          <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_80%_30%,rgba(198,241,53,0.1),transparent_70%)]" />
          <div className="relative grid gap-12 lg:grid-cols-12 lg:items-start">
          
          {/* Left Column: Contact Form */}
          <div className="lg:col-span-7">
            <Reveal>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setStatus("sent");
                  setTimeout(() => setStatus("idle"), 3500);
                }}
                className="space-y-6"
              >
                <Stagger className="grid gap-6">
                  <motion.div variants={fadeUp}>
                    <label className="mb-2 block text-sm font-semibold text-paper">
                      Your Name
                    </label>
                    <input
                      required
                      type="text"
                      name="name"
                      placeholder="Full Name"
                      maxLength={200}
                      className="w-full rounded-xl border border-paper/10 bg-forest-2/40 px-4 py-3.5 text-sm text-paper placeholder:text-paper/30 outline-none transition-all focus:border-lime focus:ring-1 focus:ring-lime/30"
                    />
                  </motion.div>

                  <motion.div variants={fadeUp}>
                    <label className="mb-2 block text-sm font-semibold text-paper">
                      Your Email
                    </label>
                    <input
                      required
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      maxLength={200}
                      className="w-full rounded-xl border border-paper/10 bg-forest-2/40 px-4 py-3.5 text-sm text-paper placeholder:text-paper/30 outline-none transition-all focus:border-lime focus:ring-1 focus:ring-lime/30"
                    />
                  </motion.div>

                  <motion.div variants={fadeUp}>
                    <label className="mb-2 block text-sm font-semibold text-paper">
                      Subject
                    </label>
                    <input
                      required
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      maxLength={200}
                      className="w-full rounded-xl border border-paper/10 bg-forest-2/40 px-4 py-3.5 text-sm text-paper placeholder:text-paper/30 outline-none transition-all focus:border-lime focus:ring-1 focus:ring-lime/30"
                    />
                  </motion.div>

                  <motion.div variants={fadeUp}>
                    <label className="mb-2 block text-sm font-semibold text-paper">
                      Your Message
                    </label>
                    <textarea
                      name="message"
                      rows={6}
                      placeholder="Message"
                      maxLength={1000}
                      className="w-full resize-none rounded-xl border border-paper/10 bg-forest-2/40 px-4 py-3.5 text-sm text-paper placeholder:text-paper/30 outline-none transition-all focus:border-lime focus:ring-1 focus:ring-lime/30"
                    />
                  </motion.div>

                  <motion.div variants={fadeUp}>
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="rounded-xl bg-lime px-8 py-4 text-sm font-bold text-forest tracking-wider uppercase shadow-[0_20px_50px_-16px_rgba(198,241,53,0.4)] transition-all hover:bg-lime/90"
                    >
                      {status === "sent" ? "Message Sent ✓" : "Send Message"}
                    </motion.button>
                  </motion.div>
                </Stagger>
              </form>
            </Reveal>
          </div>

          {/* Right Column: Contact Details & Info */}
          <div className="lg:col-span-5 space-y-10">
            <Reveal>
              <div>
                <span className="font-mono text-sm font-semibold tracking-wider text-lime block">
                  Contact Us
                </span>
                <h2 className="mt-3 font-display text-4xl sm:text-5xl font-bold leading-tight text-paper">
                  Get In Touch
                </h2>
                <p className="mt-4 text-base text-paper/70 leading-relaxed">
                  Nullam fermentum ullamcorper diam sit amet porta. Etiam ac enim velit. Ut ut mi sed turpis accumsan sagittis ac eu magna. Etiam ac nisi tellus. Morbi at velit nisl.
                </p>
              </div>

              {/* 2x2 Grid Info Details */}
              <div className="mt-10 grid gap-8 sm:grid-cols-2">
                
                {/* Item 1: Call Us */}
                <div className="flex items-start gap-4">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-lime/10 text-lime border border-lime/20 shadow-[0_0_15px_-3px_rgba(198,241,53,0.2)]">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-paper text-base">Call Us</h4>
                    <a href="tel:+13105556688" className="mt-1 text-sm text-paper/60 hover:text-lime transition-colors block">
                      +13105556688
                    </a>
                  </div>
                </div>

                {/* Item 2: Email Us */}
                <div className="flex items-start gap-4">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-lime/10 text-lime border border-lime/20 shadow-[0_0_15px_-3px_rgba(198,241,53,0.2)]">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-paper text-base">Email Us</h4>
                    <a href="mailto:info@originsearch.one" className="mt-1 text-sm text-paper/60 hover:text-lime transition-colors block break-all">
                      info@originsearch.one
                    </a>
                  </div>
                </div>

                {/* Item 3: Website */}
                <div className="flex items-start gap-4">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-lime/10 text-lime border border-lime/20 shadow-[0_0_15px_-3px_rgba(198,241,53,0.2)]">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-paper text-base">Website</h4>
                    <a href="https://originsearch.one" target="_blank" rel="noopener noreferrer" className="mt-1 text-sm text-paper/60 hover:text-lime transition-colors block">
                      www.originsearch.one
                    </a>
                  </div>
                </div>
                {/* Item 4: Address */}
                <div className="flex items-start gap-4">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-lime/10 text-lime border border-lime/20 shadow-[0_0_15px_-3px_rgba(198,241,53,0.2)]">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-paper text-base">Address</h4>
                    <span className="mt-1 text-sm text-paper/60 block leading-relaxed">
                      318 E 2ND ST STE A LOS ANGELES CA, USA
                    </span>
                  </div>
                </div>

              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </div>
  </section>
  );
}

/* ---------- Footer ---------- */
function Footer() {
  const cols = [
    {
      title: "Quick Links",
      links: [
        { label: "About", href: "#about" },
        { label: "Features", href: "#features" },
        { label: "Pricing", href: "#pricing" },
        { label: "FAQ", href: "#faq" },
        { label: "Contact", href: "#contact" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Documentation (Coming Soon)", href: "#" },
        { label: "Developer API", href: "#" },
        { label: "Integrations", href: "#" },
        { label: "Security", href: "#" },
      ],
    },
  ];
  const socials = [
    {
      label: "Facebook",
      href: "#",
      svg: (
        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
        </svg>
      ),
    },
    {
      label: "Twitter / X",
      href: "#",
      svg: (
        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
    {
      label: "Pinterest",
      href: "#",
      svg: (
        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
        </svg>
      ),
    },
    {
      label: "YouTube",
      href: "#",
      svg: (
        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      ),
    },
    {
      label: "LinkedIn",
      href: "#",
      svg: (
        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
  ];
  return (
    <footer className="bg-footer text-paper/80">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-16">
        <div className="grid gap-10 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <a href="#home" className="flex items-center shrink-0">
              <img src="/logo2.svg" alt="OriginSearch Logo" className="h-9 w-auto object-contain" />
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-paper/60">
              Enterprise AI deployment, orchestration, and lifecycle management platform.
            </p>
          </div>
          {cols.map((c) => (
            <div key={c.title}>
              <h4 className="font-display text-sm font-semibold uppercase tracking-widest text-paper">
                {c.title}
              </h4>
              <ul className="mt-4 space-y-2.5">
                {c.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-sm text-paper/70 transition-colors hover:text-lime"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <h4 className="font-display text-sm font-semibold uppercase tracking-widest text-paper">
              Follow
            </h4>
            <div className="mt-4 flex flex-wrap items-center gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="grid h-10 w-10 place-items-center rounded-full border border-paper/15 text-paper transition-all hover:-translate-y-1 hover:border-lime hover:text-lime hover:bg-lime/5"
                >
                  {s.svg}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-14 flex flex-col-reverse items-start gap-3 border-t border-paper/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-paper/50">© 2026 OriginSearch.one. All rights reserved.</p>
          <p className="text-xs font-mono uppercase tracking-widest text-paper/40">
            Built for production AI · v4 runtime
          </p>
        </div>
      </div>
    </footer>
  );
}

/* ---------- Page ---------- */
function LandingPage() {
  return (
    <div className="relative">
      <CursorGlow />
      <Nav />
      <main>
        <Hero />
        <StatsBar />
        <About />
        <HowItWorks />
        <TargetUsers />
        <Features />
        <Testimonials />
        <Pricing />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
