import { motion, useInView, animate } from "motion/react";
import { useRef, useState, useEffect } from "react";
import { ArrowRight, Cpu, Database, Cloud, Server, Globe, Zap } from "lucide-react";
import { Reveal, fadeUp, stagger } from "../ui/animations";
import heroVideo from "../../assets/Hero image.mp4";

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
              Deploy AI Faster. Scale Without Limits.
            </motion.h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-6 max-w-xl text-lg text-paper/80 leading-relaxed font-light">
              OriginSearch.one is an AI deployment platform that transforms trained models into
              production-ready intelligence. Deploy, orchestrate, monitor, and scale AI
              applications across cloud, edge, and hybrid environments through one intelligent
              deployment ecosystem.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-6 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-4 bg-lime hover:bg-[#b5e022] text-forest rounded-full p-2 pl-8 hover:scale-[1.02] active:scale-95 transition-transform shadow-md group max-w-max"
              >
                <span className="font-bold text-sm">Deploy Your AI</span>
                <div className="w-10 h-10 rounded-full bg-forest text-lime flex items-center justify-center shadow-inner group-hover:bg-black transition-colors">
                  <ArrowRight size={18} strokeWidth={2.5} />
                </div>
              </a>
              <a
                href="#features"
                className="inline-flex items-center gap-3 rounded-full border border-lime/30 px-8 py-4 text-sm font-bold text-lime hover:bg-lime/10 transition-colors"
              >
                Explore Platform
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
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          whileHover={{ scale: 1.02, rotate: -1 }}
          className="relative hero-float"
          style={{ width: '480px', height: '480px' }}
        >

          {/* Circular video */}
          <div className="absolute inset-0 rounded-full overflow-hidden shadow-2xl ring-2 ring-lime/20">
            <video
              src={heroVideo}
              autoPlay
              loop
              muted
              playsInline
              className="h-full w-full object-cover grayscale contrast-125 brightness-90"
            />
            {/* Lime tint overlay */}
            <div className="absolute inset-0 bg-lime/10 mix-blend-overlay" />
          </div>

          {/* Outer glow ring */}
          <div
            className="absolute rounded-full pointer-events-none hero-glow-pulse"
            style={{
              inset: '-30px',
              border: '1px solid rgba(198,241,53,0.15)',
              boxShadow: '0 0 60px -10px rgba(198,241,53,0.25)',
            }}
          />

          <div className="absolute bottom-6 left-6 rounded-full border border-lime/20 bg-forest/80 px-4 py-2 text-xs font-mono uppercase tracking-[0.28em] text-lime backdrop-blur">
            24/7 AI Ops
          </div>

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
                    <Icon className="w-8 h-8" />
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}