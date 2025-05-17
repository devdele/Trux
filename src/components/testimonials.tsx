import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

type Testimonial = {
  content: string;
  author: string;
  role: string;
};

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials: Testimonial[] = [
    {
      content:
        "I bought $TXPT as a joke, but now I can't stop checking their website. It's oddly entertaining.",
      author: "Crypto Enthusiast",
      role: "Early Adopter",
    },
    {
      content:
        "Their honesty is refreshing. No moon promises, just good vibes and a fun community.",
      author: "Token Collector",
      role: "Community Member",
    },
    {
      content:
        "The team actually delivers what they promise - which is not much, but at least they're honest about it!",
      author: "Web3 Developer",
      role: "Industry Professional",
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="absolute -top-10 left-10 text-[#22D1F8] opacity-20">
        <Quote className="w-20 h-20" />
      </div>

      <div className="relative z-10 bg-[#181F35] dark:bg-[#0D1425] rounded-lg p-8 border border-[#22D1F8]/20">
        <div className="min-h-[200px] flex flex-col justify-center">
          <p className="text-lg md:text-xl text-[#abc4ff] dark:text-[#d1e0ff] mb-6 italic">
            "{testimonials[currentIndex].content}"
          </p>
          <div>
            <p className="font-bold text-white">
              {testimonials[currentIndex].author}
            </p>
            <p className="text-sm text-[#22D1F8]">
              {testimonials[currentIndex].role}
            </p>
          </div>
        </div>

        <div className="flex justify-between mt-6">
          <button
            onClick={prevTestimonial}
            className="p-2 rounded-full bg-[#22D1F8]/10 hover:bg-[#22D1F8]/20 transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5 text-[#22D1F8]" />
          </button>
          <div className="flex space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? "bg-[#22D1F8]" : "bg-[#22D1F8]/30"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
          <button
            onClick={nextTestimonial}
            className="p-2 rounded-full bg-[#22D1F8]/10 hover:bg-[#22D1F8]/20 transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5 text-[#22D1F8]" />
          </button>
        </div>
      </div>
    </div>
  );
}
