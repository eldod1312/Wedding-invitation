import { motion } from 'framer-motion';

export default function EventDetails({ invitation }) {
  return (
    <section className="px-5 py-16 sm:px-8" id="details">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-6 md:grid-cols-3">
          <DetailCard label="Venue" value={invitation.venue} helper={invitation.locationLabel} />
          <DetailCard label="Date" value={invitation.displayDate} helper={invitation.ceremonyTime} />
          <DetailCard label="Dress Code" value="Elegant Formal" helper="White and gold accents welcome" />
        </div>

        <motion.div
          className="mt-8 luxury-card px-6 py-10 text-center sm:px-10"
          whileHover={{ y: -5 }}
          transition={{ type: 'spring', stiffness: 180, damping: 18 }}
        >
          <p className="font-body text-xs font-bold uppercase tracking-[0.34em] text-deepGold">
            Location
          </p>
          <h2 className="mt-5 font-display text-4xl font-semibold text-ink sm:text-6xl">
            Sunny Days
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-ink/70 sm:text-lg">
            We would be honored to celebrate with you. Tap below for directions to the venue.
          </p>
          <motion.a
            href={invitation.mapsUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-8 inline-flex min-h-12 items-center justify-center border border-gold bg-deepGold px-8 text-sm font-bold uppercase tracking-[0.22em] text-white shadow-glow transition hover:bg-gold focus:outline-none focus:ring-4 focus:ring-gold/30"
            whileHover={{ y: -3, scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            Open Google Maps
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

function DetailCard({ label, value, helper }) {
  return (
    <motion.article
      className="luxury-card min-h-52 px-6 py-9 text-center"
      whileHover={{ y: -7, scale: 1.015 }}
      transition={{ type: 'spring', stiffness: 210, damping: 18 }}
    >
      <p className="text-xs font-bold uppercase tracking-[0.28em] text-deepGold">{label}</p>
      <h3 className="mt-5 font-display text-4xl font-semibold leading-tight text-ink">{value}</h3>
      <p className="mt-4 text-sm font-medium leading-6 text-ink/65">{helper}</p>
    </motion.article>
  );
}
