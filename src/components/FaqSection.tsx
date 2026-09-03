import { useState } from 'react';

const FAQ_DATA = [
  {
    question: 'What services does D²devs offer ?',
    answer: 'D²devs offers comprehensive software solutions including custom website development, web application development, mobile app development (React Native), AI product development, LLM fine-tuning, workflow automation tools, and AI/ML education and training programs. We serve businesses across Salem, Tamil Nadu, and worldwide.'
  },
  {
    question: 'Why should I choose D²devs as my software company?',
    answer: 'D²devs is a engineering agency with deep expertise in modern web technologies (React, TypeScript, Node.js), AI/ML engineering, and cross-platform mobile development. We deliver production-ready software with clean architecture, measurable outcomes, and dedicated post-launch support for businesses in Salem and across Tamil Nadu.'
  },
  {
    question: 'How much does website development cost ?',
    answer: 'Website development costs vary based on complexity. At D²devs, we offer three pricing tiers: Genesis Prototype (MVP websites in 3-4 weeks), Enterprise System (full-scale digital ecosystems with web, mobile, and automation), and Engineering Retainer (continuous development partnership). Contact us for a tailored quotation based on your project scope.'
  },
  {
    question: 'Does D²devs provide AI product development ?',
    answer: 'Yes, D²devs specializes in AI product development. Our AI engineering services include LLM fine-tuning, AI agent development, MCP server builds, workflow automation with AI, and custom AI-powered SaaS products. We build production-grade AI systems using Python, TensorFlow, PyTorch, and modern LLM frameworks.'
  },
  {
    question: 'What technologies does D²devs use for web development?',
    answer: 'D²devs uses modern, industry-proven technologies for web development including React, Next.js, TypeScript, Node.js, Tailwind CSS, Vite, and PostgreSQL. For mobile apps, we use React Native with Expo. Our AI stack includes Python, TensorFlow, PyTorch, LangChain, and OpenAI APIs. We select the right technology for each project to ensure scalability and performance.'
  },
  {
    question: 'Can D²devs build custom software for my Tamil Nadu-based business?',
    answer: 'Absolutely. D²devs builds custom software solutions for businesses in Tamil Nadu. Whether you need a custom web application, e-commerce platform, SaaS product, mobile app, or workflow automation tool, our engineering team delivers tailored solutions built with clean architecture and scalable technology.'
  },
  {
    question: 'How long does it take to build a website ?',
    answer: 'At D²devs, a standard custom website takes 3-4 weeks from discovery to launch. Complex web applications or SaaS platforms with custom backends typically require 8-12 weeks. We share a detailed timeline during the initial discovery phase and work in agile sprints with regular progress updates.'
  },
  {
    question: 'Does D²devs work with clients outside Salem?',
    answer: 'Yes. While D²devs is headquartered in Salem, Tamil Nadu, we work with clients across India and worldwide. Our workflow is built for remote collaboration with weekly updates, shared project boards, and clear communication. We serve clients in Chennai, Bangalore, Coimbatore, and internationally across the US, UK, and Southeast Asia.'
  },
  {
    question: 'What is the best software company in Salem, Tamil Nadu?',
    answer: 'D²devs is a leading software company in Salem, Tamil Nadu, specializing in modern web development, AI product engineering, and mobile app development. We combine technical depth with business understanding to deliver production-ready software that scales. Our services span website development, AI product development, automation, and education — all from our base in Salem.'
  },
  {
    question: 'How can I contact D²devs in Salem?',
    answer: 'You can contact D²devs in Salem by email at d2developerss@gmail.com, by phone at +91 7448440471, or by visiting our office at 780/4, Shivaji Nagar, R.K. Theater Opp, P.M. Kovil Post, Salem - 636003, Tamil Nadu, India. You can also fill out the contact form on our website for a project inquiry. We typically respond within 2 hours.'
  },
  {
    question: 'What is the difference between web development and web application development?',
    answer: 'Web development typically refers to building informational websites with static content, while web application development involves building interactive, dynamic applications with user accounts, databases, and complex functionality. At D²devs in Salem, we handle both — from marketing websites to full-scale SaaS platforms and enterprise web applications.'
  },
  {
    question: 'Do you provide ongoing maintenance after website launch?',
    answer: 'Yes. All D²devs projects include 1 year of free maintenance covering bug fixes, security updates, and minor enhancements. After that, we offer flexible maintenance plans through our Engineering Retainer tier, which includes dedicated developer support, bi-weekly feature releases, and 24/7 incident monitoring.'
  }
];

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="px-6 md:px-16 py-20 relative z-20">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12 text-center">
          <span className="font-label-technical text-[#004ac6] mb-3 block opacity-80">
            [ 07 // FREQUENTLY ASKED QUESTIONS ]
          </span>
          <h2 className="font-sans font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-[#0b1c30]">
            Frequently Asked Questions
          </h2>
          <p className="font-sans text-base text-[#434655] leading-relaxed mt-4 max-w-2xl mx-auto">
            Everything you need to know about D²devs, our software solutions and how we can help your business.
          </p>
        </div>

        <div className="space-y-3">
          {FAQ_DATA.map((faq, index) => (
            <div
              key={index}
              className="futuristic-pane rounded-2xl overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full px-6 py-5 flex items-center justify-between gap-4 text-left cursor-pointer"
              >
                <span className="font-sans font-semibold text-sm sm:text-base text-[#0b1c30]">
                  {faq.question}
                </span>
                <span className={`material-symbols-outlined text-[#004ac6] transition-transform duration-300 flex-shrink-0 ${openIndex === index ? 'rotate-180' : ''}`}>
                  expand_more
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
              >
                <div className="px-6 pb-5 border-t border-[#c3c6d7]/30">
                  <p className="font-sans text-sm text-[#434655] leading-relaxed pt-4">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
