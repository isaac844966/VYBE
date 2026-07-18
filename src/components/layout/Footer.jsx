import React from 'react';
import { Link } from 'react-router-dom';
import { FiTwitter, FiFacebook, FiInstagram, FiMail } from 'react-icons/fi';
import { ROUTES } from '../../constants';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: 'Product',
      links: [
        { label: 'Premium', path: ROUTES.PREMIUM },
        { label: 'Help Center', path: ROUTES.HELP },
      ],
    },
    {
      title: 'Company',
      links: [
        { label: 'About', path: '#' },
        { label: 'Blog', path: '#' },
        { label: 'Careers', path: '#' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { label: 'Privacy', path: '#' },
        { label: 'Terms', path: '#' },
        { label: 'Contact', path: '#' },
      ],
    },
  ];

  return (
    <footer className="bg-surface border-t border-border mt-12">
      <div className="container py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-1 lg:col-span-2">
            <Link to={ROUTES.HOME} className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">V</span>
              </div>
              <span className="font-bold text-lg text-text">Vybe</span>
            </Link>
            <p className="text-muted text-sm leading-relaxed">
              Stream your favorite music anytime, anywhere. Discover, create, and share your perfect playlist.
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href="#"
                className="btn-icon text-muted hover:text-primary"
                aria-label="Twitter"
              >
                <FiTwitter size={18} />
              </a>
              <a
                href="#"
                className="btn-icon text-muted hover:text-primary"
                aria-label="Facebook"
              >
                <FiFacebook size={18} />
              </a>
              <a
                href="#"
                className="btn-icon text-muted hover:text-primary"
                aria-label="Instagram"
              >
                <FiInstagram size={18} />
              </a>
              <a
                href="#"
                className="btn-icon text-muted hover:text-primary"
                aria-label="Email"
              >
                <FiMail size={18} />
              </a>
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold text-text mb-4 text-sm">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="text-muted hover:text-primary transition-smooth text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted">
            <p>&copy; {currentYear} Vybe. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-primary transition-smooth">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-primary transition-smooth">
                Terms of Service
              </a>
              <a href="#" className="hover:text-primary transition-smooth">
                Cookie Settings
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;