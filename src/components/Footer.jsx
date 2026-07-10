import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiCode, FiArrowUp } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { personalInfo } from '../data/portfolioData';

const footerLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

const socials = [
  { icon: FiGithub, href: personalInfo.github, label: 'GitHub', color: '#fff' },
  { icon: FiLinkedin, href: personalInfo.linkedin, label: 'LinkedIn', color: '#0A66C2' },
  { icon: FaWhatsapp, href: `https://wa.me/${personalInfo.whatsapp.replace(/[^0-9]/g, '')}`, label: 'WhatsApp', color: '#25D366' },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (href) => {
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <footer
      className="relative overflow-hidden"
      style={{
        background: 'var(--bg-secondary)',
        borderTop: '1px solid var(--border-color)',
      }}
    >
      {/* Top gradient line */}
      <div
        className="h-px w-full"
        style={{
          background: 'linear-gradient(90deg, transparent, var(--accent-pink), var(--accent-purple), var(--accent-neon-dim), transparent)',
        }}
      />

      <div className="container-custom py-12">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div
                className="w-9 h-9 rounded-lg flex items-center justify-center"
                style={{ background: 'linear-gradient(135deg, var(--accent-pink), var(--accent-purple))' }}
              >
                <FiCode className="text-black text-lg" />
              </div>
              <span className="font-bold text-xl" style={{ fontFamily: 'Poppins, sans-serif' }}>
                <span className="text-gradient-pink">Dev</span>
                <span style={{ color: 'var(--text-primary)' }}>Portfolio</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: 'var(--text-muted)' }}>
              Frontend Web Developer yang passionate dalam membangun pengalaman digital yang indah dan berkesan.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider" style={{ color: 'var(--text-secondary)' }}>
              Navigasi
            </h4>
            <ul className="space-y-2">
              {footerLinks.map(link => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                    className="text-sm transition-colors hover:text-[var(--accent-pink)]"
                    style={{ color: 'var(--text-muted)' }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider" style={{ color: 'var(--text-secondary)' }}>
              Kontak
            </h4>
            <div className="space-y-2 mb-5">
              <a
                href={`mailto:${personalInfo.email}`}
                className="block text-sm transition-colors hover:text-[var(--accent-pink)]"
                style={{ color: 'var(--text-muted)' }}
              >
                {personalInfo.email}
              </a>
              <p className="text-sm" style={{ color: 'var(--text-muted)' }}>
                {personalInfo.location}
              </p>
            </div>

            <div className="flex gap-3">
              {socials.map(({ icon: Icon, href, label, color }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-lg flex items-center justify-center"
                  style={{
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border-color)',
                    color: 'var(--text-muted)',
                  }}
                  whileHover={{ scale: 1.15, borderColor: color, color: color }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon size={16} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Back to top */}
        <div className="flex justify-end pt-8" style={{ borderTop: '1px solid var(--border-color)' }}>
          <motion.button
            onClick={scrollToTop}
            className="w-8 h-8 rounded-lg flex items-center justify-center"
            style={{
              background: 'rgba(236, 72, 153, 0.1)',
              border: '1px solid rgba(236, 72, 153, 0.2)',
              color: 'var(--accent-pink)',
            }}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Scroll to top"
          >
            <FiArrowUp size={14} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
