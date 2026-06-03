import { motion } from 'framer-motion';
import floralCorner from '../assets/floral-corner.svg';
import ornament from '../assets/gold-ornament.svg';

export default function Hero({ invitation }) {
  return (
    <section className="relative flex min-h-screen items-center justify-center px-5 py-24 sm:px-8" id="home">
      <motion.img
        className="absolute left-0 top-0 w-36 opacity-55 sm:w-52"
        src={floralCorner}
        alt=""
        animate={{ y: [0, 12, 0], rotate: [0, 2, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.img
        className="absolute bottom-0 right-0 w-36 rotate-180 opacity-55 sm:w-52"
        src={floralCorner}
        alt=""
        animate={{ y: [0, -12, 0], rotate: [180, 178, 180] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute inset-x-10 top-1/2 h-px bg-gradient-to-r from-transparent via-gold/35 to-transparent"
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 1.4, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
      />
      <div className="mx-auto max-w-5xl text-center">
        <motion.p
          className="font-body text-xs font-bold uppercase tracking-[0.42em] text-deepGold sm:text-sm"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
        >
          The Wedding Celebration Of
        </motion.p>

        <motion.h1
          className="mt-7 font-script text-[4.8rem] leading-none text-deepGold sm:text-[7.5rem] lg:text-[10rem]"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          {invitation.couple.groom}
        </motion.h1>

        
        <motion.h1
          className="mt-7 font-script text-[4.8rem] leading-none text-deepGold sm:text-[7.5rem] lg:text-[10rem]"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          & 
        </motion.h1>

        
        <motion.h1
          className="mt-7 font-script text-[4.8rem] leading-none text-deepGold sm:text-[7.5rem] lg:text-[10rem]"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
        {invitation.couple.bride}
        </motion.h1>

        <motion.img
          className="mx-auto mt-8 w-72 max-w-full"
          src={ornament}
          alt=""
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.75 }}
        />
        <motion.p
          className="mx-auto mt-8 max-w-2xl font-display text-2xl leading-relaxed text-ink/85 sm:text-4xl"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          {invitation.note}
        </motion.p>
        <motion.a
          href="#invitation"
          className="mt-10 inline-flex min-h-12 items-center justify-center border border-gold bg-white/70 px-8 text-sm font-bold uppercase tracking-[0.24em] text-deepGold shadow-soft backdrop-blur transition hover:bg-champagne/20"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.05 }}
          whileHover={{ y: -3, scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
        >
          View Details
        </motion.a>
      </div>
    </section>
  );
}
