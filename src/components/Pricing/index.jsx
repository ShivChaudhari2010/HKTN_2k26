import { useState, useMemo } from "react";
import "./Pricing.css";

import pricingMatrix from "../../data/pricingMatrix";

import CurrencySwitcher from "./CurrencySwitcher";
import BillingToggle from "./BillingToggle";
import PricingCard from "./PricingCard";

function Pricing() {
  // Local state only (No Context / Redux)
  const [currency, setCurrency] = useState("INR");
  const [billing, setBilling] = useState("monthly");

  // Billing Boolean
  const yearly = billing === "annual";

  // Convert object → array only once
  const tiers = useMemo(() => {
    return Object.entries(pricingMatrix.tiers);
  }, []);

  return (
    <section id="pricing" className="pricing-section">
      <div className="pricing-container">
        {/* Heading */}

        <div className="pricing-header">
          <span className="pricing-badge">Pricing</span>

          <h2>
            Simple Pricing
            <br />
            Built For Every Team
          </h2>

          <p>
            Flexible plans with dynamic currency conversion, annual discounts
            and enterprise scalability.
          </p>
        </div>

        {/* Controls */}

        <div className="pricing-controls">
          <BillingToggle billing={billing} setBilling={setBilling} />

          <CurrencySwitcher currency={currency} setCurrency={setCurrency} />
        </div>

        {/* Pricing Cards */}

        <div className="pricing-grid">
          {tiers.map(([key, tier]) => (
            <PricingCard
              key={key}
              tierKey={key}
              tier={tier}
              currency={currency}
              yearly={yearly}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;
