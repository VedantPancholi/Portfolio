"use client";
import React from "react";
import { useView } from "@/contexts/ViewContext";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { Syne } from "next/font/google";

const syne = Syne({ subsets: ["latin"] });

export default function Contact() {
  const { setSectionInView } = useView();

  const { ref, inView } = useInView({
    threshold: 0.2,
    rootMargin: "-100px 0px",
  });

  React.useEffect(() => {
    if (inView) setSectionInView("contact");
  }, [inView, setSectionInView]);

  const contactInfo = [
    {
      title: "Email",
      value: "pancholivedant30@gmail.com",
      icon: "mdi:email-outline",
      link: "mailto:pancholivedant30@gmail.com",
      color: "text-blue-400",
    },
    {
      title: "GitHub",
      value: "github.com/VedantPancholi",
      icon: "mdi:github",
      link: "https://github.com/VedantPancholi",
      color: "text-purple-400",
    },
    {
      title: "LinkedIn",
      value: "linkedin.com/in/VedantPancholi",
      icon: "mdi:linkedin",
      link: "https://in.linkedin.com/in/VedantPancholi",
      color: "text-cyan-400",
    },
    {
      title: "Location",
      value: "Ahmedabad, India",
      icon: "mdi:map-marker-outline",
      color: "text-green-400",
    },
  ];

  return (
      <section
        ref={ref}
      className="min-h-screen py-20 flex flex-col items-center px-4 sm:px-6 lg:px-8"
        id="contact"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-5xl"
      >
        <h2 className={`${syne.className} text-4xl md:text-5xl font-bold mb-8 text-center`}>
          <span className="bg-gradient-to-br bg-clip-text text-transparent from-[#92e1e6] via-[#68aad9] to-[#3C84C7]">
            Contact Information
                </span>
        </h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-white/70 text-lg md:text-xl text-center mb-12 max-w-3xl mx-auto"
        >
          Feel free to reach out to me for any opportunities or collaborations. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {contactInfo.map((info, index) => (
            <motion.div
              key={info.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 hover:bg-white/10 transition-all duration-300 border border-white/10"
            >
              <div className="flex items-start gap-4">
                <div className={`${info.color} text-2xl`}>
                  <Icon icon={info.icon} />
              </div>
                <div>
                  <h3 className="text-white/90 font-semibold mb-1">{info.title}</h3>
                  {info.link ? (
                    <Link
                      href={info.link}
                      target="_blank"
                      className="text-white/70 hover:text-white transition-colors"
                    >
                      {info.value}
                    </Link>
                  ) : (
                    <p className="text-white/70">{info.value}</p>
                    )}
                  </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#92e1e6]/10 via-[#68aad9]/10 to-[#3C84C7]/10 px-6 py-3 rounded-full">
            <Icon icon="mdi:check-circle" className="text-green-400 text-xl" />
            <span className="text-white/80">Available for Remote work</span>
          </div>
        </motion.div>
      </motion.div>
      </section>
  );
}
