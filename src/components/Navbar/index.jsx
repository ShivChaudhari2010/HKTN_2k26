import { useState } from "react";
import "./Navbar.css";

import CloseIcon from "../../assets/svg/x-mark.svg";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    {
      title: "Features",
      href: "#features",
    },
    {
      title: "Pricing",
      href: "#pricing",
    },
    {
      title: "Testimonials",
      href: "#testimonials",
    },
    {
      title: "FAQ",
      href: "#faq",
    },
  ];

  return (
    <header className="navbar">
      <div className="container navbar-container">
        {/* ================= LOGO ================= */}

        <a href="/" className="navbar-logo" aria-label="AIFlow Home">
          <span className="logo-ai">AI</span>
          <span className="logo-flow">Flow</span>
        </a>

        {/* ================= DESKTOP NAV ================= */}

        <nav className="navbar-links" aria-label="Primary Navigation">
          {navLinks.map((link) => (
            <a key={link.title} href={link.href}>
              {link.title}
            </a>
          ))}
        </nav>

        {/* ================= CTA ================= */}

        <div className="navbar-actions">
          <button className="btn-primary navbar-btn">Get Started</button>

          {/* Mobile Toggle */}

          <button
            className="mobile-toggle"
            aria-label="Toggle Navigation"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <img src={CloseIcon} alt="" />
            ) : (
              <span className="hamburger">
                <span></span>

                <span></span>

                <span></span>
              </span>
            )}
          </button>
        </div>
      </div>

      {/* ================= MOBILE MENU ================= */}

      <div className={`mobile-menu ${menuOpen ? "show" : ""}`}>
        <nav className="mobile-nav" aria-label="Mobile Navigation">
          {navLinks.map((link) => (
            <a
              key={link.title}
              href={link.href}
              onClick={() => setMenuOpen(false)}
            >
              {link.title}
            </a>
          ))}

          <button
            className="btn-primary mobile-btn"
            onClick={() => setMenuOpen(false)}
          >
            Get Started
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
