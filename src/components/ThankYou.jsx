import { motion } from 'framer-motion';
import ornament from '../assets/gold-ornament.svg';

export default function ThankYou({ names, guestName }) {
  return (
    <footer className="px-5 pb-28 pt-16 sm:px-8 md:pb-20">
      <motion.div
        className="luxury-card gold-border mx-auto max-w-4xl px-6 py-14 text-center sm:px-12 sm:py-16"
        whileHover={{ scale: 1.01 }}
        transition={{ type: 'spring', stiffness: 160, damping: 20 }}
      >
        <motion.p
          className="font-body text-xs font-bold uppercase tracking-[0.34em] text-deepGold"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Thank You
        </motion.p>
        <motion.h2
          className="mt-5 font-display text-5xl font-semibold text-ink sm:text-7xl"
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.12 }}
        >
          {guestName ? `With love, ${guestName}` : 'With love and gratitude'}
        </motion.h2>
        <motion.img
          className="mx-auto my-8 w-72 max-w-full"
          src={ornament}
          alt=""
          animate={{ opacity: [0.75, 1, 0.75], scale: [1, 1.03, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        />
        <p className="mx-auto max-w-2xl font-display text-2xl leading-relaxed text-ink/75 sm:text-3xl">
          We cannot wait to share this special day with you.
        </p>
        <motion.p
          className="mt-8 font-script text-6xl text-deepGold"
          
          transition={{ duration: 3.4, repeat: Infinity, ease: 'easeInOut' }}
        >
          {names.groom} & {names.bride}
        </motion.p>
      </motion.div>
    </footer>
  );
}
