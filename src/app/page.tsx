'use client';

import { useState, useEffect } from 'react';
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
          style={{ left: `${piece.left}%`, top: '-5%' }}
          animate={{
            y: ['0vh', '110vh'],
            x: [0, Math.sin(piece.id * 3) * 80],
            rotate: [piece.rotation, piece.rotation + 720],
            opacity: [1, 1, 0.5],
          }}
          transition={{ duration: piece.duration, delay: piece.delay, ease: 'easeIn' }}
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
  return (
    <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-12">
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

        {/* Both Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
          {/* Yes Button */}
          <motion.button
            onClick={onYes}
            className="px-12 py-5 bg-gradient-to-r from-pink-500 to-red-500 text-white text-2xl sm:text-3xl font-bold rounded-full shadow-lg cursor-pointer select-none overflow-hidden"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
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
              animate={{ y: [0, -2, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            >
              Haan Ji! 💖
            </motion.span>
          </motion.button>

          {/* No Button - CLICKABLE, no escape */}
          <motion.button
            onClick={onNo}
            className="px-10 py-4 bg-gray-200 text-gray-600 text-xl font-medium rounded-full cursor-pointer select-none hover:bg-gray-300 active:bg-gray-400 transition-colors shadow-md"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.2, duration: 0.5 }}
          >
            Nahi... 😒
          </motion.button>
        </div>
      </motion.div>

      {/* Bottom hint */}
      <motion.p
        className="absolute bottom-8 text-gray-400 text-sm text-center px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
      >
        Soch lo ache se... 😏
      </motion.p>
    </div>
  );
}

// ============== GORILLA THREAT PAGE ==============
function GorillaPage({ onBack }: { onBack: () => void }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onBack();
    }, 3000);
    return () => clearTimeout(timer);
  }, [onBack]);

  return (
    <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-12 overflow-hidden">
      {/* Red flash on entry */}
      <motion.div
        className="fixed inset-0 bg-red-600 z-0"
        initial={{ opacity: 0.4 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
      />

      {/* Gorilla Image - Shaking */}
      <motion.div
        className="relative mb-6"
        animate={{
          x: [0, -8, 8, -6, 6, 0],
          rotate: [0, -3, 3, -2, 2, 0],
        }}
        transition={{ duration: 0.5, repeat: 5, ease: 'easeInOut' }}
      >
        <motion.div
          className="w-72 h-72 sm:w-96 sm:h-96 rounded-3xl overflow-hidden shadow-2xl border-4 border-red-500"
          animate={{
            boxShadow: [
              '0 0 20px rgba(239, 68, 68, 0.4)',
              '0 0 50px rgba(239, 68, 68, 0.7)',
              '0 0 20px rgba(239, 68, 68, 0.4)',
            ],
          }}
          transition={{ duration: 0.8, repeat: 3 }}
        >
          <img
            src="/funny-monkey.png"
            alt="Gorilla with gun"
            className="w-full h-full object-contain bg-white"
          />
        </motion.div>

        {/* Gun emoji floating */}
        <motion.div
          className="absolute -top-4 -right-4 text-4xl"
          animate={{ y: [0, -10, 0], rotate: [-15, 15, -15] }}
          transition={{ duration: 0.6, repeat: 5 }}
        >
          🔫
        </motion.div>
        {/* Glasses emoji */}
        <motion.div
          className="absolute -bottom-3 -left-3 text-3xl"
          animate={{ scale: [1, 1.3, 1] }}
          transition={{ duration: 0.8, repeat: 3 }}
        >
          🤓
        </motion.div>
      </motion.div>

      {/* Speech Bubble */}
      <motion.div
        className="relative bg-white rounded-3xl p-6 sm:p-8 shadow-2xl mx-4 border-2 border-red-400 max-w-md"
        initial={{ opacity: 0, y: 40, scale: 0.7 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 0.4, type: 'spring', stiffness: 250 }}
      >
        {/* Speech bubble arrow */}
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[15px] border-l-transparent border-r-[15px] border-r-transparent border-b-[20px] border-b-white" />

        <motion.h2
          className="text-3xl sm:text-4xl font-extrabold text-red-600 mb-3 text-center"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 0.4, repeat: 4 }}
        >
          Ha Bol De Yaar Plz! 🙏
        </motion.h2>

        <motion.p
          className="text-lg text-gray-600 font-medium text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          Nahi toh gorilla tujhe gun se daraayega! 😤🔫
        </motion.p>

        <motion.div
          className="mt-3 text-center text-sm text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          Wapas ja raha hoon... soch lena! 🐒
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
                animate={{ scale: [1, 1.3, 1], rotate: [0, 10, -10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              >
                ❤️
              </motion.span>
            </motion.div>

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

            <motion.div
              className="flex justify-center gap-3 text-3xl mb-8 flex-wrap"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3 }}
            >
              {['💖', '💗', '💝', '💓', '💞', '💘'].map((emoji, i) => (
                <motion.span
                  key={i}
                  animate={{ y: [0, -15, 0], scale: [1, 1.2, 1] }}
                  transition={{ duration: 1.5, delay: i * 0.15, repeat: Infinity, ease: 'easeInOut' }}
                >
                  {emoji}
                </motion.span>
              ))}
            </motion.div>

            <motion.div
              className="bg-gradient-to-r from-pink-100 to-red-100 rounded-3xl p-6 shadow-lg"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 3.5, duration: 0.6 }}
            >
              <p className="text-xl font-bold text-pink-600">Ab toh pakka date pe jaana hai! 😄</p>
              <p className="text-gray-500 mt-2 text-sm">(Gorilla bhi khush hoga 🦍💕)</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ============== MAIN APP ==============
type PageState = 'proposal' | 'gorilla' | 'celebration';

export default function Home() {
  const [page, setPage] = useState<PageState>('proposal');

  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-red-50 relative overflow-hidden">
      <FloatingHearts />
      <SparkleParticles />

      <AnimatePresence mode="wait">
        {page === 'proposal' && (
          <motion.div
            key="proposal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ProposalPage
              onYes={() => setPage('celebration')}
              onNo={() => setPage('gorilla')}
            />
          </motion.div>
        )}

        {page === 'gorilla' && (
          <motion.div
            key="gorilla"
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.7 }}
            transition={{ duration: 0.4, type: 'spring' }}
          >
            <GorillaPage onBack={() => setPage('proposal')} />
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
