import React, { useEffect, useRef } from 'react';
import './CursorEffect.css';

const CursorEffect = () => {
  const canvasRef = useRef(null);
  const trailRef = useRef([]);
  const animationRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const handleMouseMove = (e) => {
      trailRef.current.push({
        x: e.clientX,
        y: e.clientY,
        opacity: 0.3
      });

      // Keep only last 15 points
      if (trailRef.current.length > 15) {
        trailRef.current.shift();
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw subtle light trail
      if (trailRef.current.length > 1) {
        for (let i = 0; i < trailRef.current.length - 1; i++) {
          const point = trailRef.current[i];
          const nextPoint = trailRef.current[i + 1];
          
          const gradient = ctx.createLinearGradient(point.x, point.y, nextPoint.x, nextPoint.y);
          gradient.addColorStop(0, `rgba(139, 92, 246, ${point.opacity * 0.15})`);
          gradient.addColorStop(1, `rgba(99, 102, 241, ${point.opacity * 0.2})`);
          
          ctx.strokeStyle = gradient;
          ctx.lineWidth = 2;
          ctx.lineCap = 'round';
          ctx.beginPath();
          ctx.moveTo(point.x, point.y);
          ctx.lineTo(nextPoint.x, nextPoint.y);
          ctx.stroke();

          // Fade out
          point.opacity *= 0.95;
        }

        // Remove fully faded points
        trailRef.current = trailRef.current.filter(p => p.opacity > 0.01);
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);
    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return <canvas ref={canvasRef} className="cursor-canvas" />;
};

export default CursorEffect;
