import React, { useEffect } from "react";
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
      title: "AgriExpert",
      gitLink: "https://github.com/VedantPancholi/AgriExpert",
      // liveLink: "",
      about:
        " Developed a multilingual chatbot to deliver expert agricultural knowledge to farmers and plant enthusiasts. Utilized the Retrieval-Augmented Generation (RAG) model via the LangChain framework to retrieve and generate precise responses. Engineered the system without prebuilt LLM models, ensuring contextually relevant information retrieval. Applied the LangChain framework to optimize response accuracy and relevance for agricultural queries.",
      stack: ["Python", "React", "LangChain", "Pinecone", "sentence-transformers", "PyTorch", "RAG"],
      img: "/AGRIEXPERT.png",
    },
    {
      title: "Brain-Tumor-Segmentation",
      gitLink: "https://github.com/VedantPancholi/Brain-Tumor-Segmentation",
      // liveLink: "",
      about:
        "Developed a lightweight U-Net model for MRI-based brain tumor segmentation, achieving 89% IoU and 99% pixel accuracy, optimized for low-resource deployment. Strengthened expertise in TensorFlow, Keras, image segmentation, and model optimization for real-world medical AI applications.",
      stack: ["Python ", "TensorFlow ", " Jupyter Notebook ", "Matplotlib ", "OpenCV"],
      img: "/BRAIN_T_S.png",
    },
    {
      title: "Resume Builder",
      gitLink: "https://github.com/VedantPancholi/ResumeBuilder",
      // liveLink: "",
      about:
        "Developed a dynamic resume builder website using React, Tailwind CSS, and Firebase. The platform offers Google and GitHub authentication, allowing users to add or remove resume templates, create new ones, and utilize default templates. Resumes can be exported in multiple formats including PDF, IMG, and SVG.",
      stack: ["React.js", "Firebase", "tailwindcss"],
      img: "/ResumeBuilderPro.jpg",
    },
    {
      title: "Sales Insights Dashboard for Hardware Supplier Company",
      gitLink: "https://github.com/VedantPancholi/Tableau_Dashboard",
      // liveLink: "",
      about:
        "This project demonstrates a full-fledged Tableau solution for analyzing and predicting sales insights for a hardware supplier company. The project replicates a real-world scenario to provide hands-on experience in Tableau, MySQL, and data analytics.",
      stack: ["Data Visualization · Tableau", "MySQL"],
      img: "/SID.png",
    },
  ];

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
      {works.map((work, index) => (
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

      <Timeline />
    </section>
  );
}
