"use client";
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useView } from "@/contexts/ViewContext";
import Title from "../ui/Title";

export default function Experience() {
  const { setSectionInView } = useView();

  const { ref, inView } = useInView({
    threshold: 0.4,
    rootMargin: "-100px 0px",
  });

  React.useEffect(() => {
    if (inView) setSectionInView("education");
  }, [inView, setSectionInView]);

  const educationData = [
    {
      institution: "Institute of Technology Nirma University",
      degree: "Bachelor of Technology in Computer Science and Engineering",
      duration: "2023 - Present",
      location: "Ahmedabad, India",
      cgpa: "8.31",
    },
    {
      institution: "Government Polytechnic (GTU)",
      degree: "Informational Technology Engineering (Diploma)",
      duration: "2020 - 2023",
      location: "Ahmedabad, India",
      cgpa: "9.34",
    },
  ];

  return (
    <section
      ref={ref}
      className="flex flex-col gap-6 md:gap-10 pt-[110px]"
      id="education"
    >
      <Title>Education</Title>

      <div className="space-y-12">
        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="bg-white/5 backdrop-blur-sm rounded-xl p-8 hover:bg-white/10 transition-all duration-300 border border-white/10"
          >
            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-6">
              <div className="flex-1">
                <div>
                  <h3 className="text-2xl font-semibold text-white/90 mb-3">
                    {edu.institution}
                  </h3>
                  <p className="text-xl text-white/70 mb-3 font-medium">
                    {edu.degree}
                  </p>
                  <p className="text-white/50 mb-4 flex items-center gap-2">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    {edu.location}
                  </p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="bg-white/5 px-4 py-2 rounded-lg">
                  <p className="text-white/60 text-sm">Duration</p>
                  <p className="text-white/90 font-medium">{edu.duration}</p>
                </div>
                <div className="bg-gradient-to-br from-[#92e1e6]/10 via-[#68aad9]/10 to-[#3C84C7]/10 px-4 py-2 rounded-lg">
                  <p className="text-white/60 text-sm">CGPA</p>
                  <p className="text-white/90 font-medium">{edu.cgpa}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
} 