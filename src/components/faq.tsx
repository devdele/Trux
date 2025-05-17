import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

type FAQItem = {
  question: string;
  answer: string;
};

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [faqItems] = useState<FAQItem[]>([
    {
      question: "What is TruxPoint?",
      answer:
        "TruxPoint is a token that exists purely to entertain. We're not promising to change the world or take you to the moon - we're just having fun building websites and creating a community around our token.",
    },
    {
      question: "How can I buy $TXPT?",
      answer:
        "You can buy $TXPT on Raydium, MEXC, or Meteora. Just connect your wallet, swap some SOL for $TXPT, and you're good to go!",
    },
    {
      question: "Is this a serious project?",
      answer:
        "We're serious about having fun! While we don't take ourselves too seriously, we do care about creating quality content and building a community. Just don't expect us to promise unrealistic returns or revolutionary technology.",
    },
    {
      question: "What's the tokenomics of $TXPT?",
      answer:
        "Our tokenomics are simple: 1 billion tokens, distributed in a way that makes sense to us. We're not trying to be complicated - we're just trying to be fair and transparent.",
    },
    {
      question: "How can I contact the team?",
      answer:
        "You can reach us through our Telegram channel. We're pretty active there and happy to chat about anything related to TruxPoint.",
    },
  ]);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4 max-w-3xl mx-auto">
      {faqItems.map((item, index) => (
        <div
          key={index}
          className="border border-[#22D1F8]/20 rounded-lg overflow-hidden transition-all duration-300"
          data-aos="fade-up"
          data-aos-delay={index * 100}
        >
          <button
            className="flex justify-between items-center w-full p-4 text-left bg-[#181F35] dark:bg-[#0D1425] hover:bg-[#22D1F8]/10 transition-colors"
            onClick={() => toggleFAQ(index)}
            aria-expanded={openIndex === index}
          >
            <span className="text-lg font-medium">{item.question}</span>
            {openIndex === index ? (
              <ChevronUp className="w-5 h-5 text-[#22D1F8]" />
            ) : (
              <ChevronDown className="w-5 h-5 text-[#22D1F8]" />
            )}
          </button>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              openIndex === index ? "max-h-96" : "max-h-0"
            }`}
          >
            <div className="p-4 bg-[#181F35]/50 dark:bg-[#0D1425]/50 text-[#abc4ff] dark:text-[#d1e0ff]">
              {item.answer}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
