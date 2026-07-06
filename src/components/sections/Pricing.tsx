import { motion } from "motion/react";
import { Check, ArrowRight } from "lucide-react";
import { Reveal, Stagger, fadeUp } from "../ui/animations";

export function Pricing() {
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
    <section id="pricing" className="relative py-24 sm:py-32 bg-background">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-3xl text-center mx-auto">
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
              className={`relative rounded-3xl p-8 transition-shadow duration-300 ${
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
              <ul className="mt-8 space-y-4">
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
                className={`mt-10 flex w-full items-center justify-center gap-2 rounded-full px-5 py-3.5 text-sm font-semibold transition-transform hover:scale-[1.03] ${
                  t.highlight
                    ? "bg-lime text-forest shadow-[0_10px_30px_-10px_rgba(198,241,53,0.5)]"
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
