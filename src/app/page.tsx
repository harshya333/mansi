'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Sparkles } from 'lucide-react';

// ============== Floating Hearts Background ==============
function FloatingHearts() {
  const hearts = Array.from({ length: 25 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 8,
    duration: 6 + Math.random() * 6,
    size: 12 + Math.random() * 24,
    opacity: 0.15 + Math.random() * 0.35,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          className="absolute text-pink-400"
          style={{ left: `${heart.left}%`, fontSize: heart.size }}
          animate={{
            y: ['110vh', '-10vh'],
            x: [0, Math.sin(heart.id) * 40, -Math.sin(heart.id) * 30, 0],
            rotate: [0, 15, -10, 5],
            opacity: [0, heart.opacity, heart.opacity, 0],
          }}
          transition={{
            duration: heart.duration,
            delay: heart.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          ❤️
        </motion.div>
      ))}
    </div>
  );
}

// ============== Sparkle Particles ==============
function SparkleParticles() {
  const particles = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    top: Math.random() * 100,
    delay: Math.random() * 3,
    size: 8 + Math.random() * 16,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute"
          style={{ left: `${p.left}%`, top: `${p.top}%` }}
          animate={{
            scale: [0, 1.2, 0],
            rotate: [0, 180, 360],
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: 2.5,
            delay: p.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <Sparkles size={p.size} className="text-yellow-300" />
        </motion.div>
      ))}
    </div>
  );
}

// ============== Confetti Component ==============
function Confetti() {
  const confettiColors = ['#ff6b9d', '#ff85a1', '#ffc2d1', '#ff4d6d', '#c9184a', '#ff758f', '#ffd700', '#ff1493', '#ff69b4'];
  const pieces = Array.from({ length: 80 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 2,
    duration: 3 + Math.random() * 3,
    color: confettiColors[i % confettiColors.length],
    size: 6 + Math.random() * 10,
    rotation: Math.random() * 360,
    type: Math.random() > 0.5 ? 'square' : 'circle',
  }));

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-50">
      {pieces.map((piece) => (
        <motion.div
          key={piece.id}
          className="absolute"
          style={{
            left: `${piece.left}%`,
            top: '-5%',
          }}
          animate={{
            y: ['0vh', '110vh'],
            x: [0, Math.sin(piece.id * 3) * 80],
            rotate: [piece.rotation, piece.rotation + 720],
            opacity: [1, 1, 0.5],
          }}
          transition={{
            duration: piece.duration,
            delay: piece.delay,
            ease: 'easeIn',
          }}
        >
          <div
            style={{
              width: piece.size,
              height: piece.type === 'square' ? piece.size : piece.size * 0.6,
              backgroundColor: piece.color,
              borderRadius: piece.type === 'circle' ? '50%' : '2px',
            }}
          />
        </motion.div>
      ))}
      {/* Big falling hearts */}
      {Array.from({ length: 15 }, (_, i) => (
        <motion.div
          key={`heart-${i}`}
          className="absolute text-3xl"
          style={{ left: `${Math.random() * 100}%` }}
          animate={{ y: ['-10vh', '110vh'], rotate: [0, 360], opacity: [1, 0.6, 0] }}
          transition={{ duration: 4 + Math.random() * 3, delay: Math.random() * 2, ease: 'easeIn' }}
        >
          💕
        </motion.div>
      ))}
    </div>
  );
}

