import React, { useEffect } from "react";
import { Syne } from "next/font/google";
import { useView } from "@/contexts/ViewContext";
import { useInView } from "react-intersection-observer";
import AnimatedTitle from "../ui/AnimatedTitle";
import { motion } from 'framer-motion';
import { FaPython, FaAws, FaCloud, FaTools, FaRobot, FaDatabase, FaCode, FaChartBar, FaLayerGroup, FaMobileAlt, FaLaptopCode } from 'react-icons/fa';
import { SiTensorflow, SiPytorch, SiScikitlearn, SiFastapi, SiReact, SiFlutter, SiJavascript, SiHtml5, SiCss3, SiTailwindcss, SiGit, SiGithub, SiPostman, SiSelenium, SiTableau, SiMysql, SiMongodb, SiRedis, SiVercel, SiAmazonaws, SiServerless, SiWebcomponentsdotorg } from 'react-icons/si';

const syne = Syne({ subsets: ["latin"] });

const skillCategories = [
  {
    title: 'Programming Languages',
    icon: <FaCode className="text-xl text-blue-400" />,
    skills: ['Python', 'C++', 'Dart', 'JavaScript', 'SQL'],
  },
  {
    title: 'Web & App Development',
    icon: <FaLaptopCode className="text-xl text-cyan-400" />,
    skills: ['React.js', 'Flutter', 'HTML', 'CSS', 'Tailwind', 'REST API'],
  },
  {
    title: 'Frameworks & Libraries',
    icon: <FaLayerGroup className="text-xl text-yellow-400" />,
    skills: ['FastAPI', 'Flask', 'Scikit-learn', 'Pandas', 'NumPy', 'Seaborn', 'TensorFlow', 'PyTorch'],
  },
  {
    title: 'Machine Learning & AI',
    icon: <FaRobot className="text-xl text-purple-400" />,
    skills: ['Supervised Learning', 'Feature Engineering', 'NLP', 'GridSearchCV', 
      'Aspect-Based Sentiment Analysis', 'Hugging Face Transformers', 'Sentence-BERT', 
      'spaCy', 'LangChain', 'Pinecone', 'RAG', 'Model Tuning & Optimization',
      'Embedding-Based Clustering & Classification', 'GeminiLLM'],
  },
  {
    title: 'Data Analytics & Visualization',
    icon: <FaChartBar className="text-xl text-orange-400" />,
    skills: ['Tableau', 'Data Visualization', 'Data Analysis', 'Business Intelligence'],
  },
  {
    title: 'Databases & Caching',
    icon: <FaDatabase className="text-xl text-green-400" />,
    skills: ['MySQL', 'MongoDB', 'Redis'],
  },
  {
    title: 'Version Control',
    icon: <SiGit className="text-xl text-red-400" />,
    skills: ['Git', 'GitHub', 'Collaborative Development'],
  },
  {
    title: 'Cloud & Deployment',
    icon: <SiServerless className="text-xl text-yellow-500" />,
    skills: ['AWS EC2', 'AWS S3', 'AWS SageMaker', 'Vercel', 'Nginx', 'Docker'],
  },
  {
    title: 'Tools & Others',
    icon: <FaTools className="text-xl text-pink-400" />,
    skills: ['WinSCP', 'Selenium', 'Tableau'],
  },
];

export default function Skills() {
  const { setSectionInView } = useView();

  const { ref, inView } = useInView({
    threshold: 0.2,
    rootMargin: "-100px 0px",
  });

  useEffect(() => {
    if (inView) setSectionInView("skills");
  }, [inView, setSectionInView]);

  return (
    <section ref={ref} className="pt-24 md:pt-[150px]" id="skills">
      <AnimatedTitle
        wordSpace={"mr-[14px]"}
        charSpace={"mr-[0.001em]"}
        className={`${syne.className} antialiased text-4xl md:text-5xl xl:text-6xl font-bold opacity-80 mb-8`}
      >
        Skills
      </AnimatedTitle>
      
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl p-10 max-w-5xl mx-auto border border-white/20"
      >
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
    </section>
  );
} 