"use client";

import { useEffect, useRef } from "react";

type Node = {
  x: number;
  y: number;
  tx: number;
  ty: number;
  ox: number;
  oy: number;
};

function bitcoinGeometry(): {
  points: { x: number; y: number }[];
  glyph: [number, number][];
} {
  const points: { x: number; y: number }[] = [];
  const glyph: [number, number][] = [];
  const ring = 28;

  for (let i = 0; i < ring; i += 1) {
    const angle = (i / ring) * Math.PI * 2 - Math.PI / 2;
    points.push({ x: Math.cos(angle) * 0.92, y: Math.sin(angle) * 0.92 });
    glyph.push([i, (i + 1) % ring]);
  }

  for (let stem = 0; stem < 2; stem += 1) {
    const start = points.length;
    const x = -0.2 + stem * 0.16;
    const count = 9;
    for (let i = 0; i < count; i += 1) {
      const t = i / (count - 1);
      points.push({ x, y: -0.72 + t * 1.44 });
    }
    for (let i = 0; i < count - 1; i += 1) {
      glyph.push([start + i, start + i + 1]);
    }
  }

  const lobe = (
    cx: number,
    cy: number,
    rx: number,
    ry: number,
    steps: number,
  ) => {
    const start = points.length;
    for (let i = 0; i <= steps; i += 1) {
      const angle = -Math.PI / 2 + (i / steps) * Math.PI;
      points.push({
        x: cx + Math.cos(angle) * rx,
        y: cy + Math.sin(angle) * ry,
      });
    }
    for (let i = 0; i < steps; i += 1) {
      glyph.push([start + i, start + i + 1]);
    }
  };

  lobe(0.02, -0.28, 0.32, 0.26, 8);
  lobe(0.02, 0.3, 0.36, 0.3, 8);

  return { points, glyph };
}

