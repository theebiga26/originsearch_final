import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, AnimatePresence, useInView, useScroll, useTransform, animate, delay } from "motion/react";
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
  Mail,
  PhoneCall,
  MapPin,
  Radar,
  ChevronRight,
  Brain,
  Settings,
  Database,
  Globe,
} from "lucide-react";

import heroImg from "../assets/Hero image.svg";
import hero1 from "../assets/hero_1.svg";
import hero2 from "../assets/hero_2.svg";
import hero3 from "../assets/hero_3.svg";
import hero4 from "../assets/hero_4.svg";
import hero5 from "../assets/hero_5.svg";
import hero6 from "../assets/hero_6.svg";
import about1 from "../assets/About_1.svg";
import about2 from "../assets/About_2.svg";
import ctaTeam from "../assets/CTA.svg";
import ctaBg from "../assets/CTA_Bg.svg";
import aiDeploymentIcon from "../assets/AI Deployment.svg";
import infraAutomationIcon from "../assets/Infrastructure Automation.svg";
import lifecycleMgmtIcon from "../assets/Lifecycle Management.svg";
import enterpriseMonitoringIcon from "../assets/Enterprise Monitoring.svg";
import workflowConnectGif from "../assets/Connect Your AI Ecosystem.gif";
import workflowPackageGif from "../assets/Package & Prepare.gif";
import workflowDeployGif from "../assets/Deploy & Orchestrate.gif";
import workflowMonitorGif from "../assets/Monitor & Optimize.gif";
import { Pricing } from "../components/sections/Pricing";
import { TiltCard } from "../components/ui/TiltCard";
import { Navbar } from "../components/layout/Navbar";
import { Footer } from "../components/layout/Footer";


import mlEngineerIcon from "../assets/Machine Learning Engineers.svg";
import devopsIcon from "../assets/DevOps & Platform Teams.svg";
import dataScientistIcon from "../assets/Data Scientists.svg";
import pmIcon from "../assets/AI Product Managers.svg";

import featDeployIcon from "../assets/AI Deployment Engine.svg";
import featOrchestrationIcon from "../assets/AI Deployment Engine (2).svg";
import featLifecycleIcon from "../assets/Lifecycle Management.svg";
import featScalingIcon from "../assets/Auto Scaling Infrastructure.svg";
import featMonitorIcon from "../assets/Runtime Monitoring.svg";
import featCloudIcon from "../assets/Cloud & Edge Deployment.svg";
import featAnalyticsIcon from "../assets/Deployment Analytics.svg";
import featSecurityIcon from "../assets/Security & Compliance.svg";

