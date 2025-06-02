import React, { useEffect } from "react";
import Link from "next/link";
import { Syne } from "next/font/google";
import { useView } from "@/contexts/ViewContext";
import { useInView } from "react-intersection-observer";
import AnimatedBody from "../ui/AnimatedBody";
import AnimatedTitle from "../ui/AnimatedTitle";
import { motion } from 'framer-motion';
import { FaPython, FaAws, FaCloud, FaTools, FaRobot, FaDatabase, FaCode } from 'react-icons/fa';
import { SiTensorflow, SiPytorch, SiScikitlearn, SiFastapi, SiReact, SiFlutter, SiJavascript, SiHtml5, SiCss3, SiTailwindcss, SiGit, SiGithub, SiPostman, SiSelenium, SiTableau } from 'react-icons/si';

const syne = Syne({ subsets: ["latin"] });

const skillCategories = [
  {
    title: 'Programming Languages',
    icon: <FaCode className="text-xl text-blue-400" />,
    skills: ['Python', 'C++', 'Dart', 'JavaScript'],
  },
  {
    title: 'Web & App Development',
    icon: <SiReact className="text-xl text-cyan-400" />,
    skills: ['React.js', 'Flutter', 'HTML', 'CSS', 'Tailwind', 'REST API'],
  },
  {
    title: 'Frameworks & Libraries',
    icon: <SiTensorflow className="text-xl text-yellow-400" />,
    skills: ['FastAPI', 'Flask', 'Scikit-learn', 'Pandas', 'NumPy', 'Seaborn', 'TensorFlow', 'PyTorch'],
  },
  {
    title: 'Machine Learning & AI',
    icon: <FaRobot className="text-xl text-purple-400" />,
    skills: ['Supervised Learning', 'Feature Engineering', 'GridSearchCV', 'Aspect-Based Sentiment Analysis', 'Hugging Face Transformers', 'Sentence-BERT', 'spaCy', 'LangChain', 'Pinecone', 'RAG'],
  },
  {
    title: 'Deployment & Cloud',
    icon: <FaCloud className="text-xl text-indigo-400" />,
    skills: ['AWS EC2', 'Nginx', 'Redis', 'Git', 'GitHub', 'Postman API'],
  },
  {
    title: 'Tools & Others',
    icon: <FaTools className="text-xl text-pink-400" />,
    skills: ['WinSCP', 'Selenium', 'Tableau'],
  },
];

export default function About() {
  const { setSectionInView } = useView();

  const { ref, inView } = useInView({
    threshold: 0.2,
    rootMargin: "-100px 0px",
  });

  useEffect(() => {
    if (inView) setSectionInView("about");
  }, [inView, setSectionInView]);

  return (
    <section ref={ref} className="pt-24 md:pt-[150px]" id="about">
      <AnimatedTitle
        wordSpace={"mr-[14px]"}
        charSpace={"mr-[0.001em]"}
        className={`${syne.className} antialiased text-4xl md:text-5xl xl:text-6xl font-bold opacity-80`}
      >
        About Me
      </AnimatedTitle>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr] gap-8 mt-6">
        {/* About Us Section */}
        <div className="grid grid-cols-1 antialiased gap-6 text-white/80 text-xl md:text-2xl mb-8">
          <AnimatedBody className="leading-[34px] md:leading-[39px]">
            I&apos;m Vedant Pancholi — a passionate Computer Science student, Machine Learning engineer, and builder of intelligent systems that solve real-world problems. My journey blends deep curiosity with real-world impact, from building AI-powered solutions to deploying them at scale.
          </AnimatedBody>
          <AnimatedBody className="leading-[34px] md:leading-[39px]">
            With expertise in Machine Learning, Deep Learning, NLP, and MLOps, I&apos;ve developed systems like RevSense, a full-stack sentiment analytics platform that leverages LLMs, BERT, Redis, and real-time automation to turn customer feedback into business intelligence. I&apos;ve also developed AgriExpert, a multilingual AI chatbot using RAG for farmers, and implemented a Lightweight U-Net model for brain tumor segmentation in healthcare research.
          </AnimatedBody>
          <AnimatedBody className="inline leading-[34px] md:leading-[39px]">
            My toolkit includes Python, FastAPI, Docker, AWS, Redis, spaCy, Sentence Transformers, XGBoost, and more. Whether it&apos;s scraping web data with Selenium, deploying ML models on AWS EC2, or designing interactive dashboards, I&apos;m driven by the thrill of solving problems and shipping solutions that work in the wild. I&apos;ve learned through hackathons, research, and hands-on deployments that the future belongs to those who build — Here&apos;s{' '}
            <Link
              className="underline"
              href={
                "https://drive.google.com/file/d/1Aj6nbisZgdq2ulx7XPgHY5lnubgWyHZ7/view?usp=sharing"
              }
            >
              MY RéSUMè
            </Link>
            .
          </AnimatedBody>
        </div>

        
        {/* Skills Section - Professional ML Engineer Card */}
        <div id="skills">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl p-10 max-w-5xl mx-auto mt-10 border border-white/20"
          >
            <AnimatedTitle
              wordSpace={"mr-[14px]"}
              charSpace={"mr-[0.001em]"}
              className={`${syne.className} antialiased text-4xl md:text-5xl xl:text-6xl font-bold opacity-80 mb-8`}
            >
              Skills
            </AnimatedTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {skillCategories.map((cat, idx) => (
                <motion.div
                  key={cat.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * idx }}
                  viewport={{ once: true }}
                  className="mb-2"
                >
                  <div className="flex items-center gap-2 mb-2">
                    {cat.icon}
                    <span className="font-semibold text-lg text-white">{cat.title}</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map(skill => (
                      <span
                        key={skill}
                        className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white rounded-full px-3 py-1 text-xs font-medium shadow hover:scale-105 transition-transform"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
