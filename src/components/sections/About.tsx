import { motion } from "motion/react";
import { Rocket, Cpu, GitBranch, Activity, ChevronRight } from "lucide-react";
import { Reveal, Stagger, fadeUp } from "../ui/animations";

export function About() {
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
    <section id="about" className="relative py-24 sm:py-32 bg-background">
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
              className="group relative rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:shadow-[0_20px_50px_-24px_rgba(17,17,17,0.25)] hover:border-lime"
            >
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-forest text-lime transition-transform group-hover:scale-110">
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
