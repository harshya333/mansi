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

// ============== Disco Equalizer Bars ==============
function EqualizerBars() {
  const bars = 24;
  return (
    <div className="flex items-end justify-center gap-[3px] h-12 w-full max-w-xs">
      {Array.from({ length: bars }, (_, i) => (
        <motion.div
          key={i}
          className="flex-1 rounded-t-sm"
          style={{
            background: 'linear-gradient(to top, #ff006e, #ff4d6d, #ffd700)',
            maxWidth: '12px',
          }}
          animate={{
            height: [
              `${8 + Math.random() * 15}px`,
              `${20 + Math.random() * 30}px`,
              `${5 + Math.random() * 10}px`,
              `${25 + Math.random() * 35}px`,
              `${10 + Math.random() * 15}px`,
            ],
          }}
          transition={{
            duration: 0.8 + Math.random() * 0.6,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.05,
          }}
        />
      ))}
    </div>
  );
}

// ============== Music Notes Floating ==============
function MusicNotes() {
  const notes = ['🎵', '🎶', '🎼', '🎤', '🎷', '🎺'];
  const particles = Array.from({ length: 18 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 4,
    duration: 3 + Math.random() * 3,
    note: notes[i % notes.length],
    size: 16 + Math.random() * 20,
  }));

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-20">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute"
          style={{ left: `${p.left}%`, fontSize: p.size }}
          animate={{
            y: ['100%', '-20%'],
            x: [0, Math.sin(p.id * 2) * 50, -Math.cos(p.id * 3) * 30, 0],
            rotate: [0, 180, 360],
            opacity: [0, 1, 1, 0],
            scale: [0.5, 1.2, 1, 0.5],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: 'easeOut',
          }}
        >
          {p.note}
        </motion.div>
      ))}
    </div>
  );
}

// ============== Disco Spotlight Beams ==============
function DiscoSpotlights() {
  const colors = ['#ff006e', '#ffd700', '#00f5d4', '#9b5de5', '#ff4d6d', '#06d6a0'];
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
      {colors.map((color, i) => (
        <motion.div
          key={i}
          className="absolute top-0"
          style={{
            left: `${15 + i * 15}%`,
            width: '2px',
            height: '100%',
            background: `linear-gradient(to bottom, ${color}80, transparent 70%)`,
            transformOrigin: 'top center',
          }}
          animate={{
            rotate: [-20 + i * 8, -20 + i * 8 + 15, -20 + i * 8],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{
            duration: 2 + i * 0.3,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.2,
          }}
        />
      ))}
    </div>
  );
}

