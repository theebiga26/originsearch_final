import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus } from "lucide-react";
import { Reveal, Stagger, fadeUp } from "../ui/animations";

export function FAQ() {
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
                className={`rounded-2xl border transition-colors ${isOpen ? "border-forest bg-muted/40" : "border-hairline bg-card"
                  }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2 rounded-2xl"
                >
                  <span className="font-display text-base sm:text-lg font-semibold text-ink">
                    {it.q}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                    className={`grid h-8 w-8 shrink-0 place-items-center rounded-full transition-colors ${isOpen ? "bg-forest text-lime" : "bg-muted text-ink-2"}`}
                  >
                    <Plus className="h-4 w-4" />
                  </motion.span>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-6 text-sm sm:text-base text-ink-2 leading-relaxed">
                        {it.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
