import { useState } from 'react';
import { ChevronDown, ChevronUp, Quote } from 'lucide-react';

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What is the main objective of your website?",
      answer: "Our main objective is to promote Gandhian philosophy through digital articles, educational resources, interactive quizzes, and organized events."
    },
    {
      question: "Are the learning resources free to access?",
      answer: "Yes, 100% of our educational content, including articles, historical archives, and learning modules, is available for free to the public."
    },
    {
      question: "How can I participate in upcoming events?",
      answer: "You can register for upcoming seminars and virtual workshops through the 'Events' section on our homepage."
    },
    {
      question: "What are your future plans for the platform?",
      answer: "We plan to introduce a database for articles, user login, an admin dashboard, multilingual support, and an AI-powered assistant for Gandhian knowledge."
    }
  ];

  const testimonials = [
    {
      text: "This platform has made researching Gandhian philosophy incredibly easy and engaging. The digital archives are a goldmine for students.",
      author: "Abhishek Tiwari",
      role: "computer science student"
    },
    {
      text: "A beautiful blend of modern technology and timeless values. The interactive timeline and quiz make learning about Gandhi so much fun.",
      author: "Aditya Mishra",
      role: "computer science student"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* FAQ Section */}
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-950 mb-8">Frequently Asked Questions</h2>
            
            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div key={idx} className="border border-brand-200 rounded-lg overflow-hidden">
                  <button 
                    onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                    className="w-full px-6 py-4 flex justify-between items-center bg-brand-50 hover:bg-brand-100 transition-colors text-left"
                  >
                    <span className="font-bold text-brand-900">{faq.question}</span>
                    {openIndex === idx ? <ChevronUp className="text-brand-600 flex-shrink-0" /> : <ChevronDown className="text-brand-600 flex-shrink-0" />}
                  </button>
                  {openIndex === idx && (
                    <div className="px-6 py-4 bg-white text-brand-700">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Testimonials */}
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-brand-950 mb-8">What People Say</h2>
            
            <div className="space-y-6">
              {testimonials.map((testimonial, idx) => (
                <div key={idx} className="bg-brand-50 p-8 rounded-2xl relative">
                  <Quote className="absolute top-6 right-6 text-brand-200" size={48} />
                  <p className="text-brand-800 text-lg italic mb-6 relative z-10">"{testimonial.text}"</p>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-brand-200 rounded-full flex items-center justify-center font-bold text-brand-700 text-xl">
                      {testimonial.author.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-900">{testimonial.author}</h4>
                      <p className="text-sm text-brand-600">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};