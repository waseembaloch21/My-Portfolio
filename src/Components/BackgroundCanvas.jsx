import React, { useEffect, useRef } from 'react';

const BackgroundCanvas = () => {
  const canvasRef = useRef(null);
  const particlesArray = useRef([]);

  const mouse = useRef({
    x: null,
    y: null,
  });

  // Handle mouse movement to generate particles
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const updateCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    updateCanvasSize();

    window.addEventListener('resize', updateCanvasSize);

    const mouseMoveHandler = (e) => {
      mouse.current.x = e.x;
      mouse.current.y = e.y;

      // Generate particles on mouse movement (increased to 5 particles)
      for (let i = 0; i < 5; i++) {
        particlesArray.current.push(new Particle());
      }
    };

    window.addEventListener('mousemove', mouseMoveHandler);

    // Particle class definition
    class Particle {
      constructor() {
        this.x = mouse.current.x;
        this.y = mouse.current.y;
        this.size = Math.random() * 10 + 5; // Increased particle size (min 5, max 15)
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;
        this.color = `hsl(${Math.random() * 360}, 100%, 50%)`; // Random colors
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.size *= 0.95; // Shrink over time
      }

      draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Handle and draw particles
    const handleParticles = () => {
      for (let i = 0; i < particlesArray.current.length; i++) {
        particlesArray.current[i].update();
        particlesArray.current[i].draw();

        // Remove small particles
        if (particlesArray.current[i].size <= 0.5) {
          particlesArray.current.splice(i, 1);
          i--;
        }
      }
    };

    // Animation function
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      handleParticles();
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', updateCanvasSize);
      window.removeEventListener('mousemove', mouseMoveHandler);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute top-0 left-0 z-[-1]" />;
};

export default BackgroundCanvas;