// ============== PROPOSAL PAGE ==============
function ProposalPage({ onYes, onNo }: { onYes: () => void; onNo: () => void }) {
  const noButtonRef = useRef<HTMLButtonElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [noButtonPos, setNoButtonPos] = useState({ x: 0, y: 0 });
  const [noAttempts, setNoAttempts] = useState(0);
  const [yesScale, setYesScale] = useState(1);

  const funnyTexts = [
    "Arey pagal hai kya? 💀",
    "Soch le phir se... 🤔",
    "Sach me nahi? 😢",
    "Dil tut jayega mera... 💔",
    "Ek aur baar soch le! 🥺",
    "Please yaar... 🙏",
    "Maa kasam soch le! 😭",
  ];

  const handleNoMouseMove = useCallback((e: MouseEvent) => {
    if (!noButtonRef.current || !containerRef.current) return;
    const rect = noButtonRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const distance = Math.sqrt(
      Math.pow(e.clientX - centerX, 2) + Math.pow(e.clientY - centerY, 2)
    );

    if (distance < 120) {
      const containerRect = containerRef.current.getBoundingClientRect();
      const maxX = containerRect.width - rect.width - 20;
      const maxY = containerRect.height - rect.height - 20;
      const newX = 20 + Math.random() * Math.max(maxX - 20, 0);
      const newY = 20 + Math.random() * Math.max(maxY - 20, 0);
      setNoButtonPos({ x: newX, y: newY });
      setNoAttempts((prev) => prev + 1);
      setYesScale((prev) => Math.min(prev + 0.12, 2.2));
    }
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', handleNoMouseMove);
    return () => window.removeEventListener('mousemove', handleNoMouseMove);
  }, [handleNoMouseMove]);

  return (
    <div ref={containerRef} className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-12">
      <motion.div
        className="text-center max-w-lg mx-auto w-full"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        {/* Romantic Background Image */}
        <motion.div
          className="relative w-full h-48 sm:h-64 rounded-3xl overflow-hidden mb-8 shadow-2xl"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.3 }}
        >
          <img
            src="/romantic-bg.png"
            alt="Romantic background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        </motion.div>

        {/* Main Question */}
        <motion.h1
          className="text-3xl sm:text-5xl font-bold text-pink-600 mb-4 leading-tight"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5, type: 'spring', stiffness: 200 }}
        >
          <span className="inline-block">Mujhe Tum</span>
          <motion.span
            className="inline-block text-red-500"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            {' '}Bahut{' '}
          </motion.span>
          <span className="inline-block">Pasand Ho 💕</span>
        </motion.h1>

        <motion.p
          className="text-xl sm:text-2xl text-gray-700 mb-10 font-medium"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          Kya Tumhe Main Pasand Hoon? 🥺
        </motion.p>

        {/* Buttons Area */}
        <div className="relative w-full min-h-[200px] flex flex-col items-center">
          {/* Yes Button - Gets bigger with each No attempt */}
          <motion.button
            onClick={onYes}
            className="relative px-12 py-5 bg-gradient-to-r from-pink-500 to-red-500 text-white text-2xl sm:text-3xl font-bold rounded-full shadow-lg cursor-pointer select-none overflow-hidden z-10"
            style={{ transform: `scale(${yesScale})` }}
            whileHover={{ scale: yesScale * 1.1 }}
            whileTap={{ scale: yesScale * 0.95 }}
            animate={{
              boxShadow: [
                '0 0 20px rgba(236, 72, 153, 0.4)',
                '0 0 40px rgba(236, 72, 153, 0.6)',
                '0 0 20px rgba(236, 72, 153, 0.4)',
              ],
            }}
            transition={{ boxShadow: { duration: 2, repeat: Infinity } }}
          >
            <motion.span
              className="relative z-10 flex items-center gap-2"
              animate={{ y: [0, -2, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            >
              Haan Ji! 💖
            </motion.span>
          </motion.button>

          {/* Funny text when they try to click No */}
          <AnimatePresence>
            {noAttempts > 0 && (
              <motion.p
                key={noAttempts}
                className="text-lg text-gray-500 font-medium text-center mt-4"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.3 }}
              >
                {funnyTexts[Math.min(noAttempts - 1, funnyTexts.length - 1)]}
              </motion.p>
            )}
          </AnimatePresence>

          {/* No Button - Runs away from cursor */}
          <motion.button
            ref={noButtonRef}
            onClick={onNo}
            className="absolute top-16 px-8 py-3 bg-gray-200 text-gray-600 text-lg font-medium rounded-full cursor-pointer select-none hover:bg-gray-300 transition-colors whitespace-nowrap z-0"
            animate={{
              left: noButtonPos.x,
              top: noButtonPos.y,
            }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          >
            Nahi... 😒
          </motion.button>
        </div>
      </motion.div>

      {/* Bottom decorative text */}
      <motion.p
        className="absolute bottom-8 text-gray-400 text-sm text-center px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        (P.S. - Sirf &quot;Haan&quot; ka button kaam karta hai 😏)
      </motion.p>
    </div>
  );
}

// ============== MONKEY REJECTION PAGE ==============
function MonkeyPage({ onBack }: { onBack: () => void }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onBack();
    }, 3500);
    return () => clearTimeout(timer);
  }, [onBack]);

  return (
    <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-12 bg-red-50">
      <motion.div
        className="text-center max-w-md mx-auto"
        initial={{ opacity: 0, scale: 0.3 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: 'spring', stiffness: 200, damping: 15 }}
      >
        {/* Warning flash effect */}
        <motion.div
          className="fixed inset-0 bg-red-500 z-0"
          initial={{ opacity: 0.3 }}
          animate={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        />

        {/* Monkey Image */}
        <motion.div
          className="relative mb-8"
          animate={{
            x: [0, -10, 10, -10, 10, 0],
            rotate: [0, -5, 5, -5, 5, 0],
          }}
          transition={{ duration: 0.6, repeat: Infinity, ease: 'easeInOut' }}
        >
          <motion.div
            className="w-64 h-64 sm:w-80 sm:h-80 mx-auto rounded-3xl overflow-hidden shadow-2xl border-4 border-red-400"
            animate={{
              boxShadow: [
                '0 0 30px rgba(239, 68, 68, 0.3)',
                '0 0 60px rgba(239, 68, 68, 0.6)',
                '0 0 30px rgba(239, 68, 68, 0.3)',
              ],
            }}
            transition={{ duration: 0.8, repeat: Infinity }}
          >
            <img
              src="/funny-monkey.png"
              alt="Funny Monkey with gun"
              className="w-full h-full object-contain bg-white"
            />
          </motion.div>
        </motion.div>

        {/* Speech Bubble */}
        <motion.div
          className="relative bg-white rounded-3xl p-6 sm:p-8 shadow-2xl mx-4 border-2 border-red-300"
          initial={{ opacity: 0, y: 30, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.5, type: 'spring', stiffness: 200 }}
        >
          {/* Speech bubble pointer */}
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-b-[20px] border-b-white" />

          <motion.h2
            className="text-3xl sm:text-4xl font-extrabold text-red-500 mb-2"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 0.5, repeat: 3 }}
          >
            YE NAHI HO SAKTA! 🚫
          </motion.h2>

          <motion.p
            className="text-lg text-gray-600 font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            Tumpe sirf &quot;Haan&quot; button dabana hai! 🐒🔫
          </motion.p>

          <motion.div
            className="mt-4 text-gray-400 text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            Wapas ja raha hoon tumhe sawaal dikhane... 😤
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}

