import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink, FiX } from 'react-icons/fi';
import { projects, personalInfo } from '../data/portfolioData';

const categoryColors = {
  'Web App': { color: '#61DAFB', bg: 'rgba(97, 218, 251, 0.1)' },
  Design: { color: '#FF9A00', bg: 'rgba(255, 154, 0, 0.1)' },
};

// Placeholder gradient thumbnails
const thumbnailGradients = [
  'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
  'linear-gradient(135deg, #1a0533 0%, #2d1b69 50%, #11998e 100%)',
  'linear-gradient(135deg, #0a0a12 0%, #1a0533 50%, #be185d 100%)',
  'linear-gradient(135deg, #0d1117 0%, #1e3a5f 50%, #00b4d8 100%)',
];

function ProjectModal({ project, onClose }) {
  if (!project) return null;
  const catStyle = categoryColors[project.category] || { color: '#ec4899', bg: 'rgba(236, 72, 153,0.1)' };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(10px)' }}
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0, y: 30 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.9, opacity: 0, y: 30 }}
        transition={{ type: 'spring', stiffness: 100 }}
        className="relative max-w-2xl w-full rounded-2xl overflow-hidden"
        style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)' }}
        onClick={e => e.stopPropagation()}
      >
        {/* Thumbnail */}
        <div
          className="h-56 sm:h-72 flex items-center justify-center relative overflow-hidden"
          style={{ background: project.image ? 'var(--bg-card)' : (thumbnailGradients[project.id - 1] || thumbnailGradients[0]) }}
        >
          {project.image ? (
            <img src={project.image} alt={project.title} className="w-full h-full object-cover object-top" />
          ) : (
            <div className="text-6xl" style={{ filter: 'drop-shadow(0 0 20px rgba(255,255,255,0.3))' }}>
              {project.category === 'Web App' ? '💻' : '🎨'}
            </div>
          )}
          {project.featured && (
            <div
              className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold"
              style={{ background: 'var(--accent-pink)', color: '#000' }}
            >
              ⭐ Featured
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-xl font-bold mb-1" style={{ color: 'var(--text-primary)' }}>
                {project.title}
              </h3>
              <span
                className="text-xs font-semibold px-2 py-1 rounded-full"
                style={{ background: catStyle.bg, color: catStyle.color }}
              >
                {project.category}
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-lg hover:opacity-70 transition-opacity"
              style={{ color: 'var(--text-muted)' }}
            >
              <FiX size={20} />
            </button>
          </div>

          <p className="text-sm leading-relaxed mb-4" style={{ color: 'var(--text-secondary)' }}>
            {project.longDescription}
          </p>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="text-xs px-3 py-1 rounded-md"
                style={{
                  background: 'rgba(236, 72, 153, 0.08)',
                  color: 'var(--accent-pink)',
                  border: '1px solid rgba(236, 72, 153, 0.2)',
                }}
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Actions */}
          <div className="flex gap-3">
            {project.github !== '#' && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary flex-1 justify-center text-sm py-2"
              >
                <FiGithub size={16} /> GitHub
              </a>
            )}
            {project.demo !== '#' && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex-1 justify-center text-sm py-2"
              >
                <FiExternalLink size={16} /> Live Demo
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function ProjectCard({ project, index, onClick }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const catStyle = categoryColors[project.category] || { color: '#ec4899', bg: 'rgba(236, 72, 153,0.1)' };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, type: 'spring', stiffness: 80 }}
      whileHover={{ y: -6 }}
      onClick={() => onClick(project)}
      className="group cursor-pointer rounded-2xl overflow-hidden flex flex-col"
      style={{
        background: 'var(--bg-card)',
        border: '1px solid var(--border-color)',
        transition: 'box-shadow 0.3s ease',
      }}
    >
      {/* Thumbnail */}
      <div
        className="relative h-56 overflow-hidden border-b border-[var(--border-color)]"
        style={{ background: project.image ? 'var(--bg-card)' : (thumbnailGradients[project.id - 1] || thumbnailGradients[0]) }}
      >
        {/* Thumbnail Image or Emoji */}
        {project.image ? (
          <img src={project.image} alt={project.title} className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105" />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-5xl transition-transform duration-500 group-hover:scale-110">
            {project.category === 'Web App' ? '💻' : '🎨'}
          </div>
        )}

        {/* Overlay on hover */}
        <div
          className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300"
          style={{ background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(4px)' }}
        >
          <span className="text-sm font-semibold text-white flex items-center gap-2">
            Lihat Detail →
          </span>
        </div>

        {/* Featured badge */}
        {project.featured && (
          <div
            className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-bold"
            style={{ background: 'var(--accent-pink)', color: '#000' }}
          >
            ⭐ Featured
          </div>
        )}

        {/* Category tag */}
        <div
          className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-xs font-semibold"
          style={{ background: catStyle.bg, color: catStyle.color, backdropFilter: 'blur(10px)' }}
        >
          {project.category}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex-1 flex flex-col">
        <h3 className="font-bold text-base mb-2 group-hover:text-[var(--accent-pink)] transition-colors">
          {project.title}
        </h3>
        <p className="text-sm leading-relaxed mb-4 flex-1" style={{ color: 'var(--text-secondary)' }}>
          {project.description}
        </p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="text-xs px-2.5 py-1 rounded-md"
              style={{
                background: 'rgba(236, 72, 153, 0.07)',
                color: 'var(--accent-pink-light)',
                border: '1px solid rgba(236, 72, 153, 0.15)',
              }}
            >
              {tech}
            </span>
          ))}
          {project.tech.length > 3 && (
            <span className="text-xs px-2.5 py-1 rounded-md" style={{ color: 'var(--text-muted)' }}>
              +{project.tech.length - 3}
            </span>
          )}
        </div>

        {/* Links */}
        <div className="flex gap-3">
          {project.github !== '#' && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={e => e.stopPropagation()}
              className="flex items-center gap-1.5 text-xs font-medium transition-colors hover:text-[var(--accent-pink)]"
              style={{ color: 'var(--text-muted)' }}
            >
              <FiGithub size={14} /> GitHub
            </a>
          )}
          {project.demo !== '#' && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              onClick={e => e.stopPropagation()}
              className="flex items-center gap-1.5 text-xs font-medium transition-colors hover:text-[var(--accent-pink)]"
              style={{ color: 'var(--text-muted)' }}
            >
              <FiExternalLink size={14} /> Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: '-80px' });

  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      <div
        className="orb orb-neon absolute"
        style={{ width: 300, height: 300, top: '5%', right: '5%', opacity: 0.04 }}
      />

      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="section-tag">Portofolio</p>
          <h2 className="section-title">
            Proyek <span className="text-gradient-neon">Terbaik</span> Saya
          </h2>
          <p className="section-subtitle mx-auto">
            Kumpulan karya yang mencerminkan passion dan kemampuan teknis saya
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              onClick={setSelectedProject}
            />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isHeaderInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex"
          >
            <FiGithub /> Lihat Semua di GitHub
          </a>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
