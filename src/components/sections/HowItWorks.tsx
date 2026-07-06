import { motion } from "motion/react";
import { Cloud, Rocket, LineChart, Gauge } from "lucide-react";
import { Reveal, Stagger, fadeUp } from "../ui/animations";

export function HowItWorks() {
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
                  <span className="absolute left-0 top-0 lg:static grid h-16 w-16 place-items-center rounded-2xl bg-forest text-lime ring-8 ring-muted/40 shadow-[0_18px_40px_-18px_rgba(26,46,34,0.5)] z-10 transition-transform hover:scale-110 duration-300">
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
