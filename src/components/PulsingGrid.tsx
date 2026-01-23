'use client';

import { useEffect, useRef } from 'react';

interface Pulse {
  x: number;
  y: number;
  radius: number;
  maxRadius: number;
  opacity: number;
  colorIndex: number;
}

const COLORS = ['#f97316', '#306bff'];
const DOT_SIZE = 3;
const GRID_SPACING = 15;
const BASE_OPACITY = 0.15;

export default function PulsingGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pulsesRef = useRef<Pulse[]>([]);
  const animationRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const drawGrid = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let x = 0; x < canvas.width; x += GRID_SPACING) {
        for (let y = 0; y < canvas.height; y += GRID_SPACING) {
          let color = `rgba(0, 0, 0, ${BASE_OPACITY})`;
          let size = DOT_SIZE;

          for (const pulse of pulsesRef.current) {
            const distance = Math.sqrt((x - pulse.x) ** 2 + (y - pulse.y) ** 2);
            if (distance <= pulse.radius && distance >= pulse.radius - 30) {
              const intensity = 1 - (distance - (pulse.radius - 30)) / 30;
              const pulseOpacity = pulse.opacity;
              const r = parseInt(COLORS[pulse.colorIndex].slice(1, 3), 16);
              const g = parseInt(COLORS[pulse.colorIndex].slice(3, 5), 16);
              const b = parseInt(COLORS[pulse.colorIndex].slice(5, 7), 16);
              color = `rgba(${r}, ${g}, ${b}, ${pulseOpacity * intensity})`;
              size = DOT_SIZE + (intensity * 2);
              break;
            }
          }

          ctx.fillStyle = color;
          ctx.fillRect(x - size/2, y - size/2, size, size);
        }
      }
    };

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      drawGrid();
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const updatePulses = () => {
      pulsesRef.current = pulsesRef.current.filter(pulse => pulse.opacity > 0);

      pulsesRef.current.forEach(pulse => {
        pulse.radius += 3;
        pulse.opacity -= 0.008;
      });
    };

    const animate = () => {
      updatePulses();
      drawGrid();
      animationRef.current = requestAnimationFrame(animate);
    };

    drawGrid();
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  const addPulse = (x: number, y: number) => {
    const colorIndex = Math.floor(Math.random() * COLORS.length);
    pulsesRef.current.push({
      x,
      y,
      radius: 0,
      maxRadius: 200,
      opacity: 1,
      colorIndex
    });
  };

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      addPulse(e.clientX, e.clientY);
    };

    window.addEventListener('click', handleClick);
    return () => window.removeEventListener('click', handleClick);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ backgroundColor: '#e4e4e4' }}
    />
  );
}
