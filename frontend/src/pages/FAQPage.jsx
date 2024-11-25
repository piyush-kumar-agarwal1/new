import React from 'react';

const FAQPage = () => {
  const faqData = [
    {
      question: "What is Saras E-Learning?",
      answer: "Saras E-Learning is an online platform dedicated to providing high-quality education to students all over the world.",
    },
    {
      question: "How can I sign up?",
      answer: "You can sign up by clicking on the 'Sign Up' button on the homepage and filling out the registration form.",
    },
    {
      question: "What courses are available?",
      answer: "We offer a wide range of courses in various categories including K-12, Computer Science, and Photography.",
    },
    {
      question: "How can I contact support?",
      answer: "You can contact support by visiting the 'Contact Us' page and filling out the contact form.",
    },
  ];

  return (
    <div className="sm:w-4/5 w-full mx-auto h-full my-4 shadow-lg p-4">
      <h1 className="text-4xl font-extrabold text-gray-800 text-center mb-8">Frequently Asked Questions</h1>
      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <div key={index} className="p-4 border rounded-lg shadow-sm">
            <h2 className="text-2xl font-bold mb-2">{faq.question}</h2>
            <p className="text-gray-700">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQPage;