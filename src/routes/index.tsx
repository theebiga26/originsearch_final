import { createFileRoute } from "@tanstack/react-router";
import { motion, useInView, useMotionValue, useSpring, useTransform, useScroll } from "motion/react";
import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  Cpu, Network, Layers, Gauge, Cloud, Shield, ArrowRight, Boxes, Zap,
  GitBranch, LineChart, Activity, Server, Sparkles, CheckCircle2, XCircle,
  Workflow, Database, Rocket, ChevronRight,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: LandingPage,
});

/* ---------- Reusable Motion Primitives ---------- */

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
} as const;

function Reveal({ children, delay = 0, className = "" }: { children: ReactNode; delay?: number; className?: string }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function Stagger({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      variants={{ show: { transition: { staggerChildren: 0.08 } } }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ---------- Nav ---------- */

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    ["Platform", "#platform"],
    ["Architecture", "#architecture"],
    ["Infrastructure", "#infrastructure"],
    ["How it works", "#how"],
    ["Industries", "#industries"],
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "backdrop-blur-xl bg-background/70 border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-2">
          <LogoMark />
          <span className="font-display text-lg font-bold tracking-tight">VertexGrid</span>
          <span className="font-mono text-[10px] text-muted-foreground">.one</span>
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map(([label, href]) => (
            <a key={href} href={href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              {label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden text-sm text-muted-foreground transition-colors hover:text-foreground sm:inline"
          >
            Contact Sales
          </a>
          <a
            href="#demo"
            className="group inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-all hover:shadow-[0_0_30px_var(--color-glow)]"
          >
            Request Demo
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </header>
  );
}

function LogoMark() {
  return (
    <div className="relative grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-primary to-secondary ring-hairline">
      <svg viewBox="0 0 24 24" className="h-4 w-4 text-primary-foreground">
        <path d="M12 2l9 5-9 5-9-5 9-5zm0 8l9 5-9 5-9-5 9-5z" fill="currentColor" opacity=".9" />
      </svg>
    </div>
  );
}

/* ---------- Hero ---------- */

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section id="top" ref={ref} className="relative flex min-h-screen items-center overflow-hidden pt-24">
      {/* Background layers */}
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-60 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      <div className="pointer-events-none absolute inset-0 bg-radial-glow" />
      <Particles count={40} />

      <motion.div style={{ y, opacity }} className="relative z-10 mx-auto grid w-full max-w-7xl gap-12 px-6 lg:grid-cols-[1.05fr_1fr] lg:items-center">
        <div>
          <Reveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1 backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_10px_var(--color-glow)]" />
              <span className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                Enterprise AI Compute · v2026.1
              </span>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
              The Enterprise
              <br />
              <span className="text-gradient">AI Compute Platform</span>
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Orchestrate GPU infrastructure, accelerate AI workloads, and scale distributed intelligence
              across cloud and edge environments.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#demo"
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[0_10px_40px_-10px_var(--color-glow)] transition-all hover:shadow-[0_10px_60px_-5px_var(--color-glow)]"
              >
                Request Demo
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-6 py-3 text-sm font-semibold text-foreground backdrop-blur transition-all hover:bg-surface-elevated"
              >
                Contact Sales
              </a>
            </div>
          </Reveal>
          <Reveal delay={0.28}>
            <div className="mt-10 grid max-w-lg grid-cols-3 gap-6 border-t border-border pt-6">
              {[
                ["50K+", "GPU cores"],
                ["99.99%", "Availability"],
                ["3.5×", "Faster training"],
              ].map(([v, l]) => (
                <div key={l}>
                  <div className="font-mono text-2xl font-semibold text-foreground">{v}</div>
                  <div className="mt-1 text-xs text-muted-foreground">{l}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.2}>
          <HeroCompute />
        </Reveal>
      </motion.div>
    </section>
  );
}

function Particles({ count = 30 }: { count?: number }) {
  const items = Array.from({ length: count });
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {items.map((_, i) => {
        const size = 1 + Math.random() * 2.5;
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const d = 6 + Math.random() * 10;
        return (
          <motion.span
            key={i}
            className="absolute rounded-full bg-primary/60"
            style={{ left: `${x}%`, top: `${y}%`, width: size, height: size, boxShadow: "0 0 8px var(--color-glow)" }}
            animate={{ y: [0, -20, 0], opacity: [0.2, 0.8, 0.2] }}
            transition={{ duration: d, repeat: Infinity, ease: "easeInOut", delay: Math.random() * 4 }}
          />
        );
      })}
    </div>
  );
}

function HeroCompute() {
  return (
    <div className="relative aspect-square w-full max-w-[560px] justify-self-center">
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-accent/40 via-transparent to-secondary/20 blur-2xl" />
      <div className="relative h-full w-full rounded-3xl border border-border bg-surface/40 p-6 backdrop-blur-xl ring-hairline">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-primary shadow-[0_0_8px_var(--color-glow)]" />
            <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">cluster · us-east-1</span>
          </div>
          <span className="font-mono text-[10px] text-muted-foreground">live</span>
        </div>

        <svg viewBox="0 0 400 400" className="mt-2 h-[calc(100%-2.5rem)] w-full">
          <defs>
            <radialGradient id="hg" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#9CB080" stopOpacity="0.35" />
              <stop offset="100%" stopColor="#9CB080" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="hl" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#9CB080" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#618764" stopOpacity="0.2" />
            </linearGradient>
          </defs>
          <circle cx="200" cy="200" r="170" fill="url(#hg)" />
          {/* orbit rings */}
          {[70, 120, 170].map((r, i) => (
            <motion.circle
              key={r}
              cx="200" cy="200" r={r}
              fill="none" stroke="rgba(255,255,255,0.08)" strokeDasharray="2 6"
              animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
              transition={{ duration: 40 + i * 15, repeat: Infinity, ease: "linear" }}
              style={{ transformOrigin: "200px 200px" }}
            />
          ))}
          {/* central node */}
          <g>
            <circle cx="200" cy="200" r="26" fill="#2B5748" stroke="#9CB080" strokeWidth="1.5" />
            <circle cx="200" cy="200" r="8" fill="#9CB080" />
          </g>
          {/* nodes */}
          {nodePositions.map((p, i) => (
            <NodeDot key={i} x={p.x} y={p.y} delay={i * 0.15} />
          ))}
          {/* connection lines */}
          {nodePositions.map((p, i) => (
            <motion.line
              key={`l${i}`}
              x1="200" y1="200" x2={p.x} y2={p.y}
              stroke="url(#hl)" strokeWidth="1"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.8 }}
              transition={{ duration: 1.2, delay: 0.3 + i * 0.08, ease: "easeOut" }}
            />
          ))}
          {/* pulses along lines */}
          {nodePositions.map((p, i) => (
            <motion.circle
              key={`p${i}`}
              r="2.5" fill="#F5F7F6"
              animate={{
                cx: [200, p.x], cy: [200, p.y], opacity: [0, 1, 0],
              }}
              transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.4, ease: "easeInOut" }}
            />
          ))}
        </svg>

        {/* stat pills */}
        <div className="absolute bottom-4 left-4 right-4 grid grid-cols-3 gap-2">
          {[
            ["GPU util", "87%"],
            ["Nodes", "128"],
            ["Latency", "4.2ms"],
          ].map(([k, v]) => (
            <div key={k} className="rounded-lg border border-border bg-background/60 px-3 py-2 backdrop-blur">
              <div className="font-mono text-[10px] uppercase text-muted-foreground">{k}</div>
              <div className="font-mono text-sm font-semibold text-foreground">{v}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const nodePositions = [
  { x: 200, y: 40 }, { x: 340, y: 120 }, { x: 360, y: 260 },
  { x: 260, y: 360 }, { x: 120, y: 360 }, { x: 40, y: 260 },
  { x: 60, y: 120 }, { x: 140, y: 60 },
];

function NodeDot({ x, y, delay = 0 }: { x: number; y: number; delay?: number }) {
  return (
    <g>
      <motion.circle
        cx={x} cy={y} r="14"
        fill="rgba(156,176,128,0.12)"
        animate={{ r: [12, 18, 12], opacity: [0.6, 0.2, 0.6] }}
        transition={{ duration: 3, repeat: Infinity, delay, ease: "easeInOut" }}
      />
      <circle cx={x} cy={y} r="6" fill="#34434A" stroke="#9CB080" strokeWidth="1.2" />
      <circle cx={x} cy={y} r="2" fill="#9CB080" />
    </g>
  );
}

/* ---------- Ecosystem ---------- */

function Ecosystem() {
  const items = ["NVIDIA", "AWS", "Azure", "Google Cloud", "Kubernetes", "Docker", "PyTorch", "TensorFlow", "Hugging Face"];
  return (
    <section className="relative border-y border-border py-20">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <p className="text-center font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
            Trusted infrastructure ecosystem
          </p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mx-auto mt-3 max-w-3xl text-center text-2xl font-semibold sm:text-3xl">
            Interoperable with the stack you already run
          </h2>
        </Reveal>

        <div className="relative mt-14">
          <div className="pointer-events-none absolute inset-x-0 top-1/2 -z-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
          <Stagger className="grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-9">
            {items.map((name) => (
              <motion.div
                key={name}
                variants={fadeUp}
                whileHover={{ y: -3 }}
                className="group relative flex items-center justify-center rounded-xl border border-border bg-surface/50 px-3 py-5 backdrop-blur transition-all hover:border-primary/40 hover:bg-surface-elevated"
              >
                <span className="text-center text-xs font-medium text-muted-foreground transition-colors group-hover:text-foreground">
                  {name}
                </span>
                <span className="pointer-events-none absolute inset-0 rounded-xl opacity-0 transition-opacity group-hover:opacity-100" style={{ boxShadow: "0 0 30px var(--color-glow)" }} />
              </motion.div>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}

/* ---------- Architecture ---------- */

function Architecture() {
  const steps = [
    { icon: Layers, title: "AI Workloads", desc: "Ingest training jobs, batch inference, and real-time pipelines from any framework." },
    { icon: Workflow, title: "Compute Orchestration", desc: "Intent-based scheduler places workloads across regions with policy guardrails." },
    { icon: Cpu, title: "GPU Scheduling", desc: "Bin-pack, MIG, and topology-aware placement to maximize accelerator utilization." },
    { icon: GitBranch, title: "Distributed Training", desc: "Elastic multi-node fabrics with NCCL/RDMA autotuning and checkpoint resilience." },
    { icon: Zap, title: "Inference Scaling", desc: "Low-latency serving with autoscaling, batching, and speculative decoding." },
    { icon: Rocket, title: "Enterprise Deployment", desc: "SOC2-ready deploys with SSO, RBAC, VPC peering, and audit trails." },
  ];
  return (
    <section id="architecture" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:items-center">
          <div>
            <Reveal>
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary">Compute Architecture</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl">
                Intelligent Compute <span className="text-gradient">Orchestration</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 max-w-lg text-muted-foreground">
                A single control plane routes AI workloads through an intelligent stack — from
                workload intent to GPU placement, distributed training, and production inference.
              </p>
            </Reveal>
            <Stagger className="mt-8 space-y-4">
              {steps.map((s, i) => (
                <motion.div
                  key={s.title}
                  variants={fadeUp}
                  className="group flex items-start gap-4 rounded-2xl border border-border bg-surface/50 p-4 backdrop-blur transition-all hover:border-primary/40"
                >
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-accent/50 ring-hairline">
                    <s.icon className="h-4.5 w-4.5 text-primary" strokeWidth={1.6} />
                  </div>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-[10px] text-muted-foreground">0{i + 1}</span>
                      <h3 className="text-sm font-semibold">{s.title}</h3>
                    </div>
                    <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
                  </div>
                </motion.div>
              ))}
            </Stagger>
          </div>

          <Reveal delay={0.1}>
            <ArchitectureDiagram />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ArchitectureDiagram() {
  const layers = [
    { label: "AI Workloads", tag: "input", icon: Layers },
    { label: "Compute Orchestration", tag: "control", icon: Workflow },
    { label: "GPU Scheduling", tag: "runtime", icon: Cpu },
    { label: "Distributed Training", tag: "fabric", icon: GitBranch },
    { label: "Inference Scaling", tag: "serving", icon: Zap },
    { label: "Enterprise Deployment", tag: "delivery", icon: Rocket },
  ];
  return (
    <div className="relative">
      <div className="absolute -inset-8 -z-10 rounded-[2rem] bg-radial-glow" />
      <div className="rounded-3xl border border-border bg-surface/40 p-6 backdrop-blur-xl ring-hairline">
        <div className="flex items-center justify-between border-b border-border pb-3">
          <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">architecture.flow</span>
          <span className="font-mono text-[10px] text-primary">● active</span>
        </div>
        <div className="mt-4 space-y-2">
          {layers.map((l, i) => (
            <motion.div
              key={l.label}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="relative"
            >
              <div className="flex items-center gap-3 rounded-xl border border-border bg-background/40 px-4 py-3">
                <div className="grid h-8 w-8 place-items-center rounded-lg bg-accent/60">
                  <l.icon className="h-4 w-4 text-primary" strokeWidth={1.7} />
                </div>
                <div className="flex-1">
                  <div className="text-sm font-semibold">{l.label}</div>
                  <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{l.tag}</div>
                </div>
                <motion.div
                  className="h-1.5 w-1.5 rounded-full bg-primary"
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                />
              </div>
              {i < layers.length - 1 && (
                <div className="relative ml-8 h-4">
                  <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-primary/60 to-transparent" />
                  <motion.div
                    className="absolute left-[-2px] top-0 h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_8px_var(--color-glow)]"
                    animate={{ y: [0, 12, 0], opacity: [0, 1, 0] }}
                    transition={{ duration: 1.8, repeat: Infinity, delay: i * 0.3 }}
                  />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ---------- Capabilities ---------- */

function Capabilities() {
  const features = [
    { icon: Cpu, title: "GPU Orchestration", desc: "Topology-aware placement across NVLink, InfiniBand and RoCE fabrics with MIG partitioning." },
    { icon: GitBranch, title: "Distributed Training", desc: "Elastic multi-node training with fault-tolerant checkpoints and gradient sync tuning." },
    { icon: Zap, title: "Inference Acceleration", desc: "Continuous batching, KV-cache reuse and quantized serving for high-throughput endpoints." },
    { icon: Gauge, title: "Resource Optimization", desc: "Bin-packing, spot arbitrage and workload-aware autoscaling that cut compute spend up to 70%." },
    { icon: Cloud, title: "Hybrid Cloud Compute", desc: "Unify on-prem clusters, hyperscalers and edge sites behind a single scheduling plane." },
    { icon: Shield, title: "Enterprise-Scale Infra", desc: "SSO, RBAC, VPC peering, audit logging and SOC2-aligned controls out of the box." },
  ];
  return (
    <section id="platform" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary">Core Platform</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl">
              Everything AI infrastructure teams need
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 text-muted-foreground">
              Six capabilities, one production-grade compute plane — designed for teams running
              serious AI at scale.
            </p>
          </Reveal>
        </div>

        <Stagger className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <motion.div
              key={f.title}
              variants={fadeUp}
              whileHover={{ y: -4 }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-surface/50 p-6 backdrop-blur transition-all hover:border-primary/40"
            >
              <div
                className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{ background: "radial-gradient(circle, var(--color-glow), transparent 70%)" }}
              />
              <div className="relative">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-accent/60 ring-hairline">
                  <f.icon className="h-5 w-5 text-primary" strokeWidth={1.6} />
                </div>
                <h3 className="mt-5 text-lg font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
                <div className="mt-6 flex items-center gap-1.5 text-xs font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                  Learn more <ChevronRight className="h-3.5 w-3.5" />
                </div>
              </div>
            </motion.div>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

/* ---------- Infrastructure viz ---------- */

function InfrastructureViz() {
  return (
    <section id="infrastructure" className="relative overflow-hidden py-28">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-30 [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary">Global Infrastructure</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl">
              One network. <span className="text-gradient">Every accelerator.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 text-muted-foreground">
              GPU clusters, cloud regions, edge nodes and data pipelines — connected through an
              intelligent, latency-aware topology.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <div className="relative mx-auto mt-16 max-w-5xl">
            <NetworkTopology />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function NetworkTopology() {
  const nodes = [
    { x: 100, y: 120, label: "GPU · US-East", type: "gpu" },
    { x: 260, y: 60, label: "Edge · NYC", type: "edge" },
    { x: 440, y: 100, label: "Cloud · AWS", type: "cloud" },
    { x: 620, y: 60, label: "Edge · LON", type: "edge" },
    { x: 780, y: 130, label: "GPU · EU-West", type: "gpu" },
    { x: 160, y: 300, label: "Data · S3", type: "data" },
    { x: 360, y: 360, label: "Pipeline · Kafka", type: "pipe" },
    { x: 560, y: 360, label: "Cloud · GCP", type: "cloud" },
    { x: 740, y: 300, label: "Data · Lakehouse", type: "data" },
  ];
  const center = { x: 440, y: 230 };

  return (
    <div className="relative rounded-3xl border border-border bg-surface/40 p-6 backdrop-blur-xl ring-hairline">
      <svg viewBox="0 0 880 440" className="w-full">
        <defs>
          <linearGradient id="nl" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#9CB080" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#618764" stopOpacity="0.2" />
          </linearGradient>
          <radialGradient id="ng" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#9CB080" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#9CB080" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx={center.x} cy={center.y} r="160" fill="url(#ng)" />

        {nodes.map((n, i) => (
          <motion.line
            key={`ln${i}`}
            x1={center.x} y1={center.y} x2={n.x} y2={n.y}
            stroke="url(#nl)" strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 0.7 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: i * 0.06 }}
          />
        ))}

        {nodes.map((n, i) => (
          <motion.circle
            key={`pk${i}`}
            r="2.5" fill="#F5F7F6"
            animate={{ cx: [center.x, n.x], cy: [center.y, n.y], opacity: [0, 1, 0] }}
            transition={{ duration: 3, repeat: Infinity, delay: i * 0.3, ease: "easeInOut" }}
          />
        ))}

        {/* central hub */}
        <g>
          <motion.circle
            cx={center.x} cy={center.y} r="40" fill="rgba(43,87,72,0.5)"
            animate={{ r: [38, 44, 38] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          <circle cx={center.x} cy={center.y} r="22" fill="#2B5748" stroke="#9CB080" strokeWidth="1.5" />
          <text x={center.x} y={center.y + 4} textAnchor="middle" className="fill-[#F5F7F6]" style={{ font: "600 10px 'JetBrains Mono'" }}>
            CORE
          </text>
        </g>

        {nodes.map((n, i) => (
          <g key={i}>
            <motion.circle
              cx={n.x} cy={n.y} r="18"
              fill="rgba(156,176,128,0.08)"
              animate={{ r: [16, 20, 16] }}
              transition={{ duration: 3, repeat: Infinity, delay: i * 0.2 }}
            />
            <circle cx={n.x} cy={n.y} r="9" fill="#34434A" stroke="#9CB080" strokeWidth="1.2" />
            <text x={n.x} y={n.y - 22} textAnchor="middle" className="fill-[#A9B4B0]" style={{ font: "500 10px Inter" }}>
              {n.label}
            </text>
          </g>
        ))}
      </svg>

      <div className="mt-4 grid grid-cols-2 gap-3 border-t border-border pt-4 sm:grid-cols-4">
        {([
          [Server, "128 clusters"],
          [Cpu, "52,340 GPUs"],
          [Cloud, "24 regions"],
          [Activity, "1.2 Tbps fabric"],
        ] as const).map(([Icon, label], i) => (
          <div key={i} className="flex items-center gap-2 text-xs text-muted-foreground">
            <Icon className="h-4 w-4 text-primary" strokeWidth={1.6} />
            <span className="font-mono">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------- Metrics ---------- */

function useCounter(target: number, inView: boolean, duration = 1.8) {
  const mv = useMotionValue(0);
  const spring = useSpring(mv, { duration: duration * 1000, bounce: 0 });
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (inView) mv.set(target);
    const unsub = spring.on("change", (v) => setVal(v));
    return () => unsub();
  }, [inView, target, mv, spring]);
  return val;
}

function Metric({ value, suffix, prefix, label, decimals = 0 }: { value: number; suffix?: string; prefix?: string; label: string; decimals?: number; }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const v = useCounter(value, inView);
  const formatted = decimals > 0 ? v.toFixed(decimals) : Math.round(v).toLocaleString();
  return (
    <div ref={ref} className="text-center">
      <div className="font-display text-5xl font-bold tracking-tight sm:text-6xl">
        <span className="text-gradient">{prefix}{formatted}{suffix}</span>
      </div>
      <div className="mt-3 text-sm text-muted-foreground">{label}</div>
    </div>
  );
}

function Metrics() {
  return (
    <section className="relative border-y border-border py-24">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <p className="text-center font-mono text-[11px] uppercase tracking-[0.2em] text-primary">Performance Metrics</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mx-auto mt-3 max-w-2xl text-center font-display text-3xl font-bold sm:text-4xl">
            Measured across production AI workloads
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          <Metric value={99.99} suffix="%" decimals={2} label="Infrastructure availability" />
          <Metric value={3.5} suffix="×" decimals={1} label="Faster model training" />
          <Metric value={70} suffix="%" label="Compute cost optimization" />
          <Metric value={50000} suffix="+" label="GPU cores managed" />
          <Metric value={5} suffix="M+" label="AI inference requests / day" />
        </div>
      </div>
    </section>
  );
}

/* ---------- How it works ---------- */

function HowItWorks() {
  const steps = [
    { n: "01", title: "Connect Infrastructure", desc: "Attach clusters, clouds, and edge sites in minutes.", icon: Network },
    { n: "02", title: "Orchestrate Resources", desc: "Policies map workloads to the right accelerators.", icon: Workflow },
    { n: "03", title: "Train Models", desc: "Elastic distributed training with checkpoint resilience.", icon: GitBranch },
    { n: "04", title: "Scale Inference", desc: "Autoscale endpoints with latency and cost targets.", icon: Zap },
    { n: "05", title: "Monitor Performance", desc: "Real-time telemetry across every layer of the stack.", icon: LineChart },
  ];
  return (
    <section id="how" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary">How VertexGrid Works</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl">
              From bare metal to production inference in five steps
            </h2>
          </Reveal>
        </div>

        <div className="relative mt-14">
          <div className="absolute left-0 right-0 top-8 hidden h-px bg-gradient-to-r from-transparent via-border to-transparent lg:block" />
          <Stagger className="grid gap-6 lg:grid-cols-5">
            {steps.map((s, i) => (
              <motion.div key={s.n} variants={fadeUp} className="relative">
                <div className="relative z-10 flex items-center gap-3">
                  <div className="grid h-16 w-16 place-items-center rounded-2xl border border-border bg-surface/70 backdrop-blur">
                    <s.icon className="h-6 w-6 text-primary" strokeWidth={1.5} />
                  </div>
                  <div className="font-mono text-3xl font-bold text-muted-foreground/60">{s.n}</div>
                </div>
                <h3 className="mt-5 text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                {i < steps.length - 1 && (
                  <motion.div
                    className="absolute left-16 top-8 hidden h-px bg-primary/40 lg:block"
                    initial={{ width: 0 }}
                    whileInView={{ width: "calc(100% - 4rem)" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 + i * 0.1 }}
                  />
                )}
              </motion.div>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}

/* ---------- Modern AI Ops ---------- */

function ModernOps() {
  const items = [
    { icon: GitBranch, title: "Distributed AI training", desc: "Multi-node, multi-region training with topology-aware collectives and fault tolerance." },
    { icon: Gauge, title: "Intelligent workload balancing", desc: "Predictive placement that adapts to job shape, priority and cost envelope." },
    { icon: Cpu, title: "GPU scheduling", desc: "MIG-aware, memory-aware bin-packing across heterogeneous accelerator pools." },
    { icon: Cloud, title: "Multi-cloud orchestration", desc: "Move workloads between AWS, Azure, GCP and on-prem without rewrites." },
    { icon: Boxes, title: "Infrastructure scalability", desc: "From 8 GPUs to 8,000 with linear operator overhead and self-healing clusters." },
    { icon: Zap, title: "Production-grade inference", desc: "SLO-driven autoscaling, canary rollouts and continuous batching for LLM serving." },
  ];
  return (
    <section className="relative py-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <Reveal>
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary">Built for Modern AI Operations</p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl">
                Engineered for the way AI is actually built
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 text-muted-foreground">
                VertexGrid unifies the primitives that MLOps, platform and research teams reinvent
                every quarter — into one dependable substrate.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-8 rounded-2xl border border-border bg-surface/40 p-5 backdrop-blur">
                <div className="flex items-center gap-2">
                  <Sparkles className="h-4 w-4 text-primary" strokeWidth={1.6} />
                  <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    telemetry.snapshot
                  </span>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-4">
                  {[
                    ["p50 sched latency", "38ms"],
                    ["job success rate", "99.7%"],
                    ["mean GPU util", "84%"],
                    ["spot recovery", "< 45s"],
                  ].map(([k, v]) => (
                    <div key={k}>
                      <div className="font-mono text-[10px] uppercase text-muted-foreground">{k}</div>
                      <div className="mt-1 font-mono text-lg font-semibold">{v}</div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          <Stagger className="grid gap-4 sm:grid-cols-2">
            {items.map((it) => (
              <motion.div
                key={it.title}
                variants={fadeUp}
                className="group rounded-2xl border border-border bg-surface/50 p-6 backdrop-blur transition-all hover:border-primary/40"
              >
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-accent/60 ring-hairline">
                  <it.icon className="h-5 w-5 text-primary" strokeWidth={1.6} />
                </div>
                <h3 className="mt-5 font-semibold">{it.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{it.desc}</p>
              </motion.div>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}

/* ---------- Industries ---------- */

function Industries() {
  const items = [
    { title: "AI Research Labs", desc: "Reproducible, elastic experimentation at any scale.", icon: Sparkles },
    { title: "Enterprise AI Teams", desc: "Governed platforms with per-team quotas and SSO.", icon: Shield },
    { title: "SaaS AI Platforms", desc: "Multi-tenant inference with strict SLOs.", icon: Zap },
    { title: "MLOps Organizations", desc: "Standardized training, serving and observability.", icon: Workflow },
    { title: "Cloud Providers", desc: "Sell GPU capacity with orchestration built in.", icon: Cloud },
    { title: "HPC Infrastructure", desc: "Batch scheduling for scientific and simulation workloads.", icon: Server },
  ];
  return (
    <section id="industries" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary">Industries & Use Cases</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl">
              Trusted across the AI infrastructure stack
            </h2>
          </Reveal>
        </div>

        <Stagger className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((c) => (
            <motion.div
              key={c.title}
              variants={fadeUp}
              whileHover={{ y: -4 }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-surface/50 p-7 backdrop-blur transition-all hover:border-primary/40"
            >
              <div
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{ background: "radial-gradient(400px circle at var(--x,50%) var(--y,50%), rgba(156,176,128,0.14), transparent 40%)" }}
              />
              <div className="relative flex items-start justify-between">
                <div>
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-accent/60 ring-hairline">
                    <c.icon className="h-5 w-5 text-primary" strokeWidth={1.6} />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold">{c.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{c.desc}</p>
                </div>
                <ArrowRight className="h-4 w-4 text-muted-foreground transition-all group-hover:translate-x-1 group-hover:text-primary" />
              </div>
            </motion.div>
          ))}
        </Stagger>
      </div>
    </section>
  );
}

/* ---------- Command center mock ---------- */

function CommandCenter() {
  return (
    <section className="relative overflow-hidden py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary">Infrastructure Intelligence</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl">
              A live view of every GPU, every workload
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-4 text-muted-foreground">
              Cluster health, utilization, training progress and inference throughput — surfaced
              in a single command surface.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <div className="relative mx-auto mt-14 max-w-6xl">
            <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-radial-glow blur-2xl" />
            <div className="overflow-hidden rounded-3xl border border-border bg-surface/60 backdrop-blur-xl ring-hairline">
              {/* window chrome */}
              <div className="flex items-center justify-between border-b border-border px-5 py-3">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-primary/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-secondary/70" />
                  <span className="ml-4 font-mono text-[11px] text-muted-foreground">vertexgrid ▸ clusters ▸ prod-us-east</span>
                </div>
                <span className="font-mono text-[10px] text-primary">● connected</span>
              </div>

              <div className="grid gap-4 p-6 lg:grid-cols-12">
                {/* left panel */}
                <div className="space-y-4 lg:col-span-3">
                  <PanelHeader label="Cluster Health" />
                  {["prod-us-east", "prod-eu-west", "edge-lon", "hpc-lab-01"].map((c, i) => (
                    <div key={c} className="flex items-center justify-between rounded-lg border border-border bg-background/40 px-3 py-2">
                      <div>
                        <div className="text-xs font-medium">{c}</div>
                        <div className="font-mono text-[10px] text-muted-foreground">{[128, 96, 24, 512][i]} GPUs</div>
                      </div>
                      <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_8px_var(--color-glow)]" />
                    </div>
                  ))}
                </div>

                {/* center */}
                <div className="space-y-4 lg:col-span-6">
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      ["GPU util", "87%"],
                      ["Throughput", "12.4k req/s"],
                      ["Cost / hr", "$4,182"],
                    ].map(([k, v]) => (
                      <div key={k} className="rounded-xl border border-border bg-background/40 p-3">
                        <div className="font-mono text-[10px] uppercase text-muted-foreground">{k}</div>
                        <div className="mt-1 font-mono text-lg font-semibold">{v}</div>
                      </div>
                    ))}
                  </div>

                  <div className="rounded-xl border border-border bg-background/40 p-4">
                    <PanelHeader label="Training Progress" />
                    <div className="mt-3 space-y-3">
                      {[
                        ["llama-3-70b-tune", 72],
                        ["vision-encoder-v4", 48],
                        ["ranking-xlarge", 91],
                      ].map(([name, p]) => (
                        <div key={name as string}>
                          <div className="mb-1 flex items-center justify-between text-xs">
                            <span className="font-mono">{name}</span>
                            <span className="font-mono text-muted-foreground">{p}%</span>
                          </div>
                          <div className="h-1.5 overflow-hidden rounded-full bg-muted">
                            <motion.div
                              className="h-full bg-gradient-to-r from-secondary to-primary"
                              initial={{ width: 0 }}
                              whileInView={{ width: `${p}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 1.2, ease: "easeOut" }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-xl border border-border bg-background/40 p-4">
                    <PanelHeader label="Inference Throughput" />
                    <ThroughputChart />
                  </div>
                </div>

                {/* right panel */}
                <div className="space-y-4 lg:col-span-3">
                  <PanelHeader label="Resource Distribution" />
                  <div className="rounded-xl border border-border bg-background/40 p-4">
                    {[
                      ["Training", 46, "bg-primary"],
                      ["Inference", 34, "bg-secondary"],
                      ["Batch", 14, "bg-accent"],
                      ["Idle", 6, "bg-muted-foreground/50"],
                    ].map(([l, v, c]) => (
                      <div key={l as string} className="mb-3 last:mb-0">
                        <div className="mb-1 flex items-center justify-between text-xs">
                          <span>{l}</span>
                          <span className="font-mono text-muted-foreground">{v}%</span>
                        </div>
                        <div className="h-1.5 overflow-hidden rounded-full bg-muted">
                          <motion.div
                            className={`h-full ${c}`}
                            initial={{ width: 0 }}
                            whileInView={{ width: `${v}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: "easeOut" }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="rounded-xl border border-border bg-background/40 p-4">
                    <PanelHeader label="Compute Efficiency" />
                    <div className="mt-3 font-display text-3xl font-bold text-gradient">94.2%</div>
                    <div className="font-mono text-[10px] text-muted-foreground">vs. baseline scheduler</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function PanelHeader({ label }: { label: string }) {
  return (
    <div className="flex items-center justify-between">
      <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">{label}</span>
      <span className="h-1 w-1 rounded-full bg-primary" />
    </div>
  );
}

function ThroughputChart() {
  const pts = [12, 18, 14, 22, 28, 24, 30, 36, 32, 40, 46, 42, 50, 58, 52, 60];
  const max = Math.max(...pts);
  const path = pts
    .map((v, i) => `${i === 0 ? "M" : "L"} ${(i / (pts.length - 1)) * 100} ${100 - (v / max) * 100}`)
    .join(" ");
  return (
    <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="mt-3 h-24 w-full">
      <defs>
        <linearGradient id="tg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#9CB080" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#9CB080" stopOpacity="0" />
        </linearGradient>
      </defs>
      <motion.path
        d={`${path} L 100 100 L 0 100 Z`} fill="url(#tg)"
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1 }}
      />
      <motion.path
        d={path} fill="none" stroke="#9CB080" strokeWidth="1.2" vectorEffect="non-scaling-stroke"
        initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 1.5, ease: "easeOut" }}
      />
    </svg>
  );
}

/* ---------- Why VertexGrid ---------- */

function WhyVertex() {
  const traditional = [
    "Fragmented compute across teams and clouds",
    "Manual scaling and brittle scheduling",
    "Inefficient GPU utilization at 30–50%",
    "Limited visibility across the stack",
  ];
  const vertex = [
    "Intelligent, intent-driven orchestration",
    "AI-native, elastic infrastructure",
    "Distributed compute optimization at 85%+ util",
    "Enterprise-grade scale, security and observability",
  ];
  return (
    <section className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary">Why VertexGrid</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl">
              The gap between infrastructure and intelligence
            </h2>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-3xl border border-border bg-surface/30 p-8 backdrop-blur">
              <div className="flex items-center gap-2">
                <span className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">Traditional Infrastructure</span>
              </div>
              <ul className="mt-6 space-y-4">
                {traditional.map((t) => (
                  <li key={t} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-destructive/80" strokeWidth={1.6} />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="relative h-full overflow-hidden rounded-3xl border border-primary/30 bg-gradient-to-br from-accent/40 to-surface/60 p-8 backdrop-blur">
              <div className="pointer-events-none absolute -right-16 -top-16 h-52 w-52 rounded-full" style={{ background: "radial-gradient(circle, var(--color-glow), transparent 70%)" }} />
              <div className="relative flex items-center gap-2">
                <LogoMark />
                <span className="font-mono text-[11px] uppercase tracking-widest text-primary">VertexGrid</span>
              </div>
              <ul className="relative mt-6 space-y-4">
                {vertex.map((t) => (
                  <li key={t} className="flex items-start gap-3 text-sm text-foreground">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" strokeWidth={1.6} />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------- Final CTA ---------- */

function FinalCTA() {
  return (
    <section id="demo" className="relative overflow-hidden py-32">
      <div className="pointer-events-none absolute inset-0 bg-radial-glow" />
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      <Particles count={30} />

      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <Reveal>
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1 backdrop-blur">
            <Database className="h-3.5 w-3.5 text-primary" strokeWidth={1.6} />
            <span className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">Enterprise · Ready</span>
          </div>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="mt-6 font-display text-5xl font-bold tracking-tight sm:text-6xl">
            Power Enterprise AI at <span className="text-gradient">Compute Scale.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Build, train, deploy and scale AI workloads with intelligent compute infrastructure.
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-[0_10px_50px_-10px_var(--color-glow)] transition-all hover:shadow-[0_10px_80px_-5px_var(--color-glow)]"
            >
              Request Demo
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-7 py-3.5 text-sm font-semibold text-foreground backdrop-blur transition-all hover:bg-surface-elevated"
            >
              Talk to Sales
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- Footer ---------- */

function Footer() {
  const cols: [string, { label: string; soon?: boolean }[]][] = [
    ["Platform", [{ label: "Compute Infrastructure" }, { label: "GPU Orchestration" }, { label: "Distributed Training" }]],
    ["Resources", [{ label: "Documentation", soon: true }, { label: "Developer API", soon: true }]],
    ["Company", [{ label: "About" }, { label: "Contact" }]],
  ];
  return (
    <footer id="contact" className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_2fr]">
          <div>
            <div className="flex items-center gap-2">
              <LogoMark />
              <span className="font-display text-lg font-bold">VertexGrid</span>
              <span className="font-mono text-[10px] text-muted-foreground">.one</span>
            </div>
            <p className="mt-4 max-w-sm text-sm text-muted-foreground">
              The enterprise AI compute platform. Orchestrate GPU infrastructure, accelerate
              training, and scale inference across cloud and edge.
            </p>
            <div className="mt-6 font-mono text-[11px] text-muted-foreground">
              hello@vertexgrid.one
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {cols.map(([title, links]) => (
              <div key={title}>
                <div className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">{title}</div>
                <ul className="mt-4 space-y-3">
                  {links.map((l) => (
                    <li key={l.label} className="flex items-center gap-2">
                      <a href="#" className="text-sm text-foreground/90 transition-colors hover:text-primary">
                        {l.label}
                      </a>
                      {l.soon && (
                        <span className="rounded-full border border-border px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-widest text-muted-foreground">
                          Soon
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center">
          <div>© {new Date().getFullYear()} VertexGrid, Inc. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground">Privacy</a>
            <a href="#" className="hover:text-foreground">Terms</a>
            <a href="#" className="hover:text-foreground">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ---------- Page ---------- */

function LandingPage() {
  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Ecosystem />
      <Architecture />
      <Capabilities />
      <InfrastructureViz />
      <Metrics />
      <HowItWorks />
      <ModernOps />
      <Industries />
      <CommandCenter />
      <WhyVertex />
      <FinalCTA />
      <Footer />
    </main>
  );
}
