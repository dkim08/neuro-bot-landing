import { useState } from "react";
import "./style.css";


const faqData = [
  {
    question: "......",
    answer: "......",
  },
  {
    question: "......",
    answer: "......",
  },
  {
    question: "......",
    answer: "......",
  },
  {
    question: "......",
    answer: "......",
  }
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null); 

  const toggle = (index) => {
    setOpenIndex(index === openIndex ? null : index); 
  };

  return (
    <section className="faq-section">
      <h2>Ответы на ваши вопросы</h2>
      <h3>FAQ</h3>

      <div className="faq-list">
        {faqData.map((item, index) => (
          <div key={index} className="faq-item">
            <button className="faq-question" onClick={() => toggle(index)}>
              {item.question}
              <span className="faq-arrow">{openIndex === index ? "▲" : ""}</span>
            </button>

            {openIndex === index && <p className="faq-answer">{item.answer}</p>}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FaqSection;
