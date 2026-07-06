import { motion, useInView, animate } from "motion/react";
import { useRef, useState, useEffect } from "react";
import { ArrowRight, Cpu, Database, Cloud, Server, Globe, Zap } from "lucide-react";
import { Reveal, fadeUp, stagger } from "../ui/animations";

const BG_IMAGE = "/hero_bg_circle.png";

/* Icons that orbit around the circular hero image */
const ORBIT_ICONS = [
  { Icon: Cpu, label: "AI Processing" },
  { Icon: Database, label: "Data Storage" },
  { Icon: Cloud, label: "Cloud Deploy" },
  { Icon: Server, label: "Infrastructure" },
  { Icon: Globe, label: "Global Edge" },
  { Icon: Zap, label: "Fast Inference" },
];

function Counter({ to, suffix = "", duration = 2 }: { to: number; suffix?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration,
      ease: "easeOut",
      onUpdate: (v) => setVal(v),
    });
    return () => controls.stop();
  }, [inView, to, duration]);

  const display = to >= 100 ? Math.round(val).toLocaleString() : val.toFixed(to % 1 === 0 ? 0 : 2);
  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

export function Hero() {
  const stats = [
    { value: 99.99, suffix: "%", label: "Uptime SLA" },
    { value: 10, suffix: "M+", label: "Inference Requests" },
    { value: 500, suffix: "+", label: "Deployments" },
    { value: 30, suffix: "+", label: "Global Regions" },
  ];

  return (
    <section id="home" className="relative min-h-[85vh] bg-paper flex flex-col lg:flex-row">
      {/* Left Column */}
      <div className="w-full lg:w-[60%] flex flex-col relative z-10">

        {/* Dark Green Box (Text Content) */}
        <div className="bg-forest flex-grow rounded-bl-[80px] sm:rounded-bl-[140px] pt-24 sm:pt-32 px-6 sm:px-12 lg:px-20 pb-14 sm:pb-20 shadow-2xl relative overflow-hidden">

          {/* Subtle dotted pattern top right corner */}
          <div className="absolute top-8 right-8 w-32 h-32 opacity-20" style={{ backgroundImage: 'radial-gradient(#C6F135 2px, transparent 2px)', backgroundSize: '16px 16px' }} />

          <Reveal>
            <motion.h1
              variants={stagger}
              initial="hidden"
              animate="show"
              className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] tracking-tight text-paper max-w-2xl"
            >
              {["The AI ", "Deployment ", "Platform ", "for ", "Scalable ", "Production ", "Intelligence"].map(
                (w, i) => (
                  <motion.span
                    key={i}
                    variants={fadeUp}
                    className={/Deployment|Scalable|Production/.test(w) ? "text-lime" : "text-paper"}
                  >
                    {w}
                  </motion.span>
                )
              )}
            </motion.h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-6 max-w-xl text-lg text-paper/80 leading-relaxed font-light">
              Deploy, orchestrate, monitor, and scale AI models across cloud, edge, and hybrid
              environments with enterprise-grade automation.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <a
                href="#features"
                className="inline-flex items-center gap-3 rounded-full bg-paper px-8 py-4 text-sm font-bold text-forest transition-transform hover:scale-105 active:scale-100 shadow-xl"
              >
                See all features <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-3 rounded-full border border-lime/30 px-8 py-4 text-sm font-bold text-lime hover:bg-lime/10 transition-colors"
              >
                Start Deploying
              </a>
            </div>
          </Reveal>
        </div>

        {/* Bottom White Area (Stats/Trust) */}
        <div className="bg-paper px-6 sm:px-12 lg:px-20 py-10 lg:py-14 flex flex-col justify-center">
          <p className="text-ink font-bold text-lg mb-8">More than 500+ enterprises trust OriginSearch</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="font-display text-2xl sm:text-3xl font-bold text-ink">
                  <Counter to={s.value} suffix={s.suffix} />
                </dt>
                <dd className="mt-1 text-xs font-mono uppercase tracking-wider text-ink-2">
                  {s.label}
                </dd>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Column — Circular image with orbiting icons */}
      <div className="w-full lg:w-[40%] h-[400px] lg:h-auto relative z-0 lg:absolute lg:top-0 lg:right-0 lg:bottom-0 flex items-center justify-center">
        {/* Orbit wrapper — centres everything */}
        <div className="relative" style={{ width: '340px', height: '340px' }}>

          {/* Circular image */}
          <div className="absolute inset-0 rounded-full overflow-hidden shadow-2xl ring-2 ring-lime/20">
            <img
              src={BG_IMAGE}
              alt="AI Infrastructure"
              className="w-full h-full object-cover grayscale contrast-125 brightness-90"
            />
            {/* Lime tint overlay */}
            <div className="absolute inset-0 bg-lime/10 mix-blend-overlay" />
          </div>

          {/* Outer glow ring */}
          <div
            className="absolute rounded-full pointer-events-none"
            style={{
              inset: '-30px',
              border: '1px solid rgba(198,241,53,0.15)',
              boxShadow: '0 0 60px -10px rgba(198,241,53,0.25)',
            }}
          />

          {/* Orbiting icons ring — spins as one group */}
          <div className="hero-orbit-ring">
            {ORBIT_ICONS.map(({ Icon, label }, i) => {
              const angle = (360 / ORBIT_ICONS.length) * i;
              return (
                <div
                  key={label}
                  className="hero-orbit-icon-slot"
                  style={{ '--slot-angle': `${angle}deg` } as React.CSSProperties}
                >
                  <div className="hero-orbit-icon-counter">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}