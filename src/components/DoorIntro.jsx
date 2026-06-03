import { motion } from 'framer-motion';
import ornament from '../assets/gold-ornament.svg';

export default function DoorIntro({ onOpen }) {
  return (
    <motion.section
      className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-ivory"
      exit={{ opacity: 0, transition: { delay: 1.1, duration: 0.45 } }}
      aria-label="Open wedding invitation"
    >
      <motion.div
        className="absolute inset-y-0 left-0 w-1/2 origin-left bg-gradient-to-br from-white via-pearl to-champagne/60 shadow-glow"
        exit={{ rotateY: -78, x: '-18%', transition: { duration: 1.25, ease: [0.76, 0, 0.24, 1] } }}
      />
      <motion.div
        className="absolute inset-y-0 right-0 w-1/2 origin-right bg-gradient-to-bl from-white via-pearl to-champagne/60 shadow-glow"
        exit={{ rotateY: 78, x: '18%', transition: { duration: 1.25, ease: [0.76, 0, 0.24, 1] } }}
      />

      <div className="absolute inset-y-12 left-1/2 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-gold to-transparent" />

      <motion.div
        className="relative z-10 mx-5 w-full max-w-xl border border-gold/40 bg-white/70 px-6 py-12 text-center shadow-soft backdrop-blur-md sm:px-12 gold-border"
        initial={{ opacity: 0, scale: 0.96, y: 24 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
      >
        <p className="font-body text-xs font-semibold uppercase tracking-[0.34em] text-deepGold">
          Wedding Invitation
        </p>
        <h1 className="mt-6 font-script text-6xl text-deepGold sm:text-8xl">Fady</h1>
        <h1 className="mt-6 font-script text-6xl text-deepGold sm:text-8xl">&</h1>
        <h1 className="mt-6 font-script text-6xl text-deepGold sm:text-8xl">Nardeen</h1>
        <img className="mx-auto my-7 w-64 max-w-full" src={ornament} alt="" />
        <p className="mx-auto max-w-sm font-display text-2xl leading-relaxed text-ink sm:text-3xl">
          You are warmly invited to celebrate a beautiful beginning.
        </p>
        <motion.button
          type="button"
          onClick={onOpen}
          className="mt-9 inline-flex min-h-12 items-center justify-center border border-gold bg-deepGold px-8 text-sm font-bold uppercase tracking-[0.24em] text-white shadow-glow transition hover:bg-gold focus:outline-none focus:ring-4 focus:ring-gold/30"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.98 }}
        >
          Open Invitation
        </motion.button>
      </motion.div>
    </motion.section>
  );
}
