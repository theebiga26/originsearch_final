import React, { useState } from 'react';
import { createFileRoute } from '@tanstack/react-router';
import { Link } from '@tanstack/react-router';
import logoSrc from '../assets/Logo_1.svg';

// Specialized Micro-Icons
const ArrowUpRight = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
  </svg>
);

const ShieldCheck = () => (
  <svg className="w-4 h-4 text-[#a3e635] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

export const Route = createFileRoute('/products')({
  component: OriginSearchPortal,
});

function OriginSearchPortal() {
  const [activeMatrix, setActiveMatrix] = useState<string>('Dynamo');

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
    <div className="min-h-screen bg-[#f4f4ee] text-[#1e293b] font-sans antialiased selection:bg-[#a3e635] selection:text-black p-4 md:p-8">
      
      {/* Platform Header Panel */}
      <header className="max-w-7xl mx-auto mb-6">
        <div className="bg-[#14251c] text-white rounded-full px-6 py-3 flex items-center justify-between shadow-lg border border-[#233d2e]">
          <Link to="/" className="flex items-center space-x-2 font-mono tracking-wider font-bold hover:opacity-80 transition-opacity">
            <img src={logoSrc} alt="OriginSearch Logo" className="h-10 w-auto object-contain" />
          </Link>
          
          <nav className="hidden lg:flex items-center space-x-8 text-xs font-mono uppercase tracking-widest text-gray-400">
            <Link to="/" className="hover:text-[#a3e635] transition-colors">Home</Link>
            <a href="#overview" className="text-white hover:text-[#a3e635] transition-colors">Overview</a>
            <a href="#architecture" className="hover:text-[#a3e635] transition-colors">How It Works</a>
            <a href="#roadmap" className="hover:text-[#a3e635] transition-colors">Features</a>
          </nav>

          <Link to="/" className="bg-[#a3e635] hover:bg-[#84cc16] text-[#0d1612] font-mono font-bold text-xs px-5 py-2 rounded-full flex items-center space-x-1 transition-all">
            <span>Get Started</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </header>

      {/* Main Container Layer mimicking screenshot canvas viewports */}
      <main className="max-w-7xl mx-auto space-y-6">
        
        {/* Section 1: Command Center Hero Block */}
        <section id="overview" className="bg-[#14251c] text-white rounded-[32px] p-8 md:p-16 border border-[#233d2e] relative overflow-hidden shadow-2xl">
          {/* Subtle Grid overlay gridlines */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#1b3125_1px,transparent_1px),linear-gradient(to_bottom,#1b3125_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center space-x-2 bg-[#22382b] border border-[#2e4d3b] rounded-full px-4 py-1">
                <span className="text-[10px] font-mono text-[#a3e635] tracking-widest uppercase">// ORIGINSEARCH AI RUNTIME</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
                Deploy AI Faster.<br />
                <span className="text-[#a3e635]">Scale Without Limits.</span>
              </h1>
              
              <p className="text-gray-400 text-sm md:text-base max-w-xl font-normal leading-relaxed">
                OriginSearch.one is an AI deployment platform that transforms trained models into production-ready intelligence. Deploy, orchestrate, monitor, and scale AI applications across cloud, edge, and hybrid environments through one intelligent deployment ecosystem.
              </p>

              <div className="pt-4 flex items-center space-x-6">
                <a href="https://app.originsearch.one/" target="_blank" rel="noopener noreferrer" className="bg-[#a3e635] hover:bg-[#84cc16] text-[#0d1612] text-xs font-mono font-bold px-6 py-3.5 rounded-xl flex items-center space-x-2 transition-all shadow-lg shadow-[#a3e635]/10">
                  <span>Explore the Platform</span>
                  <ArrowUpRight />
                </a>
                
                <Link to="/#contact" className="border border-[#2e4d3b] hover:bg-[#22382b] text-white text-xs font-mono font-bold px-6 py-3.5 rounded-xl flex items-center space-x-2 transition-all shadow-sm">
                  <span>Connect With Us</span>
                </Link>
                
                {/* Trusted profile bubbles */}
                <div className="hidden sm:flex items-center space-x-2 border-l border-[#233d2e] pl-6">
                  <div className="flex -space-x-2">
                    <div className="w-7 h-7 rounded-full bg-gray-700 border border-[#14251c]" />
                    <div className="w-7 h-7 rounded-full bg-gray-600 border border-[#14251c]" />
                    <div className="w-7 h-7 rounded-full bg-gray-500 border border-[#14251c]" />
                  </div>
                  <span className="text-[10px] font-mono font-bold tracking-wider text-gray-400 uppercase">TRUSTED BY AI TEAMS</span>
                </div>
              </div>
            </div>

            {/* Right Graphic Circle Command Display */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-full border border-[#233d2e] flex items-center justify-center bg-[#0e1b14]/50 backdrop-blur-sm">
                
                {/* Concentric rings and glowing matrix dots */}
                <div className="absolute inset-4 rounded-full border border-[#1c3327] border-dashed animate-[spin_120s_linear_infinite]" />
                <div className="absolute inset-12 rounded-full border-2 border-[#a3e635]/20 flex items-center justify-center">
                  <div className="w-36 h-36 rounded-full bg-gradient-to-br from-[#1b3a27] to-[#0e1b14] border border-[#2e5c3e] shadow-inner shadow-[#a3e635]/5 flex flex-col items-center justify-center p-4 text-center">
                    <span className="text-[9px] font-mono text-[#a3e635] tracking-widest uppercase">CORE OPERATIONAL ENGINE</span>
                    <span className="text-xs font-mono font-bold mt-1 text-white">NVIDIA H100</span>
                    <span className="text-[9px] font-mono text-gray-500 mt-2">ACTIVE CLUSTER</span>
                  </div>
                </div>

                {/* Orbiting Tech Nodes */}
                <div className="absolute top-0 w-8 h-8 rounded-full bg-[#1c3327] border border-[#a3e635]/40 flex items-center justify-center text-[10px] shadow-md">⚙</div>
                <div className="absolute right-2 top-1/3 w-8 h-8 rounded-full bg-[#1c3327] border border-[#a3e635]/40 flex items-center justify-center text-[10px] shadow-md">▲</div>
                <div className="absolute bottom-4 right-12 w-8 h-8 rounded-full bg-[#1c3327] border border-[#a3e635]/40 flex items-center justify-center text-[10px] shadow-md">◆</div>
                <div className="absolute bottom-4 left-12 w-8 h-8 rounded-full bg-[#1c3327] border border-[#a3e635]/40 flex items-center justify-center text-[10px] shadow-md">✦</div>
                <div className="absolute left-0 top-1/3 w-8 h-8 rounded-full bg-[#1c3327] border border-[#a3e635]/40 flex items-center justify-center text-[10px] shadow-md">●</div>
              </div>
            </div>

          </div>
        </section>

        {/* Section 2: Unified Foundation Core Architecture Hub (As per snapshot 3) */}
        <section id="architecture" className="bg-white rounded-[32px] p-8 md:p-12 border border-white/60 shadow-sm">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[10px] font-mono tracking-widest font-bold text-gray-400 uppercase">// PLATFORM ARCHITECTURE</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-black tracking-tight mt-1">
              A Unified Foundation For <span className="text-[#84cc16]">AI Workloads</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Big Focal Circle Node */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="w-72 h-72 rounded-full bg-[#14251c] text-white p-8 flex flex-col justify-center items-center text-center relative border-[6px] border-[#a3e635] shadow-xl">
                <span className="text-lg font-bold font-mono tracking-wide">Core Infrastructure</span>
                <span className="text-[10px] font-mono font-bold text-[#a3e635] mt-1 uppercase tracking-wider">The Operational Fabric for Enterprise AI</span>
                <p className="text-[11px] text-gray-400 mt-4 leading-relaxed max-w-xs">
                  Everything you need to orchestrate, scale, and monitor production AI workloads from a single pane of glass.
                </p>
              </div>
            </div>

            {/* Right Spoke Item List */}
            <div className="lg:col-span-7 space-y-6 max-w-md mx-auto lg:mx-0">
              
              <div className="flex items-center space-x-4 group">
                <div className="w-10 h-10 rounded-full bg-[#14251c] text-[#a3e635] font-bold text-sm flex items-center justify-center shadow-md">01</div>
                <div>
                  <h4 className="font-bold text-black text-sm uppercase">AI Deployment Layer</h4>
                  <p className="text-xs text-gray-500 mt-0.5">Ship models to production environments securely with optimized resource maps.</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 group">
                <div className="w-10 h-10 rounded-full bg-[#14251c] text-[#a3e635] font-bold text-sm flex items-center justify-center shadow-md">02</div>
                <div>
                  <h4 className="font-bold text-black text-sm uppercase">Infrastructure Automation</h4>
                  <p className="text-xs text-gray-500 mt-0.5">Provision modern parallel compute metrics, dynamic caches, and networking layers.</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 group">
                <div className="w-10 h-10 rounded-full bg-[#14251c] text-[#a3e635] font-bold text-sm flex items-center justify-center shadow-md">03</div>
                <div>
                  <h4 className="font-bold text-black text-sm uppercase">Lifecycle Management</h4>
                  <p className="text-xs text-gray-500 mt-0.5">Track orchestration lineage logs, configuration instances, and rollout status indicators.</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 group">
                <div className="w-10 h-10 rounded-full bg-[#14251c] text-[#a3e635] font-bold text-sm flex items-center justify-center shadow-md">04</div>
                <div>
                  <h4 className="font-bold text-black text-sm uppercase">Enterprise Monitoring</h4>
                  <p className="text-xs text-gray-500 mt-0.5">Complete deep end-to-end trace tracking on inference timelines and cluster states.</p>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* Section 3: NVIDIA SDK Matrix Control Room Layout */}
        <section id="roadmap" className="bg-[#14251c] text-white rounded-[32px] p-8 md:p-12 border border-[#233d2e] shadow-2xl">
          
          <div className="mb-10">
            <span className="text-[10px] font-mono text-[#a3e635] tracking-widest block mb-1 uppercase">// PRODUCTION INFERENCE STACK</span>
            <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">NVIDIA SDK Integration Matrix</h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Nav Tabs Selector Block */}
            <div className="lg:col-span-4 flex flex-col gap-2">
              {roadmapMatrix.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveMatrix(item.id)}
                  className={`w-full text-left px-5 py-4 rounded-xl font-mono text-xs uppercase tracking-wider font-bold transition-all border ${
                    activeMatrix === item.id 
                      ? 'bg-[#a3e635] text-[#0d1612] border-[#a3e635] shadow-md' 
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
                      <h4 className="text-lg font-extrabold text-[#a3e635] uppercase font-mono">{selected.name}</h4>
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
        <section className="bg-white rounded-[32px] p-8 md:p-12 border border-white/60 shadow-sm">
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
