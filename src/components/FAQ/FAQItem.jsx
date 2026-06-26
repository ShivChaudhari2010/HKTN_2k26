import ChevronDown from "../../assets/svg/chevron-down.svg";
import ChevronUp from "../../assets/svg/chevron-up.svg";

function FAQItem({
  question,

  answer,

  isOpen,

  onClick,
}) {
  return (
    <article className="faq-item">
      <button className="faq-question" onClick={onClick} aria-expanded={isOpen}>
        <span>{question}</span>

        <img
          src={isOpen ? ChevronUp : ChevronDown}
          alt=""
          className="faq-icon"
        />
      </button>

      <div className={`faq-answer ${isOpen ? "open" : ""}`}>
        <p>{answer}</p>
      </div>
    </article>
  );
}

export default FAQItem;
