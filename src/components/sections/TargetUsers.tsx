import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Users, Code, Terminal, BrainCircuit, Briefcase } from "lucide-react";
import { Reveal } from "../ui/animations";

export function TargetUsers() {
  const [activeTab, setActiveTab] = useState(0);

  const personas = [
    {
      id: "mlops",
      title: "MLOps Engineers",
      icon: Terminal,
      heading: "Automate the entire ML lifecycle",
      desc: "Stop wrestling with custom scripts and yaml. OriginSearch gives you a unified control plane to version, test, deploy, and scale models with enterprise guardrails built-in.",
      benefits: ["Automated CI/CD for ML", "Infrastructure as Code", "Zero-downtime rollouts"],
    },
    {
      id: "data-scientists",
      title: "Data Scientists",
      icon: BrainCircuit,
      heading: "Focus on models, not infrastructure",
      desc: "Push your models to production without needing to learn Kubernetes or cloud networking. We package your code, dependencies, and artifacts automatically.",
      benefits: ["Framework native deployment", "One-click endpoints", "Real-time drift monitoring"],
    },
    {
      id: "devops",
      title: "DevOps & SRE",
      icon: Code,
      heading: "Maintain reliable AI infrastructure",
      desc: "Gain deep observability into AI workloads. Setup auto-scaling rules, monitor GPU utilization, and ensure 99.99% uptime across all your deployments.",
      benefits: ["Unified telemetry", "GPU capacity management", "Elastic auto-scaling"],
    },
    {
      id: "enterprise",
      title: "IT Leaders",
      icon: Briefcase,
      heading: "Govern AI at enterprise scale",
      desc: "Bring AI into compliance. Manage role-based access, track inference costs, and deploy in secure private networks or on-premises environments.",
      benefits: ["SOC2 & HIPAA ready", "Cost analytics", "VPC peering & Private Link"],
    },
  ];

  return (
    <section id="users" className="relative py-24 sm:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 rounded-full border border-lime/30 bg-forest/5 px-3 py-1 text-xs font-mono uppercase tracking-widest text-forest">
            <Users className="h-3.5 w-3.5" /> For Every AI Team
          </span>
          <h2 className="mt-5 font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-ink">
            Designed for the <span className="text-forest">Modern Enterprise</span>
          </h2>
          <p className="mt-5 text-lg text-ink-2 leading-relaxed">
            Whether you are building the models or managing the infrastructure, OriginSearch provides the tools you need to succeed.
          </p>
        </Reveal>

        <Reveal delay={0.2} className="mt-16">
          <div className="grid lg:grid-cols-[280px_1fr] gap-8">
            {/* Tabs Sidebar */}
            <div className="flex flex-row overflow-x-auto lg:flex-col gap-2 pb-4 lg:pb-0 scrollbar-hide">
              {personas.map((persona, idx) => (
                <button
                  key={persona.id}
                  onClick={() => setActiveTab(idx)}
                  className={`flex items-center gap-3 px-4 py-4 rounded-xl text-left transition-all whitespace-nowrap lg:whitespace-normal ${
                    activeTab === idx
                      ? "bg-forest text-lime shadow-lg"
                      : "hover:bg-muted text-ink-2 hover:text-ink"
                  }`}
                >
                  <persona.icon className={`h-5 w-5 shrink-0 ${activeTab === idx ? "text-lime" : "text-ink-2/70"}`} />
                  <span className="font-semibold">{persona.title}</span>
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="relative min-h-[400px] rounded-3xl border border-hairline bg-card p-8 sm:p-12 shadow-[0_20px_50px_-24px_rgba(17,17,17,0.1)] overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="relative z-10 grid gap-8 md:grid-cols-2"
                >
                  <div>
                    <h3 className="font-display text-2xl sm:text-3xl font-semibold text-ink leading-tight">
                      {personas[activeTab].heading}
                    </h3>
                    <p className="mt-4 text-ink-2 leading-relaxed">
                      {personas[activeTab].desc}
                    </p>
                    <ul className="mt-8 space-y-4">
                      {personas[activeTab].benefits.map((benefit, i) => (
                        <motion.li
                          key={benefit}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 + i * 0.1 }}
                          className="flex items-center gap-3"
                        >
                          <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-forest/10 text-forest">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                          </span>
                          <span className="font-medium text-ink/90">{benefit}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Decorative visual matching the persona */}
                  <div className="relative h-full min-h-[240px] rounded-2xl bg-forest-2 overflow-hidden flex items-center justify-center p-6 border border-border">
                    <div className="absolute inset-0 bg-grid-dark opacity-30" />
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                      className="relative z-10 grid h-24 w-24 place-items-center rounded-2xl bg-lime/10 text-lime ring-1 ring-lime/30 shadow-[0_0_40px_rgba(198,241,53,0.2)]"
                    >
                      {(() => {
                        const Icon = personas[activeTab].icon;
                        return <Icon className="h-10 w-10" />;
                      })()}
                    </motion.div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
