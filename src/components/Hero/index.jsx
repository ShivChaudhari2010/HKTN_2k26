import "./Hero.css";

function Hero() {
  return (
    <main>
      <section className="hero">
        {/* ================= BACKGROUND ================= */}

        <div className="hero-glow hero-glow-one"></div>

        <div className="hero-glow hero-glow-two"></div>

        <div className="container hero-container">
          {/* =====================================================
              LEFT CONTENT
          ===================================================== */}

          <div className="hero-content">
            <span className="hero-badge">AI Powered Workflow Automation</span>

            <h1 className="hero-title">
              Automate
              <span> Everything.</span>
              <br />
              Scale Without Limits.
            </h1>

            <p className="hero-description">
              AIFlow helps teams automate repetitive workflows, analyze business
              data in real time, and accelerate decision making using
              enterprise-grade artificial intelligence.
            </p>

            {/* CTA */}

            <div className="hero-buttons">
              <button className="btn-primary">Start Free Trial</button>

              <button className="btn-secondary">Book Demo</button>
            </div>

            {/* Metrics */}

            <div className="hero-metrics">
              <div className="metric-card">
                <h3>98%</h3>

                <p>Automation Accuracy</p>
              </div>

              <div className="metric-card">
                <h3>80%</h3>

                <p>Time Saved</p>
              </div>

              <div className="metric-card">
                <h3>10K+</h3>

                <p>Happy Teams</p>
              </div>
            </div>
          </div>

          {/* =====================================================
              RIGHT SIDE
          ===================================================== */}

          <div className="hero-visual">
            <div className="dashboard">
              {/* Header */}

              <div className="dashboard-header">
                <div>
                  <h4>AI Dashboard</h4>

                  <span>Live Analytics</span>
                </div>

                <div className="status-online">● Online</div>
              </div>

              {/* Card */}

              <div className="dashboard-card">
                <div className="card-top">
                  <span>Workflow Efficiency</span>

                  <strong>92%</strong>
                </div>

                <div className="progress">
                  <div className="progress-fill" style={{ width: "92%" }}></div>
                </div>
              </div>

              {/* Card */}

              <div className="dashboard-card">
                <div className="card-top">
                  <span>AI Prediction</span>

                  <strong>84%</strong>
                </div>

                <div className="progress">
                  <div
                    className="progress-fill secondary"
                    style={{ width: "84%" }}
                  ></div>
                </div>
              </div>

              {/* Bottom */}

              <div className="dashboard-bottom">
                <div>
                  <p>Automations</p>

                  <h2>124</h2>
                </div>

                <div>
                  <p>Tasks Today</p>

                  <h2>8,942</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Hero;
