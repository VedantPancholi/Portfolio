import type { Metadata } from "next";
import { Syne } from "next/font/google";
import { Kumbh_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";
import Header from "./components/header-section/Header";
import { ViewProvider } from "@/contexts/ViewContext";

const kumbhSans = Kumbh_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vedant Pancholi — Aspiring Data Scientist",
  description:
    "Aspiring Data Scientist/Software Engineer with expertise in Python, C++, and AI-driven solutions. Passionate about leveraging data analytics and software engineering to drive innovation and efficiency.",
  keywords: [
    "ml engineer",
    "dl engineer",
    "data engineer",
    "mlops",
    "frontend",
    "react",
    "tech",
    "creative developer",
    "UI development",
    "frontend engineer",
    "developer portfolio",
    "creative development",
    "indian",
    "software",
    "software developer",
    "software engineer",
    "portfolio",
  ],
  openGraph: {
    title: "Vedant Pancholi — Aspiring Data Scientist",
    description:
      "Aspiring Data Scientist/Software Engineer with expertise in Python, C++, and AI-driven solutions. Passionate about leveraging data analytics and software engineering to drive innovation and efficiency.",
    url: "", // https://www.adeolabadero.me
    siteName: "", // www.adeolabadero.me
    images: [
      {
        url: "",
        width: 1200,
        height: 630,
        alt: "Vedant Pancholi — Aspiring Data Scientist",
      },
      {
        url: "",
        width: 800,
        height: 800,
        alt: "Vedant Pancholi — Aspiring Data Scientist",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vedant Pancholi — Aspiring Data Scientist",
    description:
      "Aspiring Data Scientist/Software Engineer with expertise in Python, C++, and AI-driven solutions. Passionate about leveraging data analytics and software engineering to drive innovation and efficiency.",
    creator: "@VedantPancholi",
    images: [""],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      "max-image-preview": "large",
    },
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${kumbhSans.className} max-w-[90%] xl:max-w-[1223px] w-full mx-auto overflow-x-hidden`}
      >
        <>
          <ViewProvider>
            <Header />
            {children}
          </ViewProvider>
          <Analytics />
          <SpeedInsights />
        </>
      </body>
    </html>
  );
}
