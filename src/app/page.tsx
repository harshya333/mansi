'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Sparkles } from 'lucide-react';

// ============== Floating Hearts Background ==============
function FloatingHearts() {
  const [hearts, setHearts] = useState<any[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const generatedHearts = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 8,
      duration: 6 + Math.random() * 6,
      size: 16 + Math.random() * 32,
      opacity: 0.2 + Math.random() * 0.5,
    }));
    setHearts(generatedHearts);
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          className="absolute text-red-400"
          style={{ left: `${heart.left}%`, fontSize: heart.size }}
          animate={{
            y: ['110vh', '-10vh'],
            x: [0, Math.sin(heart.id) * 60, -Math.sin(heart.id) * 50, 0],
            rotate: [0, 20, -15, 10],
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
  const [particles, setParticles] = useState<any[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const generatedParticles = Array.from({ length: 25 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 3,
      size: 12 + Math.random() * 24,
    }));
    setParticles(generatedParticles);
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute"
          style={{ left: `${p.left}%`, top: `${p.top}%` }}
          animate={{
            scale: [0, 1.5, 0],
            rotate: [0, 180, 360],
            opacity: [0, 1, 0],
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
  const [pieces, setPieces] = useState<any[]>([]);
  const [mounted, setMounted] = useState(false);
  const confettiColors = ['#ff6b9d', '#ff85a1', '#ffc2d1', '#ff4d6d', '#c9184a', '#ff758f', '#ffd700', '#ff1493', '#ff69b4'];

  useEffect(() => {
    const generatedPieces = Array.from({ length: 80 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 2,
      duration: 3 + Math.random() * 3,
      color: confettiColors[i % confettiColors.length],
      size: 6 + Math.random() * 10,
      rotation: Math.random() * 360,
      type: Math.random() > 0.5 ? 'square' : 'circle',
    }));
    setPieces(generatedPieces);
    setMounted(true);
  }, []);

  if (!mounted) return null;

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
    <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-12 overflow-hidden">
      <motion.div
        className="text-center max-w-2xl mx-auto w-full"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        {/* Romantic Background Image */}
        <motion.div
          className="relative w-full h-72 sm:h-80 rounded-[2.5rem] overflow-hidden mb-12 shadow-2xl border-4 border-white/40 backdrop-blur-md"
          initial={{ scale: 0.6, opacity: 0, y: -60 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ duration: 1.4, delay: 0.2, type: 'spring', stiffness: 80 }}
          whileHover={{ scale: 1.03, y: -15 }}
        >
          <img
            src="/flower.jpeg"
            alt="Romantic background"
            className="w-full h-full object-cover"
          />
          <motion.div 
            className="absolute inset-0 bg-gradient-to-b from-transparent via-pink-500/20 to-black/50"
            animate={{ opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 5, repeat: Infinity }}
          />
        </motion.div>

        {/* Main Heading */}
        <motion.div
          className="mb-12 space-y-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.h1
            className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight"
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            style={{
              textShadow: '0 0 20px rgba(251, 191, 36, 0.6), 0 0 40px rgba(251, 146, 60, 0.4)'
            }}
          >
            <span className="block text-white mb-2">
              Mansi Ekda
            </span>
            <motion.span
              className="block text-5xl sm:text-6xl lg:text-7xl text-white"
              animate={{ scale: [1, 1.15, 1], rotate: [0, 3, -3, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            >
              bhetun 
            </motion.span>
            <span className="block text-4xl sm:text-5xl lg:text-6xl text-white mt-2">
              bolu shakto ka plz 🙏
            </span>
          </motion.h1>
        </motion.div>

        {/* Buttons Container */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-16 mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {/* Yes Button */}
          <motion.button
            onClick={onYes}
            className="relative px-12 sm:px-16 py-5 sm:py-6 bg-gradient-to-br from-pink-500 via-red-500 to-pink-600 text-white text-2xl sm:text-3xl font-black rounded-full shadow-2xl cursor-pointer select-none overflow-hidden border-3 border-yellow-300/70 backdrop-blur-md"
            whileHover={{ scale: 1.12, y: -8, boxShadow: '0 20px 50px rgba(236, 72, 153, 0.8), 0 0 30px rgba(251, 191, 36, 0.6)' }}
            whileTap={{ scale: 0.92 }}
            animate={{
              boxShadow: [
                '0 0 40px rgba(236, 72, 153, 0.6), 0 0 80px rgba(239, 68, 68, 0.3), 0 0 20px rgba(251, 191, 36, 0.4)',
                '0 0 60px rgba(236, 72, 153, 0.9), 0 0 120px rgba(239, 68, 68, 0.5), 0 0 40px rgba(251, 191, 36, 0.7)',
                '0 0 40px rgba(236, 72, 153, 0.6), 0 0 80px rgba(239, 68, 68, 0.3), 0 0 20px rgba(251, 191, 36, 0.4)',
              ],
            }}
            transition={{ boxShadow: { duration: 2.5, repeat: Infinity } }}
          >
            <motion.span
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
              className="block drop-shadow-lg"
            >
              Ho
            </motion.span>
          </motion.button>

          {/* No Button */}
          <motion.button
            onClick={onNo}
            className="relative px-10 sm:px-14 py-5 sm:py-6 bg-gradient-to-br from-gray-300 to-gray-400 text-white text-xl sm:text-2xl font-bold rounded-full cursor-pointer select-none shadow-xl border-3 border-yellow-300/70 backdrop-blur-md hover:from-red-300 hover:to-red-400 hover:text-white transition-all duration-300"
            whileHover={{ scale: 1.1, rotate: [0, -3, 3, 0], boxShadow: '0 0 20px rgba(251, 191, 36, 0.5)' }}
            whileTap={{ scale: 0.88 }}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.3, duration: 0.6 }}
          >
            <motion.span
              animate={{ scale: [1, 1.12, 1] }}
              transition={{ duration: 1.3, repeat: Infinity }}
              className="block drop-shadow-md"
            >
              Sorry but mala nahi jamnar😑
            </motion.span>
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Bottom Hint */}
      <motion.div
        className="absolute bottom-12 text-center px-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.8, duration: 0.8 }}
      >
        <motion.p
          className="text-lg sm:text-xl font-bold drop-shadow-lg"
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <span className="text-white">
            💖💖💖
          </span>
        </motion.p>
      </motion.div>
    </div>
  );
}

// ============== GORILLA THREAT PAGE ==============
function GorillaPage({ onBack }: { onBack: () => void }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onBack();
    }, 11000);
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

      {/* Video - Playing */}
      <motion.div
        className="relative mb-6"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
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
          transition={{ duration: 0.8, repeat: Infinity }}
        >
          <video
            src="/SaveFast.app_AQMtpgKIsDv2Qpni8ejzuQatWBwukokoVN-gFY7Nr7dsMzNNwg3tcvkziWeyEkev9cQNvOShKcg4qXf18-Ugk29xOydxFXgnbfAAL-k.mp4"
            autoPlay
            muted
            loop
            className="w-full h-full object-cover bg-white"
          />
        </motion.div>
      </motion.div>

      {/* Text */}
      <motion.div
        className="relative text-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        <motion.h2
          className="text-3xl sm:text-4xl font-extrabold  text-white"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 0.8, repeat: Infinity }}
        >
          Ho bolun de na Mansi 🙏
        </motion.h2>
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

  const loveMessages = [];

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
              className="text-9xl sm:text-[120px] mb-10"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: 'spring', stiffness: 100, delay: 0.3, duration: 1 }}
            >
              <motion.span
                animate={{ 
                  scale: [1, 1.4, 1], 
                  rotate: [0, 20, -20, 0],
                  filter: [
                    'drop-shadow(0 0 0px rgba(255, 0, 100, 0.6))',
                    'drop-shadow(0 0 30px rgba(255, 0, 100, 1))',
                    'drop-shadow(0 0 0px rgba(255, 0, 100, 0.6))'
                  ]
                }}
                transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
              >
                ❤️
              </motion.span>
            </motion.div>

            <motion.h1
              className="text-5xl sm:text-7xl font-black mb-8 text-white drop-shadow-2xl"
              initial={{ y: 80, opacity: 0, scale: 0.5 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 1, type: 'spring', stiffness: 100 }}
              style={{
                textShadow: '0 0 30px rgba(251, 191, 36, 0.5), 0 0 60px rgba(251, 146, 60, 0.3)'
              }}
            >
              <motion.span
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
              >
                YESSS! 🎉🎊
              </motion.span>
            </motion.h1>

            <motion.p
              className="text-2xl sm:text-4xl text-white mb-8 font-bold drop-shadow-lg"
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              🙏💖
            </motion.p>

            <div className="space-y-4 mb-10">
              {loveMessages.map((msg, i) => (
                <motion.p
                  key={i}
                  className="text-lg text-white bg-gradient-to-r from-pink-500/20 to-red-500/20 backdrop-blur-md rounded-2xl px-6 py-4 shadow-lg border border-pink-300/50 font-medium"
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 1.3 + i * 0.25, duration: 0.6, type: 'spring' }}
                  whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(236, 72, 153, 0.5)' }}
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
              className="bg-gradient-to-r from-pink-500/30 to-red-500/30 backdrop-blur-md rounded-3xl p-8 shadow-2xl border-2 border-yellow-300/50"
              initial={{ y: 50, opacity: 0, scale: 0.8 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              transition={{ delay: 3.8, duration: 0.8, type: 'spring' }}
              whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(236, 72, 153, 0.6), 0 0 30px rgba(251, 191, 36, 0.5)' }}
              style={{
                boxShadow: '0 0 20px rgba(251, 191, 36, 0.3)'
              }}
            >
              <motion.p 
                className="text-2xl font-black text-white drop-shadow-lg"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 1.2, repeat: Infinity }}
                style={{
                  textShadow: '0 0 15px rgba(251, 191, 36, 0.5)'
                }}
              >
                
              </motion.p>
              <motion.p 
                className="text-white mt-3 text-lg font-semibold drop-shadow-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 4.2 }}
              >
                Thank You💕
              </motion.p>
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

  const WEBHOOK_URL = 'https://discord.com/api/webhooks/1503691179537993751/3oKzX8-fiW6TRQoeIAGzdDy99FRnsAQrHsgR56kmpTyxL5BcFs3jFbT4fpehPtoxRgyR';

  const sendToDiscord = async (answer: string, emoji: string) => {
    try {
      await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          content: `**${answer}** ${emoji}`,
          embeds: [
            {
              title: '💕 Proposal Response',
              description: answer === 'YES ✅' ? 'Mansi ne HA bolun diya! 🎉💕' : 'Mansi ne NA bolun diya! 😢',
              color: answer === 'YES ✅' ? 65280 : 16711680, // Green for YES, Red for NO
              fields: [
                {
                  name: 'Answer',
                  value: answer,
                  inline: true
                },
                {
                  name: 'Time',
                  value: new Date().toLocaleString(),
                  inline: true
                }
              ],
              timestamp: new Date().toISOString()
            }
          ]
        })
      });
    } catch (error) {
      console.error('Discord notification failed:', error);
    }
  };

  const handleYesClick = () => {
    const response = {
      answer: 'YES ✅',
      timestamp: new Date().toLocaleString(),
      message: 'Mansi ne HA bolun diya! 🎉💕'
    };
    console.log('📱 PROPOSAL RESPONSE:', response);
    localStorage.setItem('mansiResponse', JSON.stringify(response));
    sendToDiscord('YES ✅', '🎉💕');
    alert('✅ Mansi ne HA bolun diya! 🎉💕\n\nResponse saved!');
    setPage('celebration');
  };

  const handleNoClick = () => {
    const response = {
      answer: 'NO ❌',
      timestamp: new Date().toLocaleString(),
      message: 'Mansi ne NA bolun diya! 😢'
    };
    console.log('📱 PROPOSAL RESPONSE:', response);
    localStorage.setItem('mansiResponse', JSON.stringify(response));
    sendToDiscord('NO ❌', '😢');
    setPage('gorilla');
  };

  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-purple-900 via-pink-800 to-red-900 z-0" />
      
      {/* Animated Gradient Overlay */}
      <motion.div
        className="fixed inset-0 bg-gradient-to-tr from-transparent via-pink-600/20 to-purple-600/20 z-0"
        animate={{
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Glow Effect */}
      <motion.div
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/30 rounded-full blur-3xl z-0"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Golden Glow Effect */}
      <motion.div
        className="fixed top-1/3 right-1/3 w-96 h-96 bg-yellow-400/20 rounded-full blur-3xl z-0"
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.2, 0.4, 0.2],
          x: [0, 40, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="fixed top-1/4 right-1/4 w-72 h-72 bg-red-500/25 rounded-full blur-3xl z-0"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, 30, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="fixed bottom-1/4 left-1/4 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl z-0"
        animate={{
          scale: [1.2, 1, 1.2],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

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
