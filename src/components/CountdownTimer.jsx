import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useMemo, useState } from 'react';

function getTimeLeft(targetDate) {
  const target = new Date(targetDate).getTime();
  const diff = Math.max(target - Date.now(), 0);

  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export default function CountdownTimer({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState(() => getTimeLeft(targetDate));
  const units = useMemo(
    () => [
      ['days', 'Days'],
      ['hours', 'Hours'],
      ['minutes', 'Minutes'],
      ['seconds', 'Seconds'],
    ],
    [],
  );

  useEffect(() => {
    const timer = window.setInterval(() => setTimeLeft(getTimeLeft(targetDate)), 1000);
    return () => window.clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="mt-9 grid grid-cols-2 gap-3 sm:grid-cols-4">
      {units.map(([key, label]) => (
        <motion.div
          key={key}
          className="border border-gold/25 bg-white/70 px-3 py-5"
          whileHover={{ y: -4, borderColor: 'rgba(200, 157, 66, 0.55)' }}
          transition={{ type: 'spring', stiffness: 240, damping: 18 }}
        >
          <AnimatePresence mode="wait">
            <motion.span
              key={timeLeft[key]}
              className="block font-display text-4xl font-semibold text-deepGold"
              initial={{ opacity: 0, y: -10, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.96 }}
              transition={{ duration: 0.24 }}
            >
              {String(timeLeft[key]).padStart(2, '0')}
            </motion.span>
          </AnimatePresence>
          <span className="mt-2 block text-xs font-bold uppercase tracking-[0.18em] text-ink/60">
            {label}
          </span>
        </motion.div>
      ))}
    </div>
  );
}
