import { useState } from 'react';

const initialForm = {
  name: '',
  phone: '',
  guests: '1',
  attendance: 'yes',
  message: '',
};

export default function RsvpForm({ onSubmit }) {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  function updateField(event) {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
    onSubmit(form.name.trim());
  }

  return (
    <section className="px-5 py-16 sm:px-8" id="rsvp">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <div className="pt-4 text-center lg:text-left">
          <p className="font-body text-xs font-bold uppercase tracking-[0.34em] text-deepGold">
            RSVP
          </p>
          <h2 className="mt-5 font-display text-5xl font-semibold leading-tight text-ink sm:text-7xl">
            Kindly confirm your presence
          </h2>
          <p className="mt-6 text-base leading-8 text-ink/70 sm:text-lg">
            Your presence is the gift we are looking forward to most. Please let us know
            whether you will be joining the celebration.
          </p>
        </div>

        <form className="luxury-card px-5 py-7 sm:px-8 sm:py-9" onSubmit={handleSubmit}>
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block">
              <span className="mb-2 block text-sm font-bold text-ink">Full Name</span>
              <input
                required
                name="name"
                value={form.name}
                onChange={updateField}
                className="min-h-12 w-full border border-gold/25 bg-white/75 px-4 text-ink outline-none transition focus:border-gold focus:ring-4 focus:ring-gold/15"
                placeholder="Your name"
              />
            </label>
            <label className="block">
              <span className="mb-2 block text-sm font-bold text-ink">Phone</span>
              <input
                required
                name="phone"
                value={form.phone}
                onChange={updateField}
                className="min-h-12 w-full border border-gold/25 bg-white/75 px-4 text-ink outline-none transition focus:border-gold focus:ring-4 focus:ring-gold/15"
                placeholder="Your phone number"
              />
            </label>
            <label className="block">
              <span className="mb-2 block text-sm font-bold text-ink">Guests</span>
              <select
                name="guests"
                value={form.guests}
                onChange={updateField}
                className="min-h-12 w-full border border-gold/25 bg-white/75 px-4 text-ink outline-none transition focus:border-gold focus:ring-4 focus:ring-gold/15"
              >
                <option value="1">1 Guest</option>
                <option value="2">2 Guests</option>
                <option value="3">3 Guests</option>
                <option value="4">4 Guests</option>
              </select>
            </label>
            <label className="block">
              <span className="mb-2 block text-sm font-bold text-ink">Attendance</span>
              <select
                name="attendance"
                value={form.attendance}
                onChange={updateField}
                className="min-h-12 w-full border border-gold/25 bg-white/75 px-4 text-ink outline-none transition focus:border-gold focus:ring-4 focus:ring-gold/15"
              >
                <option value="yes">Joyfully attending</option>
                <option value="no">Unable to attend</option>
              </select>
            </label>
          </div>
          <label className="mt-5 block">
            <span className="mb-2 block text-sm font-bold text-ink">Message</span>
            <textarea
              name="message"
              value={form.message}
              onChange={updateField}
              rows="4"
              className="w-full resize-none border border-gold/25 bg-white/75 px-4 py-3 text-ink outline-none transition focus:border-gold focus:ring-4 focus:ring-gold/15"
              placeholder="Leave a blessing or note"
            />
          </label>
          <button
            type="submit"
            className="mt-6 inline-flex min-h-12 w-full items-center justify-center border border-gold bg-deepGold px-6 text-sm font-bold uppercase tracking-[0.22em] text-white shadow-glow transition hover:bg-gold focus:outline-none focus:ring-4 focus:ring-gold/30"
          >
            Send RSVP
          </button>
          {submitted && (
            <p className="mt-5 border border-gold/25 bg-champagne/20 px-4 py-3 text-center text-sm font-semibold text-deepGold">
              Thank you. Your RSVP has been received.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