export function BitcoinNetworkField({
  reducedMotion = false,
}: {
  reducedMotion?: boolean;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;

    const { points: targets, glyph } = bitcoinGeometry();
    const pointer = { x: -9999, y: -9999, inside: false };
    let frame = 0;
    let raf = 0;

    const nodes: Node[] = targets.map((target) => {
      const angle = Math.random() * Math.PI * 2;
      const radius = 0.15 + Math.random() * 0.95;
      return {
        x: Math.cos(angle) * radius,
        y: -0.55 + Math.sin(angle) * radius * 0.65,
        tx: target.x,
        ty: target.y,
        ox: 0,
        oy: 0,
      };
    });

    if (reducedMotion) {
      nodes.forEach((node) => {
        node.x = node.tx;
        node.y = node.ty;
      });
    }

    const ambient = Array.from({ length: 72 }, () => ({
      x: Math.random(),
      y: Math.pow(Math.random(), 1.35) * 0.78,
      ox: 0,
      oy: 0,
    }));

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      const rect = parent.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.max(1, Math.floor(rect.width * dpr));
      canvas.height = Math.max(1, Math.floor(rect.height * dpr));
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const onMove = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      pointer.inside =
        event.clientX >= rect.left &&
        event.clientX <= rect.right &&
        event.clientY >= rect.top &&
        event.clientY <= rect.bottom;
      pointer.x = event.clientX - rect.left;
      pointer.y = event.clientY - rect.top;
    };

    const draw = () => {
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;
      context.clearRect(0, 0, width, height);
      const originX = width * 0.22;
      const originY = height * 0.2;
      const scale = Math.min(width, height) * 0.22;
      const form = reducedMotion ? 1 : Math.min(1, frame / 220);

      nodes.forEach((node) => {
        if (!reducedMotion) {
          const pull = 0.012 + form * 0.02;
          node.x += (node.tx - node.x) * pull;
          node.y += (node.ty - node.y) * pull;
        }
        const px = originX + node.x * scale;
        const py = originY + node.y * scale;
        if (!reducedMotion && pointer.inside) {
          const dx = px - pointer.x;
          const dy = py - pointer.y;
          const dist = Math.hypot(dx, dy) || 1;
          if (dist < 140) {
            const push = (140 - dist) / 140;
            node.ox += (dx / dist) * push * 18;
            node.oy += (dy / dist) * push * 18;
          }
        }
        node.ox *= 0.86;
        node.oy *= 0.86;
      });

      const fadeAt = (x: number, y: number) => {
        const overTitle =
          x < width * 0.5 && y > height * 0.4 && y < height * 0.9;
        return overTitle ? 0.55 : 1;
      };

      const stroke = (
        ax: number,
        ay: number,
        bx: number,
        by: number,
        widthPx: number,
        alpha: number,
      ) => {
        const fade = Math.min(fadeAt(ax, ay), fadeAt(bx, by));
        context.lineWidth = widthPx;
        context.strokeStyle = `rgba(247, 147, 26, ${alpha * fade})`;
        context.beginPath();
        context.moveTo(ax, ay);
        context.lineTo(bx, by);
        context.stroke();
      };

      ambient.forEach((dot) => {
        const px = dot.x * width;
        const py = dot.y * height;
        if (!reducedMotion && pointer.inside) {
          const dx = px - pointer.x;
          const dy = py - pointer.y;
          const dist = Math.hypot(dx, dy) || 1;
          if (dist < 130) {
            const push = (130 - dist) / 130;
            dot.ox += (dx / dist) * push * 16;
            dot.oy += (dy / dist) * push * 16;
          }
        }
        dot.ox *= 0.86;
        dot.oy *= 0.86;
      });

      const field = ambient.map((dot) => ({
        x: dot.x * width + dot.ox,
        y: dot.y * height + dot.oy,
      }));

      for (let i = 0; i < field.length; i += 1) {
        for (let j = i + 1; j < field.length; j += 1) {
          const dist = Math.hypot(field[i].x - field[j].x, field[i].y - field[j].y);
          if (dist > 118) continue;
          stroke(field[i].x, field[i].y, field[j].x, field[j].y, 1, (1 - dist / 118) * 0.42);
        }
      }

      field.forEach((dot) => {
        context.fillStyle = `rgba(247, 147, 26, ${0.88 * fadeAt(dot.x, dot.y)})`;
        context.beginPath();
        context.arc(dot.x, dot.y, 2.6, 0, Math.PI * 2);
        context.fill();
      });

      const placed = nodes.map((node) => ({
        x: originX + node.x * scale + node.ox,
        y: originY + node.y * scale + node.oy,
      }));

      const linked = new Set<number>();
      glyph.forEach(([from, to]) => {
        linked.add(from);
        linked.add(to);
      });

      for (let i = 0; i < nodes.length; i += 1) {
        if (linked.has(i)) continue;
        let nearest = -1;
        let nearestDist = Infinity;
        for (let j = 0; j < nodes.length; j += 1) {
          if (i === j) continue;
          const dist = Math.hypot(placed[i].x - placed[j].x, placed[i].y - placed[j].y);
          if (dist < nearestDist) {
            nearestDist = dist;
            nearest = j;
          }
        }
        if (nearest < 0) continue;
        const a = placed[i];
        const b = placed[nearest];
        stroke(a.x, a.y, b.x, b.y, 1.15, 0.34);
      }

      glyph.forEach(([from, to]) => {
        const a = placed[from];
        const b = placed[to];
        if (!a || !b) return;
        stroke(a.x, a.y, b.x, b.y, 1, 0.3 + form * 0.55);
      });

      field.forEach((dot) => {
        let nearest = -1;
        let nearestDist = 150;
        for (let index = 0; index < placed.length; index += 1) {
          const dist = Math.hypot(dot.x - placed[index].x, dot.y - placed[index].y);
          if (dist < nearestDist) {
            nearestDist = dist;
            nearest = index;
          }
        }
        if (nearest < 0) return;
        const target = placed[nearest];
        stroke(dot.x, dot.y, target.x, target.y, 1, 0.32);
      });

      placed.forEach((point, index) => {
        context.fillStyle = `rgba(247, 147, 26, ${0.9 * fadeAt(point.x, point.y)})`;
        context.beginPath();
        context.arc(point.x, point.y, linked.has(index) ? 2.4 : 2, 0, Math.PI * 2);
        context.fill();
      });

      frame += 1;
      raf = window.requestAnimationFrame(draw);
    };

    resize();
    const observer = new ResizeObserver(resize);
    if (canvas.parentElement) observer.observe(canvas.parentElement);
    window.addEventListener("pointermove", onMove);
    raf = window.requestAnimationFrame(draw);

    return () => {
      window.cancelAnimationFrame(raf);
      observer.disconnect();
      window.removeEventListener("pointermove", onMove);
    };
  }, [reducedMotion]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className="pointer-events-none absolute inset-0 h-full w-full"
    />
  );
}
