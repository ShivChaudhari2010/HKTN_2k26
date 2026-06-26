import React from "react";

import ChevronDown from "../../assets/svg/chevron-down.svg";
import ChevronUp from "../../assets/svg/chevron-up.svg";

function AccordionItem({ feature, open, onToggle }) {
  return (
    <article className={`accordion-item ${open ? "open" : ""}`}>
      {/* ================= HEADER ================= */}

      <button
        className="accordion-header"
        onClick={onToggle}
        aria-expanded={open}
        aria-controls={`accordion-panel-${feature.title}`}
      >
        <div className="accordion-left">
          <div className="accordion-icon">
            <img src={feature.icon} alt="" aria-hidden="true" />
          </div>

          <div>
            <h3 className="accordion-title">{feature.title}</h3>
          </div>
        </div>

        <img
          className="accordion-chevron"
          src={open ? ChevronUp : ChevronDown}
          alt=""
          aria-hidden="true"
        />
      </button>

      {/* ================= CONTENT ================= */}

      <div
        id={`accordion-panel-${feature.title}`}
        className={`accordion-content ${open ? "show" : ""}`}
      >
        <div className="accordion-body">
          <p>{feature.description}</p>

          <span className="accordion-tag">AI Ready</span>
        </div>
      </div>
    </article>
  );
}

export default React.memo(AccordionItem);
