"use client";

import { useState } from "react";
import { CheckCircle, Circle } from "lucide-react";

type RoadmapItem = {
  title: string;
  description: string;
  date: string;
  completed: boolean;
};

export function Roadmap() {
  const [roadmapItems] = useState<RoadmapItem[]>([
    {
      title: "Project Launch",
      description:
        "Initial token will be launched on jupiter and other exchanges.",
      date: "Q2 2025",
      completed: false,
    },
    {
      title: "Community Building",
      description:
        "Growing our community through social media and partnerships.",
      date: "Q3 2025",
      completed: false,
    },
    {
      title: "Platform Development",
      description: "Building our core platform and services.",
      date: "Q4 2025",
      completed: false,
    },
    {
      title: "Ecosystem Expansion",
      description: "Expanding to additional chains and services.",
      date: "Q1 2026",
      completed: false,
    },
    {
      title: "Global Adoption",
      description: "Focusing on mainstream adoption and use cases.",
      date: "Q2 2026",
      completed: false,
    },
  ]);

  return (
    <div className="py-8">
      <div className="container mx-auto">
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 h-full w-0.5 bg-gradient-to-b from-[#22D1F8] to-[#FF4EA3] transform -translate-x-1/2"></div>

          {roadmapItems.map((item, index) => (
            <div
              key={index}
              className={`relative flex flex-col md:flex-row md:items-center mb-12 ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 z-10">
                {item.completed ? (
                  <CheckCircle className="w-8 h-8 text-[#22D1F8]" />
                ) : (
                  <Circle className="w-8 h-8 text-[#FF4EA3]" />
                )}
              </div>

              {/* Content */}
              <div
                className={`ml-12 md:ml-0 md:w-5/12 ${
                  index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                }`}
              >
                <div
                  className="p-6 bg-[#181F35] dark:bg-[#0D1425] rounded-lg border border-[#22D1F8]/20 hover:border-[#22D1F8] transition-all hover:-translate-y-1 duration-300"
                  data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}
                  data-aos-delay={index * 100}
                >
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-xl font-bold text-white">
                      {item.title}
                    </h3>
                    <span className="text-sm font-medium px-3 py-1 rounded-full bg-[#22D1F8]/10 text-[#22D1F8]">
                      {item.date}
                    </span>
                  </div>
                  <p className="text-[#abc4ff] dark:text-[#d1e0ff]">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