import testi1 from "../assets/testi (1).svg";
import testi2 from "../assets/testi (2).svg";
import testi3 from "../assets/testi (3).svg";

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

  useEffect(() => {
    if (!inView || !ref.current) return;
    const controls = animate(0, to, {
      duration,
      ease: "easeOut",
      onUpdate: (v) => {
        if (ref.current) {
          const display = to >= 100 ? Math.round(v).toLocaleString() : v.toFixed(to % 1 === 0 ? 0 : 2);
          ref.current.textContent = display + suffix;
        }
      },
    });
    return () => controls.stop();
  }, [inView, to, duration, suffix]);

  return (
    <span ref={ref}>
      0{suffix}
    </span>
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
    { src: hero1, label: "AI Processing" },
    { src: hero2, label: "Data Storage" },
    { src: hero3, label: "Cloud Deploy" },
    { src: hero4, label: "Infrastructure" },
    { src: hero5, label: "Global Edge" },
    { src: hero6, label: "Fast Inference" },
  ];

  return (
    <section id="home" className="relative bg-paper px-4 sm:px-6 lg:px-8 pt-24 pb-8 overflow-hidden">

      {/* Main Dark Container */}
      <div className="relative w-full bg-forest rounded-[2.5rem] sm:rounded-[3.5rem] overflow-visible flex flex-col lg:flex-row items-center min-h-[70vh]">

        {/* Background Layer to contain grid/traces without clipping foreground */}
        <div className="absolute inset-0 rounded-[inherit] overflow-hidden pointer-events-none z-0">
          {/* Tech Geometric Traces (Left Edge) */}
          <div className="absolute top-0 left-[-5%] w-[350px] h-full pointer-events-none z-0 opacity-90">
            <svg className="w-full h-full text-[#C6F135]" viewBox="0 0 200 800" fill="none" stroke="currentColor" strokeWidth="32" strokeLinejoin="round" strokeLinecap="round">
              <path d="M -50,50 L 120,220 L -50,390" />
              <path d="M 20,-50 L 180,110 L 20,270" />
              <path d="M -50,-50 L 80,80 L -50,210" fill="currentColor" stroke="none" />
              <path d="M -50,550 L 100,700 L 40,760 L 150,870" />
              <path d="M 20,650 L 80,710 L -50,840" fill="currentColor" stroke="none" />
              <path d="M 140,760 L 250,870" />
            </svg>
          </div>

          {/* Animated Perspective Grid Background */}
          <PerspectiveGridCanvas />
        </div>

        {/* Background glow for the image */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-lime/20 blur-[120px] rounded-full pointer-events-none z-0" />

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
              {["Deploy ", "AI ", "Faster. ", "Scale ", "Without ", "Limits."].map((w, i) => (
                <motion.span
                  key={i}
                  variants={fadeUp}
                  className={/AI|Faster\.|Limits\./.test(w) ? "text-lime" : "text-paper"}
                >
                  {w}
                </motion.span>
              ))}
            </motion.h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-6 max-w-xl text-lg text-paper/70 leading-relaxed font-light">
              OriginSearch.one is an AI deployment platform that transforms trained models into production-ready intelligence. Deploy, orchestrate, monitor, and scale AI applications across cloud, edge, and hybrid environments through one intelligent deployment ecosystem.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href="#contact" className="inline-flex items-center gap-4 bg-[#C6F135] hover:bg-[#b5e022] text-[#1A2E22] rounded-full p-2 pl-8 hover:scale-[1.02] active:scale-95 transition-transform shadow-[0_20px_50px_-16px_rgba(198,241,53,0.4)] group max-w-max pointer-events-auto">
                <span className="font-bold text-sm">Get Started</span>
                <div className="w-10 h-10 rounded-full bg-[#1A2E22] text-[#C6F135] flex items-center justify-center shadow-inner group-hover:bg-black transition-colors">
                  <ArrowRight size={18} strokeWidth={2.5} />
                </div>
              </a>
            </div>
          </Reveal>
        </div>

        {/* Right Column — Circular Image + Orbiting Icons */}
        <div className="w-full lg:w-[45%] relative z-0 h-[360px] lg:h-full flex items-center justify-center lg:absolute lg:right-0 lg:top-0 lg:bottom-0">
          <div className="relative scale-[0.85] sm:scale-100" style={{ width: '320px', height: '320px' }}>

            {/* Circular image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="absolute inset-0 rounded-full overflow-hidden shadow-[0_20px_60px_-10px_rgba(0,0,0,0.5)] ring-2 ring-lime/20"
            >
              <img
                src={heroImg}
                alt="Hero AI Image"
                className="w-full h-full object-cover"
                width="600"
                height="600"
                fetchPriority="high"
              />
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
              {orbitIcons.map(({ src, label }, i) => {
                const angle = (360 / orbitIcons.length) * i;
                return (
                  <div
                    key={label}
                    className="hero-orbit-icon-slot"
                    style={{ '--slot-angle': `${angle}deg` } as React.CSSProperties}
                  >
                    <div className="hero-orbit-icon-counter">
                      <img src={src} alt={label} className="w-10 h-10 object-contain" width="40" height="40" />
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
              <img className="w-10 h-10 rounded-full border-2 border-paper grayscale" src="https://i.pravatar.cc/100?img=1" alt="User 1" width="40" height="40" loading="lazy" />
              <img className="w-10 h-10 rounded-full border-2 border-paper grayscale" src="https://i.pravatar.cc/100?img=2" alt="User 2" width="40" height="40" loading="lazy" />
              <img className="w-10 h-10 rounded-full border-2 border-paper grayscale" src="https://i.pravatar.cc/100?img=3" alt="User 3" width="40" height="40" loading="lazy" />
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
            className={`flex flex-col items-center justify-center py-8 px-4 text-center ${i < stats.length - 1 ? 'md:border-r md:border-lime/10' : ''
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
export function PerspectiveGridCanvas() {
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
      for (let x = (w / 2) % gridSize; x < w; x += gridSize) {
        ctx.moveTo(x, 0); ctx.lineTo(x, h);
      }
      for (let x = (w / 2) % gridSize - gridSize; x > 0; x -= gridSize) {
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
        const cx = Math.floor(c.x / gridSize) * gridSize + (w / 2) % gridSize;
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
          ctx.arc(cx, cy + c.length, 3, 0, Math.PI * 2);
        } else {
          ctx.arc(cx + c.length, Math.floor(cy / gridSize) * gridSize + offset, 3, 0, Math.PI * 2);
        }
        ctx.fillStyle = "#ffffff";
        ctx.shadowColor = "#C6F135";
        ctx.shadowBlur = 15;
        ctx.fill();
        ctx.shadowBlur = 0;

        // reset
        if (c.y > h + 200 || c.x > w + 200) {
          c.y = -200 - Math.random() * 500;
          c.x = Math.random() * w * 2 - w / 2;
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

  return (
    <section id="about" className="relative bg-[#F5F3EF] px-4 sm:px-6 lg:px-8 pt-4 pb-6 sm:pb-8">
      <div className="relative w-full bg-[#1A2E22] rounded-[2.5rem] sm:rounded-[3.5rem] overflow-hidden py-16 sm:py-24">

        {/* Tech Geometric Traces (Left Edge) */}
        <div className="absolute top-0 left-[-5%] w-[350px] h-full pointer-events-none z-0 opacity-90">
          <svg className="w-full h-full text-[#C6F135]" viewBox="0 0 200 800" fill="none" stroke="currentColor" strokeWidth="32" strokeLinejoin="round" strokeLinecap="round">
            {/* Top Tech Pattern */}
            <path d="M -50,50 L 120,220 L -50,390" />
            <path d="M 20,-50 L 180,110 L 20,270" />
            <path d="M -50,-50 L 80,80 L -50,210" fill="currentColor" stroke="none" />

            {/* Bottom Tech Pattern */}
            <path d="M -50,550 L 100,700 L 40,760 L 150,870" />
            <path d="M 20,650 L 80,710 L -50,840" fill="currentColor" stroke="none" />
            <path d="M 140,760 L 250,870" />
          </svg>
        </div>

        {/* Animated Perspective Grid Background */}
        <PerspectiveGridCanvas />

        <div className="mx-auto max-w-7xl px-5 sm:px-8 relative z-10">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <Reveal>
              <span className="font-mono text-xs uppercase tracking-widest text-lime">
                / About OriginSearch
              </span>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-paper">
                Built for Modern <span className="text-lime">AI Operations</span>
              </h2>
              <p className="mt-5 text-lg text-paper/70 leading-relaxed">
                OriginSearch is designed for organizations that require dependable, scalable, and intelligent AI deployment. Rather than managing disconnected deployment tools, teams gain a unified platform that packages models, provisions infrastructure, orchestrates inference, and continuously monitors production performance.
                <br /><br />
                Whether deploying a single model or operating enterprise-scale AI workloads, OriginSearch provides the operational intelligence needed to maintain reliability, efficiency, and business continuity.
              </p>

              <div className="mt-10 grid sm:grid-cols-2 gap-8 border-t border-paper/10 pt-8">
                <div>
                  <h4 className="font-display text-lg font-bold text-paper flex items-center gap-2">
                    <Rocket className="h-5 w-5 text-lime" /> Our Mission
                  </h4>
                  <p className="mt-3 text-sm text-paper/60 leading-relaxed">
                    To simplify AI deployment by making production infrastructure intelligent, automated, and accessible for every enterprise building AI-powered solutions.
                  </p>
                </div>
                <div>
                  <h4 className="font-display text-lg font-bold text-paper flex items-center gap-2">
                    <ShieldCheck className="h-5 w-5 text-lime" /> Our Vision
                  </h4>
                  <p className="mt-3 text-sm text-paper/60 leading-relaxed">
                    To become the deployment layer powering the next generation of enterprise artificial intelligence across every cloud, edge, and hybrid environment.
                  </p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.2} className="relative mt-12 lg:mt-0 h-[400px] sm:h-[480px] w-full">
              {/* Background shape matching the reference's angled shape */}
              <div className="absolute top-6 bottom-10 left-12 right-2 bg-lime/10 rounded-tl-[100px] rounded-br-[100px] rounded-tr-3xl rounded-bl-3xl transform rotate-3" />

              {/* Dotted pattern top right */}
              <div className="absolute top-0 right-0 w-32 h-32 opacity-20" style={{ backgroundImage: 'radial-gradient(#C6F135 2px, transparent 2px)', backgroundSize: '16px 16px' }} />

              {/* Dotted pattern bottom left */}
              <div className="absolute bottom-4 left-4 w-32 h-32 opacity-20" style={{ backgroundImage: 'radial-gradient(#C6F135 2px, transparent 2px)', backgroundSize: '16px 16px' }} />

              {/* Main top-left image */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-8 left-0 w-2/3 h-[250px] sm:h-[320px] z-10 flex items-center justify-center p-4"
              >
                <img src={about1} alt="About OriginSearch 1" className="w-full h-full object-contain rounded-3xl transform transition-transform duration-700 hover:scale-105 drop-shadow-2xl" width="600" height="400" loading="lazy" />
              </motion.div>

              {/* Overlapping bottom-right image */}
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-0 right-4 w-3/5 h-[200px] sm:h-[260px] z-20 flex items-center justify-center p-4"
              >
                <img src={about2} alt="About OriginSearch 2" className="w-full h-full object-contain rounded-3xl transform transition-transform duration-700 hover:scale-105 drop-shadow-2xl" width="600" height="400" loading="lazy" />
              </motion.div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Core Pillars ---------- */
function CorePillars() {
  const cards = [
    {
      icon: aiDeploymentIcon,
      title: "AI Deployment",
      desc: "Ship models to production with a single command and zero-downtime rollouts.",
    },
    {
      icon: infraAutomationIcon,
      title: "Infrastructure Automation",
      desc: "Provision GPUs, networks, and storage automatically across any cloud.",
    },
    {
      icon: lifecycleMgmtIcon,
      title: "Lifecycle Management",
      desc: "Version, promote, and roll back models with full lineage and audit trails.",
    },
    {
      icon: enterpriseMonitoringIcon,
      title: "Enterprise Monitoring",
      desc: "Deep observability across latency, throughput, drift, and cost — in real time.",
    },
  ];

  return (
    <section className="relative pt-12 sm:pt-16 pb-12 sm:pb-16 bg-[#F5F3EF] overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 relative">

        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(12px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12 md:mb-16 text-center max-w-3xl mx-auto"
        >
          <span className="font-mono text-xs uppercase tracking-widest text-[#1A2E22] font-bold">
            / Platform Architecture
          </span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-forest">
            A Unified Foundation For <span className="text-lime">AI Workloads</span>
          </h2>
        </motion.div>

        <div className="relative flex flex-col lg:flex-row items-center justify-center lg:justify-between max-w-6xl mx-auto gap-16 lg:gap-0">

          {/* Connecting Lines (Desktop only) */}
          <div className="hidden lg:block absolute left-[360px] right-[400px] top-0 bottom-0 z-0">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <path id="branch1" d="M 0 50 C 50 50 50 10 100 10" />
                <path id="branch2" d="M 0 50 C 50 50 50 36 100 36" />
                <path id="branch3" d="M 0 50 C 50 50 50 64 100 64" />
                <path id="branch4" d="M 0 50 C 50 50 50 90 100 90" />
              </defs>

              <g stroke="#C6F135" strokeWidth="4" vectorEffect="non-scaling-stroke" fill="none" strokeLinecap="round">
                {/* Dim background lines */}
                <use href="#branch1" strokeOpacity="0.15" />
                <use href="#branch2" strokeOpacity="0.15" />
                <use href="#branch3" strokeOpacity="0.15" />
                <use href="#branch4" strokeOpacity="0.15" />
              </g>

              {/* Glowing Orbs traveling along the paths */}
              <g filter="drop-shadow(0 0 6px #C6F135)">
                <circle r="2.5" fill="#C6F135">
                  <animateMotion dur="2.5s" repeatCount="indefinite" begin="0s">
                    <mpath href="#branch1" />
                  </animateMotion>
                </circle>
                <circle r="2.5" fill="#C6F135">
                  <animateMotion dur="2.5s" repeatCount="indefinite" begin="0.6s">
                    <mpath href="#branch2" />
                  </animateMotion>
                </circle>
                <circle r="2.5" fill="#C6F135">
                  <animateMotion dur="2.5s" repeatCount="indefinite" begin="1.2s">
                    <mpath href="#branch3" />
                  </animateMotion>
                </circle>
                <circle r="2.5" fill="#C6F135">
                  <animateMotion dur="2.5s" repeatCount="indefinite" begin="1.8s">
                    <mpath href="#branch4" />
                  </animateMotion>
                </circle>
              </g>
            </svg>
          </div>

          {/* Left Large Central Node */}
          <Reveal className="relative z-10 w-full max-w-sm lg:max-w-none lg:w-[380px]">
            <div className="relative w-full aspect-square rounded-full flex flex-col justify-center text-center p-10 lg:p-14 z-10 shadow-2xl transition-transform duration-500 hover:scale-[1.05] cursor-default">
              {/* Offset shadow (Lime) */}
              <div className="absolute inset-0 bg-[#C6F135] rounded-full translate-x-3 translate-y-3 lg:translate-x-4 lg:translate-y-4"></div>
              {/* Main background (Dark Green) */}
              <div className="absolute inset-0 bg-[#1A2E22] rounded-full"></div>

              {/* Content */}
              <div className="relative z-10 flex flex-col items-center mt-2">
                <h2 className="font-display text-3xl font-bold leading-tight text-white mb-2">
                  Core Infrastructure
                </h2>
                <p className="text-[#C6F135] font-medium mb-4">
                  The Operational Fabric for Enterprise AI
                </p>
                <p className="text-sm lg:text-base text-white/80 leading-relaxed max-w-sm">
                  Everything you need to orchestrate, scale, and monitor production AI workloads from a single pane of glass.
                </p>
              </div>
            </div>
          </Reveal>

          {/* Right Smaller Feature Nodes */}
          <div className="relative z-10 w-full lg:w-[480px] flex flex-col gap-8 lg:gap-12 py-6 lg:py-0">
            {/* Mobile connecting line */}
            <div className="lg:hidden absolute left-[3.25rem] top-10 bottom-10 w-[4px] bg-[#1A2E22] border border-[#C6F135]/20 z-0 rounded-full overflow-hidden">
              <div className="absolute inset-0 bg-[#C6F135]/15" />
              <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_30%,#C6F135_50%,transparent_70%)] bg-[length:100%_200%]" style={{ animation: 'flow-vertical 2.5s linear infinite' }} />
            </div>

            <Stagger className="flex flex-col gap-8 lg:gap-12">
              {cards.map((c, i) => (
                <motion.div key={c.title} variants={fadeUp} className="relative z-10 flex items-center gap-6 lg:gap-8 group cursor-default">
                  <div className="relative flex-shrink-0 w-20 h-20 lg:w-24 lg:h-24 rounded-full flex items-center justify-center z-10 transition-transform duration-500 group-hover:scale-110 shadow-lg">
                    {/* Offset shadow (Lime) */}
                    <div className="absolute inset-0 bg-[#C6F135] rounded-full translate-x-2 translate-y-2"></div>
                    {/* Main background (Dark Green) */}
                    <div className="absolute inset-0 bg-[#1A2E22] rounded-full border border-[#C6F135]/20"></div>

                    <img src={c.icon} alt={c.title} className="relative z-10 w-12 h-12 lg:w-[70px] lg:h-[70px] object-contain group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="flex-1 bg-white/60 lg:bg-transparent p-5 lg:p-0 rounded-2xl lg:rounded-none backdrop-blur-sm lg:backdrop-blur-none border border-white/40 lg:border-none shadow-sm lg:shadow-none">
                    <h3 className="font-display text-lg lg:text-xl font-bold text-[#111111]">{c.title}</h3>
                    <p className="mt-1.5 text-sm text-[#4B5563] leading-relaxed">{c.desc}</p>
                  </div>
                </motion.div>
              ))}
            </Stagger>
          </div>

        </div>
      </div>
    </section>
  );
}

/* ---------- How It Works ---------- */
function HowItWorks() {
  const steps = [
    {
      num: "01",
      icon: workflowConnectGif,
      title: "Connect Your AI Ecosystem",
      desc: "Integrate repositories, cloud providers, Kubernetes clusters, container registries, APIs, and deployment environments into a unified operational workspace.",
      bannerColor: "#FFFFFF",
      textColor: "#111111",
      diamondBg: "#C6F135",
      iconColor: "#1A2E22",
      numColor: "#111111",
      railShapeBg: "#FFFFFF",
      indentLeft: "0%",
      shadowClass: "shadow-[0_15px_20px_-10px_rgba(0,0,0,0.4)]",
    },
    {
      num: "02",
      icon: workflowPackageGif,
      title: "Package & Prepare",
      desc: "Automatically package AI models, configure runtime environments, validate dependencies, and prepare deployment artifacts for production.",
      bannerColor: "#C6F135",
      textColor: "#111111",
      diamondBg: "#FFFFFF",
      iconColor: "#1A2E22",
      numColor: "#1A2E22",
      railShapeBg: "#C6F135",
      indentLeft: "8%",
      shadowClass: "shadow-[0_15px_20px_-10px_rgba(0,0,0,0.2)]",
    },
    {
      num: "03",
      icon: workflowDeployGif,
      title: "Deploy & Orchestrate",
      desc: "Launch AI services through intelligent orchestration that manages inference routing, workload balancing, deployment strategies, and environment consistency.",
      bannerColor: "#FFFFFF",
      textColor: "#111111",
      diamondBg: "#C6F135",
      iconColor: "#1A2E22",
      numColor: "#111111",
      railShapeBg: "#FFFFFF",
      indentLeft: "16%",
      shadowClass: "shadow-[0_15px_25px_-10px_rgba(0,0,0,0.5)]",
    },
    {
      num: "04",
      icon: workflowMonitorGif,
      title: "Monitor & Optimize",
      desc: "Track deployment health, latency, resource utilization, model performance, scaling activity, and operational insights from a centralized dashboard.",
      bannerColor: "#C6F135",
      textColor: "#111111",
      diamondBg: "#FFFFFF",
      iconColor: "#1A2E22",
      numColor: "#1A2E22",
      railShapeBg: "#C6F135",
      indentLeft: "8%",
      shadowClass: "shadow-[0_15px_20px_-10px_rgba(0,0,0,0.3)]",
    },
  ];

  return (
    <section id="how" className="relative bg-[#F5F3EF] px-4 sm:px-6 lg:px-8 pt-4 pb-4 sm:pb-8">
      {/* Dark background matching exactly the Hero section's width and border radius */}
      <div className="relative w-full bg-[#1A2E22] rounded-[2.5rem] sm:rounded-[3.5rem] overflow-hidden shadow-2xl py-10 sm:py-12">

        {/* Tech Geometric Traces (Left Edge) */}
        <div className="absolute top-0 left-[-5%] w-[350px] h-full pointer-events-none z-0 opacity-90">
          <svg className="w-full h-full text-[#C6F135]" viewBox="0 0 200 800" fill="none" stroke="currentColor" strokeWidth="32" strokeLinejoin="round" strokeLinecap="round">
            {/* Top Tech Pattern */}
            <path d="M -50,50 L 120,220 L -50,390" />
            <path d="M 20,-50 L 180,110 L 20,270" />
            <path d="M -50,-50 L 80,80 L -50,210" fill="currentColor" stroke="none" />

            {/* Bottom Tech Pattern */}
            <path d="M -50,550 L 100,700 L 40,760 L 150,870" />
            <path d="M 20,650 L 80,710 L -50,840" fill="currentColor" stroke="none" />
            <path d="M 140,760 L 250,870" />
          </svg>
        </div>

        {/* Animated Perspective Grid Background */}
        <PerspectiveGridCanvas />

        <div className="mx-auto max-w-[1200px] px-5 sm:px-8 relative z-10">
          <Reveal className="max-w-3xl mx-auto text-center">
            <span className="font-mono text-xs uppercase tracking-widest text-lime">
              / Workflow
            </span>
            <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-white">
              From Model To Production In <span className="text-lime">Four Intelligent Steps</span>
            </h2>
          </Reveal>

          <div className="relative w-full max-w-[1000px] mx-auto mt-8 lg:mt-10">

            {/* Mobile layout (Stack) */}
            <div className="lg:hidden flex flex-col gap-6 relative z-10 w-full max-w-md mx-auto">
              {steps.map((s, i) => (
                <Reveal delay={0.1 * i} key={s.title}>
                  <div className="w-full rounded-3xl p-8 shadow-xl relative overflow-hidden" style={{ backgroundColor: s.bannerColor, color: s.textColor }}>
                    <div className="flex flex-row items-center justify-between mb-6 relative z-10">
                      <div className="relative w-16 h-16 flex items-center justify-center shrink-0 shadow-sm">
                        <div className="absolute inset-0 bg-[#C6F135] rounded-full translate-x-1 translate-y-1"></div>
                        <div className="absolute inset-0 bg-[#24382C] rounded-full"></div>
                        <span className="font-display text-3xl font-black relative z-10 text-white">{s.num}</span>
                      </div>
                      <img src={s.icon} alt={s.title} className="w-16 h-16 object-contain drop-shadow-md mix-blend-multiply" loading="lazy" />
                    </div>
                    <div className="relative z-10">
                      <h4 className="font-display font-bold text-xl mb-3">{s.title}</h4>
                      <p className="text-sm leading-relaxed opacity-90">{s.desc}</p>
                    </div>
                    <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full opacity-10 bg-current pointer-events-none"></div>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Desktop Layout (Horizontal Tabs) */}
            <div className="hidden lg:flex flex-col w-full max-w-[1000px] mx-auto relative">

              {/* Right Rail Background (Removed per user request) */}
              {/* <div className="absolute top-0 bottom-0 right-0 w-[140px] bg-black/20 rounded-[2rem] shadow-inner border border-white/5 z-0"></div> */}

              <div className="flex flex-col space-y-0 relative z-10 py-6">
                {steps.map((s, idx) => (
                  <Reveal delay={0.1 + (idx * 0.1)} key={s.title}>
                    <div className="flex flex-row w-full min-h-[120px] relative z-10 group" style={{ zIndex: 40 - idx }}>

                      {/* Left Spacer & Banner Wrapper (This slides left on hover!) */}
                      <div className="flex-1 flex flex-row transition-transform duration-300 group-hover:-translate-x-3">

                        {/* Spacer for staggering */}
                        <div className="shrink-0 transition-all duration-500" style={{ width: s.indentLeft }}></div>

                        {/* Colored Banner */}
                        <div
                          className={`flex-1 relative flex items-center rounded-l-2xl border-t border-white/10 ${s.shadowClass}`}
                          style={{ backgroundColor: s.bannerColor, color: s.textColor }}
                        >
                          {/* Diamond Icon */}
                          <div
                            className="absolute left-[-40px] top-1/2 -translate-y-1/2 w-[80px] h-[80px] rounded-xl rotate-45 shadow-[5px_5px_15px_rgba(0,0,0,0.15)] flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:rotate-[135deg]"
                            style={{ backgroundColor: s.diamondBg }}
                          >
                            <div className="-rotate-45 group-hover:-rotate-[135deg] transition-transform duration-500">
                              <img src={s.icon} alt={s.title} className="w-12 h-12 object-contain mix-blend-multiply" loading="lazy" />
                            </div>
                          </div>

                          {/* Text Content */}
                          <div className="pl-16 pr-8 py-4 w-full">
                            <span className="font-mono text-[10px] uppercase tracking-widest opacity-60 mb-1 block">Phase {s.num}</span>
                            <h4 className="font-display font-bold text-2xl mb-2">{s.title}</h4>
                            <p className="text-sm leading-relaxed opacity-90 max-w-xl">{s.desc}</p>
                          </div>
                        </div>
                      </div>

                      {/* Right Number Rail Cell (Static) */}
                      <div className="w-[140px] pr-8 shrink-0 flex flex-col items-center justify-center relative bg-transparent">

                        {/* Decorative Background Shape */}
                        <div className="absolute w-[68px] h-[68px] transition-transform duration-500 group-hover:scale-110 z-0 shadow-sm">
                          {/* Offset shadow (Lime) */}
                          <div className="absolute inset-0 bg-[#C6F135] rounded-full translate-x-1.5 translate-y-1.5"></div>
                          {/* Main background (Lighter Dark Green) */}
                          <div className="absolute inset-0 bg-[#24382C] rounded-full"></div>
                        </div>

                        <span className="font-display text-4xl font-black transition-colors duration-300 relative z-10 text-white group-hover:text-[#C6F135]">
                          {s.num}
                        </span>

                        {/* Bold Divider Line */}
                        {idx !== steps.length - 1 && (
                          <div className="absolute -bottom-[2px] left-1/2 -translate-x-1/2 w-12 h-[4px] bg-[#1A2E22] rounded-full z-20"></div>
                        )}
                      </div>

                    </div>
                  </Reveal>
                ))}
              </div>

            </div>
          </div>
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
      icon: mlEngineerIcon,
    },
    {
      role: "DevOps & Platform Teams",
      description: "Automate AI infrastructure provisioning, scaling, and monitoring with enterprise-grade reliability and security.",
      icon: devopsIcon,
    },
    {
      role: "Data Scientists",
      description: "Focus on building better models and analyzing results while we handle the complexities of production deployment.",
      icon: dataScientistIcon,
    },
    {
      role: "AI Product Managers",
      description: "Accelerate time-to-market for AI features with predictable deployment pipelines and clear performance metrics.",
      icon: pmIcon,
    },
  ];

  return (
    <section id="users" className="bg-[#F5F3EF] pt-16 sm:pt-20 pb-12 sm:pb-16 overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-16 lg:gap-8 items-center">

          {/* Left Column: Text */}
          <div className="max-w-xl z-20">
            <span className="font-mono text-xs uppercase tracking-widest text-[#1A2E22] font-bold mb-3 block">
              / Target Audience
            </span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold text-forest drop-shadow-sm leading-tight"
            >
              Built for <span className="text-lime">AI Pioneers</span>
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
          <div className="relative flex items-center justify-center h-[350px] sm:h-[400px] lg:h-[500px] w-full mt-10 lg:mt-0">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-[0.55] sm:scale-75 lg:scale-100 w-[600px] h-[600px] flex items-center justify-center">
              {/* Background Orbits */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 60, ease: "linear" }}
                className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-80"
              >
                <svg width="600" height="600" viewBox="0 0 600 600" fill="none" className="text-forest/70">
                  <circle cx="300" cy="300" r="110" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 8" />
                  <circle cx="300" cy="300" r="180" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.6" />
                  <circle cx="300" cy="300" r="250" stroke="currentColor" strokeWidth="1.5" strokeDasharray="2 12" />
                </svg>
              </motion.div>

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
                    <div className="absolute -left-6 -top-6 flex h-12 w-12 items-center justify-center rounded-full bg-forest border-2 border-lime/30 shadow-[0_0_15px_rgba(26,46,34,0.1)] group-hover:border-lime group-hover:bg-lime group-hover:shadow-[0_0_20px_rgba(198,241,53,0.4)] group-hover:scale-110 transition-all duration-300 overflow-hidden">
                      <div 
                        className="w-8 h-8 bg-lime group-hover:bg-forest transition-colors duration-300" 
                        style={{ 
                          WebkitMaskImage: `url(${user.icon})`,
                          WebkitMaskSize: 'contain',
                          WebkitMaskRepeat: 'no-repeat',
                          WebkitMaskPosition: 'center',
                          maskImage: `url(${user.icon})`,
                          maskSize: 'contain',
                          maskRepeat: 'no-repeat',
                          maskPosition: 'center'
                        }} 
                      />
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
      </div>
    </section>
  );
}

/* ---------- Features ---------- */
function Features() {
  const items = [
    { icon: featDeployIcon, title: "AI Deployment Automation", desc: "Deploy AI models with automated packaging, infrastructure provisioning, and environment configuration." },
    { icon: featOrchestrationIcon, title: "Inference Orchestration", desc: "Intelligently distribute inference requests to maximize speed, reliability, and resource efficiency." },
    { icon: featLifecycleIcon, title: "Model Lifecycle Management", desc: "Manage version history, staged releases, rollback capabilities, and controlled deployment strategies." },
    { icon: featScalingIcon, title: "Auto Scaling Engine", desc: "Automatically expand or reduce compute resources based on application demand and inference traffic." },
    { icon: featMonitorIcon, title: "Runtime Monitoring", desc: "Monitor deployment status, latency, throughput, uptime, and system health in real time." },
    { icon: featCloudIcon, title: "Cloud & Edge Deployment", desc: "Deploy AI applications seamlessly across public cloud, private infrastructure, edge devices, and hybrid environments." },
    { icon: featAnalyticsIcon, title: "Infrastructure Analytics", desc: "Visualize deployment performance through operational dashboards, usage trends, infrastructure metrics, and deployment success insights." },
    { icon: featSecurityIcon, title: "Enterprise Security", desc: "Support secure deployment pipelines with controlled access, deployment validation, and enterprise-ready operational governance." },
  ];
  return (
    <section id="features" className="relative bg-[#F5F3EF] px-4 sm:px-6 lg:px-8 pt-4 pb-4 sm:pb-8">
      {/* Dark background matching exactly the Hero section's width and border radius */}
      <div className="relative w-full bg-forest rounded-[2.5rem] sm:rounded-[3.5rem] overflow-hidden py-8 sm:py-10 text-paper">
        <div className="absolute inset-0 bg-grid-dark opacity-40 pointer-events-none" />
        <div className="absolute top-0 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-lime/5 blur-[100px] pointer-events-none" />

        {/* Tech Geometric Traces (Left Edge) */}
        <div className="absolute top-0 left-[-5%] w-[350px] h-full pointer-events-none z-0 opacity-90">
          <svg className="w-full h-full text-[#C6F135]" viewBox="0 0 200 800" fill="none" stroke="currentColor" strokeWidth="32" strokeLinejoin="round" strokeLinecap="round">
            {/* Top Tech Pattern */}
            <path d="M -50,50 L 120,220 L -50,390" />
            <path d="M 20,-50 L 180,110 L 20,270" />
            <path d="M -50,-50 L 80,80 L -50,210" fill="currentColor" stroke="none" />

            {/* Bottom Tech Pattern */}
            <path d="M -50,550 L 100,700 L 40,760 L 150,870" />
            <path d="M 20,650 L 80,710 L -50,840" fill="currentColor" stroke="none" />
            <path d="M 140,760 L 250,870" />
          </svg>
        </div>

        {/* Animated Perspective Grid Background */}
        <PerspectiveGridCanvas />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 z-10">
          <Reveal className="max-w-3xl mx-auto text-center">
            <span className="font-mono text-xs uppercase tracking-widest text-lime">
              / Platform Capabilities
            </span>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl lg:text-6xl font-bold">
              Everything Needed For <span className="text-lime">Production AI</span>
            </h2>
          </Reveal>

          {/* 3D Carousel Container */}
          <div
            className="relative mt-6 h-[400px] sm:h-[520px] w-full flex items-center justify-center overflow-hidden"
            style={{ perspective: '1200px' }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-[0.5] sm:scale-[0.7] md:scale-[0.85] flex items-center justify-center w-full h-full">
              {/* Glowing 3D Floor Grid */}
              <div
                className="absolute bottom-[-120px] w-[800px] h-[800px] rounded-full flex items-center justify-center opacity-60 pointer-events-none"
                style={{ transform: 'rotateX(75deg)' }}
              >
                <div className="absolute inset-0 rounded-full border border-lime/10 shadow-[inset_0_0_80px_rgba(198,241,53,0.1)]" />
                <div className="absolute w-[800px] h-[800px] rounded-full border border-lime/20 border-dashed" />
                <div className="absolute w-[600px] h-[600px] rounded-full border border-lime/30" />
                <div className="absolute w-[300px] h-[300px] rounded-full border-2 border-lime bg-lime/10 shadow-[0_0_100px_rgba(198,241,53,0.5)]" />
              </div>

              {/* Rotating Carousel */}
              <motion.div
                animate={{ rotateY: [0, -360] }}
                transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
                className="relative w-[340px] h-[550px] flex items-center justify-center"
                style={{ transformStyle: 'preserve-3d' }}
              >
                {items.map((c, i) => {
                  const rotateY = i * (360 / items.length);
                  return (
                    <div
                      key={c.title}
                      className="absolute w-[320px] h-[360px] rounded-[1.5rem] bg-forest/90 border-2 border-lime/30 shadow-[0_0_30px_rgba(198,241,53,0.15)] backdrop-blur-md p-8 flex flex-col items-center justify-center text-center group transition-colors hover:border-lime hover:shadow-[0_0_60px_rgba(198,241,53,0.5)] backface-hidden"
                      style={{
                        transform: `rotateY(${rotateY}deg) translateZ(540px)`,
                        backfaceVisibility: 'hidden',
                      }}
                    >
                      <div className="flex h-24 w-24 items-center justify-center rounded-full bg-forest border border-lime/50 mb-6 shadow-[0_0_20px_rgba(198,241,53,0.3)] group-hover:scale-110 group-hover:border-lime group-hover:shadow-[0_0_40px_rgba(198,241,53,0.7)] transition-all duration-500 overflow-hidden shrink-0">
                        <img src={c.icon} alt={c.title} className="w-14 h-14 object-contain" width="56" height="56" loading="lazy" />
                      </div>
                      <h3 className="font-display text-xl font-bold text-paper mb-3 group-hover:text-lime transition-colors">{c.title}</h3>
                      <p className="text-sm text-paper/70 leading-relaxed">{c.desc}</p>

                      {/* Decorative corner accents */}
                      <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-lime/40 rounded-tl-[1.5rem] opacity-0 group-hover:opacity-100 transition-opacity" />
                      <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-lime/40 rounded-br-[1.5rem] opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  );
                })}
              </motion.div>
            </div>
          </div>
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
    avatar: testi1,
  },
  {
    quote: "Deploying AI models used to take days of infrastructure setup. Now it's a matter of minutes with zero downtime.",
    trust: "Their automated pipeline takes away all compliance and scaling headaches instantly.",
    name: "Marcus Vance",
    role: "Lead ML Architect",
    company: "Vertex Grid Systems",
    avatar: testi2,
  },
  {
    quote: "The deep telemetry logs gave us immediate visibility into token latency and model drift in real time.",
    trust: "A must-have control center for any production-level deep learning product.",
    name: "Elena Rostova",
    role: "Head of AI Operations",
    company: "Edge Intelligence",
    avatar: testi3,
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
    <section id="testimonials" className="relative pt-4 pb-10 sm:pt-6 sm:pb-12 bg-[#F5F3EF] overflow-hidden">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">

        {/* Section Title */}
        <Reveal className="mb-14 text-center md:text-left">
          <span className="font-mono text-xs uppercase tracking-widest text-[#1A2E22] font-bold">
            / Customer Success
          </span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-forest">
            Trusted By <span className="text-lime">Top Teams</span>
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
                  className={`relative w-24 h-32 rounded-2xl overflow-hidden border-2 transition-all duration-500 hover:scale-105 shrink-0 ${isActive
                    ? "border-[#1A2E22] shadow-[0_0_20px_rgba(26,46,34,0.4)] scale-110 z-10"
                    : "border-transparent opacity-60 hover:opacity-90"
                    }`}
                >
                  <img src={t.avatar} alt={t.name} className="w-full h-full object-cover" width="150" height="150" loading="lazy" />
                  {isActive && (
                    <div className="absolute inset-0 border-2 border-[#1A2E22] rounded-2xl" />
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



/* ---------- FAQ ---------- */
function FAQ() {
  const items = [
    {
      q: "What is OriginSearch?",
      a: "OriginSearch is an AI deployment platform that enables organizations to deploy, manage, monitor, and scale AI models and applications across production environments.",
    },
    {
      q: "Who can use OriginSearch?",
      a: "The platform is built for AI engineers, MLOps professionals, DevOps teams, cloud architects, SaaS companies, and enterprise technology organizations.",
    },
    {
      q: "Does the platform support cloud deployment?",
      a: "Yes. OriginSearch is designed for cloud, edge, and hybrid deployment strategies, providing flexibility across modern infrastructure environments.",
    },
    {
      q: "Can I manage multiple AI models?",
      a: "Absolutely. The platform supports model versioning, deployment history, rollback capabilities, and lifecycle management for multiple AI services.",
    },
    {
      q: "How does auto scaling work?",
      a: "OriginSearch continuously monitors workload demand and automatically adjusts infrastructure resources to maintain optimal performance and cost efficiency.",
    },
    {
      q: "Is runtime monitoring included?",
      a: "Yes. Real-time monitoring provides visibility into deployment health, inference latency, resource utilization, uptime, and operational performance.",
    },
  ];
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="relative bg-[#F5F3EF] py-16 sm:py-24 border-b border-[#1A2E22]/10 overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 relative">

        {/* Giant Question Mark Graphic */}
        <div
          className="absolute top-0 right-0 opacity-10 pointer-events-none text-[16rem] md:text-[18rem] lg:text-[20rem] font-display font-black leading-none select-none text-transparent -mt-16 md:-mt-24 lg:-mt-28 -mr-6 md:mr-4 lg:mr-12"
          style={{ WebkitTextStroke: '3px #1A2E22' }}
        >
          ?
        </div>

        <div className="relative z-10 mb-16">
          <Reveal>
            <span className="font-mono text-xs uppercase tracking-widest text-[#1A2E22] font-bold block mb-3">
              / FAQ
            </span>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold text-forest leading-[1.1] mb-6 tracking-tight">
              Frequently <span className="text-lime">Asked Questions</span>
            </h2>
            <p className="text-[#4B5563] mb-10 text-sm sm:text-base leading-relaxed max-w-lg">
              Find quick answers to common questions below. Need more help? Contact us anytime for further assistance!
            </p>
          </Reveal>
        </div>

        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
          {items.map((it, i) => {
            const isOpen = open === i;
            return (
              <div key={it.q} className="flex flex-col">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center gap-4 p-2 sm:p-3 text-left group bg-white hover:bg-[#F5F3EF] rounded-xl transition-colors border border-[#1A2E22] shadow-sm hover:shadow-md"
                >
                  <div className="relative flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center z-10 transition-transform duration-500 group-hover:scale-110 shadow-sm">
                    {/* Offset shadow (Lime) */}
                    <div className="absolute inset-0 bg-[#C6F135] rounded-full translate-x-1 translate-y-1"></div>
                    {/* Main background (Dark Green) */}
                    <div className="absolute inset-0 bg-[#1A2E22] rounded-full"></div>
                    <span className="relative z-10 font-display font-black text-xl text-white group-hover:text-[#C6F135] transition-colors duration-300">
                      {i + 1}
                    </span>
                  </div>

                  <span className={`flex-1 font-display text-base sm:text-lg font-bold transition-colors ${isOpen ? 'text-[#1A2E22]' : 'text-[#1A2E22]/80 group-hover:text-[#1A2E22]'}`}>
                    {it.q}
                  </span>

                  <span className="shrink-0 text-3xl font-light text-[#1A2E22] leading-none opacity-50 px-4 group-hover:opacity-100 transition-opacity">
                    {isOpen ? "×" : "+"}
                  </span>
                </button>

                <motion.div
                  initial={false}
                  animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="pl-16 sm:pl-22 pr-6 pb-6 pt-4">
                    <p className="text-sm sm:text-base text-[#1A2E22]/80 leading-relaxed font-medium">
                      {it.a}
                    </p>
                  </div>
                </motion.div>
              </div>
            );
          })}
        </div>

        {/* Action Button moved to bottom right */}
        <div className="mt-12 flex justify-end relative z-10">
          <Reveal delay={0.2}>
            <a href="#contact" className="inline-flex items-center gap-4 bg-[#C6F135] text-[#1A2E22] rounded-full p-2 pl-8 hover:scale-[1.02] active:scale-95 transition-transform shadow-md group">
              <span className="font-bold text-sm">Book a Free Call</span>
              <div className="w-10 h-10 rounded-full bg-[#1A2E22] text-[#C6F135] flex items-center justify-center shadow-inner group-hover:bg-black transition-colors">
                <ArrowRight size={18} strokeWidth={2.5} />
              </div>
            </a>
          </Reveal>
        </div>

      </div>
    </section>
  );
}

/* ---------- CTA ---------- */
function CTA() {
  return (
    <section id="cta" className="relative bg-[#F5F3EF] px-4 sm:px-6 lg:px-8 pb-16 sm:pb-24 pt-24 sm:pt-32">
      <div
        className="w-full relative z-10 bg-[#1A2E22] rounded-[2rem] sm:rounded-[3.5rem] shadow-2xl flex flex-col md:flex-row items-stretch bg-cover bg-center"
        style={{ backgroundImage: `url(${ctaBg})` }}
      >


        {/* Left Side Content */}
        <div className="flex-1 py-10 px-6 sm:py-14 sm:pl-20 sm:pr-12 lg:py-16 lg:pl-28 lg:pr-16 relative z-10 flex flex-col justify-center">
          <Reveal>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-4xl font-bold text-[#F5F3EF] leading-tight mb-5">
              Start Your <span className="text-[#C6F135]">AI Journey</span><br /> with OriginSearch Today!
            </h2>
            <p className="text-[#F5F3EF]/90 text-sm sm:text-base mb-8 leading-relaxed pr-4 md:pr-0 font-medium">
              Deploy, manage, and scale your AI models in minutes. Experience the unified platform built for modern enterprise workloads.
            </p>
            <a href="#contact" className="inline-flex items-center gap-4 bg-[#C6F135] hover:bg-[#b5e022] text-[#1A2E22] rounded-full p-2 pl-8 hover:scale-[1.02] active:scale-95 transition-transform shadow-md group max-w-max pointer-events-auto">
              <span className="font-bold text-sm">Discover more</span>
              <div className="w-10 h-10 rounded-full bg-[#1A2E22] text-[#C6F135] flex items-center justify-center shadow-inner group-hover:bg-black transition-colors">
                <ArrowRight size={18} strokeWidth={2.5} />
              </div>
            </a>
          </Reveal>
        </div>

        {/* Right Side Image (Popping out of container) */}
        <div className="w-full md:w-[40%] lg:w-[45%] h-[280px] md:h-auto relative pointer-events-none">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 md:translate-x-0 md:left-auto md:right-4 lg:right-8 w-full max-w-[450px] md:w-auto md:max-w-none h-[125%] md:h-[135%] flex justify-center md:justify-end items-end z-20">
            {/* Subtle lime glow behind the image */}
            <div className="absolute bottom-0 right-1/4 w-[200px] h-[200px] bg-[#C6F135]/20 blur-[60px] rounded-full pointer-events-none" />
            <img
              src={ctaTeam}
              alt="OriginSearch Engineering Team"
              className="relative z-10 w-auto h-full object-contain object-bottom drop-shadow-2xl"
              width="800"
              height="600"
              loading="lazy"
            />
          </div>
        </div>

      </div>
    </section>
  );
}

/* ---------- Cloudflare Turnstile ---------- */
function TurnstileWidget({ siteKey }: { siteKey: string }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadTurnstile = () => {
      const turnstile = (window as any).turnstile;
      if (turnstile && containerRef.current) {
        // Clear any existing widget first
        containerRef.current.innerHTML = '';
        turnstile.render(containerRef.current, {
          sitekey: siteKey,
          theme: 'light',
        });
      }
    };

    if ((window as any).turnstile) {
      loadTurnstile();
    } else {
      const scriptId = 'cf-turnstile-script';
      if (!document.getElementById(scriptId)) {
        const script = document.createElement('script');
        script.id = scriptId;
        script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';
        script.async = true;
        script.defer = true;
        script.onload = loadTurnstile;
        document.head.appendChild(script);
      } else {
        // Script is loading, wait for it
        const checkInterval = setInterval(() => {
          if ((window as any).turnstile) {
            clearInterval(checkInterval);
            loadTurnstile();
          }
        }, 100);
      }
    }
  }, [siteKey]);

  return <div ref={containerRef} className="mt-2 min-h-[65px]" />;
}

/* ---------- Contact ---------- */
function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  return (
    <section id="contact" className="relative bg-[#F5F3EF] py-24 sm:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 relative z-10 grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

        {/* Left Side: Flat Form Area */}
        <div className="flex flex-col justify-center">
          <Reveal>
            <span className="font-mono text-xs uppercase tracking-widest text-[#1A2E22] font-bold block mb-3">
              / CONTACT US
            </span>
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold text-forest leading-[1.1] mb-6 tracking-tight">
              Get In <span className="text-lime">Touch</span>
            </h2>
            <p className="text-[#4B5563] mb-10 text-sm sm:text-base leading-relaxed max-w-lg">
              Have a question or want to deploy your AI with confidence? Send us a message and our team will get back to you shortly!
            </p>

            <form
              onSubmit={async (e) => {
                e.preventDefault();
                setStatus("sending");
                const form = e.target as HTMLFormElement;
                const data = new FormData(form);
                try {
                  const response = await fetch("https://formspree.io/f/xpqgvlzg", {
                    method: "POST",
                    body: data,
                    headers: { Accept: "application/json" },
                  });
                  if (response.ok) {
                    setStatus("sent");
                    form.reset();
                    setTimeout(() => setStatus("idle"), 3500);
                  } else {
                    setStatus("error");
                    setTimeout(() => setStatus("idle"), 3500);
                  }
                } catch (error) {
                  console.error("Form submission error", error);
                  setStatus("error");
                  setTimeout(() => setStatus("idle"), 3500);
                }
              }}
              className="space-y-4"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input required name="name" className="w-full rounded-none border border-[#1A2E22] bg-white px-6 py-3.5 text-sm text-[#111111] outline-none focus:ring-2 focus:ring-[#C6F135] transition-all placeholder:text-[#1A2E22]/50 font-medium" placeholder="Enter Name" />
                <input required name="email" className="w-full rounded-none border border-[#1A2E22] bg-white px-6 py-3.5 text-sm text-[#111111] outline-none focus:ring-2 focus:ring-[#C6F135] transition-all placeholder:text-[#1A2E22]/50 font-medium" placeholder="Enter Email" type="email" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input required name="subject" className="w-full rounded-none border border-[#1A2E22] bg-white px-6 py-3.5 text-sm text-[#111111] outline-none focus:ring-2 focus:ring-[#C6F135] transition-all placeholder:text-[#1A2E22]/50 font-medium" placeholder="Enter Subject" />
                <input name="phone" className="w-full rounded-none border border-[#1A2E22] bg-white px-6 py-3.5 text-sm text-[#111111] outline-none focus:ring-2 focus:ring-[#C6F135] transition-all placeholder:text-[#1A2E22]/50 font-medium" placeholder="Enter Phone" type="tel" />
              </div>

              <div>
                <textarea required name="message" rows={5} className="w-full resize-none rounded-none border border-[#1A2E22] bg-white px-6 py-3.5 text-sm text-[#111111] outline-none focus:ring-2 focus:ring-[#C6F135] transition-all placeholder:text-[#1A2E22]/50 font-medium" placeholder="Enter Message" />
              </div>

              <TurnstileWidget siteKey="0x4AAAAAADzs2UKqvY6f93cm" />

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className={`inline-flex items-center gap-4 text-[#1A2E22] rounded-full p-2 pl-8 transition-transform shadow-md group ${status === "sending" ? "bg-[#e5e7eb] opacity-70 cursor-not-allowed" : "bg-[#C6F135] hover:scale-[1.02] active:scale-95"}`}
                >
                  <span className="font-bold text-sm uppercase tracking-wider">
                    {status === "sending" ? "Sending..." : status === "sent" ? "Sent Successfully" : status === "error" ? "Error, Try Again" : "Send Message"}
                  </span>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center shadow-inner transition-colors ${status === "sending" ? "bg-gray-400 text-white" : "bg-[#1A2E22] text-[#C6F135] group-hover:bg-black"}`}>
                    <ArrowRight size={18} strokeWidth={2.5} />
                  </div>
                </button>
              </div>
            </form>
          </Reveal>
        </div>

        {/* Right Side: Info Blocks */}
        <div className="flex flex-col justify-center lg:pl-10">
          <Reveal delay={0.2}>
            <span className="font-mono text-xs uppercase tracking-widest text-[#1A2E22] font-bold flex items-center gap-2 mb-3">
              <PhoneCall className="w-4 h-4 text-[#C6F135]" /> / NEED ANY HELP?
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-[#1A2E22] mb-6">
              Contact <span className="text-[#C6F135]">Information</span>
            </h2>
            <p className="text-[#1A2E22]/70 text-sm sm:text-base leading-relaxed mb-10 max-w-md font-medium">
              Deploy your AI with confidence. Whether you need help setting up your first pipeline or scaling to thousands of endpoints, our team is ready to assist you.
            </p>

            <div className="space-y-6">
              {/* Block 1 */}
              <a href="tel:+12135552110" className="flex items-center gap-6 group cursor-pointer">
                <div className="relative flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center z-10 transition-transform duration-500 group-hover:scale-110 shadow-lg">
                  {/* Offset shadow (Lime) */}
                  <div className="absolute inset-0 bg-[#C6F135] rounded-full translate-x-1.5 translate-y-1.5"></div>
                  {/* Main background (Dark Green) */}
                  <div className="absolute inset-0 bg-[#1A2E22] rounded-full"></div>
                  <PhoneCall className="relative z-10 w-6 h-6 text-[#C6F135] group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-[#1A2E22] font-bold text-base mb-1">Phone Number</h4>
                  <p className="text-[#1A2E22]/70 text-sm font-medium">+1 (213) 555-2110</p>
                </div>
              </a>

              {/* Block 2 */}
              <a href="mailto:info@originsearch.one" className="flex items-center gap-6 group cursor-pointer">
                <div className="relative flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center z-10 transition-transform duration-500 group-hover:scale-110 shadow-lg">
                  {/* Offset shadow (Lime) */}
                  <div className="absolute inset-0 bg-[#C6F135] rounded-full translate-x-1.5 translate-y-1.5"></div>
                  {/* Main background (Dark Green) */}
                  <div className="absolute inset-0 bg-[#1A2E22] rounded-full"></div>
                  <Mail className="relative z-10 w-6 h-6 text-[#C6F135] group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-[#1A2E22] font-bold text-base mb-1">Email Address</h4>
                  <p className="text-[#1A2E22]/70 text-sm font-medium">info@originsearch.one</p>
                </div>
              </a>

              {/* Block 3 */}
              <a href="https://www.google.com/maps/search/?api=1&query=601+W+5th+Street,+Los+Angeles" target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 group cursor-pointer">
                <div className="relative flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center z-10 transition-transform duration-500 group-hover:scale-110 shadow-lg">
                  {/* Offset shadow (Lime) */}
                  <div className="absolute inset-0 bg-[#C6F135] rounded-full translate-x-1.5 translate-y-1.5"></div>
                  {/* Main background (Dark Green) */}
                  <div className="absolute inset-0 bg-[#1A2E22] rounded-full"></div>
                  <MapPin className="relative z-10 w-6 h-6 text-[#C6F135] group-hover:text-white transition-colors duration-300" strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-[#1A2E22] font-bold text-base mb-1">Address</h4>
                  <p className="text-[#1A2E22]/70 text-sm font-medium">601 W 5th Street, Los Angeles</p>
                </div>
              </a>
            </div>
          </Reveal>
        </div>

      </div>
    </section>
  );
}



/* ---------- Tawk.to Chat ---------- */
function TawkChat() {
  useEffect(() => {
    const loadTawk = () => {
      if (document.getElementById('tawk-script')) return;
      const s1 = document.createElement("script");
      const s0 = document.getElementsByTagName("script")[0];
      s1.async = true;
      s1.src = 'https://embed.tawk.to/65c3b9b40ff6390009139f7a/1hlvbfd9o'; // Example/Placeholder ID
      s1.charset = 'UTF-8';
      s1.setAttribute('crossorigin', '*');
      s1.id = 'tawk-script';
      if (s0?.parentNode) {
        s0.parentNode.insertBefore(s1, s0);
      } else {
        document.body.appendChild(s1);
      }

      // Remove event listeners once loaded
      ['scroll', 'mousemove', 'touchstart', 'keydown'].forEach(event => {
        window.removeEventListener(event, loadTawk);
      });
    };

    // Add event listeners to load on first interaction
    ['scroll', 'mousemove', 'touchstart', 'keydown'].forEach(event => {
      window.addEventListener(event, loadTawk, { passive: true, once: true });
    });

    return () => {
      ['scroll', 'mousemove', 'touchstart', 'keydown'].forEach(event => {
        window.removeEventListener(event, loadTawk);
      });
    };
  }, []);

  return null;
}

/* ---------- Page ---------- */
function LandingPage() {
  return (
    <div className="relative">
      <TawkChat />
      <CursorGlow />
      <Navbar />
      <main>
        <Hero />
        <StatsBar />
        <About />
        <CorePillars />
        <HowItWorks />
        <TargetUsers />
        <Features />
        <Testimonials />
        <Pricing />
        <FAQ />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
