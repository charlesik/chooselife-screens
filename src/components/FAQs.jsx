import React, { useState } from "react";
const faqs = [
  {
    question: "How can I be sure my data is protected?",
    answer:
      "Just like your wellness, your security is as important to us and because of this, we have invested in a data security and maintenance system that ensures your information is only accessible to you and us.",
    open: true,
  },
  {
    question: "How can I be sure my data is protected?",
    answer: "",
  },
  {
    question: "How can I be sure my data is protected?",
    answer: "",
  },
  {
    question: "How can I be sure my data is protected?",
    answer: "",
  },
  {
    question: "How can I be sure my data is protected?",
    answer: "",
  },
  {
    question: "How can I be sure my data is protected?",
    answer: "",
  },
];

const FAQ = ({ faq }) => {
  const [isOpen, setIsOpen] = useState(faq.open || false);

  const toggleFAQ = () => {
    setIsOpen(!isOpen);
  };

  return (
    <React.Fragment>
      <dt
        aria-expanded={isOpen ? "true" : "false"}
        onClick={toggleFAQ}
        style={{ cursor: "pointer" }}
        className="border border-[#F379201A] rounded-lg w-[1020px] m-auto p-[50px] shadow-lg mb-10 h-[196px]"
      >
        <div className="flex justify-between mb-7 text-[24px] font-[600]">
          {faq.question}
          <img
            src={`/${isOpen ? "arrow-down" : "arrow-up"}.png`}
            alt={isOpen ? "Collapse" : "Expand"}
            width="20"
            height="20"
          />
        </div>
        <dd className={`${!isOpen ? "hidden" : undefined} text-[16px] text-[#9D9D9E] font-[400] leading-[24px] `}>{faq.answer}</dd>
      </dt>
      
    </React.Fragment>
  );
};

export const FAQs = ({color,star}) => {
  return (
    <div className="pt-10">
      <div className="w-[90%] m-auto">
        <div className="w-[449px] m-auto text-center">
          <div className="w-[206px] rounded-3xl bg-white h-[40px] text-[12px] p-3 flex  shadow-lg m-auto ">
            <div className="pt-1 mx-1">
              {" "}
              <img src={star} alt="" />
            </div>
            <p>
              Frequently asked <span className={`text-[${color}]`}>questions</span>
            </p>
          </div>
          <div className="text-[48px] leading-[50.4px] mt-5">
            <p>
              Have <span className={`text-[${color}]`}>more questions?</span>
            </p>
            <p>for us?</p>
          </div>
        </div>
        <dl className="mt-[100px]">
          {faqs.map((faq, index) => (
            <FAQ faq={faq} key={index} />
          ))}
        </dl>
      </div>
    </div>
  );
};
