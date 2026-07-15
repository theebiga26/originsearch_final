import React, { useEffect, useRef } from 'react';

/* ---------- Cursor glow (desktop) ---------- */
export function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const onMove = (e: MouseEvent) => {
      if (!ref.current) return;
      ref.current.style.transform = `translate(${e.clientX - 200}px, ${e.clientY - 200}px)`;
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);
  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[1] h-[400px] w-[400px] rounded-full opacity-40 mix-blend-screen"
      style={{
        background: "radial-gradient(closest-side, rgba(198,241,53,0.28), transparent 70%)",
      }}
    />
  );
}

/* ---------- PerspectiveGridCanvas ---------- */
export function PerspectiveGridCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = 0, h = 0;
    let animId: number;
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

    // circuit lines (glows)
    const circuits = Array.from({ length: 25 }).map(() => ({
      x: Math.random() * 3000 - 1500, // will be mapped to grid cols
      y: Math.random() * 2000,
      length: 100 + Math.random() * 200,
      speed: 1 + Math.random() * 4,
      isVertical: Math.random() > 0.4
    }));

    const draw = () => {
      ctx.clearRect(0, 0, w, h);

      const gridSize = 60;
      offset = (offset + 1.5) % gridSize;

      // Draw Grid
      ctx.beginPath();
      // vertical lines
      for (let x = (w / 2) % gridSize; x < w; x += gridSize) {
        ctx.moveTo(x, 0); ctx.lineTo(x, h);
      }
      for (let x = (w / 2) % gridSize - gridSize; x > 0; x -= gridSize) {
        ctx.moveTo(x, 0); ctx.lineTo(x, h);
      }
      // horizontal lines (moving down to simulate forward movement)
      for (let y = offset; y < h; y += gridSize) {
        ctx.moveTo(0, y); ctx.lineTo(w, y);
      }
      ctx.strokeStyle = "rgba(198,241,53,0.15)"; // faint lime grid
      ctx.lineWidth = 1;
      ctx.stroke();

      // Draw Circuits
      circuits.forEach(c => {
        // snap to grid
        const cx = Math.floor(c.x / gridSize) * gridSize + (w / 2) % gridSize;
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

        ctx.strokeStyle = "#C6F135"; // lime
        ctx.lineWidth = 2;
        ctx.shadowColor = "#C6F135";
        ctx.shadowBlur = 10;
        ctx.stroke();

        ctx.shadowBlur = 0; // reset shadow for other drawing

        // glow dot at front
        ctx.beginPath();
        if (c.isVertical) {
          ctx.arc(cx, cy + c.length, 3, 0, Math.PI * 2);
        } else {
          ctx.arc(cx + c.length, Math.floor(cy / gridSize) * gridSize + offset, 3, 0, Math.PI * 2);
        }
        ctx.fillStyle = "#ffffff";
        ctx.shadowColor = "#C6F135";
        ctx.shadowBlur = 15;
        ctx.fill();
        ctx.shadowBlur = 0;

        // reset
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

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden" style={{ perspective: '1200px' }}>
      <canvas
        ref={canvasRef}
        className="absolute w-[150%] h-[150%] bottom-[-20%] left-[-25%] opacity-60"
        style={{ transform: 'rotateX(75deg)', transformOrigin: 'bottom center' }}
      />
      {/* Gradient to fade out the top of the grid into the dark background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1A2E22] via-[#1A2E22]/80 to-transparent" />
    </div>
  );
}
