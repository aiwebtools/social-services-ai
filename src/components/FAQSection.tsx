
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "What is Social Safety Net GPT?",
    answer: "Social Safety Net GPT (also known as 'Homie') is an AI assistant designed to help individuals facing homelessness or difficult circumstances by providing real-time information about available resources, personalized guidance, and practical support."
  },
  {
    question: "How does it find resources for me?",
    answer: "Homie uses advanced web search capabilities to scan multiple reliable sources like 211 websites, government portals, and non-profit databases to find the most relevant and up-to-date resources based on your location and specific needs."
  },
  {
    question: "Is my personal information kept private?",
    answer: "Yes, we take privacy seriously. Any information you share is used only to provide better assistance and is handled according to our Privacy Policy. We do not sell or share your personal data with third parties."
  },
  {
    question: "What kind of assistance can I get?",
    answer: "Homie can help with finding shelter options, food resources, healthcare services, employment opportunities, legal assistance, and much more. It provides step-by-step guidance tailored to your specific situation."
  },
  {
    question: "Is this service free to use?",
    answer: "Yes, Social Safety Net GPT is completely free for individuals seeking assistance."
  },
  {
    question: "How accurate is the information provided?",
    answer: "The AI strives to provide the most accurate and current information available by performing real-time web searches and verifying information from multiple sources. However, it's always good practice to confirm details directly with service providers."
  }
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Frequently Asked <span className="text-cyber-blue text-glow">Questions</span>
          </h2>
          <p className="text-gray-300">
            Get answers to common questions about how Social Safety Net GPT works and how it can help you.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="mb-4 glassmorphism rounded-lg transition-all duration-300 hover:shadow-neon-blue"
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-white font-medium">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="h-5 w-5 text-cyber-blue" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-cyber-blue" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-400">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
