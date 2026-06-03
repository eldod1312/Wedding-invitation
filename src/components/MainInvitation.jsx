import { motion } from 'framer-motion';
import CountdownTimer from './CountdownTimer.jsx';

export default function MainInvitation({ invitation }) {
  return (
    <section className="px-5 py-16 sm:px-8" id="invitation">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-stretch">
        <motion.article
          className="luxury-card gold-border px-6 py-12 text-center sm:px-12 sm:py-16"
          whileHover={{ y: -6 }}
          transition={{ type: 'spring', stiffness: 170, damping: 20 }}
        >
          <p className="font-body text-xs font-bold uppercase tracking-[0.34em] text-deepGold">
            With Joyful Hearts
          </p>
          <h2 className="mt-6 font-display text-5xl font-semibold leading-tight text-ink sm:text-7xl">
            We invite you to our wedding
          </h2>
          <motion.div
            className="mx-auto my-9 h-px w-28 bg-gold/70"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2 }}
          />
          <p className="mx-auto max-w-2xl font-display text-2xl leading-relaxed text-ink/80 sm:text-3xl">
            Join us for an evening of love, laughter, music, and memories as we celebrate
            the marriage of {invitation.couple.groom} and {invitation.couple.bride}.
          </p>
        </motion.article>

        <motion.aside
          className="luxury-card flex flex-col justify-center px-6 py-10 text-center sm:px-10"
          id="date"
          whileHover={{ y: -6 }}
          transition={{ type: 'spring', stiffness: 170, damping: 20 }}
        >
          <p className="font-body text-xs font-bold uppercase tracking-[0.34em] text-deepGold">
            Save The Date
          </p>
          <h3 className="mt-5 font-display text-5xl font-semibold text-ink sm:text-6xl">
            {invitation.displayDate}
          </h3>
          <p className="mt-4 font-body text-lg font-semibold text-deepGold">
            {invitation.ceremonyTime} at {invitation.venue}
          </p>
          <CountdownTimer targetDate={invitation.date} />
        </motion.aside>
      </div>
    </section>
  );
}
