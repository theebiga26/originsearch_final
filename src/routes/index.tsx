import { createFileRoute } from "@tanstack/react-router";
import { motion, useInView, useScroll, useTransform, animate } from "motion/react";
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
  Boxes,
  Workflow,
  LineChart,
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

/* ---------- Nav ---------- */
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[rgba(245,243,239,0.92)] backdrop-blur-md shadow-[0_1px_0_0_rgba(17,17,17,0.06)]"
          : "bg-[rgba(245,243,239,0.6)] backdrop-blur-md"
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-2 group">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-forest text-lime">
              <Radar className="h-4 w-4" strokeWidth={2.4} />
            </span>
            <span className="font-display text-[17px] font-bold tracking-tight text-ink">
              OriginSearch<span className="text-ink-2/80 font-medium">.one</span>
            </span>
          </a>
          <nav className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="relative px-3 py-2 text-sm font-medium text-ink/80 hover:text-ink transition-colors after:content-[''] after:absolute after:left-3 after:right-3 after:-bottom-0.5 after:h-[2px] after:bg-lime after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-2 rounded-full bg-lime px-4 py-2 text-sm font-semibold text-forest transition-transform hover:scale-105 active:scale-100 shadow-[0_10px_30px_-10px_rgba(198,241,53,0.6)]"
            >
              Get Started <ArrowRight className="h-4 w-4" />
            </a>
            <button
              className="lg:hidden grid h-10 w-10 place-items-center rounded-lg border border-hairline text-ink"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
        {open && (
          <div className="lg:hidden pb-4 grid gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-sm font-medium text-ink hover:bg-muted"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-1 rounded-full bg-lime px-4 py-2 text-center text-sm font-semibold text-forest"
            >
              Get Started
            </a>
          </div>
        )}
      </div>
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

