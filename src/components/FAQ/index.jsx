import "./FAQ.css";
import { useState } from "react";

import FAQItem from "./FAQItem";

const faqData = [
  {
    id: 1,
    question: "How does the AI automation platform work?",
    answer:
      "Our platform uses AI-powered workflows to automate repetitive business processes, helping teams save time and improve productivity.",
  },

  {
    id: 2,
    question: "Can I change my pricing plan later?",
    answer:
      "Yes. You can upgrade, downgrade, or switch plans anytime without losing your existing projects or workflow data.",
  },

  {
    id: 3,
    question: "Is my business data secure?",
    answer:
      "Absolutely. We use enterprise-grade encryption, secure cloud infrastructure, and strict access controls to protect your data.",
  },

  {
    id: 4,
    question: "Does the platform support API integrations?",
    answer:
      "Yes. You can integrate with hundreds of third-party services using our REST API and automation connectors.",
  },

  {
    id: 5,
    question: "Do you offer enterprise support?",
    answer:
      "Enterprise customers receive dedicated onboarding, priority support, SLA guarantees, and custom deployment options.",
  },
];

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(0);

  function toggle(index) {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  }

  return (
    <section id="faq" className="faq-section">
      <div className="faq-container">
        <div className="faq-header">
          <span className="faq-badge">FAQ</span>

          <h2>Frequently Asked Questions</h2>

          <p>
            Everything you need to know before getting started with our AI
            platform.
          </p>
        </div>

        <div className="faq-list">
          {faqData.map((item, index) => (
            <FAQItem
              key={item.id}
              question={item.question}
              answer={item.answer}
              isOpen={activeIndex === index}
              onClick={() => toggle(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
