import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import AmbientParticles from './components/AmbientParticles.jsx';
import DoorIntro from './components/DoorIntro.jsx';
import EventDetails from './components/EventDetails.jsx';
import FloatingNav from './components/FloatingNav.jsx';
import Hero from './components/Hero.jsx';
import MainInvitation from './components/MainInvitation.jsx';
import SectionReveal from './components/SectionReveal.jsx';
import ThankYou from './components/ThankYou.jsx';
import { invitation } from './data/invitation.js';

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen overflow-x-hidden bg-ivory text-ink">
      <div className="fixed inset-0 -z-10 bg-radialGold" />
      <div className="fixed inset-0 -z-10 opacity-[0.16] paper-grain" />
      <AmbientParticles />

      <AnimatePresence>{!isOpen && <DoorIntro onOpen={() => setIsOpen(true)} />}</AnimatePresence>

      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: isOpen ? 1 : 0.2 }}
        transition={{ duration: 1.1, ease: 'easeOut' }}
      >
        <FloatingNav />
        <Hero invitation={invitation} />
        <SectionReveal>
          <MainInvitation invitation={invitation} />
        </SectionReveal>
        <SectionReveal>
          <EventDetails invitation={invitation} />
        </SectionReveal>
        <SectionReveal>
          <ThankYou names={invitation.couple} />
        </SectionReveal>
      </motion.main>
    </div>
  );
}
