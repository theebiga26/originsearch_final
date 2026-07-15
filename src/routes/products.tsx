import React, { useState, useEffect } from 'react';
import { createFileRoute, Link } from '@tanstack/react-router';
import logoSrc from '../assets/Logo.svg';
import { PerspectiveGridCanvas, CursorGlow } from './index';

// Specialized Micro-Icons
const ArrowUpRight = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
  </svg>
);

const ShieldCheck = () => (
  <svg className="w-4 h-4 text-lime mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

export const Route = createFileRoute('/products')({
  component: OriginSearchPortal,
});

export default function OriginSearchPortal() {
  const [activeMatrix, setActiveMatrix] = useState<string>('Dynamo');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const roadmapMatrix = [
    {
      id: 'Dynamo',
      name: 'NVIDIA Dynamo',
      role: 'Primary Deployment Engine',
      purpose: 'Serve large language models and reasoning models across distributed GPU clusters using NVIDIA next-generation inference platform.',
      tasks: ['Distributed inference orchestration', 'Intelligent GPU routing', 'Multi-node inference execution', 'Dynamic GPU resource allocation', 'High-throughput AI serving']
    },
    {
      id: 'Triton',
      name: 'NVIDIA Triton Server',
      role: 'Production Model Serving',
      purpose: 'Primary production layer responsible for standard framework execution, concurrent configuration pipelines, and active state mapping.',
      tasks: ['Dynamic request batching', 'Multi-framework inference runtime', 'Concurrent model cluster processing', 'Automated engine version tracking', 'Live telemetry monitoring']
    },
    {
      id: 'TensorRT',
      name: 'NVIDIA TensorRT-LLM',
      role: 'Inference Optimization',
      purpose: 'Optimize Large Language Models before live production staging to slash latency windows.',
      tasks: ['Optimize transformer topologies', 'Drastically reduce TTFT metrics', 'Maximize sequence throughput', 'Lower global GPU storage footprints', 'Enhance multi-tenant node efficiency']
    },
    {
      id: 'NIM',
      name: 'NVIDIA NIM',
      role: 'Standardized Microservices',
      purpose: 'Provide enterprise-grade standardized AI deployment blueprinted containers.',
      tasks: ['Deploy secure isolated API pods', 'Standardize environment baselines', 'Accelerate infrastructure setup', 'Streamline operational runtimes']
    }
  ];

  return (
    <div className="min-h-screen bg-paper text-[#1e293b] font-sans antialiased selection:bg-lime selection:text-[#1A2E22] px-4 sm:px-6 lg:px-8 pt-28 pb-8 relative overflow-hidden">
      <CursorGlow />

      {/* Floating Header Pill */}
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4 pointer-events-none">
        <div
          className={`pointer-events-auto w-full max-w-5xl transition-all duration-300 ${scrolled
              ? "bg-[rgba(245,243,239,0.92)] shadow-[0_8px_32px_-8px_rgba(17,17,17,0.18)] border border-[#1A2E22]/10"
              : "bg-[rgba(245,243,239,0.82)] border border-[#1A2E22]/20"
            } backdrop-blur-[14px] rounded-full`}
        >
          <div className="flex h-16 items-center justify-between px-6">
            <Link to="/" className="flex items-center shrink-0 hover:opacity-80 transition-opacity">
              <img src={logoSrc} alt="OriginSearch Logo" className="h-9 w-auto object-contain" />
            </Link>

            <nav className="hidden lg:flex items-center gap-2">
              <Link
                to="/"
                className="px-3 py-1.5 text-[13px] font-medium text-[#1A2E22]/70 hover:text-[#1A2E22] transition-colors rounded-full hover:bg-[#1A2E22]/5"
              >
                Home
              </Link>
              <a
                href="#overview"
                className="px-3 py-1.5 text-[13px] font-medium text-[#1A2E22]/70 hover:text-[#1A2E22] transition-colors rounded-full hover:bg-[#1A2E22]/5"
              >
                Overview
              </a>
              <a
                href="#architecture"
                className="px-3 py-1.5 text-[13px] font-medium text-[#1A2E22]/70 hover:text-[#1A2E22] transition-colors rounded-full hover:bg-[#1A2E22]/5"
              >
                How It Works
              </a>
              <a
                href="#roadmap"
                className="px-3 py-1.5 text-[13px] font-medium text-[#1A2E22]/70 hover:text-[#1A2E22] transition-colors rounded-full hover:bg-[#1A2E22]/5"
              >
                Features
              </a>
            </nav>

            <a
              href="https://app.originsearch.one/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-lime hover:bg-[#b5e022] text-[#1A2E22] font-mono font-bold text-xs px-5 py-2.5 rounded-full flex items-center space-x-1 transition-all"
            >
              <span>Get Started</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </header>

      {/* Main Container Layer mimicking screenshot canvas viewports */}
      <main className="space-y-6 w-full">

        {/* Section 1: Command Center Hero Block */}
        <section id="overview" className="bg-forest text-white rounded-[2.5rem] sm:rounded-[3.5rem] border border-white/10 relative overflow-visible shadow-2xl flex flex-col lg:flex-row items-center min-h-[55vh]">
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

          {/* Background glow for the graphic */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-lime/20 blur-[120px] rounded-full pointer-events-none z-0" />

          {/* Left Column (Content) */}
          <div className="w-full lg:w-[55%] z-10 px-8 sm:px-16 lg:px-24 pt-10 pb-10 lg:pt-12 lg:pb-12">
            <div className="inline-flex items-center gap-2 rounded-full border border-lime/25 bg-lime/8 px-4 py-1.5 text-xs font-mono uppercase tracking-widest text-lime backdrop-blur-sm shadow-[0_0_15px_rgba(198,241,53,0.15)] mb-4">
              <span className="text-[10px] font-mono tracking-widest uppercase">// ORIGINSEARCH AI RUNTIME</span>
            </div>

            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-[5rem] font-bold leading-[1.05] tracking-tight text-white max-w-2xl">
              Deploy AI Faster.<br />
              <span className="text-lime">Scale Without Limits.</span>
            </h1>

            <p className="mt-4 max-w-xl text-lg text-white/70 leading-relaxed font-light">
              OriginSearch.one is an AI deployment platform that transforms trained models into production-ready intelligence. Deploy, orchestrate, monitor, and scale AI applications across cloud, edge, and hybrid environments through one intelligent deployment ecosystem.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-6 ml-1 sm:ml-4">
              <a
                href="https://app.originsearch.one/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-lime hover:bg-[#b5e022] text-[#1A2E22] text-xs font-mono font-bold px-6 py-3.5 rounded-xl flex items-center space-x-2 transition-all shadow-lg shadow-lime/10"
              >
                <span>Get Started</span>
                <ArrowUpRight />
              </a>

              {/* Trusted profile bubbles */}
              <div className="hidden sm:flex items-center space-x-2 border-l border-white/10 pl-6">
                <div className="flex -space-x-2">
                  <img className="w-7 h-7 rounded-full border border-forest object-cover grayscale" src="https://i.pravatar.cc/100?img=12" alt="User 1" width="28" height="28" loading="lazy" />
                  <img className="w-7 h-7 rounded-full border border-forest object-cover grayscale" src="https://i.pravatar.cc/100?img=22" alt="User 2" width="28" height="28" loading="lazy" />
                  <img className="w-7 h-7 rounded-full border border-forest object-cover grayscale" src="https://i.pravatar.cc/100?img=33" alt="User 3" width="28" height="28" loading="lazy" />
                </div>
                <span className="text-[10px] font-mono font-bold tracking-wider text-gray-400 uppercase">TRUSTED BY AI TEAMS</span>
              </div>
            </div>
          </div>

          {/* Right Column (Graphic) */}
          <div className="w-full lg:w-[45%] z-10 flex justify-center py-8 lg:py-10">
            <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-full border border-[#233d2e] flex items-center justify-center bg-[#0e1b14]/50 backdrop-blur-sm">

              {/* Concentric rings and glowing matrix dots */}
              <div className="absolute inset-4 rounded-full border border-[#1c3327] border-dashed animate-[spin_120s_linear_infinite]" />
              <div className="absolute inset-12 rounded-full border-2 border-lime/20 flex items-center justify-center">
                <div className="w-36 h-36 rounded-full bg-gradient-to-br from-[#1b3a27] to-[#0e1b14] border border-[#2e5c3e] shadow-inner shadow-lime/5 flex flex-col items-center justify-center p-4 text-center">
                  <span className="text-[9px] font-mono text-lime tracking-widest uppercase">CORE OPERATIONAL ENGINE</span>
                  <span className="text-xs font-mono font-bold mt-1 text-white">NVIDIA H100</span>
                  <span className="text-[9px] font-mono text-gray-500 mt-2">ACTIVE CLUSTER</span>
                </div>
              </div>

              {/* Orbiting Tech Nodes */}
              <div className="absolute top-0 w-8 h-8 rounded-full bg-[#1c3327] border border-lime/40 flex items-center justify-center text-[10px] shadow-md">⚙</div>
              <div className="absolute right-2 top-1/3 w-8 h-8 rounded-full bg-[#1c3327] border border-lime/40 flex items-center justify-center text-[10px] shadow-md">▲</div>
              <div className="absolute bottom-4 right-12 w-8 h-8 rounded-full bg-[#1c3327] border border-lime/40 flex items-center justify-center text-[10px] shadow-md">◆</div>
              <div className="absolute bottom-4 left-12 w-8 h-8 rounded-full bg-[#1c3327] border border-lime/40 flex items-center justify-center text-[10px] shadow-md">✦</div>
              <div className="absolute left-0 top-1/3 w-8 h-8 rounded-full bg-[#1c3327] border border-lime/40 flex items-center justify-center text-[10px] shadow-md">●</div>
            </div>
          </div>
        </section>

        {/* Section 2: Unified Foundation Core Architecture Hub (As per snapshot 3) */}
        <section id="architecture" className="bg-white rounded-[32px] px-8 sm:px-16 lg:px-24 py-8 md:py-12 border border-white/60 shadow-sm">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[10px] font-mono tracking-widest font-bold text-gray-400 uppercase">// PLATFORM ARCHITECTURE</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-black tracking-tight mt-1">
              A Unified Foundation For <span className="text-lime font-bold">AI Workloads</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Left Big Focal Circle Node */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="w-72 h-72 rounded-full bg-[#14251c] text-white p-8 flex flex-col justify-center items-center text-center relative border-[6px] border-lime shadow-xl">
                <span className="text-lg font-bold font-mono tracking-wide">Core Infrastructure</span>
                <span className="text-[10px] font-mono font-bold text-lime mt-1 uppercase tracking-wider">The Operational Fabric for Enterprise AI</span>
                <p className="text-[11px] text-gray-400 mt-4 leading-relaxed max-w-xs">
                  Everything you need to orchestrate, scale, and monitor production AI workloads from a single pane of glass.
                </p>
              </div>
            </div>

            {/* Right Spoke Item List */}
            <div className="lg:col-span-7 space-y-6 max-w-md mx-auto lg:mx-0">

              <div className="flex items-center space-x-4 group">
                <div className="w-10 h-10 rounded-full bg-[#14251c] text-lime font-bold text-sm flex items-center justify-center shadow-md">01</div>
                <div>
                  <h4 className="font-bold text-black text-sm uppercase">AI Deployment Layer</h4>
                  <p className="text-xs text-gray-500 mt-0.5">Ship models to production environments securely with optimized resource maps.</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 group">
                <div className="w-10 h-10 rounded-full bg-[#14251c] text-lime font-bold text-sm flex items-center justify-center shadow-md">02</div>
                <div>
                  <h4 className="font-bold text-black text-sm uppercase">Infrastructure Automation</h4>
                  <p className="text-xs text-gray-500 mt-0.5">Provision modern parallel compute metrics, dynamic caches, and networking layers.</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 group">
                <div className="w-10 h-10 rounded-full bg-[#14251c] text-lime font-bold text-sm flex items-center justify-center shadow-md">03</div>
                <div>
                  <h4 className="font-bold text-black text-sm uppercase">Lifecycle Management</h4>
                  <p className="text-xs text-gray-500 mt-0.5">Track orchestration lineage logs, configuration instances, and rollout status indicators.</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 group">
                <div className="w-10 h-10 rounded-full bg-[#14251c] text-lime font-bold text-sm flex items-center justify-center shadow-md">04</div>
                <div>
                  <h4 className="font-bold text-black text-sm uppercase">Enterprise Monitoring</h4>
                  <p className="text-xs text-gray-500 mt-0.5">Complete deep end-to-end trace tracking on inference timelines and cluster states.</p>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* Section 3: NVIDIA SDK Matrix Control Room Layout */}
        <section id="roadmap" className="bg-forest text-white rounded-[32px] px-8 sm:px-16 lg:px-24 py-8 md:py-12 border border-white/10 relative overflow-hidden shadow-2xl">
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

          {/* Background glow for the content */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-lime/20 blur-[120px] rounded-full pointer-events-none z-0" />

          <div className="mb-10 relative z-10">
            <span className="text-[10px] font-mono text-lime tracking-widest block mb-1 uppercase">// PRODUCTION INFERENCE STACK</span>
            <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">NVIDIA SDK Integration Matrix</h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">

            {/* Left Nav Tabs Selector Block */}
            <div className="lg:col-span-4 flex flex-col gap-2">
              {roadmapMatrix.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveMatrix(item.id)}
                  className={`w-full text-left px-5 py-4 rounded-xl font-mono text-xs uppercase tracking-wider font-bold transition-all border ${activeMatrix === item.id
                      ? 'bg-lime text-[#1A2E22] border-lime shadow-md'
                      : 'bg-[#1b3125]/60 hover:bg-[#1b3125] text-gray-300 border-[#233d2e]'
                    }`}
                >
                  <div className="flex justify-between items-center">
                    <span>{item.name}</span>
                    <span className="text-[9px] opacity-60">→</span>
                  </div>
                </button>
              ))}
            </div>

            {/* Right Display Board Block */}
            <div className="lg:col-span-8 bg-[#0d1612] border border-[#233d2e] rounded-2xl p-6 md:p-8 min-h-[300px] flex flex-col justify-between">
              {roadmapMatrix.filter(m => m.id === activeMatrix).map((selected) => (
                <div key={selected.id} className="space-y-6">
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#1c3327] pb-4 mb-4">
                      <h4 className="text-lg font-extrabold text-lime uppercase font-mono">{selected.name}</h4>
                      <span className="text-[10px] font-mono tracking-widest font-bold bg-[#1b3125] text-gray-300 px-3 py-1 rounded border border-[#2d523e]">
                        {selected.role}
                      </span>
                    </div>

                    <p className="text-gray-400 text-xs leading-relaxed font-medium">
                      <span className="text-white block font-mono text-[10px] uppercase tracking-wider mb-1">Functional Objective:</span>
                      {selected.purpose}
                    </p>
                  </div>

                  <div>
                    <span className="text-white block font-mono text-[10px] uppercase tracking-wider mb-3">// PIPELINE EXECUTION TARGETS</span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {selected.tasks.map((task, idx) => (
                        <div key={idx} className="flex items-start text-xs text-gray-300 font-semibold bg-[#14251c]/50 p-2.5 rounded-lg border border-[#1b3125]">
                          <ShieldCheck />
                          <span>{task}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* Section 4: Target Infrastructure Grid Framework */}
        <section className="bg-white rounded-[32px] px-8 sm:px-16 lg:px-24 py-8 md:py-12 border border-white/60 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

            <div className="lg:col-span-6 space-y-4">
              <span className="text-[10px] font-mono font-bold text-gray-400 tracking-widest uppercase">// HARDWARE MATRIX JUSTIFICATION</span>
              <h3 className="text-2xl md:text-3xl font-extrabold text-black tracking-tight">Enterprise AWS GPU Runtimes</h3>
              <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
                OriginSearch cluster management profiles automate workload distribution blueprints efficiently across high-density nodes, removing CPU execution bottlenecks completely.
              </p>
            </div>

            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-[#f4f4ee] border border-gray-200 p-6 rounded-2xl hover:border-[#84cc16]/50 transition-all">
                <span className="text-xs font-mono font-bold tracking-wider text-black block border-b border-gray-300 pb-2 mb-2">AMAZON EC2 P5</span>
                <span className="text-xl font-black text-[#84cc16]">NVIDIA H100</span>
                <p className="text-[11px] text-gray-500 mt-2 leading-relaxed">Deployed to accelerate complex foundational enterprise transformer inference engines natively.</p>
              </div>

              <div className="bg-[#f4f4ee] border border-gray-200 p-6 rounded-2xl hover:border-[#84cc16]/50 transition-all">
                <span className="text-xs font-mono font-bold tracking-wider text-black block border-b border-gray-300 pb-2 mb-2">AMAZON EC2 P4D</span>
                <span className="text-xl font-black text-gray-700">NVIDIA A100</span>
                <p className="text-[11px] text-gray-500 mt-2 leading-relaxed">Utilized as high-bandwidth multi-tenant parallel scheduler instances safely.</p>
              </div>
            </div>

          </div>
        </section>

      </main>

      {/* Footer Ecosystem Blueprint */}
      <footer className="max-w-7xl mx-auto mt-12 text-[10px] font-mono text-gray-400 font-bold border-t border-gray-300/40 pt-6 text-center md:text-left">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© 2026 OriginSearch. All deployment systems configured for NVIDIA Inception Profile verification matrices.</p>
          <div className="flex space-x-4 uppercase tracking-wider">
            <span className="text-gray-600">OriginSearch.one</span>
            <span>//</span>
            <span className="text-gray-600 font-bold">Secure AI Infrastructure</span>
          </div>
        </div>
      </footer>

    </div>
  );
}
