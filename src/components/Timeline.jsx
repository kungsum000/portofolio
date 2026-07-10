import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { experiences } from '../data/portfolioData';

const typeColors = {
  internship: { bg: 'rgba(236, 72, 153, 0.1)', border: 'rgba(236, 72, 153, 0.3)', color: '#ec4899', label: 'Magang' },
  work: { bg: 'rgba(250, 204, 21, 0.1)', border: 'rgba(250, 204, 21, 0.3)', color: '#facc15', label: 'Kerja' },
  organization: { bg: 'rgba(139, 92, 246, 0.1)', border: 'rgba(139, 92, 246, 0.3)', color: '#8b5cf6', label: 'Organisasi' },
  education: { bg: 'rgba(34, 211, 238, 0.06)', border: 'rgba(34, 211, 238, 0.2)', color: '#22d3ee', label: 'Pendidikan' },
};

function TimelineItem({ exp, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const isLeft = index % 2 === 0;
  const typeStyle = typeColors[exp.type] || typeColors.organization;

  return (
    <div
      ref={ref}
      className={`flex gap-4 md:gap-0 items-start relative ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}
    >
      {/* Content (left or right) */}
      <motion.div
        initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.6, type: 'spring', stiffness: 80, delay: 0.1 }}
        className="w-full md:w-[calc(50%-2rem)] group"
      >
        <div
          className="p-5 rounded-xl transition-all duration-300 group-hover:scale-[1.02]"
          style={{
            background: 'var(--bg-card)',
            border: `1px solid ${typeStyle.border}`,
          }}
        >
          {/* Header */}
          <div className="flex items-start justify-between gap-3 mb-3">
            <div className="flex items-center gap-3">
              <span className="text-2xl">{exp.icon}</span>
              <div>
                <h3 className="font-bold text-base leading-tight" style={{ color: 'var(--text-primary)' }}>
                  {exp.title}
                </h3>
                <p className="text-sm font-medium" style={{ color: typeStyle.color }}>
                  {exp.company}
                </p>
              </div>
            </div>
            <span
              className="text-xs font-semibold px-2 py-1 rounded-full shrink-0"
              style={{ background: typeStyle.bg, color: typeStyle.color, border: `1px solid ${typeStyle.border}` }}
            >
              {typeStyle.label}
            </span>
          </div>

          {/* Period */}
          <div className="flex items-center gap-2 mb-3">
            <div className="w-1 h-1 rounded-full" style={{ background: typeStyle.color }} />
            <span className="text-xs font-medium" style={{ color: 'var(--text-muted)' }}>
              {exp.period}
            </span>
          </div>

          {/* Image */}
          {exp.image && (
            <div className="mb-4 overflow-hidden rounded-lg border border-[var(--border-color)]">
              <img 
                src={exp.image} 
                alt={exp.title} 
                className="w-full h-auto object-contain hover:scale-102 transition-transform duration-300" 
              />
            </div>
          )}

          {/* Description */}
          <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--text-secondary)' }}>
            {exp.description}
          </p>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-2">
            {exp.tech.map((tech) => (
              <span
                key={tech}
                className="text-xs px-2 py-1 rounded-md"
                style={{
                  background: `${typeStyle.color}10`,
                  color: typeStyle.color,
                  border: `1px solid ${typeStyle.color}25`,
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Center dot — hidden on mobile */}
      <div className="hidden md:flex w-16 flex-col items-center shrink-0">
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={isInView ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="w-4 h-4 rounded-full z-10 relative"
          style={{
            background: typeStyle.color,
            boxShadow: `0 0 15px ${typeStyle.color}80`,
          }}
        >
          <div
            className="absolute inset-0 rounded-full animate-ping"
            style={{ background: typeStyle.color, opacity: 0.3 }}
          />
        </motion.div>
      </div>

      {/* Spacer (right side) */}
      <div className="hidden md:block w-[calc(50%-2rem)]" />
    </div>
  );
}

export default function Timeline() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: '-80px' });

  return (
    <section id="experience" className="section-padding relative overflow-hidden">
      <div
        className="orb orb-purple absolute"
        style={{ width: 400, height: 400, bottom: '10%', right: '-8%', opacity: 0.05 }}
      />

      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-tag">Perjalanan</p>
          <h2 className="section-title">
            Pengalaman & <span className="text-gradient-purple">Timeline</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Setiap langkah membentuk saya menjadi developer yang lebih baik
          </p>
        </motion.div>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isHeaderInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {Object.entries(typeColors).map(([key, style]) => (
            <div key={key} className="flex items-center gap-2 text-sm">
              <div className="w-2.5 h-2.5 rounded-full" style={{ background: style.color }} />
              <span style={{ color: 'var(--text-secondary)' }}>{style.label}</span>
            </div>
          ))}
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line (desktop only) */}
          <div
            className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 timeline-line"
            style={{ opacity: 0.3 }}
          />

          {/* Mobile left line */}
          <div
            className="md:hidden absolute left-5 top-0 bottom-0 w-0.5 timeline-line"
            style={{ opacity: 0.3 }}
          />

          <div className="flex flex-col gap-8">
            {experiences.map((exp, i) => (
              <TimelineItem key={exp.id} exp={exp} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
