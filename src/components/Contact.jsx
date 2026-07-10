import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  FiMail, FiPhone, FiLinkedin, FiGithub, FiSend, FiCheck, FiMapPin
} from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';
import { personalInfo } from '../data/portfolioData';

const socialLinks = [
  {
    icon: FiMail,
    label: 'Email',
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    color: '#ec4899',
  },
  {
    icon: FaWhatsapp,
    label: 'WhatsApp',
    value: personalInfo.whatsapp,
    href: `https://wa.me/${personalInfo.whatsapp.replace(/[^0-9]/g, '')}`,
    color: '#25D366',
  },
  {
    icon: FiLinkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/umi-kungsum',
    href: personalInfo.linkedin,
    color: '#0A66C2',
  },
  {
    icon: FiGithub,
    label: 'GitHub',
    value: 'github.com/kungsum000',
    href: personalInfo.github,
    color: '#ffffff',
  },
];

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    // Simulate send (replace with actual API call or EmailJS)
    await new Promise(res => setTimeout(res, 1500));
    setSubmitting(false);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div
        className="orb orb-gold absolute"
        style={{ width: 500, height: 500, top: '-15%', left: '-10%', opacity: 0.04 }}
      />

      <div className="container-custom" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="section-tag">Hubungi Saya</p>
          <h2 className="section-title">
            Mari <span className="text-gradient-pink">Berkolaborasi</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Saya terbuka untuk peluang magang dan kolaborasi. Jangan ragu untuk menghubungi saya!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="space-y-6"
          >
            {/* Location */}
            <div
              className="flex items-center gap-4 p-4 rounded-xl"
              style={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)' }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                style={{ background: 'rgba(236, 72, 153, 0.1)', border: '1px solid rgba(236, 72, 153, 0.2)' }}
              >
                <FiMapPin style={{ color: 'var(--accent-pink)' }} size={20} />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider mb-0.5" style={{ color: 'var(--text-muted)' }}>Lokasi</p>
                <p className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>{personalInfo.location}</p>
              </div>
            </div>

            {/* Social/Contact Links */}
            {socialLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.1 }}
                whileHover={{ x: 6, scale: 1.02 }}
                className="flex items-center gap-4 p-4 rounded-xl group transition-all"
                style={{
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-color)',
                  textDecoration: 'none',
                }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-all group-hover:scale-110"
                  style={{
                    background: `${link.color}15`,
                    border: `1px solid ${link.color}30`,
                  }}
                >
                  <link.icon style={{ color: link.color }} size={20} />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider mb-0.5" style={{ color: 'var(--text-muted)' }}>
                    {link.label}
                  </p>
                  <p className="text-sm font-medium group-hover:text-[var(--accent-pink)] transition-colors" style={{ color: 'var(--text-primary)' }}>
                    {link.value}
                  </p>
                </div>
                <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                  <FiMail size={16} style={{ color: link.color }} />
                </div>
              </motion.a>
            ))}

            {/* Availability notice */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.7 }}
              className="p-4 rounded-xl"
              style={{
                background: 'rgba(34, 211, 238, 0.03)',
                border: '1px solid rgba(34, 211, 238, 0.15)',
              }}
            >
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full animate-pulse" style={{ background: '#22d3ee', flexShrink: 0 }} />
                <div>
                  <p className="text-xs font-semibold" style={{ color: '#22d3ee' }}>Open to Magang Juli 2026</p>
                  <p className="text-xs mt-0.5" style={{ color: 'var(--text-muted)' }}>
                    Tersedia untuk program magang mulai Juli 2026
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <form
              onSubmit={handleSubmit}
              className="p-7 rounded-2xl space-y-5"
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border-color)',
              }}
            >
              <h3 className="text-lg font-bold mb-6" style={{ color: 'var(--text-primary)' }}>
                Kirim Pesan 💬
              </h3>

              {/* Name */}
              <div>
                <label
                  htmlFor="contact-name"
                  className="block text-sm font-medium mb-2"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  Nama Lengkap
                </label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Masukkan nama kamu"
                  required
                  className="form-input"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="contact-email"
                  className="block text-sm font-medium mb-2"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="email@contoh.com"
                  required
                  className="form-input"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="contact-message"
                  className="block text-sm font-medium mb-2"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  Pesan
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tuliskan pesan atau pertanyaan kamu di sini..."
                  required
                  rows={5}
                  className="form-input resize-none"
                />
              </div>

              {/* Submit */}
              <motion.button
                type="submit"
                disabled={submitting || submitted}
                className="btn-primary w-full justify-center"
                whileHover={!submitting && !submitted ? { scale: 1.02 } : {}}
                whileTap={!submitting && !submitted ? { scale: 0.98 } : {}}
                style={submitted ? { background: 'linear-gradient(135deg, #0891b2, #059669)' } : {}}
              >
                {submitted ? (
                  <>
                    <FiCheck /> Pesan Terkirim!
                  </>
                ) : submitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
                    Mengirim...
                  </>
                ) : (
                  <>
                    <FiSend /> Kirim Pesan
                  </>
                )}
              </motion.button>

              <p className="text-xs text-center" style={{ color: 'var(--text-muted)' }}>
                Atau langsung hubungi via WhatsApp untuk respons lebih cepat
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
