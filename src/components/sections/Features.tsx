import { motion } from "motion/react";
import { Rocket, Workflow, GitBranch, Gauge, Activity, Cloud, ShieldCheck, BarChart3 } from "lucide-react";
import { Reveal, Stagger, fadeUp } from "../ui/animations";

export function Features() {
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
