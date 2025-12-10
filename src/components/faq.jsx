import { useState, useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Do I need prior experience to join the class?",
    answer: "No experience is needed. Our program is designed for beginners and professionals looking to switch to remote work."
  },
  {
    question: "Is the job guaranteed after completing the course?",
    answer: "While we provide expert guidance and job application strategies, securing a job depends on your effort and interviews."
  },
  {
    question: "How long is the training program?",
    answer: "Our main remote job coaching program runs for 4 weeks, with live sessions and recorded materials for flexibility."
  },
  {
    question: "Are there any hidden fees?",
    answer: "No, the price you get covers all materials, coaching, and access to our community."
  },
  {
    question: "Do I get support after the course ends?",
    answer: "Yes! Students have access to our private WhatsApp group and alumni network for ongoing support."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);
  const faqRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    faqRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      faqRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <section className="bg-gradient-to-b from-[#0B1922] via-[#13262F] to-[#0B1922] py-10 sm:py-10 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
          Frequently Asked Questions
        </h2>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              ref={(el) => (faqRefs.current[index] = el)}
              className="border border-neutral-gray rounded-xl overflow-hidden shadow-lg transform transition-transform duration-500"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left px-6 py-4 bg-primary-dark text-white flex justify-between items-center font-semibold hover:bg-primary-accent hover:text-white duration-300"
              >
                <span>{faq.question}</span>
                <ChevronDown
                  size={24}
                  className={`transform transition-transform duration-300 ${openIndex === index ? 'rotate-180 text-primary-accent' : ''}`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 bg-background-soft text-primary-dark text-base md:text-lg">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}