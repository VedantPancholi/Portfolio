"use client";
import { Syne } from "next/font/google";
import Title from "../ui/Title";
import TimelineItem from "./TimelineItem";

const syne = Syne({ subsets: ["latin"] });

const TimelineData = [
  {
    companyImg: "/INTERN.jpeg",
    jobTitle: "Project Intern",
    company: "INFOLABZ",
    jobType: "Internship",
    duration: "Jul 2022 - Apr 2023",
    stuffIDid: [
      "Designed and developed an IoT-powered smart surveillance system using Flutter and Dart to track officer routes and duties in real time.",
      "Implemented RFID tags and fixed readers to capture and store real-time data in a centralized database, enhancing operational efficiency.",
      "Developed a secure API to facilitate seamless data access and utilization across multiple modules, improving transparency and accountability.",
      "Optimized the system architecture using the Dart Framework, reducing manual monitoring efforts by 40% and increasing overall system reliability.",
      "Collaborated with stakeholders to enhance data visualization and reporting, enabling better decision-making within the organization.",
      "Tools & Technologies : Dart, Internet of Things (IoT), Flutter, RFID, API Development, MySQL"
    ],
  },
  {
    companyImg: "/freelance.png",
    jobTitle: "Freelancer",
    company: "Flutter Developer",
    jobType: "Freelancing",
    duration: "2023",
    stuffIDid: [
      "Developed 'My Bindle,' a social platform integrating Instagram-like features with a unique donation functionality, enhancing user engagement and monetization opportunities.",
      "Utilized Flutter MUI and Dart to create an intuitive and responsive UI, ensuring a seamless user experience across devices.",
      "Integrated Firebase and Postman API for secure data management, real-time updates, and optimized backend performance.",
      "Conducted rigorous testing and debugging to enhance platform stability, scalability, and security.",
      "Tools & Technologies : Dart, Flutter, Postman API, Firebase"
    ]    
  },
  {
    companyImg: "/GDG.jpeg",
    jobTitle: "UI/UX Core Team Member",
    company: "Google Developer Group, @Nirma University",
    jobType: "Core Team Member",
    duration: "Sept 2024 - Present",
    stuffIDid: [
      "Designed intuitive and user-friendly UI/UX experiences for GDG community projects, ensuring seamless interaction and accessibility.",
      "Collaborated with developers and designers to create visually appealing interfaces for web and mobile applications.",
      "Conducted user research and usability testing to enhance the effectiveness of digital experiences within GDG initiatives.",
      "Mentored new team members on UI/UX best practices, fostering a collaborative and creative design culture."
    ]
  },
  {
    companyImg: "/CSI.jpeg",
    jobTitle: "Executive Committee Member",
    company: "Computer Society of India, @Nirma University",
    jobType: "Committee Member",
    duration: "Nov 2023 - Present",
    stuffIDid: [
      "Collaborated with industry professionals to bring valuable insights and networking opportunities to the community.",
      "Contributed to decision-making and strategic planning for events and community outreach programs."
    ]
  },
];

export default function Timeline() {
  return (
    <div className="mt-10 md:mt-[110px]">
      <Title> Experiences</Title>

      {/* THE THING, AFTER WHICH I WOULD DETERMINE THE HEIGHT */}
      <div className="flex mt-6 gap-4 pl-3">
        <div className="w-3 h-auto bg-gradient-to-b from-white to-transparent" />

        <div className="flex flex-col gap-10">
          {TimelineData.map((item, index) => (
            <TimelineItem
              key={index}
              companyImg={item.companyImg}
              jobTitle={item.jobTitle}
              company={item.company}
              jobType={item.jobType}
              duration={item.duration}
              stuffIDid={item.stuffIDid}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
