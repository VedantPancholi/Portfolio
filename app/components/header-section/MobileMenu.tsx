import { useView } from "@/contexts/ViewContext";
import React, { SetStateAction } from "react";
import Link from "next/link";
import { Icon } from "@iconify/react/dist/iconify.js";
import { motion } from "framer-motion";

export default function MobileMenu({
  onMenuOpen,
}: {
  onMenuOpen: React.Dispatch<SetStateAction<boolean>>;
}) {
  const { sectionInView } = useView();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed z-50 top-12 left-0 right-0 mx-auto w-[90%] sm:hidden"
    >
      <div className="bg-gradient-to-r from-[#d9d9d91f] to-[#7373731f] rounded-2xl mt-4 std-backdrop-blur p-6">
        <div className="grid grid-cols-1 gap-6">
          <ul className="flex flex-col gap-4 text-white/25">
            <Link
              href="#home"
              className={`${sectionInView === "home" && "text-white"} hover:text-white/50 transition-colors`}
              onClick={() => onMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="#about"
              className={`${sectionInView === "about" && "text-white"} hover:text-white/50 transition-colors`}
              onClick={() => onMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="#work"
              className={`${sectionInView === "work" && "text-white"} hover:text-white/50 transition-colors`}
              onClick={() => onMenuOpen(false)}
            >
              Projects
            </Link>
            <Link
              href="#experiences"
              className={`${sectionInView === "experiences" && "text-white"} hover:text-white/50 transition-colors`}
              onClick={() => onMenuOpen(false)}
            >
              Experiences
            </Link>
            <Link
              href="#skills"
              className={`${sectionInView === "skills" && "text-white"} hover:text-white/50 transition-colors`}
              onClick={() => onMenuOpen(false)}
            >
              Skills
            </Link>
            <Link
              href="#education"
              className={`${sectionInView === "education" && "text-white"} hover:text-white/50 transition-colors`}
              onClick={() => onMenuOpen(false)}
            >
              Education
            </Link>
            <Link
              href="#contact"
              className={`${sectionInView === "contact" && "text-white"} hover:text-white/50 transition-colors`}
              onClick={() => onMenuOpen(false)}
            >
              Contact
            </Link>
          </ul>

          <div className="flex justify-center gap-4 pt-4 border-t border-white/10">
            <Link
              className="p-3 rounded-xl bg-gradient-to-r from-[#d9d9d915] to-[#7373731f] hover:bg-white/10 transition-colors"
              target="_blank"
              href="https://www.linkedin.com/in/vedantpancholi/"
              data-blobity-radius="10"
            >
              <Icon icon="hugeicons:linkedin-01" className="text-2xl" />
            </Link>
            <Link
              className="p-3 rounded-xl bg-gradient-to-r from-[#d9d9d915] to-[#7373731f] hover:bg-white/10 transition-colors"
              target="_blank"
              href="https://github.com/VedantPancholi"
              data-blobity-radius="10"
            >
              <Icon icon="hugeicons:github" className="text-2xl" />
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
