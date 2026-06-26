import { useEffect, useState } from "react";
import "./Features.css";

import BentoCard from "./BentoCard";
import AccordionItem from "./AccordionItem";

// Provided SVGs
import Cog from "../../assets/svg/cog-8-tooth.svg";
import Chart from "../../assets/svg/chart-pie.svg";
import Cube from "../../assets/svg/cube-16-solid.svg";
import Search from "../../assets/svg/search.svg";
import Trending from "../../assets/svg/arrow-trending-up.svg";
import Refresh from "../../assets/svg/arrow-path.svg";

function Features() {
  // -----------------------------
  // Track active feature
  // -----------------------------

  const [activeIndex, setActiveIndex] = useState(0);

  // -----------------------------
  // Detect mobile layout
  // -----------------------------

  const [mobile, setMobile] = useState(window.innerWidth < 992);

  useEffect(() => {
    const handleResize = () => {
      setMobile(window.innerWidth < 992);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // -----------------------------
  // Feature Data
  // -----------------------------

  const features = [
    {
      icon: Cog,
      title: "AI Workflow Automation",
      description:
        "Create intelligent workflows that automate repetitive business processes with enterprise-grade reliability.",
    },

    {
      icon: Chart,
      title: "Real-Time Analytics",
      description:
        "Monitor every workflow with live dashboards, visual reports, and predictive insights.",
    },

    {
      icon: Cube,
      title: "Modular Architecture",
      description:
        "Scale from startups to enterprises using independent automation modules.",
    },

    {
      icon: Search,
      title: "Smart Search Engine",
      description:
        "Locate any workflow, document, or AI-generated insight instantly.",
    },

    {
      icon: Trending,
      title: "Growth Intelligence",
      description:
        "AI continuously analyzes business performance and recommends improvements.",
    },

    {
      icon: Refresh,
      title: "Instant Synchronization",
      description:
        "Keep CRM, ERP, cloud storage, and APIs synchronized automatically.",
    },
  ];

  return (
    <section id="features" className="features-section">
      <div className="container">
        {/* ---------------- Header ---------------- */}

        <div className="section-badge">Platform Features</div>

        <h2 className="features-title">
          Powerful AI Features Built
          <br />
          for Modern Teams
        </h2>

        <p className="features-subtitle">
          Everything required to automate workflows, manage data, analyze
          performance, and scale your organization— all from one intelligent
          platform.
        </p>

        {/* ==========================
             DESKTOP BENTO GRID
        ========================== */}

        {!mobile && (
          <div className="bento-grid">
            {features.map((feature, index) => (
              <BentoCard
                key={index}
                index={index}
                feature={feature}
                active={activeIndex === index}
                onHover={() => setActiveIndex(index)}
              />
            ))}
          </div>
        )}

        {/* ==========================
             MOBILE ACCORDION
        ========================== */}

        {mobile && (
          <div className="accordion-wrapper">
            {features.map((feature, index) => (
              <AccordionItem
                key={index}
                feature={feature}
                open={activeIndex === index}
                onToggle={() => setActiveIndex(index)}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Features;
