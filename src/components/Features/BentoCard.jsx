import React from "react";

function BentoCard({ feature, active, onHover }) {
  return (
    <article
      className={`bento-card ${active ? "active" : ""}`}
      onMouseEnter={onHover}
      tabIndex={0}
      onFocus={onHover}
      aria-label={feature.title}
    >
      {/* Icon */}

      <div className="bento-icon">
        <img src={feature.icon} alt={feature.title} />
      </div>

      {/* Title */}

      <h3 className="bento-title">{feature.title}</h3>

      {/* Description */}

      <p className="bento-description">{feature.description}</p>

      {/* Bottom Area */}

      <div className="bento-footer">
        <span className="bento-status">AI Ready</span>

        <span className="bento-arrow">→</span>
      </div>

      {/* Glow Layer */}

      <div className="bento-glow"></div>
    </article>
  );
}

export default React.memo(BentoCard);
