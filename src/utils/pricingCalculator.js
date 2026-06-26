import pricingMatrix from "../data/pricingMatrix";

export function calculatePrice(tier, currency, yearly) {

    const base =
        pricingMatrix.tiers[tier].monthly;

    const multiplier =
        pricingMatrix.regionalMultiplier[currency];

    let price = base * multiplier;

    if (yearly) {
        price = price * 12;
        price = price * (1 - pricingMatrix.annualDiscount);
    }

    return {
        symbol: pricingMatrix.symbols[currency],
        value: Math.round(price),
    };
}