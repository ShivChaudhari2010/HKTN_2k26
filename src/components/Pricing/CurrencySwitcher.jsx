import { useEffect, useRef, useState } from "react";

import ChevronDown from "../../assets/svg/chevron-down.svg";

const currencies = [
  {
    code: "INR",
    symbol: "₹",
    name: "Indian Rupee",
  },
  {
    code: "USD",
    symbol: "$",
    name: "US Dollar",
  },
  {
    code: "EUR",
    symbol: "€",
    name: "Euro",
  },
];

function CurrencySwitcher({ currency, setCurrency }) {
  const [open, setOpen] = useState(false);

  const wrapperRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const activeCurrency = currencies.find((item) => item.code === currency);

  return (
    <div className="currency-switcher" ref={wrapperRef}>
      <button
        type="button"
        className="currency-btn"
        onClick={() => setOpen(!open)}
      >
        <span>
          {activeCurrency.symbol} {activeCurrency.code}
        </span>

        <img
          src={ChevronDown}
          alt="Open Currency Menu"
          className={`dropdown-icon ${open ? "rotate" : ""}`}
        />
      </button>

      {open && (
        <div className="currency-menu">
          {currencies.map((item) => (
            <button
              key={item.code}
              className={`currency-option ${
                currency === item.code ? "active" : ""
              }`}
              onClick={() => {
                setCurrency(item.code);

                setOpen(false);
              }}
            >
              <span>
                {item.symbol} {item.code}
              </span>

              <small>{item.name}</small>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

export default CurrencySwitcher;
