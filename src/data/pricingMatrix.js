const pricingMatrix = {
  regionalMultiplier: {
    INR: 1,
    USD: 0.014,
    EUR: 0.013,
  },

  symbols: {
    INR: "₹",
    USD: "$",
    EUR: "€",
  },

  annualDiscount: 0.20,

  tiers: {
    starter: {
      name: "Starter",
      monthly: 999,

      features: [
        "AI Workflow Automation",
        "Basic Analytics",
        "5 Projects",
        "Email Support",
      ],
    },

    professional: {
      name: "Professional",
      monthly: 2499,

      features: [
        "Unlimited Projects",
        "Advanced Analytics",
        "Priority Support",
        "API Access",
      ],
    },

    enterprise: {
      name: "Enterprise",
      monthly: 5999,

      features: [
        "Unlimited Everything",
        "Dedicated Manager",
        "SSO Authentication",
        "24/7 Premium Support",
      ],
    },
  },
};

export default pricingMatrix;