import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Check, ArrowRight } from "lucide-react";
import { Reveal, Stagger, fadeUp } from "../ui/animations";
import { PerspectiveGridCanvas } from "../ui/PerspectiveGrid";

import basicIcon from "../../assets/Basic.svg";
import standardIcon from "../../assets/Standard.svg";
import premiumIcon from "../../assets/Premium.svg";

export function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);

  const tiers = [
    {
      name: "Starter",
      icon: basicIcon,
      priceMonthly: "$49",
      priceAnnually: "$39",
      period: "/mo",
      highlight: false,
      features: ["Basic Deployments", "Monitoring", "Community Support", "5 Projects"],
      cta: "Buy Now",
      hrefMonthly: "https://buy.stripe.com/test_5kQ3cvesWaOlaqTd771kA01",
      hrefAnnually: "https://buy.stripe.com/test_aFa7sLdoS09H2Yr9UV1kA03",
    },
    {
      name: "Professional",
      icon: standardIcon,
      priceMonthly: "$199",
      priceAnnually: "$159",
      period: "/mo",
      highlight: true,
      features: ["Unlimited Deployments", "Auto Scaling", "Advanced Monitoring", "API Access"],
      cta: "Buy Now",
      hrefMonthly: "https://buy.stripe.com/test_4gMcN5bgK3lTcz1ebb1kA02",
      hrefAnnually: "https://buy.stripe.com/test_00w28r5WqcWtgPhgjj1kA04",
    },
    {
      name: "Enterprise",
      icon: premiumIcon,
      priceMonthly: "Custom",
      priceAnnually: "Custom",
      period: "",
      highlight: false,
      features: [
        "Dedicated Infrastructure",
        "SLA Support",
        "Custom Integrations",
        "Enterprise Security",
      ],
      cta: "Contact",
      hrefMonthly: "#contact",
      hrefAnnually: "#contact",
    },
  ];

  return (
    <section id="pricing" className="relative bg-[#F5F3EF] px-4 sm:px-6 lg:px-8 pt-4 pb-12 sm:pb-24">
      <div className="relative w-full bg-[#1A2E22] rounded-[2.5rem] sm:rounded-[3.5rem] overflow-hidden shadow-2xl py-16 sm:py-20">
        
        {/* Tech Geometric Traces (Left Edge) */}
        <div className="absolute top-0 left-[-5%] w-[350px] h-full pointer-events-none z-0 opacity-90">
          <svg className="w-full h-full text-[#C6F135]" viewBox="0 0 200 800" fill="none" stroke="currentColor" strokeWidth="32" strokeLinejoin="round" strokeLinecap="round">
            {/* Top Tech Pattern */}
            <path d="M -50,50 L 120,220 L -50,390" />
            <path d="M 20,-50 L 180,110 L 20,270" />
            <path d="M -50,-50 L 80,80 L -50,210" fill="currentColor" stroke="none" />
            
            {/* Bottom Tech Pattern */}
            <path d="M -50,550 L 100,700 L 40,760 L 150,870" />
            <path d="M 20,650 L 80,710 L -50,840" fill="currentColor" stroke="none" />
            <path d="M 140,760 L 250,870" />
          </svg>
        </div>

        {/* Animated Perspective Grid Background */}
        <PerspectiveGridCanvas />

        <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
          <Reveal className="max-w-3xl text-center mx-auto">
            <span className="font-mono text-xs uppercase tracking-widest text-lime">/ Pricing</span>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
              Flexible Pricing for <span className="text-lime">Every Team</span>
            </h2>
          </Reveal>

          {/* Animated Toggle */}
          <Reveal className="flex justify-center mt-12 mb-16">
            <div className="bg-white p-1.5 rounded-full border border-black/5 flex items-center shadow-md relative">
              <button
                onClick={() => setIsAnnual(false)}
                className={`relative px-8 py-3 rounded-full text-base font-bold transition-colors z-10 ${!isAnnual ? 'text-white' : 'text-[#1A2E22] hover:bg-black/5'}`}
              >
                {!isAnnual && (
                  <motion.div
                    layoutId="pricing-toggle-pill"
                    className="absolute inset-0 bg-[#1A2E22] rounded-full shadow-sm"
                    initial={false}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
                <span className="relative z-10">Monthly</span>
              </button>

              <button
                onClick={() => setIsAnnual(true)}
                className={`relative pl-8 pr-4 py-3 rounded-full text-base font-bold transition-colors flex items-center gap-3 z-10 ${isAnnual ? 'text-white' : 'text-[#1A2E22] hover:bg-black/5'}`}
              >
                {isAnnual && (
                  <motion.div
                    layoutId="pricing-toggle-pill"
                    className="absolute inset-0 bg-[#1A2E22] rounded-full shadow-sm"
                    initial={false}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-3">
                  Annually
                  <span className={`text-[11px] px-2.5 py-1 rounded-full font-black tracking-wide transition-colors ${isAnnual ? 'bg-[#C6F135] text-[#1A2E22]' : 'bg-[#e5e7eb] text-[#374151]'}`}>
                    SAVE 20%
                  </span>
                </span>
              </button>
            </div>
          </Reveal>

          <Stagger className="grid gap-10 lg:gap-8 xl:gap-10 lg:grid-cols-3 max-w-6xl mx-auto">
            {tiers.map((t) => (
              <motion.div
                key={t.name}
                variants={fadeUp}
                className="relative bg-white rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.06)] flex flex-col pt-0 pb-8 transition-all hover:-translate-y-2 hover:shadow-[0_20px_40px_rgb(0,0,0,0.12)] duration-300 z-0"
              >
                {/* Header Block */}
                <div className={`relative pt-10 pb-8 rounded-t-[2rem] text-center z-10 flex flex-col items-center justify-center ${t.highlight ? 'bg-[#C6F135]' : 'bg-[#F5F3EF]'}`}>
                  <img src={t.icon} alt={t.name} className="w-16 h-16 object-contain mb-4 drop-shadow-sm" />
                  <h3 className={`font-display text-2xl font-bold uppercase tracking-widest text-[#1A2E22]`}>
                    {t.name}
                  </h3>

                  {/* SVG Dip */}
                  <svg
                    className="absolute top-full left-0 w-full h-10 -mt-[1px]"
                    viewBox="0 0 100 24"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M0,0 C30,0 40,24 50,24 C60,24 70,0 100,0 L100,0 L0,0 Z"
                      fill={t.highlight ? '#C6F135' : '#F5F3EF'}
                    />
                  </svg>
                </div>

                {/* Features List */}
                <ul className="px-8 mt-16 space-y-4 mb-28 flex-grow relative z-0">
                  {t.features.map((f) => (
                    <li key={f} className="flex items-center gap-3 text-sm">
                      <span className={`grid h-5 w-5 shrink-0 place-items-center rounded-full ${t.highlight ? 'bg-[#C6F135] text-[#1A2E22]' : 'bg-[#1A2E22] text-[#F5F3EF]'}`}>
                        <Check className="h-3 w-3" strokeWidth={3} />
                      </span>
                      <span className="text-[#1A2E22] font-medium opacity-90">{f}</span>
                    </li>
                  ))}
                </ul>

                {/* Bottom Price Ribbon and CTA */}
                <div className="absolute bottom-8 left-0 right-8 flex items-center justify-between z-20">

                  {/* Ribbon */}
                  <div
                    className={`relative pl-8 pr-6 py-3 rounded-r-full shadow-lg flex items-baseline ${t.highlight ? 'bg-[#1A2E22]' : 'bg-[#C6F135]'}`}
                    style={{ marginLeft: '-16px' }}
                  >
                    <div
                      className="absolute top-full left-0 w-0 h-0 border-t-[16px] border-l-[16px] border-l-transparent"
                      style={{ borderTopColor: t.highlight ? '#0c1610' : '#87a81c' }}
                    />

                    <div className="relative inline-flex items-center">
                      <AnimatePresence mode="popLayout" initial={false}>
                        <motion.span
                          key={t.priceMonthly === "Custom" ? "Custom" : (isAnnual ? t.priceAnnually : t.priceMonthly)}
                          initial={{ opacity: 0, y: -20, scale: 0.9 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 20, scale: 1.1 }}
                          transition={{ type: "spring", stiffness: 400, damping: 30 }}
                          className={`font-display text-3xl font-bold inline-block ${t.highlight ? 'text-[#C6F135]' : 'text-[#1A2E22]'}`}
                        >
                          {t.priceMonthly === "Custom" ? "Custom" : (isAnnual ? t.priceAnnually : t.priceMonthly)}
                        </motion.span>
                      </AnimatePresence>
                    </div>
                    {t.period && <span className={`text-xs ml-1 font-bold ${t.highlight ? 'text-[#C6F135]/70' : 'text-[#1A2E22]/70'}`}>{t.period}</span>}
                  </div>

                  {/* Buy Now Button */}
                  <a
                    href={isAnnual ? t.hrefAnnually : t.hrefMonthly}
                    target={t.name === "Enterprise" ? "_self" : "_blank"}
                    rel="noopener noreferrer"
                    className={`rounded-full px-6 py-3 text-xs font-bold uppercase tracking-wider transition-transform hover:scale-105 shadow-md ${t.highlight
                        ? "bg-[#C6F135] text-[#1A2E22]"
                        : "bg-[#1A2E22] text-white hover:bg-[#C6F135] hover:text-[#1A2E22]"
                      }`}
                  >
                    {t.cta}
                  </a>
                </div>
              </motion.div>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
