import "./Footer.css";

import LinkIcon from "../../assets/svg/link.svg";

function Footer() {
  const footerLinks = {
    Product: ["Features", "Pricing", "Documentation", "Integrations"],

    Company: ["About", "Careers", "Contact", "Press"],

    Resources: ["Blog", "Help Center", "API", "Status"],
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* ================= LEFT ================= */}

        <div className="footer-brand">
          <div className="footer-logo">
            <div className="footer-logo-circle">AI</div>

            <span>AI Automation</span>
          </div>

          <p>
            Next-generation AI workflow automation platform built for modern
            teams, enterprises, and developers.
          </p>
        </div>

        {/* ================= LINKS ================= */}

        <div className="footer-links">
          {Object.entries(footerLinks).map(([title, links]) => (
            <div className="footer-column" key={title}>
              <h4>{title}</h4>

              {links.map((item) => (
                <a href="/" key={item} onClick={(e) => e.preventDefault()}>
                  <img src={LinkIcon} alt="" />

                  {item}
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ================= BOTTOM ================= */}

      <div className="footer-bottom">
        <p>© 2026 AI Automation. All rights reserved.</p>

        <div className="footer-social">
          <a href="/" onClick={(e) => e.preventDefault()}>
            LinkedIn
          </a>

          <a href="/" onClick={(e) => e.preventDefault()}>
            GitHub
          </a>

          <a href="/" onClick={(e) => e.preventDefault()}>
            X
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
