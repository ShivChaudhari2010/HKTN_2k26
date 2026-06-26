import "./TrustedCompanies.css";

function TrustedCompanies() {
  const companies = [
    "MICROSOFT",
    "GOOGLE",
    "OPENAI",
    "META",
    "NETFLIX",
    "SPOTIFY",
    "AMAZON",
    "ADOBE",
  ];

  return (
    <section className="trusted-section">
      <div className="container">
        <div className="section-badge">Trusted Worldwide</div>

        <h2 className="trusted-title">Trusted by Innovative Teams Worldwide</h2>

        <p className="trusted-subtitle">
          Thousands of companies rely on AIFlow to automate workflows,
          accelerate productivity, and scale their business operations.
        </p>

        <div className="marquee">
          <div className="marquee-content">
            {[...companies, ...companies].map((company, index) => (
              <div key={index} className="company-card">
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TrustedCompanies;
