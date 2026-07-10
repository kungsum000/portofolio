import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { aboutMe, personalInfo } from '../data/portfolioData';
import { FiMapPin, FiMail, FiPhone } from 'react-icons/fi';

function AnimatedSection({ children, delay = 0 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}

const stats = [
  { value: '3+', label: 'Proyek Selesai' },
  { value: '4mo', label: 'Pengalaman Magang' },
  { value: '5+', label: 'Event Besar' },
  { value: '3.91', label: 'IPK Saat Ini' },
];

export default function About() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-80px' });

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Background decoration */}
      <div
        className="orb orb-purple absolute"
        style={{ width: 350, height: 350, top: '10%', right: '-8%', opacity: 0.05 }}
      />

      <div className="container-custom">
        {/* Section Header */}
        <AnimatedSection>
          <div className="text-center mb-16">
            <p className="section-tag">Tentang Saya</p>
            <h2 className="section-title">
              Kenali <span className="text-gradient-pink">Saya</span> Lebih Dekat
            </h2>
            <p className="section-subtitle mx-auto">
              Mahasiswa Informatika dengan passion besar dalam membangun pengalaman web yang berkesan
            </p>
          </div>
        </AnimatedSection>

        <div ref={containerRef} className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Description */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
            >


              <div className="space-y-4 mb-8">
                {aboutMe.description.split('\n').filter(p => p.trim()).map((para, i) => (
                  <p
                    key={i}
                    className="leading-relaxed"
                    style={{ color: 'var(--text-secondary)', fontSize: '1rem' }}
                  >
                    {para.trim()}
                  </p>
                ))}
              </div>

              {/* Highlights */}
              <div className="grid grid-cols-1 gap-3 mb-8">
                {aboutMe.highlights.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.2 + i * 0.1 }}
                    className="flex items-center gap-3 px-4 py-3 rounded-lg"
                    style={{
                      background: 'rgba(236, 72, 153, 0.04)',
                      border: '1px solid rgba(236, 72, 153, 0.1)',
                    }}
                  >
                    <span className="text-lg">{item.split(' ')[0]}</span>
                    <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                      {item.split(' ').slice(1).join(' ')}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Contact info */}
              <div className="space-y-2">
                {[
                  { icon: FiMapPin, text: personalInfo.location },
                  { icon: FiMail, text: personalInfo.email },
                  { icon: FiPhone, text: personalInfo.whatsapp },
                ].map(({ icon: Icon, text }) => (
                  <div
                    key={text}
                    className="flex items-center gap-3 text-sm"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    <Icon size={14} style={{ color: 'var(--accent-pink)' }} />
                    {text}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right: Stats Cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1, type: 'spring', stiffness: 100 }}
                  className="card text-center group cursor-default"
                >
                  <div
                    className="text-3xl font-black mb-1 text-gradient-pink group-hover:scale-110 transition-transform"
                    style={{ fontFamily: 'Poppins, sans-serif' }}
                  >
                    {stat.value}
                  </div>
                  <div className="text-xs font-medium tracking-wide" style={{ color: 'var(--text-muted)' }}>
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>


            {/* Currently learning */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7 }}
              className="p-5 rounded-xl"
              style={{
                background: 'rgba(34, 211, 238, 0.03)',
                border: '1px solid rgba(34, 211, 238, 0.1)',
              }}
            >
              <div className="flex items-center gap-2 mb-3">
                <span
                  className="w-2 h-2 rounded-full animate-pulse"
                  style={{ background: '#22d3ee' }}
                />
                <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: '#22d3ee' }}>
                  Currently Learning
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {['TypeScript', 'Next.js', 'Node.js', 'Docker'].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full text-xs font-medium"
                    style={{
                      background: 'rgba(34, 211, 238, 0.06)',
                      border: '1px solid rgba(34, 211, 238, 0.15)',
                      color: 'rgba(34, 211, 238, 0.8)',
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
