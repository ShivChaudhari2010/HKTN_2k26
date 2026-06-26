function BillingToggle({ billing, setBilling }) {
  const isAnnual = billing === "annual";

  return (
    <div className="billing-toggle" role="tablist" aria-label="Billing Cycle">
      {/* Sliding Background */}

      <span className={`toggle-slider ${isAnnual ? "annual" : ""}`} />

      {/* Monthly */}

      <button
        type="button"
        className={`toggle-btn ${!isAnnual ? "active" : ""}`}
        onClick={() => setBilling("monthly")}
        aria-selected={!isAnnual}
      >
        Monthly
      </button>

      {/* Annual */}

      <button
        type="button"
        className={`toggle-btn ${isAnnual ? "active" : ""}`}
        onClick={() => setBilling("annual")}
        aria-selected={isAnnual}
      >
        Annual
        <span className="save-badge">Save 20%</span>
      </button>
    </div>
  );
}

export default BillingToggle;