// ============== PROPOSAL PAGE ==============
function ProposalPage({ onYes, onNo }: { onYes: () => void; onNo: () => void }) {
  const noButtonRef = useRef<HTMLButtonElement>(null);
  const [noPos, setNoPos] = useState({ left: 0, top: 0 });
  const [noAttempts, setNoAttempts] = useState(0);
  const [yesScale, setYesScale] = useState(1);
  const [noVisible, setNoVisible] = useState(false);

  const funnyTexts = [
    "Arey pagal hai kya? 💀",
    "Soch le phir se... 🤔",
    "Sach me nahi? 😢",
    "Dil tut jayega mera... 💔",
    "Ek aur baar soch le! 🥺",
    "Please yaar... 🙏",
    "Maa kasam soch le! 😭",
    "Tujhe pata hai main kitna ro dunga? 😭",
    "Zindagi bhar nahi maaf karunga! 😤",
  ];

  // Move No button to random screen position
  const moveNoButton = useCallback(() => {
    const btnW = 140;
    const btnH = 50;
    const padding = 20;
    const maxX = window.innerWidth - btnW - padding;
    const maxY = window.innerHeight - btnH - padding;
    const newX = padding + Math.random() * maxX;
    const newY = padding + Math.random() * maxY;
    setNoPos({ left: newX, top: newY });
    setNoAttempts((prev) => prev + 1);
    setYesScale((prev) => Math.min(prev + 0.1, 2.0));
  }, []);

  // Set initial position of No button (below Yes button)
  useEffect(() => {
    const timer = setTimeout(() => {
      setNoPos({
        left: window.innerWidth / 2 - 60,
        top: window.innerHeight / 2 + 120,
      });
      setNoVisible(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  // Mouse move - detect proximity and move button
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!noButtonRef.current || !noVisible) return;
      const rect = noButtonRef.current.getBoundingClientRect();
      const btnCenterX = rect.left + rect.width / 2;
      const btnCenterY = rect.top + rect.height / 2;
      const dist = Math.sqrt(
        (e.clientX - btnCenterX) ** 2 + (e.clientY - btnCenterY) ** 2
      );
      // If mouse is within 80px of No button center, move it
      if (dist < 80) {
        moveNoButton();
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [moveNoButton, noVisible]);

  // Touch support for mobile
  const handleNoTouch = useCallback((e: React.TouchEvent) => {
    e.preventDefault();
    e.stopPropagation();
    moveNoButton();
  }, [moveNoButton]);

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

        {/* Yes Button */}
        <div className="flex flex-col items-center gap-4">
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
          <AnimatePresence mode="wait">
            {noAttempts > 0 && (
              <motion.p
                key={noAttempts}
                className="text-lg text-gray-500 font-medium text-center"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {funnyTexts[Math.min(noAttempts - 1, funnyTexts.length - 1)]}
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </motion.div>

      {/* ===== NO BUTTON - FIXED POSITION, FLIES ANYWHERE ON SCREEN ===== */}
      <AnimatePresence>
        {noVisible && (
          <motion.button
            ref={noButtonRef}
            key="no-btn"
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: 1,
              scale: 1,
              left: noPos.left,
              top: noPos.top,
            }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{
              left: { type: 'spring', stiffness: 260, damping: 30 },
              top: { type: 'spring', stiffness: 260, damping: 30 },
              opacity: { duration: 0.2 },
              scale: { duration: 0.2 },
            }}
            onClick={onNo}
            onTouchStart={handleNoTouch}
            onMouseDown={(e) => {
              // On mousedown, move button immediately before click registers
              e.preventDefault();
              moveNoButton();
            }}
            className="fixed z-50 px-8 py-3 bg-gray-200 text-gray-600 text-lg font-medium rounded-full cursor-pointer select-none hover:bg-gray-300 active:bg-gray-400 transition-colors whitespace-nowrap shadow-lg border-2 border-gray-300"
          >
            Nahi... 😒
          </motion.button>
        )}
      </AnimatePresence>

      {/* Bottom decorative text */}
      <motion.p
        className="absolute bottom-8 text-gray-400 text-sm text-center px-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
      >
        (P.S. - Sirf &quot;Haan&quot; ka button kaam karta hai 😏)
      </motion.p>
    </div>
  );
}

// ============== MONKEY DANCE VIDEO PAGE ==============
function MonkeyDancePage({ onBack }: { onBack: () => void }) {
  const [showPlayer, setShowPlayer] = useState(false);
  const [progress, setProgress] = useState(0);
  const [countdown, setCountdown] = useState(7);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const showTimer = setTimeout(() => setShowPlayer(true), 600);
    return () => clearTimeout(showTimer);
  }, []);

  useEffect(() => {
    if (!showPlayer) return;
    const startTime = Date.now();
    const totalDuration = 7000;

    intervalRef.current = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min((elapsed / totalDuration) * 100, 100);
      setProgress(pct);

      const remaining = Math.max(0, Math.ceil((totalDuration - elapsed) / 1000));
      setCountdown(remaining);

      if (elapsed >= totalDuration) {
        if (intervalRef.current) clearInterval(intervalRef.current);
        onBack();
      }
    }, 50);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [showPlayer, onBack]);

  const danceTexts = [
    "NAHI NAHI! 🙅‍♂️",
    "Bilkul Nahi! 🚫",
    "No No No! 💃",
    "NAHIIIII! 🐒",
    "Zaroori Nahi! 😤",
  ];
  const [currentDanceText, setCurrentDanceText] = useState(0);

  useEffect(() => {
    if (!showPlayer) return;
    const textInterval = setInterval(() => {
      setCurrentDanceText((prev) => (prev + 1) % danceTexts.length);
    }, 1400);
    return () => clearInterval(textInterval);
  }, [showPlayer, danceTexts.length]);

  return (
    <div
      className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-8"
      style={{
        background: 'radial-gradient(ellipse at center, #1a0033 0%, #0d001a 50%, #000000 100%)',
      }}
    >
      {/* Disco Spotlights */}
      <DiscoSpotlights />

      {/* Music Notes */}
      {showPlayer && <MusicNotes />}

      <AnimatePresence>
        {showPlayer && (
          <motion.div
            className="w-full max-w-lg mx-auto relative z-30"
            initial={{ opacity: 0, scale: 0.5, y: 60 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
          >
            {/* Video Title Bar */}
            <motion.div
              className="bg-gray-900 rounded-t-2xl px-4 py-2 flex items-center gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <div className="flex-1 text-center">
                <span className="text-gray-400 text-xs sm:text-sm font-medium truncate">
                  🐒 Monkey Dance - Nahi Nahi Remix.mp4
                </span>
              </div>
            </motion.div>

            {/* Video Player Area */}
            <div className="relative bg-black aspect-[4/3] overflow-hidden">
              {/* Disco Color Wash Background */}
              <motion.div
                className="absolute inset-0 z-0"
                animate={{
                  background: [
                    'linear-gradient(135deg, #ff006e30, #9b5de530)',
                    'linear-gradient(135deg, #ffd70030, #ff006e30)',
                    'linear-gradient(135deg, #06d6a030, #ffd70030)',
                    'linear-gradient(135deg, #9b5de530, #06d6a030)',
                    'linear-gradient(135deg, #ff006e30, #9b5de530)',
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              />

              {/* Disco Floor Effect */}
              <motion.div
                className="absolute bottom-0 left-0 right-0 h-16"
                style={{
                  background: 'linear-gradient(to top, rgba(255,0,110,0.3), transparent)',
                }}
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
              />

              {/* Pulsing Disco Circles */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                {[0, 1, 2, 3, 4].map((i) => (
                  <motion.div
                    key={i}
                    className="absolute rounded-full border"
                    style={{ borderColor: `rgba(255, 215, 0, ${0.15 - i * 0.025})` }}
                    animate={{
                      width: [100 + i * 80, 120 + i * 80, 100 + i * 80],
                      height: [100 + i * 80, 120 + i * 80, 100 + i * 80],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 2,
                      delay: i * 0.4,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  />
                ))}
              </div>

              {/* Monkey Image - DANCING! */}
              <div className="absolute inset-0 flex items-center justify-center z-10">
                <motion.div
                  className="relative w-48 h-48 sm:w-64 sm:h-64"
                  animate={{
                    y: [0, -20, 0, -15, 0, -25, 0],
                    x: [0, 10, -10, 15, -15, 10, 0],
                    rotate: [0, 8, -8, 12, -12, 5, 0],
                    scale: [1, 1.05, 1, 1.08, 1, 1.03, 1],
                  }}
                  transition={{
                    duration: 1.4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                >
                  {/* Glow behind monkey */}
                  <motion.div
                    className="absolute inset-0 rounded-full blur-2xl"
                    animate={{
                      background: [
                        'radial-gradient(circle, rgba(255,0,110,0.5), transparent)',
                        'radial-gradient(circle, rgba(255,215,0,0.5), transparent)',
                        'radial-gradient(circle, rgba(0,245,212,0.5), transparent)',
                        'radial-gradient(circle, rgba(155,93,229,0.5), transparent)',
                      ],
                    }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                    style={{ transform: 'scale(1.5)' }}
                  />
                  <motion.img
                    src="/funny-monkey.png"
                    alt="Dancing Monkey"
                    className="w-full h-full object-contain drop-shadow-[0_0_25px_rgba(255,215,0,0.6)] relative z-10"
                    animate={{
                      filter: [
                        'brightness(1) saturate(1)',
                        'brightness(1.3) saturate(1.5)',
                        'brightness(1.1) saturate(1.2)',
                        'brightness(1.4) saturate(1.6)',
                        'brightness(1) saturate(1)',
                      ],
                    }}
                    transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
                  />
                </motion.div>
              </div>

              {/* "NAHI NAHI" Text */}
              <motion.div
                className="absolute top-6 left-0 right-0 z-20 text-center"
                key={currentDanceText}
                initial={{ y: -30, opacity: 0, scale: 0.5 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                exit={{ y: 30, opacity: 0, scale: 1.3 }}
                transition={{ duration: 0.3, type: 'spring' }}
              >
                <motion.span
                  className="text-4xl sm:text-6xl font-black text-white block"
                  style={{
                    textShadow: '0 0 20px rgba(255,0,110,0.8), 0 0 40px rgba(255,0,110,0.5), 0 0 60px rgba(255,215,0,0.3), 2px 2px 0 #ff006e',
                  }}
                  animate={{
                    y: [0, -8, 0],
                    scale: [1, 1.1, 1],
                    rotate: [-2, 2, -2],
                  }}
                  transition={{ duration: 0.5, repeat: 6, ease: 'easeInOut' }}
                >
                  {danceTexts[currentDanceText]}
                </motion.span>
              </motion.div>

              {/* Bottom Equalizer */}
              <div className="absolute bottom-4 left-4 right-4 z-20">
                <EqualizerBars />
              </div>

              {/* Video Timestamp */}
              <div className="absolute top-3 right-3 z-20 bg-black/70 rounded-md px-2 py-1">
                <span className="text-white text-xs font-mono">0:07</span>
              </div>
            </div>

            {/* Video Player Controls */}
            <motion.div
              className="bg-gray-900 rounded-b-2xl px-4 py-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              {/* Progress Bar */}
              <div className="w-full h-1.5 bg-gray-700 rounded-full overflow-hidden mb-2 cursor-pointer">
                <motion.div
                  className="h-full rounded-full"
                  style={{ background: 'linear-gradient(to right, #ff006e, #ffd700)' }}
                  animate={{ width: `${progress}%` }}
                  transition={{ duration: 0.1 }}
                />
              </div>

              {/* Controls Row */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <motion.div
                    className="text-white"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    🎵
                  </motion.div>
                  <span className="text-gray-400 text-xs font-mono">
                    {`0:${String(Math.floor((progress / 100) * 7)).padStart(2, '0')} / 0:07`}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-gray-400 text-sm">🔊</span>
                  <span className="text-gray-400 text-sm">⛶</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Countdown message below video */}
      <AnimatePresence>
        {showPlayer && (
          <motion.div
            className="mt-6 text-center z-30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <motion.p
              className="text-yellow-300 text-lg font-bold"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1, repeat: Infinity }}
            >
              Wapas jaane mein {countdown} second... 🐒
            </motion.p>
            <motion.p
              className="text-gray-500 text-sm mt-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
            >
              Sirf &quot;Haan&quot; hi kaam karega! 😏
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
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
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5, type: 'spring' }}
          >
            <MonkeyDancePage onBack={() => setPage('proposal')} />
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
