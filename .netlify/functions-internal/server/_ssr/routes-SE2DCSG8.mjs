import { o as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { i as AnimatePresence, n as animate, t as useInView } from "../_libs/framer-motion.mjs";
import { t as motion } from "../_libs/motion.mjs";
import { _ as ChartLine, a as Settings, b as ArrowRight, c as Plus, d as GitBranch, f as Gauge, g as Check, h as Cloud, i as ShieldCheck, l as Menu, m as Cpu, n as X, o as Server, p as Database, r as Workflow, s as Rocket, t as Zap, u as Globe, v as ChartColumn, x as Activity, y as Brain } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-SE2DCSG8.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var fadeUp = {
	hidden: {
		opacity: 0,
		y: 50
	},
	show: {
		opacity: 1,
		y: 0,
		transition: {
			duration: .8,
			ease: [
				.22,
				1,
				.36,
				1
			]
		}
	}
};
var stagger = {
	hidden: {},
	show: { transition: {
		staggerChildren: .09,
		delayChildren: .05
	} }
};
function Reveal({ children, className, delay = 0 }) {
	const ref = (0, import_react.useRef)(null);
	const inView = useInView(ref, {
		once: true,
		margin: "-80px"
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		ref,
		initial: "hidden",
		animate: inView ? "show" : "hidden",
		variants: fadeUp,
		transition: { delay },
		className,
		children
	});
}
function Stagger({ children, className }) {
	const ref = (0, import_react.useRef)(null);
	const inView = useInView(ref, {
		once: true,
		margin: "-80px"
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
		ref,
		initial: "hidden",
		animate: inView ? "show" : "hidden",
		variants: stagger,
		className,
		children
	});
}
function Counter({ to, suffix = "", duration = 2 }) {
	const ref = (0, import_react.useRef)(null);
	const inView = useInView(ref, {
		once: true,
		margin: "-80px"
	});
	const [val, setVal] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		if (!inView) return;
		const controls = animate(0, to, {
			duration,
			ease: "easeOut",
			onUpdate: (v) => setVal(v)
		});
		return () => controls.stop();
	}, [
		inView,
		to,
		duration
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		ref,
		children: [to >= 100 ? Math.round(val).toLocaleString() : val.toFixed(to % 1 === 0 ? 0 : 2), suffix]
	});
}
function Nav() {
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	const [open, setOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 40);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	const links = [
		{
			href: "#home",
			label: "Home"
		},
		{
			href: "#about",
			label: "About"
		},
		{
			href: "#how",
			label: "How It Works"
		},
		{
			href: "#features",
			label: "Features"
		},
		{
			href: "#pricing",
			label: "Pricing"
		},
		{
			href: "#faq",
			label: "FAQ"
		},
		{
			href: "#contact",
			label: "Contact"
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4 pointer-events-none",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
			initial: {
				y: -20,
				opacity: 0
			},
			animate: {
				y: 0,
				opacity: 1
			},
			transition: {
				duration: .5,
				ease: [
					.22,
					1,
					.36,
					1
				]
			},
			className: `pointer-events-auto w-full max-w-5xl transition-all duration-300 ${scrolled ? "bg-[rgba(245,243,239,0.92)] shadow-[0_8px_32px_-8px_rgba(17,17,17,0.18)] ring-1 ring-black/[0.05]" : "bg-[rgba(245,243,239,0.82)]"} backdrop-blur-[14px] rounded-full`,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex h-12 items-center justify-between px-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#home",
						className: "flex items-center shrink-0",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/logo.svg",
							alt: "OriginSearch Logo",
							className: "h-9 w-auto object-contain"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "hidden lg:flex items-center gap-0.5",
						children: links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: l.href,
							className: "relative px-3 py-1.5 text-[13px] font-medium text-ink/70 hover:text-ink transition-colors rounded-full hover:bg-forest/5 after:content-[''] after:absolute after:left-3 after:right-3 after:-bottom-0.5 after:h-[1.5px] after:bg-lime after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left",
							children: l.label
						}, l.href))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 shrink-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "#contact",
							className: "hidden sm:inline-flex items-center gap-1.5 rounded-full bg-lime px-4 py-1.5 text-[13px] font-semibold text-forest transition-transform hover:scale-105 active:scale-100 shadow-[0_6px_20px_-6px_rgba(198,241,53,0.65)]",
							children: ["Get Started ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "lg:hidden grid h-8 w-8 place-items-center rounded-full border border-hairline text-ink hover:bg-muted transition-colors",
							onClick: () => setOpen((v) => !v),
							"aria-label": "Toggle menu",
							children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "h-4 w-4" })
						})]
					})
				]
			})
		}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
			initial: {
				opacity: 0,
				y: -8,
				scale: .97
			},
			animate: {
				opacity: 1,
				y: 0,
				scale: 1
			},
			exit: {
				opacity: 0,
				y: -8,
				scale: .97
			},
			transition: {
				duration: .2,
				ease: "easeOut"
			},
			className: "pointer-events-auto absolute top-[68px] left-4 right-4 mx-auto max-w-sm bg-[rgba(245,243,239,0.97)] backdrop-blur-[14px] rounded-3xl shadow-[0_20px_50px_-16px_rgba(17,17,17,0.25)] ring-1 ring-black/[0.06] p-4 grid gap-1",
			children: [links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: l.href,
				onClick: () => setOpen(false),
				className: "rounded-xl px-4 py-2.5 text-sm font-medium text-ink hover:bg-forest hover:text-paper transition-all",
				children: l.label
			}, l.href)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href: "#contact",
				onClick: () => setOpen(false),
				className: "mt-1 flex items-center justify-center gap-2 rounded-full bg-lime px-4 py-2.5 text-sm font-semibold text-forest shadow-[0_4px_16px_-4px_rgba(198,241,53,0.5)]",
				children: ["Get Started ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
			})]
		})]
	});
}
function CursorGlow() {
	const ref = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		if (window.matchMedia("(pointer: coarse)").matches) return;
		const onMove = (e) => {
			if (!ref.current) return;
			ref.current.style.transform = `translate(${e.clientX - 200}px, ${e.clientY - 200}px)`;
		};
		window.addEventListener("mousemove", onMove);
		return () => window.removeEventListener("mousemove", onMove);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref,
		"aria-hidden": true,
		className: "pointer-events-none fixed left-0 top-0 z-[1] h-[400px] w-[400px] rounded-full opacity-40 mix-blend-screen",
		style: { background: "radial-gradient(closest-side, rgba(198,241,53,0.28), transparent 70%)" }
	});
}
function Hero() {
	const stats = [
		{
			value: 99.99,
			suffix: "%",
			label: "Uptime SLA"
		},
		{
			value: 10,
			suffix: "M+",
			label: "Inference"
		},
		{
			value: 500,
			suffix: "+",
			label: "Deployments"
		},
		{
			value: 30,
			suffix: "+",
			label: "Regions"
		}
	];
	const orbitIcons = [
		{
			Icon: Cpu,
			label: "AI Processing"
		},
		{
			Icon: Database,
			label: "Data Storage"
		},
		{
			Icon: Cloud,
			label: "Cloud Deploy"
		},
		{
			Icon: Server,
			label: "Infrastructure"
		},
		{
			Icon: Globe,
			label: "Global Edge"
		},
		{
			Icon: Zap,
			label: "Fast Inference"
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "home",
		className: "relative bg-paper px-4 sm:px-6 lg:px-8 pt-24 pb-8 overflow-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative w-full bg-forest rounded-[2.5rem] sm:rounded-[3.5rem] overflow-visible flex flex-col lg:flex-row items-center min-h-[70vh]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-lime/20 blur-[120px] rounded-full pointer-events-none" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "w-full lg:w-[55%] z-10 px-8 sm:px-16 lg:px-24 pt-16 pb-44 lg:pb-40",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.span, {
							initial: {
								opacity: 0,
								y: 10
							},
							animate: {
								opacity: 1,
								y: 0
							},
							transition: { duration: .6 },
							className: "inline-flex items-center gap-2 rounded-full border border-lime/25 bg-lime/8 px-4 py-1.5 text-xs font-mono uppercase tracking-widest text-lime backdrop-blur-sm shadow-[0_0_15px_rgba(198,241,53,0.15)] mb-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Zap, { className: "h-3.5 w-3.5" }), " OriginSearch AI Runtime"]
						}) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: .1,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.h1, {
								variants: stagger,
								initial: "hidden",
								animate: "show",
								className: "font-display text-5xl sm:text-6xl lg:text-7xl xl:text-[5rem] font-bold leading-[1.05] tracking-tight text-paper max-w-2xl",
								children: [
									"Redefining ",
									"How ",
									"AI ",
									"Gets ",
									"Deployed"
								].map((w, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
									variants: fadeUp,
									className: /AI|Deployed/.test(w) ? "text-lime" : "text-paper",
									children: w
								}, i))
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: .2,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-6 max-w-xl text-lg text-paper/70 leading-relaxed font-light",
								children: "At the heart of everything we do is a commitment to making your AI infrastructure stronger, faster, and more resilient across any environment."
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
							delay: .3,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-8 flex flex-wrap items-center gap-4",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "#contact",
									className: "inline-flex items-center gap-3 rounded-full bg-lime px-8 py-4 text-sm font-bold text-forest transition-transform hover:scale-105 active:scale-100 shadow-[0_20px_50px_-16px_rgba(198,241,53,0.4)]",
									children: ["Get Started ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
								})
							})
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "w-full lg:w-[45%] relative z-0 h-[360px] lg:h-full flex items-center justify-center lg:absolute lg:right-0 lg:top-0 lg:bottom-0",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative",
						style: {
							width: "320px",
							height: "320px"
						},
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
								initial: {
									opacity: 0,
									scale: .8
								},
								animate: {
									opacity: 1,
									scale: 1
								},
								transition: {
									duration: .8,
									delay: .2,
									ease: "easeOut"
								},
								className: "absolute inset-0 rounded-full overflow-hidden shadow-[0_20px_60px_-10px_rgba(0,0,0,0.5)] ring-2 ring-lime/20",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000&auto=format&fit=crop",
									alt: "AI Infrastructure",
									className: "w-full h-full object-cover grayscale contrast-125 brightness-90"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-lime/10 mix-blend-overlay" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute rounded-full pointer-events-none",
								style: {
									inset: "-35px",
									border: "1px solid rgba(198,241,53,0.12)",
									boxShadow: "0 0 80px -10px rgba(198,241,53,0.2)"
								}
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute rounded-full pointer-events-none",
								style: {
									inset: "-70px",
									border: "1px dashed rgba(198,241,53,0.08)"
								}
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "hero-orbit-ring",
								children: orbitIcons.map(({ Icon, label }, i) => {
									return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "hero-orbit-icon-slot",
										style: { "--slot-angle": `${360 / orbitIcons.length * i}deg` },
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "hero-orbit-icon-counter",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "w-5 h-5" })
										})
									}, label);
								})
							})
						]
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "absolute bottom-0 left-0 bg-paper w-72 h-28 sm:w-80 sm:h-32 rounded-tr-[2.5rem] sm:rounded-tr-[3.5rem] z-20",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
							className: "absolute bottom-full left-0 w-10 h-10 sm:w-14 sm:h-14 text-paper",
							viewBox: "0 0 48 48",
							fill: "currentColor",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M0 48 L0 0 A48 48 0 0 0 48 48 Z" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
							className: "absolute bottom-0 left-full w-10 h-10 sm:w-14 sm:h-14 text-paper",
							viewBox: "0 0 48 48",
							fill: "currentColor",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M0 48 L0 0 A48 48 0 0 0 48 48 Z" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "absolute top-1/2 left-8 -translate-y-1/2 bg-paper flex items-center p-1.5 pr-6 rounded-full border border-forest/10 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.1)]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex -space-x-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										className: "w-10 h-10 rounded-full border-2 border-paper grayscale",
										src: "https://i.pravatar.cc/100?img=1",
										alt: "User 1"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										className: "w-10 h-10 rounded-full border-2 border-paper grayscale",
										src: "https://i.pravatar.cc/100?img=2",
										alt: "User 2"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										className: "w-10 h-10 rounded-full border-2 border-paper grayscale",
										src: "https://i.pravatar.cc/100?img=3",
										alt: "User 3"
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "ml-4 text-[11px] font-bold text-ink uppercase tracking-wider",
								children: "Trusted by AI Teams"
							})]
						})
					]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stagger, {
			className: "w-full mt-10 grid grid-cols-2 md:grid-cols-4 bg-forest rounded-2xl overflow-hidden",
			children: stats.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
				variants: fadeUp,
				className: `flex flex-col items-center justify-center py-8 px-4 text-center ${i < stats.length - 1 ? "md:border-r md:border-lime/10" : ""} ${i < 2 ? "border-b md:border-b-0 border-lime/10" : ""}`,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
					className: "font-display text-4xl sm:text-5xl font-bold text-lime",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Counter, {
						to: s.value,
						suffix: s.suffix
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
					className: "mt-2 text-xs font-mono uppercase tracking-widest text-paper/60",
					children: s.label
				})]
			}, s.label))
		})]
	});
}
function StatsBar() {
	return null;
}
function PerspectiveGridCanvas() {
	const canvasRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;
		const ctx = canvas.getContext("2d");
		if (!ctx) return;
		let w = 0, h = 0;
		let animId;
		let offset = 0;
		const resize = () => {
			w = canvas.offsetWidth;
			h = canvas.offsetHeight;
			canvas.width = w;
			canvas.height = h;
		};
		resize();
		const ro = new ResizeObserver(resize);
		ro.observe(canvas);
		const circuits = Array.from({ length: 25 }).map(() => ({
			x: Math.random() * 3e3 - 1500,
			y: Math.random() * 2e3,
			length: 100 + Math.random() * 200,
			speed: 1 + Math.random() * 4,
			isVertical: Math.random() > .4
		}));
		const draw = () => {
			ctx.clearRect(0, 0, w, h);
			const gridSize = 60;
			offset = (offset + 1.5) % gridSize;
			ctx.beginPath();
			for (let x = w / 2 % gridSize; x < w; x += gridSize) {
				ctx.moveTo(x, 0);
				ctx.lineTo(x, h);
			}
			for (let x = w / 2 % gridSize - gridSize; x > 0; x -= gridSize) {
				ctx.moveTo(x, 0);
				ctx.lineTo(x, h);
			}
			for (let y = offset; y < h; y += gridSize) {
				ctx.moveTo(0, y);
				ctx.lineTo(w, y);
			}
			ctx.strokeStyle = "rgba(198,241,53,0.15)";
			ctx.lineWidth = 1;
			ctx.stroke();
			circuits.forEach((c) => {
				const cx = Math.floor(c.x / gridSize) * gridSize + w / 2 % gridSize;
				let cy = c.y + offset;
				ctx.beginPath();
				if (c.isVertical) {
					ctx.moveTo(cx, cy);
					ctx.lineTo(cx, cy + c.length);
					c.y += c.speed;
				} else {
					const cy_snap = Math.floor(cy / gridSize) * gridSize + offset;
					ctx.moveTo(cx, cy_snap);
					ctx.lineTo(cx + c.length, cy_snap);
					c.x += c.speed;
				}
				ctx.strokeStyle = "#C6F135";
				ctx.lineWidth = 2;
				ctx.shadowColor = "#C6F135";
				ctx.shadowBlur = 10;
				ctx.stroke();
				ctx.shadowBlur = 0;
				ctx.beginPath();
				if (c.isVertical) ctx.arc(cx, cy + c.length, 3, 0, Math.PI * 2);
				else ctx.arc(cx + c.length, Math.floor(cy / gridSize) * gridSize + offset, 3, 0, Math.PI * 2);
				ctx.fillStyle = "#ffffff";
				ctx.shadowColor = "#C6F135";
				ctx.shadowBlur = 15;
				ctx.fill();
				ctx.shadowBlur = 0;
				if (c.y > h + 200 || c.x > w + 200) {
					c.y = -200 - Math.random() * 500;
					c.x = Math.random() * w * 2 - w / 2;
				}
			});
			animId = requestAnimationFrame(draw);
		};
		draw();
		return () => {
			cancelAnimationFrame(animId);
			ro.disconnect();
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "absolute inset-0 pointer-events-none overflow-hidden",
		style: { perspective: "1200px" },
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("canvas", {
			ref: canvasRef,
			className: "absolute w-[150%] h-[150%] bottom-[-20%] left-[-25%] opacity-60",
			style: {
				transform: "rotateX(75deg)",
				transformOrigin: "bottom center"
			}
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-b from-[#1A2E22] via-[#1A2E22]/80 to-transparent" })]
	});
}
function About() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "about",
		className: "relative overflow-hidden py-12 sm:py-16 bg-forest",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PerspectiveGridCanvas, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative mx-auto max-w-7xl px-5 sm:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-12 lg:grid-cols-2 lg:items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-mono text-xs uppercase tracking-widest text-lime",
						children: "/ About OriginSearch"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-paper",
						children: ["Built for Modern ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-lime",
							children: "AI Operations"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-5 text-lg text-paper/70 leading-relaxed",
						children: "OriginSearch simplifies the journey from AI development to production deployment. Automate infrastructure provisioning, model versioning, deployment orchestration, runtime monitoring, and scaling through a unified platform."
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					delay: .2,
					className: "relative mt-12 lg:mt-0 h-[400px] sm:h-[480px] w-full",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-6 bottom-10 left-12 right-2 bg-lime/10 rounded-tl-[100px] rounded-br-[100px] rounded-tr-3xl rounded-bl-3xl transform rotate-3" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute top-0 right-0 w-32 h-32 opacity-20",
							style: {
								backgroundImage: "radial-gradient(#C6F135 2px, transparent 2px)",
								backgroundSize: "16px 16px"
							}
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute bottom-4 left-4 w-32 h-32 opacity-20",
							style: {
								backgroundImage: "radial-gradient(#C6F135 2px, transparent 2px)",
								backgroundSize: "16px 16px"
							}
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute top-8 left-0 w-2/3 h-[250px] sm:h-[320px] rounded-3xl overflow-hidden shadow-2xl border border-lime/20 z-10 bg-forest-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: "/infrastructure_graphic.png",
								alt: "Infrastructure Overview",
								className: "w-full h-full object-cover transform transition-transform duration-700 hover:scale-105"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute bottom-0 right-4 w-3/5 h-[200px] sm:h-[260px] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.6)] border-[6px] border-forest z-20 bg-forest-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: "/dashboard_mockup.png",
								alt: "Dashboard Interface",
								className: "w-full h-full object-cover object-left-top transform transition-transform duration-700 hover:scale-105"
							})
						})
					]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stagger, {
				className: "mt-20 grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6 pb-12",
				children: [
					{
						icon: Rocket,
						title: "AI Deployment",
						desc: "Ship models to production with a single command and zero-downtime rollouts."
					},
					{
						icon: Cpu,
						title: "Infrastructure Automation",
						desc: "Provision GPUs, networks, and storage automatically across any cloud."
					},
					{
						icon: GitBranch,
						title: "Lifecycle Management",
						desc: "Version, promote, and roll back models with full lineage and audit trails."
					},
					{
						icon: Activity,
						title: "Enterprise Monitoring",
						desc: "Deep observability across latency, throughput, drift, and cost — in real time."
					}
				].map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					variants: fadeUp,
					className: `group relative flex flex-col items-center text-center rounded-3xl border border-lime/10 bg-forest-2 p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-12px_rgba(198,241,53,0.15)] hover:border-lime/40 overflow-hidden ${i % 2 === 1 ? "lg:mt-16 lg:-mb-16" : ""}`,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "relative grid h-16 w-16 place-items-center rounded-2xl bg-forest border border-lime/20 text-lime transition-colors duration-500 group-hover:bg-lime group-hover:text-forest mb-6 shadow-sm",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(c.icon, { className: "h-7 w-7" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "relative font-display text-xl font-bold text-paper",
							children: c.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "relative mt-4 text-sm leading-relaxed text-paper/60",
							children: c.desc
						})
					]
				}, c.title))
			})]
		})]
	});
}
function HowItWorks() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "how",
		className: "relative py-24 sm:py-32 bg-muted/40",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-5 sm:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				className: "max-w-3xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-mono text-xs uppercase tracking-widest text-ink-2",
					children: "/ Workflow"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-ink",
					children: ["From Development to Production in ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-forest",
						children: "Four Steps"
					})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mt-16",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "hidden lg:block absolute left-[8%] right-[8%] top-8 h-[2px] overflow-hidden z-0",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "w-full h-full",
							style: {
								backgroundImage: "linear-gradient(90deg, #1A2E22 0%, #C6F135 50%, #1A2E22 100%)",
								backgroundSize: "200% 100%",
								animation: "flow-horizontal 4s linear infinite"
							}
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "lg:hidden absolute left-8 top-8 bottom-8 w-[2px] overflow-hidden z-0",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "w-full h-full",
							style: {
								backgroundImage: "linear-gradient(180deg, #1A2E22 0%, #C6F135 50%, #1A2E22 100%)",
								backgroundSize: "100% 200%",
								animation: "flow-vertical 4s linear infinite"
							}
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stagger, {
						className: "grid gap-8 lg:grid-cols-4",
						children: [
							{
								icon: Cloud,
								title: "Connect Infrastructure",
								desc: "Link AWS, GCP, Azure, or on-prem clusters through a single control plane."
							},
							{
								icon: Rocket,
								title: "Deploy Models",
								desc: "Push containerized or framework-native models with automatic packaging."
							},
							{
								icon: ChartLine,
								title: "Monitor Performance",
								desc: "Track latency, throughput, drift, and cost with real-time telemetry."
							},
							{
								icon: Gauge,
								title: "Scale Automatically",
								desc: "Elastic autoscaling responds to demand — up, down, or across regions."
							}
						].map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							variants: fadeUp,
							className: "relative pl-20 lg:pl-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "lg:flex lg:justify-center",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "absolute left-0 top-0 lg:static grid h-16 w-16 place-items-center rounded-2xl bg-forest text-lime ring-8 ring-muted/40 shadow-[0_18px_40px_-18px_rgba(26,46,34,0.5)]",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(s.icon, { className: "h-6 w-6" })
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "lg:mt-6 lg:text-center",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "font-mono text-xs uppercase tracking-widest text-forest",
										children: ["Step ", String(i + 1).padStart(2, "0")]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-1 font-display text-xl font-semibold text-ink",
										children: s.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-sm text-ink-2 leading-relaxed lg:mx-auto lg:max-w-[240px]",
										children: s.desc
									})
								]
							})]
						}, s.title))
					})
				]
			})]
		})
	});
}
function TargetUsers() {
	const users = [
		{
			role: "Machine Learning Engineers",
			description: "Streamline model deployment, versioning, and inference optimization without managing infrastructure overhead.",
			icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Brain, { className: "h-6 w-6 text-lime" })
		},
		{
			role: "DevOps & Platform Teams",
			description: "Automate AI infrastructure provisioning, scaling, and monitoring with enterprise-grade reliability and security.",
			icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Settings, { className: "h-6 w-6 text-lime" })
		},
		{
			role: "Data Scientists",
			description: "Focus on building better models and analyzing results while we handle the complexities of production deployment.",
			icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Database, { className: "h-6 w-6 text-lime" })
		},
		{
			role: "AI Product Managers",
			description: "Accelerate time-to-market for AI features with predictable deployment pipelines and clear performance metrics.",
			icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartLine, { className: "h-6 w-6 text-lime" })
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-[#F5F3EF] py-24 sm:py-32 overflow-hidden",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto max-w-7xl px-5 sm:px-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid lg:grid-cols-[1fr_1.2fr] gap-16 lg:gap-8 items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-xl z-20",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono text-xs uppercase tracking-widest text-[#1A2E22]/60 mb-3 block",
							children: "/ Target Audience"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.h2, {
							initial: {
								opacity: 0,
								y: 20
							},
							whileInView: {
								opacity: 1,
								y: 0
							},
							viewport: { once: true },
							className: "font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-ink drop-shadow-sm leading-tight",
							children: "Built for AI Pioneers"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							initial: {
								opacity: 0,
								width: 0
							},
							whileInView: {
								opacity: 1,
								width: 64
							},
							viewport: { once: true },
							transition: {
								delay: .2,
								duration: .6
							},
							className: "mt-6 h-1 bg-lime rounded-full"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.p, {
							initial: {
								opacity: 0,
								y: 20
							},
							whileInView: {
								opacity: 1,
								y: 0
							},
							viewport: { once: true },
							transition: { delay: .3 },
							className: "mt-8 text-lg text-ink/70 leading-relaxed drop-shadow-sm",
							children: "OriginSearch empowers every member of your team to deliver intelligent applications faster, safer, and at scale."
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative flex items-center justify-center h-[400px] lg:h-[500px] w-full mt-10 lg:mt-0",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute inset-0 flex items-center justify-center pointer-events-none opacity-80",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
								width: "600",
								height: "600",
								viewBox: "0 0 600 600",
								fill: "none",
								className: "text-forest/70",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
										cx: "300",
										cy: "300",
										r: "110",
										stroke: "currentColor",
										strokeWidth: "1.5",
										strokeDasharray: "4 8"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
										cx: "300",
										cy: "300",
										r: "180",
										stroke: "currentColor",
										strokeWidth: "1.5",
										strokeOpacity: "0.6"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
										cx: "300",
										cy: "300",
										r: "250",
										stroke: "currentColor",
										strokeWidth: "1.5",
										strokeDasharray: "2 12"
									})
								]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							initial: { scale: 0 },
							whileInView: { scale: 1 },
							viewport: { once: true },
							className: "relative z-10 flex h-32 w-32 items-center justify-center rounded-full bg-gradient-to-br from-lime to-lime/80 shadow-[0_0_50px_rgba(198,241,53,0.4)]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-3xl font-bold text-forest tracking-tighter",
								children: "AI Ops"
							})
						}),
						users.map((user, i) => {
							const cfg = [
								{
									x: 70,
									y: -240,
									align: "left"
								},
								{
									x: 110,
									y: 0,
									align: "left"
								},
								{
									x: 30,
									y: 177,
									align: "left"
								},
								{
									x: -145,
									y: 110,
									align: "right"
								}
							][i];
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
								initial: {
									opacity: 0,
									scale: .5,
									x: cfg.x,
									y: cfg.y
								},
								whileInView: {
									opacity: 1,
									scale: 1,
									x: cfg.x,
									y: cfg.y
								},
								viewport: { once: true },
								transition: {
									delay: i * .15 + .3,
									type: "spring",
									stiffness: 100
								},
								className: "absolute left-1/2 top-1/2 z-20 group cursor-default",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "absolute -left-6 -top-6 flex h-12 w-12 items-center justify-center rounded-full bg-forest border-2 border-lime/30 shadow-[0_0_15px_rgba(26,46,34,0.1)] text-lime group-hover:border-lime group-hover:bg-lime group-hover:text-forest group-hover:shadow-[0_0_20px_rgba(198,241,53,0.4)] group-hover:scale-110 transition-all duration-300",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "scale-95",
										children: user.icon
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: `absolute -top-4 w-52 ${cfg.align === "left" ? "left-10 text-left" : "right-10 text-right"}`,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-bold text-ink font-display text-sm leading-tight mb-0.5 group-hover:text-forest transition-colors",
										children: user.role
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-[11px] text-ink/70 leading-snug line-clamp-2 group-hover:line-clamp-none transition-all duration-300",
										children: user.description
									})]
								})]
							}, user.role);
						})
					]
				})]
			})
		})
	});
}
function Features() {
	const items = [
		{
			icon: Rocket,
			title: "AI Deployment Engine",
			desc: "One-click deploys with automatic packaging and rollback."
		},
		{
			icon: Workflow,
			title: "Inference Orchestration",
			desc: "Intelligent routing across models, regions, and hardware."
		},
		{
			icon: GitBranch,
			title: "Model Version Control",
			desc: "Full lineage, promotion pipelines, and safe rollbacks."
		},
		{
			icon: Gauge,
			title: "Auto Scaling Infrastructure",
			desc: "Elastic capacity that tracks load in seconds, not minutes."
		},
		{
			icon: Activity,
			title: "Runtime Monitoring",
			desc: "Latency, throughput, drift, and cost — in one console."
		},
		{
			icon: Cloud,
			title: "Cloud & Edge Deployment",
			desc: "Ship the same model to AWS, GCP, Azure, or edge nodes."
		},
		{
			icon: ShieldCheck,
			title: "Security & Compliance",
			desc: "SOC 2, ISO 27001, HIPAA-ready with private networking."
		},
		{
			icon: ChartColumn,
			title: "Deployment Analytics",
			desc: "Business KPIs mapped to model performance and spend."
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "features",
		className: "relative overflow-hidden bg-forest text-paper py-12 sm:py-16",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-grid-dark opacity-40" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-0 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-lime/5 blur-[100px] pointer-events-none" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mx-auto max-w-7xl px-5 sm:px-8 z-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					className: "max-w-3xl mx-auto text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-mono text-xs uppercase tracking-widest text-lime",
							children: "/ Platform Capabilities"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "mt-3 font-display text-4xl sm:text-5xl lg:text-6xl font-bold",
							children: ["Everything You Need to ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-lime",
								children: "Deploy AI at Scale"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-5 text-lg text-paper/70",
							children: "A complete deployment fabric — from provisioning to production telemetry — engineered for enterprise AI teams."
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative mt-10 h-[420px] w-full flex items-center justify-center",
					style: { perspective: "1200px" },
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "absolute bottom-[-80px] w-[600px] h-[600px] rounded-full flex items-center justify-center opacity-60 pointer-events-none",
						style: { transform: "rotateX(75deg)" },
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 rounded-full border border-lime/10 shadow-[inset_0_0_80px_rgba(198,241,53,0.1)]" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute w-[600px] h-[600px] rounded-full border border-lime/20 border-dashed" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute w-[400px] h-[400px] rounded-full border border-lime/30" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute w-[200px] h-[200px] rounded-full border-2 border-lime bg-lime/10 shadow-[0_0_80px_rgba(198,241,53,0.5)]" })
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
						animate: { rotateY: [0, -360] },
						transition: {
							duration: 40,
							repeat: Infinity,
							ease: "linear"
						},
						className: "relative w-[300px] h-[400px] flex items-center justify-center",
						style: { transformStyle: "preserve-3d" },
						children: items.map((c, i) => {
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "absolute w-[220px] h-[260px] rounded-2xl bg-forest/90 border-2 border-lime/30 shadow-[0_0_30px_rgba(198,241,53,0.15)] backdrop-blur-md p-5 flex flex-col items-center justify-center text-center group transition-colors hover:border-lime hover:shadow-[0_0_50px_rgba(198,241,53,0.5)] backface-hidden",
								style: {
									transform: `rotateY(${i * (360 / items.length)}deg) translateZ(380px)`,
									backfaceVisibility: "hidden"
								},
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex h-14 w-14 items-center justify-center rounded-full bg-forest border border-lime/50 text-lime mb-4 shadow-[0_0_20px_rgba(198,241,53,0.3)] group-hover:scale-110 group-hover:bg-lime group-hover:text-forest transition-all duration-500",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(c.icon, { className: "h-6 w-6" })
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "font-display text-lg font-bold text-paper mb-2 group-hover:text-lime transition-colors",
										children: c.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-paper/70 leading-relaxed",
										children: c.desc
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-lime/40 rounded-tl-2xl opacity-0 group-hover:opacity-100 transition-opacity" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-lime/40 rounded-br-2xl opacity-0 group-hover:opacity-100 transition-opacity" })
								]
							}, c.title);
						})
					})]
				})]
			})
		]
	});
}
var TESTIMONIALS_DATA = [
	{
		quote: "Our ad campaigns finally speak to the right audience with clarity resulting in high CTR and ROI.",
		trust: "Trust her work, the words that she delivered completely transformed our brand presence.",
		name: "Kathrine Katija",
		role: "Marketing Manager",
		company: "ABC Ad Services",
		avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop"
	},
	{
		quote: "Deploying AI models used to take days of infrastructure setup. Now it's a matter of minutes with zero downtime.",
		trust: "Their automated pipeline takes away all compliance and scaling headaches instantly.",
		name: "Marcus Vance",
		role: "Lead ML Architect",
		company: "Vertex Grid Systems",
		avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop"
	},
	{
		quote: "The deep telemetry logs gave us immediate visibility into token latency and model drift in real time.",
		trust: "A must-have control center for any production-level deep learning product.",
		name: "Elena Rostova",
		role: "Head of AI Operations",
		company: "Edge Intelligence",
		avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop"
	}
];
function Testimonials() {
	const [activeIndex, setActiveIndex] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		const timer = setInterval(() => {
			setActiveIndex((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
		}, 4500);
		return () => clearInterval(timer);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "testimonials",
		className: "relative py-20 sm:py-28 bg-[#F5F3EF] overflow-hidden",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-5xl px-5 sm:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				className: "mb-14 text-center md:text-left",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-mono text-xs uppercase tracking-widest text-[#1A2E22]/60",
					children: "/ Customer Success"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-black",
					children: ["Loved by leading ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[#1A2E22]",
						children: "AI innovators"
					})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col md:flex-row items-center gap-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex md:flex-col gap-5 items-center shrink-0",
					children: TESTIMONIALS_DATA.map((t, idx) => {
						const isActive = activeIndex === idx;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => setActiveIndex(idx),
							className: `relative w-20 h-28 rounded-2xl overflow-hidden border-2 transition-all duration-500 hover:scale-105 ${isActive ? "border-[#E53E3E] shadow-[0_0_20px_rgba(229,62,62,0.4)] scale-110 z-10" : "border-transparent opacity-60 hover:opacity-90"}`,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: t.avatar,
								alt: t.name,
								className: "w-full h-full object-cover grayscale"
							}), isActive && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 border-2 border-[#E53E3E] rounded-2xl" })]
						}, t.name);
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative flex-grow w-full min-h-[300px] flex items-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatePresence, {
						mode: "wait",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
							initial: {
								opacity: 0,
								x: 50,
								scale: .95
							},
							animate: {
								opacity: 1,
								x: 0,
								scale: 1
							},
							exit: {
								opacity: 0,
								x: -50,
								scale: .95
							},
							transition: {
								duration: .45,
								ease: "easeOut"
							},
							className: "w-full bg-white rounded-3xl p-8 sm:p-10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.06)] border border-hairline relative overflow-hidden text-left",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "absolute right-6 top-2 font-display text-[150px] font-bold text-gray-200 select-none pointer-events-none leading-none",
								children: "“"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative z-10",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
										className: "font-display text-2xl sm:text-3xl font-semibold text-gray-800 leading-snug",
										children: [
											"\"",
											TESTIMONIALS_DATA[activeIndex].quote,
											"\""
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-4 text-sm text-gray-500 font-light leading-relaxed",
										children: TESTIMONIALS_DATA[activeIndex].trust
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-8 pt-6 border-t border-hairline flex flex-wrap items-center justify-between gap-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
											className: "font-display font-bold text-base text-gray-800",
											children: TESTIMONIALS_DATA[activeIndex].name
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "text-xs text-gray-400 font-mono uppercase tracking-wider mt-0.5",
											children: [
												TESTIMONIALS_DATA[activeIndex].role,
												", ",
												TESTIMONIALS_DATA[activeIndex].company
											]
										})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "flex gap-1 text-[#E53E3E]",
											children: Array.from({ length: 5 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-lg",
												children: "★"
											}, i))
										})]
									})
								]
							})]
						}, activeIndex)
					})
				})]
			})]
		})
	});
}
function Pricing() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "pricing",
		className: "relative py-24 sm:py-32 bg-[#F5F3EF]",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-5 sm:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				className: "max-w-3xl mx-auto text-center mb-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-mono text-xs uppercase tracking-widest text-[#1A2E22]/60",
					children: "/ Pricing"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "mt-3 font-display text-4xl sm:text-5xl font-bold text-black",
					children: ["Flexible Pricing for ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[#1A2E22]",
						children: "Every Team"
					})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stagger, {
				className: "grid gap-8 lg:grid-cols-3 max-w-5xl mx-auto",
				children: [
					{
						name: "BASIC",
						price: "$49",
						period: "/Month",
						icon: Cpu,
						isHighlighted: false,
						features: [
							"Basic Deployments",
							"Community Support",
							"Up to 5 active models",
							"Standard telemetry logs"
						],
						cta: "START NOW"
					},
					{
						name: "STANDARD",
						price: "$199",
						period: "/Month",
						icon: Gauge,
						isHighlighted: true,
						features: [
							"Unlimited Deployments",
							"Elastic Auto Scaling",
							"Advanced telemetry logs",
							"REST & gRPC API Access"
						],
						cta: "START NOW"
					},
					{
						name: "PREMIUM",
						price: "Custom",
						period: "",
						icon: Globe,
						isHighlighted: false,
						features: [
							"Dedicated Infrastructure",
							"SLA guaranteed support",
							"Private networks & VPCs",
							"Custom enterprise API Integrations"
						],
						cta: "START NOW"
					}
				].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
					variants: fadeUp,
					whileHover: {
						y: -12,
						scale: 1.02
					},
					transition: {
						type: "spring",
						stiffness: 300,
						damping: 20
					},
					className: `relative rounded-[2rem] p-8 flex flex-col justify-between text-white shadow-xl bg-[#1A2E22] border-2 ${t.isHighlighted ? "border-[#C6F135]" : "border-transparent"} min-h-[580px] overflow-hidden`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between mb-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "flex h-10 w-10 items-center justify-center rounded-full bg-white/10",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(t.icon, { className: "h-5 w-5 text-[#C6F135]" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-display font-black tracking-widest text-sm uppercase text-white/90",
									children: t.name
								})]
							}), t.isHighlighted && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "rounded-full bg-[#C6F135] px-3 py-1 text-[10px] font-black text-[#1A2E22]",
								children: "POPULAR"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "relative mb-8 -ml-8 w-[calc(100%+4rem)] bg-[#F5F3EF] rounded-r-full py-4 pl-8 pr-4 shadow-sm flex flex-col justify-center",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-baseline gap-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-display text-4xl font-extrabold text-[#1A2E22]",
									children: t.price
								}), t.period && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-sm font-semibold uppercase tracking-wider text-[#1A2E22]/70",
									children: t.period
								})]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "space-y-4 mb-8",
							children: t.features.map((f, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-start gap-3 text-[13px] sm:text-sm font-medium text-white/90",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
									className: "h-5 w-5 shrink-0 text-[#C6F135]",
									strokeWidth: 3
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: f })]
							}, idx))
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-full h-px bg-white/10 mb-8" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "#contact",
						className: `inline-flex w-full items-center justify-center rounded-full border-2 py-3.5 text-sm font-bold tracking-widest transition-all uppercase active:scale-95 shadow-md ${t.isHighlighted ? "bg-[#C6F135] border-[#C6F135] text-[#1A2E22] hover:bg-transparent hover:text-white" : "bg-transparent border-white text-white hover:bg-white hover:text-[#1A2E22]"}`,
						children: t.cta
					})] })]
				}, t.name))
			})]
		})
	});
}
function FAQ() {
	const items = [
		{
			q: "What is OriginSearch?",
			a: "OriginSearch is an enterprise AI deployment platform that automates model deployment, orchestration, monitoring, and scaling across cloud, edge, and hybrid infrastructure."
		},
		{
			q: "Which cloud providers are supported?",
			a: "AWS, Google Cloud, Microsoft Azure, and on-premises Kubernetes clusters — with unified networking and a single control plane."
		},
		{
			q: "Can I deploy containerized models?",
			a: "Yes. Bring your own container, or use our framework-native runtimes for PyTorch, TensorFlow, ONNX, JAX, and vLLM."
		},
		{
			q: "Does it support auto scaling?",
			a: "Elastic autoscaling reacts to traffic in seconds, scaling replicas, GPUs, and regions based on latency and throughput targets."
		},
		{
			q: "Is model versioning included?",
			a: "Every deployment has a versioned artifact with lineage, promotion pipelines, canary rollouts, and one-click rollback."
		},
		{
			q: "Is there an API available?",
			a: "A full REST and gRPC API, plus SDKs for Python, TypeScript, and Go — everything in the UI is available programmatically."
		}
	];
	const [open, setOpen] = (0, import_react.useState)(0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "faq",
		className: "relative py-24 sm:py-32 bg-white",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-4xl px-5 sm:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
				className: "text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "font-mono text-xs uppercase tracking-widest text-ink-2",
					children: "/ FAQ"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "mt-3 font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-ink",
					children: ["Frequently Asked ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-forest",
						children: "Questions"
					})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stagger, {
				className: "mt-14 grid gap-3",
				children: items.map((it, i) => {
					const isOpen = open === i;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
						variants: fadeUp,
						className: `rounded-2xl border transition-colors ${isOpen ? "border-forest bg-muted/40" : "border-hairline bg-card"}`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							onClick: () => setOpen(isOpen ? null : i),
							"aria-expanded": isOpen,
							className: "flex w-full items-center justify-between gap-6 px-6 py-5 text-left",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-base sm:text-lg font-semibold text-ink",
								children: it.q
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.span, {
								animate: { rotate: isOpen ? 45 : 0 },
								transition: { duration: .2 },
								className: "grid h-8 w-8 shrink-0 place-items-center rounded-full bg-forest text-lime",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "h-4 w-4" })
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
							initial: false,
							animate: {
								height: isOpen ? "auto" : 0,
								opacity: isOpen ? 1 : 0
							},
							transition: {
								duration: .28,
								ease: "easeOut"
							},
							className: "overflow-hidden",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "px-6 pb-6 text-sm sm:text-base text-ink-2 leading-relaxed",
								children: it.a
							})
						})]
					}, it.q);
				})
			})]
		})
	});
}
function Contact() {
	const [status, setStatus] = (0, import_react.useState)("idle");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "contact",
		className: "relative overflow-hidden bg-paper py-16 sm:py-24",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative overflow-hidden bg-forest text-paper rounded-[2rem] p-8 sm:p-12 lg:p-16 shadow-[0_30px_70px_-20px_rgba(26,46,34,0.4)]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-grid-dark opacity-35" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[radial-gradient(60%_50%_at_80%_30%,rgba(198,241,53,0.1),transparent_70%)]" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative grid gap-12 lg:grid-cols-12 lg:items-start",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "lg:col-span-7",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("form", {
								onSubmit: (e) => {
									e.preventDefault();
									setStatus("sent");
									setTimeout(() => setStatus("idle"), 3500);
								},
								className: "space-y-6",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Stagger, {
									className: "grid gap-6",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
											variants: fadeUp,
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
												className: "mb-2 block text-sm font-semibold text-paper",
												children: "Your Name"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												required: true,
												type: "text",
												name: "name",
												placeholder: "Full Name",
												maxLength: 200,
												className: "w-full rounded-xl border border-paper/10 bg-forest-2/40 px-4 py-3.5 text-sm text-paper placeholder:text-paper/30 outline-none transition-all focus:border-lime focus:ring-1 focus:ring-lime/30"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
											variants: fadeUp,
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
												className: "mb-2 block text-sm font-semibold text-paper",
												children: "Your Email"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												required: true,
												type: "email",
												name: "email",
												placeholder: "Email Address",
												maxLength: 200,
												className: "w-full rounded-xl border border-paper/10 bg-forest-2/40 px-4 py-3.5 text-sm text-paper placeholder:text-paper/30 outline-none transition-all focus:border-lime focus:ring-1 focus:ring-lime/30"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
											variants: fadeUp,
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
												className: "mb-2 block text-sm font-semibold text-paper",
												children: "Subject"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												required: true,
												type: "text",
												name: "subject",
												placeholder: "Subject",
												maxLength: 200,
												className: "w-full rounded-xl border border-paper/10 bg-forest-2/40 px-4 py-3.5 text-sm text-paper placeholder:text-paper/30 outline-none transition-all focus:border-lime focus:ring-1 focus:ring-lime/30"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(motion.div, {
											variants: fadeUp,
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
												className: "mb-2 block text-sm font-semibold text-paper",
												children: "Your Message"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
												name: "message",
												rows: 6,
												placeholder: "Message",
												maxLength: 1e3,
												className: "w-full resize-none rounded-xl border border-paper/10 bg-forest-2/40 px-4 py-3.5 text-sm text-paper placeholder:text-paper/30 outline-none transition-all focus:border-lime focus:ring-1 focus:ring-lime/30"
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.div, {
											variants: fadeUp,
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(motion.button, {
												type: "submit",
												whileHover: { scale: 1.02 },
												whileTap: { scale: .98 },
												className: "rounded-xl bg-lime px-8 py-4 text-sm font-bold text-forest tracking-wider uppercase shadow-[0_20px_50px_-16px_rgba(198,241,53,0.4)] transition-all hover:bg-lime/90",
												children: status === "sent" ? "Message Sent ✓" : "Send Message"
											})
										})
									]
								})
							}) })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "lg:col-span-5 space-y-10",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-mono text-sm font-semibold tracking-wider text-lime block",
									children: "Contact Us"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "mt-3 font-display text-4xl sm:text-5xl font-bold leading-tight text-paper",
									children: "Get In Touch"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 text-base text-paper/70 leading-relaxed",
									children: "Nullam fermentum ullamcorper diam sit amet porta. Etiam ac enim velit. Ut ut mi sed turpis accumsan sagittis ac eu magna. Etiam ac nisi tellus. Morbi at velit nisl."
								})
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-10 grid gap-8 sm:grid-cols-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-start gap-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-lime/10 text-lime border border-lime/20 shadow-[0_0_15px_-3px_rgba(198,241,53,0.2)]",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
												className: "h-5 w-5",
												fill: "none",
												viewBox: "0 0 24 24",
												stroke: "currentColor",
												strokeWidth: 1.8,
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
													strokeLinecap: "round",
													strokeLinejoin: "round",
													d: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
												})
											})
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
											className: "font-semibold text-paper text-base",
											children: "Call Us"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: "tel:+13105556688",
											className: "mt-1 text-sm text-paper/60 hover:text-lime transition-colors block",
											children: "+13105556688"
										})] })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-start gap-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-lime/10 text-lime border border-lime/20 shadow-[0_0_15px_-3px_rgba(198,241,53,0.2)]",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
												className: "h-5 w-5",
												fill: "none",
												viewBox: "0 0 24 24",
												stroke: "currentColor",
												strokeWidth: 1.8,
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
													strokeLinecap: "round",
													strokeLinejoin: "round",
													d: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
												})
											})
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
											className: "font-semibold text-paper text-base",
											children: "Email Us"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: "mailto:info@originsearch.one",
											className: "mt-1 text-sm text-paper/60 hover:text-lime transition-colors block break-all",
											children: "info@originsearch.one"
										})] })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-start gap-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-lime/10 text-lime border border-lime/20 shadow-[0_0_15px_-3px_rgba(198,241,53,0.2)]",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
												className: "h-5 w-5",
												fill: "none",
												viewBox: "0 0 24 24",
												stroke: "currentColor",
												strokeWidth: 1.8,
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
													strokeLinecap: "round",
													strokeLinejoin: "round",
													d: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
												})
											})
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
											className: "font-semibold text-paper text-base",
											children: "Website"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
											href: "https://originsearch.one",
											target: "_blank",
											rel: "noopener noreferrer",
											className: "mt-1 text-sm text-paper/60 hover:text-lime transition-colors block",
											children: "www.originsearch.one"
										})] })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-start gap-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-lime/10 text-lime border border-lime/20 shadow-[0_0_15px_-3px_rgba(198,241,53,0.2)]",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
												className: "h-5 w-5",
												fill: "none",
												viewBox: "0 0 24 24",
												stroke: "currentColor",
												strokeWidth: 1.8,
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
													strokeLinecap: "round",
													strokeLinejoin: "round",
													d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
													strokeLinecap: "round",
													strokeLinejoin: "round",
													d: "M15 11a3 3 0 11-6 0 3 3 0 016 0z"
												})]
											})
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
											className: "font-semibold text-paper text-base",
											children: "Address"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "mt-1 text-sm text-paper/60 block leading-relaxed",
											children: "318 E 2ND ST STE A LOS ANGELES CA, USA"
										})] })]
									})
								]
							})] })
						})]
					})
				]
			})
		})
	});
}
function Footer() {
	const cols = [{
		title: "Quick Links",
		links: [
			{
				label: "About",
				href: "#about"
			},
			{
				label: "Features",
				href: "#features"
			},
			{
				label: "Pricing",
				href: "#pricing"
			},
			{
				label: "FAQ",
				href: "#faq"
			},
			{
				label: "Contact",
				href: "#contact"
			}
		]
	}, {
		title: "Resources",
		links: [
			{
				label: "Documentation (Coming Soon)",
				href: "#"
			},
			{
				label: "Developer API",
				href: "#"
			},
			{
				label: "Integrations",
				href: "#"
			},
			{
				label: "Security",
				href: "#"
			}
		]
	}];
	const socials = [
		{
			label: "Facebook",
			href: "#",
			svg: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
				className: "h-4 w-4",
				fill: "currentColor",
				viewBox: "0 0 24 24",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" })
			})
		},
		{
			label: "Twitter / X",
			href: "#",
			svg: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
				className: "h-4 w-4",
				fill: "currentColor",
				viewBox: "0 0 24 24",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" })
			})
		},
		{
			label: "Pinterest",
			href: "#",
			svg: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
				className: "h-4 w-4",
				fill: "currentColor",
				viewBox: "0 0 24 24",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" })
			})
		},
		{
			label: "YouTube",
			href: "#",
			svg: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
				className: "h-4 w-4",
				fill: "currentColor",
				viewBox: "0 0 24 24",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" })
			})
		},
		{
			label: "LinkedIn",
			href: "#",
			svg: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
				className: "h-4 w-4",
				fill: "currentColor",
				viewBox: "0 0 24 24",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" })
			})
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "bg-footer text-paper/80",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl px-5 sm:px-8 py-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-10 lg:grid-cols-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "lg:col-span-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#home",
							className: "flex items-center shrink-0",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: "/logo2.svg",
								alt: "OriginSearch Logo",
								className: "h-9 w-auto object-contain"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 max-w-xs text-sm leading-relaxed text-paper/60",
							children: "Enterprise AI deployment, orchestration, and lifecycle management platform."
						})]
					}),
					cols.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
						className: "font-display text-sm font-semibold uppercase tracking-widest text-paper",
						children: c.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-4 space-y-2.5",
						children: c.links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: l.href,
							className: "text-sm text-paper/70 transition-colors hover:text-lime",
							children: l.label
						}) }, l.label))
					})] }, c.title)),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
						className: "font-display text-sm font-semibold uppercase tracking-widest text-paper",
						children: "Follow"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-4 flex flex-wrap items-center gap-3",
						children: socials.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: s.href,
							"aria-label": s.label,
							className: "grid h-10 w-10 place-items-center rounded-full border border-paper/15 text-paper transition-all hover:-translate-y-1 hover:border-lime hover:text-lime hover:bg-lime/5",
							children: s.svg
						}, s.label))
					})] })
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-14 flex flex-col-reverse items-start gap-3 border-t border-paper/10 pt-6 sm:flex-row sm:items-center sm:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs text-paper/50",
					children: "© 2026 OriginSearch.one. All rights reserved."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-xs font-mono uppercase tracking-widest text-paper/40",
					children: "Built for production AI · v4 runtime"
				})]
			})]
		})
	});
}
function LandingPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CursorGlow, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatsBar, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(About, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HowItWorks, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TargetUsers, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Features, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Testimonials, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pricing, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FAQ, {}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Contact, {})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
//#endregion
export { LandingPage as component };
