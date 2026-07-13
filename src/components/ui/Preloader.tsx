import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Radar, Terminal, Cpu, Shield, Server } from "lucide-react";

interface PreloaderProps {
  onComplete: () => void;
}

const loadingSteps = [
  { id: "network", text: "Connecting to global compute fabric...", icon: Server },
  { id: "cores", text: "Initializing quantum tensor cores...", icon: Cpu },
  { id: "security", text: "Securing edge-nodes with cryptographic handshakes...", icon: Shield },
  { id: "ready", text: "Compiling system models. Platform ready.", icon: Radar },
];

export function Preloader({ onComplete }: PreloaderProps) {
  const [progress, setProgress] = useState(0);
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<string[]>([]);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Total preloader duration will be around 2.4 seconds
    const intervalTime = 20; // 100 steps * 20ms = 2000ms
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsExiting(true);
            setTimeout(() => {
              onComplete();
            }, 600); // Wait for exit animation
          }, 400);
          return 100;
        }
        
        // Progress steps logic
        const nextProgress = prev + 1;
        
        if (nextProgress === 25) {
          setCompletedSteps((prevCompleted) => [...prevCompleted, "network"]);
          setCurrentStepIndex(1);
        } else if (nextProgress === 50) {
          setCompletedSteps((prevCompleted) => [...prevCompleted, "cores"]);
          setCurrentStepIndex(2);
        } else if (nextProgress === 75) {
          setCompletedSteps((prevCompleted) => [...prevCompleted, "security"]);
          setCurrentStepIndex(3);
        } else if (nextProgress === 100) {
          setCompletedSteps((prevCompleted) => [...prevCompleted, "ready"]);
        }
        
        return nextProgress;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            opacity: 0,
            y: "-100%",
            transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] } 
          }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#1A2E22] text-[#F5F3EF] overflow-hidden select-none"
        >
          {/* Animated Cyber-Grid Overlay */}
          <div className="absolute inset-0 bg-grid-dark opacity-15 pointer-events-none" />

          {/* Radial Ambient Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[#C6F135]/10 blur-[120px] pointer-events-none" />

          {/* Core Preloader Wrapper */}
          <div className="relative z-10 flex flex-col items-center max-w-lg w-full px-6">
            
            {/* Animated Hub (Radar & Circular Progress) */}
            <div className="relative mb-12 flex items-center justify-center">
              
              {/* Outer Circular Progress Ring */}
              <svg className="w-32 h-32 transform -rotate-90">
                <circle
                  cx="64"
                  cy="64"
                  r="58"
                  className="stroke-[#24382C]"
                  strokeWidth="3"
                  fill="transparent"
                />
                <motion.circle
                  cx="64"
                  cy="64"
                  r="58"
                  className="stroke-[#C6F135]"
                  strokeWidth="3.5"
                  fill="transparent"
                  strokeDasharray={2 * Math.PI * 58}
                  strokeDashoffset={2 * Math.PI * 58 * (1 - progress / 100)}
                  transition={{ ease: "easeOut" }}
                />
              </svg>

              {/* Pulsing Radar Hub */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                  animate={{
                    scale: [0.95, 1.05, 0.95],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="grid h-16 w-16 place-items-center rounded-full bg-[#24382C] border border-[#C6F135]/30 text-[#C6F135] shadow-[0_0_24px_rgba(198,241,53,0.25)]"
                >
                  <Radar className="h-8 w-8 animate-pulse" strokeWidth={2} />
                </motion.div>
              </div>

              {/* Orbital Scanning Particle */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 pointer-events-none"
              >
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[#C6F135] shadow-[0_0_12px_#C6F135]" />
              </motion.div>
            </div>

            {/* Title & Brand */}
            <div className="text-center mb-10">
              <motion.h2 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="font-display text-2xl font-bold tracking-tight text-white mb-2"
              >
                OriginSearch<span className="text-[#C6F135]">.one</span>
              </motion.h2>
              <p className="text-xs text-[#4B5563]/60 tracking-wider uppercase font-mono">
                AI Deployment Engine v1.0.0
              </p>
            </div>

            {/* Console Log Panel */}
            <div className="w-full bg-[#132019]/80 border border-[#C6F135]/10 rounded-xl p-5 font-mono text-[11px] sm:text-xs text-left shadow-inner backdrop-blur-sm">
              <div className="flex items-center gap-2 text-[#C6F135]/80 border-b border-[#C6F135]/5 pb-2 mb-3">
                <Terminal className="h-3.5 w-3.5" />
                <span className="font-semibold uppercase tracking-wider text-[10px]">Console Output</span>
                <span className="ml-auto text-[10px] text-[#F5F3EF]/40 font-medium">SYS_INIT: {progress}%</span>
              </div>
              
              <div className="space-y-2.5 min-h-[96px]">
                {loadingSteps.map((step, idx) => {
                  const StepIcon = step.icon;
                  const isPending = idx > currentStepIndex;
                  const isCurrent = idx === currentStepIndex;
                  const isCompleted = completedSteps.includes(step.id) || idx < currentStepIndex;
                  
                  return (
                    <motion.div
                      key={step.id}
                      initial={{ opacity: 0, x: -5 }}
                      animate={{ 
                        opacity: isPending ? 0.2 : 1,
                        x: 0,
                      }}
                      transition={{ duration: 0.3 }}
                      className={`flex items-start gap-2.5 transition-colors duration-300 ${
                        isCurrent ? "text-[#C6F135] font-medium" : isCompleted ? "text-[#F5F3EF]/60" : "text-[#F5F3EF]/20"
                      }`}
                    >
                      <StepIcon className={`h-3.5 w-3.5 mt-0.5 shrink-0 ${isCurrent ? "animate-pulse" : ""}`} />
                      <div className="flex-1 leading-relaxed">
                        <span className="mr-1.5 opacity-50">
                          {isCompleted ? "✔" : isCurrent ? "❯" : "○"}
                        </span>
                        {step.text}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Bottom Progress Bar Indicator */}
            <div className="w-full mt-8">
              <div className="h-1.5 w-full bg-[#24382C] rounded-full overflow-hidden">
                <motion.div 
                  className="h-full bg-[#C6F135]" 
                  initial={{ width: "0%" }}
                  animate={{ width: `${progress}%` }}
                  transition={{ ease: "easeOut" }}
                />
              </div>
              <div className="flex justify-between items-center mt-2 text-[10px] font-mono text-[#F5F3EF]/30">
                <span>SECURE BOOT ENVIRONMENT</span>
                <span>STATE_OK</span>
              </div>
            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