// ============== CELEBRATION PAGE ==============
function CelebrationPage() {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowContent(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const loveMessages = [
    "Tum meri zindagi ka sabse khoobsurat hissa ho 🌸",
    "Har pal tumhare bina adhoora lagta hai 💕",
    "Tumse milke zindagi mein kuch alag hi mehsoos hota hai ✨",
    "Tum meri duniya ho, meri khushi ho, mera sab kuch ho 🥰",
    "Ab toh zindagi set ho jaayegi 😄",
  ];

  return (
    <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-12">
      <Confetti />

      <AnimatePresence>
        {showContent && (
          <motion.div
            className="text-center max-w-lg mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {/* Big Heart */}
            <motion.div
              className="text-8xl sm:text-9xl mb-8"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
            >
              <motion.span
                animate={{
                  scale: [1, 1.3, 1],
                  rotate: [0, 10, -10, 0],
                }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              >
                ❤️
              </motion.span>
            </motion.div>

            {/* Main Message */}
            <motion.h1
              className="text-4xl sm:text-6xl font-extrabold mb-6 bg-gradient-to-r from-pink-500 via-red-500 to-pink-500 bg-clip-text text-transparent"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8, type: 'spring' }}
            >
              YESSS! 🎉🎊
            </motion.h1>

            <motion.p
              className="text-2xl sm:text-3xl text-gray-700 mb-8 font-semibold"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              Mujhe Bhi Tum Bahut Pasand Ho! 💖
            </motion.p>

            {/* Love Messages */}
            <div className="space-y-4 mb-8">
              {loveMessages.map((msg, i) => (
                <motion.p
                  key={i}
                  className="text-lg text-gray-600 bg-white/80 backdrop-blur-sm rounded-2xl px-6 py-3 shadow-lg border border-pink-100"
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 1.2 + i * 0.3, duration: 0.5 }}
                >
                  {msg}
                </motion.p>
              ))}
            </div>

            {/* Cute animated hearts row */}
            <motion.div
              className="flex justify-center gap-3 text-3xl mb-8 flex-wrap"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3 }}
            >
              {['💖', '💗', '💝', '💓', '💞', '💘'].map((emoji, i) => (
                <motion.span
                  key={i}
                  animate={{
                    y: [0, -15, 0],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 1.5,
                    delay: i * 0.15,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                >
                  {emoji}
                </motion.span>
              ))}
            </motion.div>

            {/* Fun tagline */}
            <motion.div
              className="bg-gradient-to-r from-pink-100 to-red-100 rounded-3xl p-6 shadow-lg"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 3.5, duration: 0.6 }}
            >
              <p className="text-xl font-bold text-pink-600">
                Ab toh pakka date pe jaana hai! 😄
              </p>
              <p className="text-gray-500 mt-2 text-sm">
                (Monkey bhi khush hoga 🐒💕)
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ============== MAIN APP ==============
type PageState = 'proposal' | 'monkey' | 'celebration';

export default function Home() {
  const [page, setPage] = useState<PageState>('proposal');

  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-red-50 relative overflow-hidden">
      {/* Background Elements */}
      <FloatingHearts />
      <SparkleParticles />

      {/* Page Content */}
      <AnimatePresence mode="wait">
        {page === 'proposal' && (
          <motion.div
            key="proposal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.4 }}
          >
            <ProposalPage
              onYes={() => setPage('celebration')}
              onNo={() => setPage('monkey')}
            />
          </motion.div>
        )}

        {page === 'monkey' && (
          <motion.div
            key="monkey"
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            transition={{ duration: 0.5, type: 'spring' }}
          >
            <MonkeyPage onBack={() => setPage('proposal')} />
          </motion.div>
        )}

        {page === 'celebration' && (
          <motion.div
            key="celebration"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, type: 'spring', stiffness: 200 }}
          >
            <CelebrationPage />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