/* ---------- Hero deployment flow viz ---------- */
function DeploymentFlow() {
  const nodes = [
    { label: "AI Models", icon: Boxes },
    { label: "Deployment Engine", icon: Rocket },
    { label: "Inference Router", icon: Workflow },
    { label: "Auto Scaling Layer", icon: Gauge },
    { label: "Production Infra", icon: Server },
  ];
  return (
    <div className="relative w-full">
      {/* soft glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-lime/10 blur-3xl" />
      </div>
      <div className="grid gap-3">
        {nodes.map((n, i) => (
          <motion.div
            key={n.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 + i * 0.12, duration: 0.6, ease: "easeOut" }}
            className="relative"
          >
            <div className="flex items-center gap-4 rounded-2xl border border-lime/15 bg-forest-2/70 backdrop-blur px-5 py-4 shadow-[0_12px_40px_-20px_rgba(0,0,0,0.6)]">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-lime/12 text-lime ring-1 ring-lime/25">
                <n.icon className="h-5 w-5" />
              </span>
              <div className="min-w-0 flex-1">
                <div className="font-display font-semibold text-paper">{n.label}</div>
                <div className="text-xs text-paper/60 font-mono">
                  {["queued", "provisioning", "routing", "scaling", "live"][i]} · node-{i + 1}
                </div>
              </div>
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-lime opacity-70 animate-ping" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-lime" />
              </span>
            </div>
            {i < nodes.length - 1 && (
              <div className="relative mx-auto h-6 w-px overflow-hidden bg-lime/20">
                <motion.span
                  className="absolute left-1/2 top-0 h-3 w-[3px] -translate-x-1/2 bg-lime"
                  animate={{ y: [-12, 28] }}
                  transition={{ duration: 1.4, repeat: Infinity, delay: i * 0.2, ease: "easeIn" }}
                  style={{ boxShadow: "0 0 12px rgba(198,241,53,0.9)" }}
                />
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* ---------- Hero ---------- */
function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);

  const stats = [
    { value: 99.99, suffix: "%", label: "Uptime SLA" },
    { value: 10, suffix: "M+", label: "Inference Requests" },
    { value: 500, suffix: "+", label: "Deployments" },
    { value: 30, suffix: "+", label: "Global Regions" },
  ];

  return (
    <section
      ref={ref}
      id="home"
      className="relative overflow-hidden bg-forest text-paper pt-32 pb-24 sm:pt-40 sm:pb-32"
    >
      <div className="absolute inset-0 bg-grid-dark opacity-70" />
      <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_50%_0%,rgba(198,241,53,0.14),transparent_70%)]" />
      <motion.div style={{ y }} className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-[1.15fr_1fr] lg:items-center">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 rounded-full border border-lime/25 bg-lime/8 px-3 py-1 text-xs font-mono uppercase tracking-widest text-lime"
            >
              <Zap className="h-3.5 w-3.5" /> AI Deployment · v4 Runtime
            </motion.span>

            <motion.h1
              variants={stagger}
              initial="hidden"
              animate="show"
              className="mt-6 font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.05] tracking-tight"
            >
              {["The AI ", "Deployment ", "Platform ", "for ", "Scalable ", "Production ", "Intelligence"].map(
                (w, i) => (
                  <motion.span
                    key={i}
                    variants={fadeUp}
                    className={
                      /Deployment|Scalable|Production/.test(w) ? "text-lime" : "text-paper"
                    }
                  >
                    {w}
                  </motion.span>
                ),
              )}
            </motion.h1>

            <Reveal delay={0.2}>
              <p className="mt-6 max-w-xl text-lg text-paper/70 leading-relaxed">
                Deploy, orchestrate, monitor, and scale AI models across cloud, edge, and hybrid
                environments with enterprise-grade automation.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full bg-lime px-6 py-3.5 text-sm font-semibold text-forest transition-transform hover:scale-105 active:scale-100 shadow-[0_20px_50px_-16px_rgba(198,241,53,0.6)]"
                >
                  Start Deploying <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#features"
                  className="inline-flex items-center gap-2 rounded-full border border-paper/25 px-6 py-3.5 text-sm font-semibold text-paper hover:bg-paper/5 transition-colors"
                >
                  Explore Platform
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.4}>
              <dl className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-6 border-t border-paper/10 pt-8">
                {stats.map((s) => (
                  <div key={s.label}>
                    <dt className="font-display text-3xl sm:text-4xl font-bold text-paper">
                      <Counter to={s.value} suffix={s.suffix} />
                    </dt>
                    <dd className="mt-1 text-xs font-mono uppercase tracking-wider text-paper/60">
                      {s.label}
                    </dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>

          <div className="relative">
            <DeploymentFlow />
          </div>
        </div>
      </motion.div>
    </section>
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
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-3xl">
          <span className="font-mono text-xs uppercase tracking-widest text-ink-2">
            / About OriginSearch
          </span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-ink">
            Built for Modern <span className="text-forest">AI Operations</span>
          </h2>
          <p className="mt-5 text-lg text-ink-2 leading-relaxed">
            OriginSearch simplifies the journey from AI development to production deployment.
            Automate infrastructure provisioning, model versioning, deployment orchestration,
            runtime monitoring, and scaling through a unified platform.
          </p>
        </Reveal>

        <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c) => (
            <motion.div
              key={c.title}
              variants={fadeUp}
              whileHover={{ y: -8 }}
              className="group relative rounded-2xl border border-hairline bg-card p-6 transition-shadow hover:shadow-[0_20px_50px_-24px_rgba(17,17,17,0.25)] hover:border-lime"
            >
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-forest text-lime group-hover:animate-pulse">
                <c.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 font-display text-lg font-semibold text-ink">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-2">{c.desc}</p>
              <ChevronRight className="absolute right-5 top-6 h-4 w-4 text-ink-2/40 transition-transform group-hover:translate-x-1 group-hover:text-forest" />
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
          <div className="hidden lg:block absolute left-0 right-0 top-8 h-px bg-hairline overflow-hidden">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.4, ease: "easeOut" }}
              className="h-full origin-left bg-gradient-to-r from-forest via-lime to-forest"
            />
          </div>
          {/* Line - mobile */}
          <div className="lg:hidden absolute left-8 top-0 bottom-0 w-px bg-hairline overflow-hidden">
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.6, ease: "easeOut" }}
              className="h-full origin-top bg-gradient-to-b from-forest via-lime to-forest"
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
    <section id="features" className="relative overflow-hidden bg-forest text-paper py-24 sm:py-32">
      <div className="absolute inset-0 bg-grid-dark opacity-60" />
      <div className="absolute -top-40 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-lime/8 blur-3xl" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-3xl">
          <span className="font-mono text-xs uppercase tracking-widest text-lime">
            / Platform Capabilities
          </span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-semibold">
            Everything You Need to <span className="text-lime">Deploy AI at Scale</span>
          </h2>
          <p className="mt-5 text-lg text-paper/70">
            A complete deployment fabric — from provisioning to production telemetry — engineered
            for enterprise AI teams.
          </p>
        </Reveal>

        <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((c) => (
            <motion.div
              key={c.title}
              variants={fadeUp}
              whileHover={{ y: -8 }}
              className="group card-dark rounded-2xl p-6 transition-all hover:ring-lime hover:border-lime/40"
            >
              <motion.span
                whileHover={{ rotate: 8, scale: 1.08 }}
                transition={{ type: "spring", stiffness: 260, damping: 18 }}
                className="grid h-11 w-11 place-items-center rounded-xl bg-lime/10 text-lime ring-1 ring-lime/25 group-hover:glow-lime"
              >
                <c.icon className="h-5 w-5" />
              </motion.span>
              <h3 className="mt-5 font-display text-lg font-semibold text-paper">{c.title}</h3>
              <p className="mt-2 text-sm text-paper/70 leading-relaxed">{c.desc}</p>
            </motion.div>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

/* ---------- Pricing ---------- */
function Pricing() {
  const tiers = [
    {
      name: "Starter",
      price: "$49",
      period: "/month",
      highlight: false,
      features: ["Basic Deployments", "Monitoring", "Community Support", "5 Projects"],
      cta: "Start Free Trial",
    },
    {
      name: "Professional",
      price: "$199",
      period: "/month",
      highlight: true,
      features: ["Unlimited Deployments", "Auto Scaling", "Advanced Monitoring", "API Access"],
      cta: "Get Started",
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      highlight: false,
      features: [
        "Dedicated Infrastructure",
        "SLA Support",
        "Custom Integrations",
        "Enterprise Security",
      ],
      cta: "Contact Sales",
    },
  ];
  return (
    <section id="pricing" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-3xl">
          <span className="font-mono text-xs uppercase tracking-widest text-ink-2">/ Pricing</span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-ink">
            Flexible Pricing for <span className="text-forest">Every Team</span>
          </h2>
        </Reveal>

        <Stagger className="mt-14 grid gap-6 lg:grid-cols-3">
          {tiers.map((t) => (
            <motion.div
              key={t.name}
              variants={fadeUp}
              whileHover={{ y: -8 }}
              className={`relative rounded-3xl p-8 transition-shadow ${
                t.highlight
                  ? "bg-forest text-paper ring-1 ring-lime/40 shadow-[0_40px_100px_-40px_rgba(26,46,34,0.6)] glow-lime"
                  : "bg-card border border-hairline hover:shadow-[0_20px_60px_-30px_rgba(17,17,17,0.25)]"
              }`}
            >
              {t.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-lime px-3 py-1 text-xs font-semibold text-forest">
                  Most Popular
                </span>
              )}
              <h3
                className={`font-display text-xl font-semibold ${
                  t.highlight ? "text-paper" : "text-ink"
                }`}
              >
                {t.name}
              </h3>
              <div className="mt-5 flex items-baseline gap-1">
                <span
                  className={`font-display text-5xl font-bold ${
                    t.highlight ? "text-lime" : "text-ink"
                  }`}
                >
                  {t.price}
                </span>
                <span className={t.highlight ? "text-paper/60" : "text-ink-2"}>{t.period}</span>
              </div>
              <ul className="mt-8 space-y-3">
                {t.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <span
                      className={`mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full ${
                        t.highlight ? "bg-lime text-forest" : "bg-forest text-lime"
                      }`}
                    >
                      <Check className="h-3 w-3" strokeWidth={3} />
                    </span>
                    <span className={t.highlight ? "text-paper/85" : "text-ink"}>{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className={`mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-transform hover:scale-[1.03] ${
                  t.highlight
                    ? "bg-lime text-forest"
                    : "bg-forest text-paper hover:bg-forest-2"
                }`}
              >
                {t.cta} <ArrowRight className="h-4 w-4" />
              </a>
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
    <section id="contact" className="relative overflow-hidden bg-forest text-paper py-24 sm:py-32">
      <div className="absolute inset-0 bg-grid-dark opacity-50" />
      <div className="absolute inset-0 bg-[radial-gradient(50%_40%_at_20%_20%,rgba(198,241,53,0.15),transparent_70%)]" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <Reveal>
            <span className="font-mono text-xs uppercase tracking-widest text-lime">/ Contact</span>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight">
              Let's Build <span className="text-lime">Production AI</span> Together
            </h2>
            <p className="mt-5 max-w-lg text-lg text-paper/70 leading-relaxed">
              Ready to deploy AI with confidence? Speak with our team to learn how OriginSearch
              simplifies AI deployment and infrastructure management.
            </p>
            <div className="mt-10 grid gap-4">
              {[
                { icon: Layers, label: "Enterprise onboarding in under 2 weeks" },
                { icon: ShieldCheck, label: "SOC 2 Type II · ISO 27001 · HIPAA-ready" },
                { icon: Server, label: "Dedicated deployment engineers" },
              ].map((it) => (
                <div key={it.label} className="flex items-center gap-3 text-sm text-paper/85">
                  <span className="grid h-9 w-9 place-items-center rounded-lg bg-lime/10 text-lime ring-1 ring-lime/25">
                    <it.icon className="h-4 w-4" />
                  </span>
                  {it.label}
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setStatus("sent");
                setTimeout(() => setStatus("idle"), 3500);
              }}
              className="rounded-3xl border border-lime/15 bg-forest-2/70 backdrop-blur p-6 sm:p-8 shadow-[0_40px_100px_-40px_rgba(0,0,0,0.6)]"
            >
              <Stagger className="grid gap-4">
                {[
                  { name: "name", label: "Full Name", type: "text", required: true },
                  { name: "company", label: "Company Name", type: "text", required: true },
                  { name: "email", label: "Email Address", type: "email", required: true },
                ].map((f) => (
                  <motion.div key={f.name} variants={fadeUp}>
                    <label className="mb-1.5 block text-xs font-mono uppercase tracking-widest text-paper/60">
                      {f.label}
                    </label>
                    <input
                      required={f.required}
                      type={f.type}
                      name={f.name}
                      maxLength={200}
                      className="w-full rounded-xl border border-paper/15 bg-forest/60 px-4 py-3 text-sm text-paper placeholder:text-paper/40 outline-none transition-all focus:border-lime focus:ring-2 focus:ring-lime/40"
                    />
                  </motion.div>
                ))}
                <motion.div variants={fadeUp}>
                  <label className="mb-1.5 block text-xs font-mono uppercase tracking-widest text-paper/60">
                    Deployment Requirements
                  </label>
                  <select
                    name="requirements"
                    className="w-full rounded-xl border border-paper/15 bg-forest/60 px-4 py-3 text-sm text-paper outline-none transition-all focus:border-lime focus:ring-2 focus:ring-lime/40"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select an option
                    </option>
                    <option>Single-cloud deployment</option>
                    <option>Multi-cloud / hybrid</option>
                    <option>Edge deployment</option>
                    <option>Dedicated / on-premise</option>
                  </select>
                </motion.div>
                <motion.div variants={fadeUp}>
                  <label className="mb-1.5 block text-xs font-mono uppercase tracking-widest text-paper/60">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    maxLength={1000}
                    className="w-full resize-none rounded-xl border border-paper/15 bg-forest/60 px-4 py-3 text-sm text-paper placeholder:text-paper/40 outline-none transition-all focus:border-lime focus:ring-2 focus:ring-lime/40"
                    placeholder="Tell us about your AI deployment goals…"
                  />
                </motion.div>
                <motion.button
                  variants={fadeUp}
                  type="submit"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-lime px-6 py-3.5 text-sm font-semibold text-forest shadow-[0_20px_50px_-16px_rgba(198,241,53,0.6)]"
                >
                  {status === "sent" ? "Message Sent ✓" : "Send Message"}
                  {status !== "sent" && <ArrowRight className="h-4 w-4" />}
                </motion.button>
              </Stagger>
            </form>
          </Reveal>
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
    { icon: Linkedin, label: "LinkedIn", href: "#" },
    { icon: Github, label: "GitHub", href: "#" },
    { icon: Twitter, label: "X", href: "#" },
  ];
  return (
    <footer className="bg-footer text-paper/80">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-16">
        <div className="grid gap-10 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <a href="#home" className="flex items-center gap-2">
              <span className="grid h-9 w-9 place-items-center rounded-lg bg-lime text-forest shadow-[0_0_40px_-8px_rgba(198,241,53,0.7)]">
                <Radar className="h-4 w-4" strokeWidth={2.4} />
              </span>
              <span className="font-display text-lg font-bold text-paper">
                OriginSearch<span className="text-paper/60 font-medium">.one</span>
              </span>
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
            <div className="mt-4 flex items-center gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="grid h-10 w-10 place-items-center rounded-full border border-paper/15 text-paper transition-all hover:-translate-y-1 hover:border-lime hover:text-lime hover:bg-lime/5"
                >
                  <s.icon className="h-4 w-4" />
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
        <About />
        <HowItWorks />
        <Features />
        <Pricing />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
