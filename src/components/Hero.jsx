import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin } from 'react-icons/fi';
import { personalInfo } from '../data/portfolioData';
import profilePhoto from '../assets/profil.jpg';

const typingTexts = [
  'Frontend Web Developer',
  'React.js Enthusiast',
  'Mahasiswa Informatika',
  'Creative Problem Solver',
];

function TypingEffect() {
  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentText = typingTexts[textIndex];
    const speed = isDeleting ? 60 : 100;

    const timer = setTimeout(() => {
      if (!isDeleting && charIndex < currentText.length) {
        setDisplayText(currentText.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else if (isDeleting && charIndex > 0) {
        setDisplayText(currentText.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else if (!isDeleting && charIndex === currentText.length) {
        setTimeout(() => setIsDeleting(true), 1800);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setTextIndex((textIndex + 1) % typingTexts.length);
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, textIndex]);

  return (
    <span className="text-gradient-pink">
      {displayText}
      <span className="typing-cursor" />
    </span>
  );
}

// Particle component
function Particle({ x, y, size, delay, color }) {
  return (
    <motion.div
      className="absolute rounded-full pointer-events-none"
      style={{
        left: `${x}%`,
        top: `${y}%`,
        width: size,
        height: size,
        background: color,
        opacity: 0,
      }}
      animate={{
        opacity: [0, 0.7, 0],
        y: [0, -30, -60],
        scale: [0.5, 1, 0.3],
      }}
      transition={{
        duration: 3 + Math.random() * 2,
        delay: delay,
        repeat: Infinity,
        repeatDelay: Math.random() * 3,
        ease: 'easeInOut',
      }}
    />
  );
}

const particles = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 4 + 1,
  delay: Math.random() * 3,
  color: i % 3 === 0 ? '#ec4899' : i % 3 === 1 ? '#8b5cf6' : '#22d3ee',
}));

export default function Hero() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden grid-bg"
    >
      {/* Background orbs */}
      <div
        className="orb orb-gold absolute"
        style={{ width: 500, height: 500, top: '-10%', right: '-5%' }}
      />
      <div
        className="orb orb-purple absolute"
        style={{ width: 400, height: 400, bottom: '-5%', left: '-5%' }}
      />
      <div
        className="orb orb-neon absolute"
        style={{ width: 200, height: 200, top: '40%', right: '15%' }}
      />

      {/* Particles */}
      {particles.map((p) => (
        <Particle key={p.id} {...p} />
      ))}

      {/* Main content */}
      <div className="container-custom relative z-10 py-24 md:py-32 text-center md:text-left">
        <div className="flex flex-col-reverse md:grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left: Text Content */}
          <div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-black leading-none mb-4"
              style={{
                fontFamily: 'Poppins, sans-serif',
                fontSize: 'clamp(1.2rem, 3vw, 2.2rem)',
              }}
            >
              Hi, I&apos;m{' '}
              <span className="text-gradient-pink block mt-1">
                {personalInfo.name}
              </span>
            </motion.h1>

            {/* Typing effect */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-xl md:text-2xl font-semibold mb-6 min-h-[2rem]"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              <TypingEffect />
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-base md:text-lg mb-8 max-w-xl leading-relaxed"
              style={{ color: 'var(--text-secondary)' }}
            >
              Mahasiswa Informatika yang passionate dalam membangun antarmuka web yang
              modern, responsif, dan berkesan. Siap berkontribusi penuh dalam tim development.
            </motion.p>



            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex gap-4 justify-center md:justify-start"
            >
              {[
                { href: personalInfo.github, icon: FiGithub, label: 'GitHub' },
                { href: personalInfo.linkedin, icon: FiLinkedin, label: 'LinkedIn' },
              ].map(({ href, icon: Icon, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-lg flex items-center justify-center transition-all"
                  style={{
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border-color)',
                    color: 'var(--text-secondary)',
                  }}
                  whileHover={{
                    scale: 1.15,
                    borderColor: 'var(--accent-pink)',
                    color: 'var(--accent-pink)',
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Right: Avatar / Code Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, type: 'spring', stiffness: 80 }}
            className="flex justify-center items-center"
          >
            <div className="relative">
              {/* Code card floating */}
              <div
                className="float-animation relative"
                style={{ filter: 'drop-shadow(0 20px 60px rgba(139, 92, 246, 0.3))' }}
              >
                {/* Main avatar circle */}
                <div
                  className="w-48 h-48 md:w-80 md:h-80 rounded-full relative overflow-hidden"
                  style={{
                    border: '2px solid rgba(236, 72, 153, 0.4)',
                    boxShadow: '0 0 0 6px rgba(236, 72, 153,0.07), 0 0 60px rgba(139, 92, 246, 0.3), 0 0 100px rgba(236, 72, 153, 0.1)',
                    background: '#000',
                  }}
                >
                  {/* Gradient ring overlay */}
                  <div
                    className="absolute inset-0 rounded-full pointer-events-none z-10"
                    style={{
                      boxShadow: 'inset 0 0 40px rgba(0,0,0,0.5)',
                    }}
                  />
                  <img
                    src={profilePhoto}
                    alt="Profile"
                    className="w-full h-full object-contain pt-8 scale-[1.15]"
                    style={{
                      filter: 'brightness(1.05) contrast(1.02)',
                    }}
                  />
                </div>

                {/* Floating skill badges */}
                {[
                  { text: 'React.js', top: '-10%', left: '-15%', color: '#61DAFB', delay: 0 },
                  { text: 'Tailwind', top: '15%', right: '-20%', color: '#06B6D4', delay: 0.5 },
                  { text: 'Framer', bottom: '0%', left: '-10%', color: '#8b5cf6', delay: 1 },
                  { text: 'Git', bottom: '5%', right: '-5%', color: '#F05032', delay: 1.5 },
                ].map(({ text, color, delay, ...pos }) => (
                  <motion.div
                    key={text}
                    className="absolute px-3 py-1.5 rounded-full text-xs font-semibold"
                    style={{
                      ...pos,
                      background: `${color}15`,
                      border: `1px solid ${color}40`,
                      color: color,
                      backdropFilter: 'blur(10px)',
                    }}
                    animate={{
                      y: [0, -8, 0],
                    }}
                    transition={{
                      duration: 2.5,
                      delay,
                      repeat: Infinity,
                      ease: 'easeInOut',
                    }}
                  >
                    {text}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>


      </div>
    </section>
  );
}
