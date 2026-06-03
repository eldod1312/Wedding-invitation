const links = [
  ['Invitation', '#invitation'],
  ['Date', '#date'],
  ['Details', '#details'],
];

export default function FloatingNav() {
  return (
    <nav className="fixed bottom-4 left-1/2 z-40 w-[calc(100%-2rem)] max-w-md -translate-x-1/2 border border-gold/25 bg-white/80 px-2 py-2 shadow-soft backdrop-blur-xl md:top-5 md:bottom-auto">
      <div className="grid grid-cols-3 gap-1">
        {links.map(([label, href]) => (
          <a
            key={href}
            href={href}
            className="min-h-10 content-center text-center font-body text-[0.68rem] font-bold uppercase tracking-[0.12em] text-deepGold transition hover:bg-champagne/25 sm:text-xs"
          >
            {label}
          </a>
        ))}
      </div>
    </nav>
  );
}
