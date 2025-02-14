import React, { useEffect } from "react";
import Link from "next/link";
import { Syne } from "next/font/google";
import { useView } from "@/contexts/ViewContext";
import { useInView } from "react-intersection-observer";
import AnimatedBody from "../ui/AnimatedBody";
import AnimatedTitle from "../ui/AnimatedTitle";

const syne = Syne({ subsets: ["latin"] });

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
        "Fill the gaps, stay liquid" —because intelligence is about adaptability.
      </AnimatedTitle>

      <div className="grid grid-cols-1 lg:grid-cols-[8.5fr_3.5fr] gap-8 mt-6">
        <div className="grid grid-cols-1 antialiased gap-6 text-white/80 text-xl md:text-2xl">
          <AnimatedBody className="leading-[34px] md:leading-[39px]">
            I am an enthusiastic Computer Science student with expertise in Machine Learning, Deep Learning, and Data Science 🤖. My work includes developing innovative solutions like AgriExpert, an AI-powered multilingual chatbot 🌱 designed for farmers, and implementing a Lightweight U-Net for brain tumor segmentation, achieving high accuracy 🧠.
          </AnimatedBody>
          <AnimatedBody className="leading-[34px] md:leading-[39px]">
            I bring hands-on experience in Flutter, C++, Tableau, and Linux, and have participated in multiple hackathons 🏆, where I refined my problem-solving and teamwork abilities. My professional journey spans impactful internships and freelance projects, where I contributed practical, industry-ready solutions.
            Passionate about solving real-world problems, I am eager to leverage my skills to drive innovation and contribute to the tech industry&apos;s growth 🚀.
          </AnimatedBody>
          <AnimatedBody className="inline leading-[34px] md:leading-[39px]">
            Each challenge is unique so I ensure that I learn and grow through
            each one ensuring that I not only put in my best but also deliver
            solutions that businesses are proud to call their own. Wanna learn
            more? Here&apos;s <br className="hidden md:block" />
            <Link
              className="underline"
              href={
                "https://drive.google.com/file/d/1m4KJcD_Jy8jEV6KJe97G2OMCCd7KW1Zp/view?usp=sharing"
              }
            >
              MY RéSUMè
            </Link>
            .
          </AnimatedBody>
        </div>

        <div className="grid grid-cols-1 gap-4">
          <div>
            <AnimatedTitle
              wordSpace={"mr-[0.5ch]"}
              charSpace={"mr-[0.001em]"}
              className="font-bold antialiased text-xl md:text-2xl mb-2"
            >
              Data Science & Analytics
            </AnimatedTitle>
            <AnimatedBody className="text-white/60 text-base md:text-xl leading-8">
              Python, SQL, Pandas, NumPy, Seaborn, Matplotlib, Tableau, MySQL.
            </AnimatedBody>
          </div>
          <div>
            <AnimatedTitle
              wordSpace={"mr-[0.5ch]"}
              charSpace={"mr-[0.001em]"}
              className="font-bold antialiased text-xl md:text-2xl mb-2"
            >
              Machine Learning & AI
            </AnimatedTitle>
            <AnimatedBody className="text-white/60 text-base md:text-xl leading-8">
              Scikit-learn, TensorFlow, PyTorch, LangChain, Pinecone, sentence-transformers, RAG, LLMs.
            </AnimatedBody>
          </div>
          <div>
            <AnimatedTitle
              wordSpace={"mr-[0.5ch]"}
              charSpace={"mr-[0.001em]"}
              className="font-bold antialiased text-xl md:text-2xl mb-2"
            >
              Web & App Development
            </AnimatedTitle>
            <AnimatedBody className="text-white/60 text-base md:text-xl leading-8">
              Flutter, Dart, JavaScript (ES6+), React.js,  Tailwind CSS, Firebase, Git/GitHub, Figma, Wireframing, REST API.
            </AnimatedBody>
          </div>
          <div>
            <AnimatedTitle
              wordSpace={"mr-[0.5ch]"}
              charSpace={"mr-[0.001em]"}
              className="font-bold antialiased text-xl md:text-2xl mb-2"
            >
              Cloud & Deployment 
            </AnimatedTitle>
            <AnimatedBody className="text-white/60 text-base md:text-xl leading-8">
              AWS EC2, AWS S3, AWS Sagemaker
            </AnimatedBody>
          </div>
        </div>
      </div>
    </section>
  );
}
