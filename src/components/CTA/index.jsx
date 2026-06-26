import "./CTA.css";

function CTA() {
  return (
    <section id="cta" className="cta-section">
      <div className="cta-container">
        {/* Background Glow */}
        <div className="cta-glow"></div>

        <div className="cta-content">
          <span className="cta-badge">Ready to Scale?</span>

          <h2>
            Ready to automate
            <br />
            your entire workflow?
          </h2>

          <p>
            Join thousands of teams using AI to eliminate repetitive work,
            improve productivity, and accelerate business growth.
          </p>

          <div className="cta-buttons">
            <button className="cta-primary-btn">Start Free Trial</button>

            <button className="cta-secondary-btn">Book Demo</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTA;
