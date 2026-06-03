import { motion } from 'framer-motion';

const particles = [
  { left: '9%', size: 6, delay: 0, duration: 13 },
  { left: '21%', size: 4, delay: 2.2, duration: 15 },
  { left: '36%', size: 7, delay: 1.1, duration: 17 },
  { left: '51%', size: 5, delay: 3.4, duration: 14 },
  { left: '66%', size: 8, delay: 0.8, duration: 18 },
  { left: '79%', size: 4, delay: 4.2, duration: 16 },
  { left: '91%', size: 6, delay: 2.9, duration: 19 },
];

export default function AmbientParticles() {
  return (
    <div className="pointer-events-none fixed inset-0 z-10 overflow-hidden" aria-hidden="true">
      {particles.map((particle) => (
        <motion.span
          key={`${particle.left}-${particle.delay}`}
          className="absolute bottom-[-40px] rounded-full bg-gold/35 shadow-[0_0_24px_rgba(200,157,66,0.45)]"
          style={{
            left: particle.left,
            width: particle.size,
            height: particle.size,
          }}
          animate={{
            y: ['0vh', '-112vh'],
            x: [0, 18, -10, 12, 0],
            opacity: [0, 0.7, 0.55, 0],
            scale: [0.8, 1.2, 1],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
}
