import React, { useEffect, useState } from "react";
import FolioCard from "./FolioCard";
import Title from "../ui/Title";
import { useView } from "@/contexts/ViewContext";

// @ts-ignore
import "intersection-observer";
import { useInView } from "react-intersection-observer";
import Timeline from "./Timeline";

export default function Works() {
  const { setSectionInView } = useView();

  const works = [
    {
      title: "RevSense",
      category: "ML",
      gitLink: "https://github.com/VedantPancholi/RevSense",
      // liveLink: "",
      about:
        "Revsense is an end-to-end AI-powered platform that extracts, processes, categorizes, and visualizes customer reviews from multi-source platforms to generate actionable business insights. It combines advanced NLP, real-time automation, and LLM-based reasoning to transform raw user feedback into strategic decision-making tools.",
      stack: ["Python", "FastAPI", "spaCy", "HuggingFace Transformers", "sentence-transformers", "Redis", "Cron(Bash)", "Gemini"],
      img: "/RevSense-2.jpg",
    },
    {
      title: "AgriExpert",
      category: "ML",
      gitLink: "https://github.com/VedantPancholi/AgriExpert",
      // liveLink: "",
      about:
        " Developed a multilingual chatbot to deliver expert agricultural knowledge to farmers and plant enthusiasts. Utilized the Retrieval-Augmented Generation (RAG) model via the LangChain framework to retrieve and generate precise responses. Engineered the system without prebuilt LLM models, ensuring contextually relevant information retrieval. Applied the LangChain framework to optimize response accuracy and relevance for agricultural queries.",
      stack: ["Python", "React", "LangChain", "Pinecone", "sentence-transformers", "PyTorch", "RAG"],
      img: "/AGRIEXPERT.png",
    },
    {
      title: "Brain-Tumor-Segmentation",
      category: "ML",
      gitLink: "https://github.com/VedantPancholi/Brain-Tumor-Segmentation",
      // liveLink: "",
      about:
        "Developed a lightweight U-Net model for MRI-based brain tumor segmentation, achieving 89% IoU and 99% pixel accuracy, optimized for low-resource deployment. Strengthened expertise in TensorFlow, Keras, image segmentation, and model optimization for real-world medical AI applications.",
      stack: ["Python ", "TensorFlow ", " Jupyter Notebook ", "Matplotlib ", "OpenCV"],
      img: "/BRAIN_T_S.png",
    },
    {
      title: "Resume Builder",
      category: "Web",
      gitLink: "https://github.com/VedantPancholi/ResumeBuilder",
      // liveLink: "",
      about:
        "Developed a dynamic resume builder website using React, Tailwind CSS, and Firebase. The platform offers Google and GitHub authentication, allowing users to add or remove resume templates, create new ones, and utilize default templates. Resumes can be exported in multiple formats including PDF, IMG, and SVG.",
      stack: ["React.js", "Firebase", "tailwindcss"],
      img: "/ResumeBuilderPro.jpg",
    },
    {
      title: "Sales Insights Dashboard for Hardware Supplier Company",
      category: "Dashboard",
      gitLink: "https://github.com/VedantPancholi/Tableau_Dashboard",
      // liveLink: "",
      about:
        "This project demonstrates a full-fledged Tableau solution for analyzing and predicting sales insights for a hardware supplier company. The project replicates a real-world scenario to provide hands-on experience in Tableau, MySQL, and data analytics.",
      stack: ["Data Visualization · Tableau", "MySQL"],
      img: "/SID.png",
    },
  ];

  const categories = ["All", "ML", "Web", "Dashboard"];
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(3);
  const filteredWorks = selectedCategory === "All"
    ? works
    : works.filter(work => work.category === selectedCategory);

  // Reset visibleCount when filter changes
  React.useEffect(() => {
    setVisibleCount(3);
  }, [selectedCategory]);

  const { ref, inView } = useInView({
    threshold: 0.1,
    rootMargin: "-100px 0px",
  });

  useEffect(() => {
    if (inView) setSectionInView("work");
  }, [inView, setSectionInView]);

  return (
    <section
      className="flex flex-col gap-6 md:gap-10 pt-[110px]"
      ref={ref}
      id="work"
    >
      <Title>Projects</Title>
      <div className="flex gap-4 mb-8 flex-wrap">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-5 py-2 rounded-xl font-semibold border transition-all duration-200
              border-white/20 backdrop-blur-sm
              ${selectedCategory === cat
                ? 'text-white underline underline-offset-4'
                : 'text-white/25 hover:text-white hover:underline hover:underline-offset-4'}
            `}
          >
            {cat}
          </button>
        ))}
      </div>
      {filteredWorks.slice(0, visibleCount).map((work, index) => (
        <FolioCard
          key={index}
          img={work.img}
          title={work.title}
          gitLink={work.gitLink}
          // liveLink={work.liveLink}
          about={work.about}
          stack={work.stack}
        />
      ))}
      {visibleCount < filteredWorks.length && (
        <div className="flex justify-center mt-6">
          <button
            onClick={() => setVisibleCount(v => v + 3)}
            className="px-6 py-2 rounded-xl font-semibold border border-white/20 backdrop-blur-sm text-white/80 hover:text-white hover:bg-white/10 transition-all duration-200 shadow"
          >
            Show More
          </button>
        </div>
      )}

      <Timeline />
    </section>
  );
}
