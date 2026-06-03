import { motion } from 'framer-motion';

export default function EventDetails({ invitation }) {
  return (
    <section className="px-5 py-16 sm:px-8" id="details">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-6 md:grid-cols-3">
          <DetailCard label="The Wedding Ceremony" value="St. Shenouda the Archimandrite Church" helper="5:00 PM" />

          <DetailCard label="Venue" value={invitation.venue} helper="8:00 PM" />

          <DetailCard label="Dress Code" value="Elegant Formal" helper="Classic & Elegant" />
        </div>

<motion.div
  className="mt-8 luxury-card px-6 py-12 text-center sm:px-10 md:px-16"
  whileHover={{ y: -5 }}
  transition={{ type: 'spring', stiffness: 180, damping: 18 }}
>
  <p className="font-body text-xs font-bold uppercase tracking-[0.4em] text-deepGold">
    Location
  </p>

  <h2 className="mt-6 font-display text-4xl leading-none text-ink sm:text-6xl md:text-7xl">
    The Wedding Ceremony
  </h2>

  <p className="mt-5 font-body text-xs font-bold uppercase tracking-[0.4em] text-deepGold">
    Will Take Place At
  </p>

  <h3 className="mt-6 font-display text-2xl text-ink sm:text-4xl">
    St. Shenouda the Archimandrite Church
  </h3>

  <p className="mt-2 text-base text-ink/50 sm:text-lg">
    Hurghada, Egypt
  </p>

  <div className="mx-auto my-8 flex items-center justify-center">
    <div className="h-px w-16 bg-gold/40 sm:w-32" />
    <div className="mx-4 text-gold text-xl">❦</div>
    <div className="h-px w-16 bg-gold/40 sm:w-32" />
  </div>

  <p className="mx-auto max-w-2xl text-base leading-8 text-ink/70 sm:text-xl">
    We would be honored to celebrate with you.
    <br />
    Tap below for directions to the venue.
  </p>

  <motion.a
    href={invitation.mapsUrlChurch}
    target="_blank"
    rel="noreferrer"
    className="mt-10 inline-flex min-h-14 items-center justify-center border border-gold bg-deepGold px-8 py-4 text-sm font-bold uppercase tracking-[0.25em] text-white shadow-glow transition hover:bg-gold focus:outline-none focus:ring-4 focus:ring-gold/30 sm:px-12"
    whileHover={{ y: -3, scale: 1.03 }}
    whileTap={{ scale: 0.98 }}
  >
    Open Google Maps
  </motion.a>
</motion.div>

        <motion.div
          className="mt-8 luxury-card px-6 py-10 text-center sm:px-10"
          whileHover={{ y: -5 }}
          transition={{ type: 'spring', stiffness: 180, damping: 18 }}
        >
          <p className="font-body text-xs font-bold uppercase tracking-[0.34em] text-deepGold">
            Location
          </p>
          <h2 className="mt-5 font-display text-4xl font-semibold text-ink sm:text-6xl">
            Down Town Beach
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
