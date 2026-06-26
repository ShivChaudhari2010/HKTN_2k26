import React from "react";
import { calculatePrice } from "../../utils/pricingCalculator";

function PricingCard({ tierKey, tier, currency, yearly }) {
  const { symbol, value } = calculatePrice(tierKey, currency, yearly);

  const features = [
    "AI Workflow Automation",
    "Real-time Analytics",
    "Unlimited Projects",
    "24/7 Support",
  ];

  return (
    <article className="pricing-card">
      {/* Plan Name */}

      <div className="pricing-card-header">
        <h3>{tier.name}</h3>

        <p className="pricing-subtitle">Perfect for growing teams</p>
      </div>

      {/* Price */}

      <div className="price-wrapper">
        <span className="currency">{symbol}</span>

        <span className="price">{value}</span>

        <span className="duration">/{yearly ? "year" : "month"}</span>
      </div>

      {/* Annual Badge */}

      {yearly && <div className="discount-badge">Save 20%</div>}

      {/* Divider */}

      <div className="pricing-divider"></div>

      {/* Features */}

      <ul className="pricing-features">
        {tier.features.map((feature) => (
          <li key={feature}>✓ {feature}</li>
        ))}
      </ul>

      {/* CTA */}

      <button className="pricing-btn">Get Started</button>
    </article>
  );
}

export default React.memo(PricingCard);
