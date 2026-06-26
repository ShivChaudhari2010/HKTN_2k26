import "./Stats.css";

import Trending from "../../assets/svg/arrow-trending-up.svg";
import Chart from "../../assets/svg/chart-pie.svg";
import Cube from "../../assets/svg/cube-16-solid.svg";
import Cog from "../../assets/svg/cog-8-tooth.svg";

import useInView from "../../hooks/useInView";

function Stats() {
  const [ref, visible] = useInView();

  const stats = [
    {
      icon: Trending,
      number: "10K+",
      title: "Active Users",
      description: "Growing businesses trust AIFlow every day.",
    },
    {
      icon: Chart,
      number: "99.9%",
      title: "Platform Uptime",
      description: "Enterprise-grade reliability across all regions.",
    },
    {
      icon: Cube,
      number: "50M+",
      title: "Tasks Automated",
      description: "Millions of workflows completed without manual effort.",
    },
    {
      icon: Cog,
      number: "80%",
      title: "Time Saved",
      description: "Reduce repetitive work and improve productivity.",
    },
  ];

  return (
    <section ref={ref} className="stats-section">
      <div className="container">
        <div className="section-badge">Platform Performance</div>

        <h2 className="stats-title">Numbers That Speak for Themselves</h2>

        <p className="stats-subtitle">
          AIFlow powers thousands of organizations worldwide with
          enterprise-grade performance, security, and intelligent automation.
        </p>

        <div className="stats-grid">
          {stats.map((item, index) => (
            <article
              key={index}
              className={`stat-card ${visible ? "show" : ""}`}
            >
              <div className="stat-icon">
                <img src={item.icon} alt={item.title} />
              </div>

              <h3>{item.number}</h3>

              <h4>{item.title}</h4>

              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Stats;
