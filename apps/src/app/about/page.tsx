"use client";

import Image from "next/image";
import main from "@/public/about/main.jpg";
import AboutText from "@/src/components/pages/about/about";
import Navbar from "@/src/components/ui/navbar/navbar";

export default function About() {
  return (
    <section className="bg-white overflow-hidden">
      <div className=" relative min-w-screen min-h-screen">
        <Image
          src={main}
          className="min-w-screen min-h-screen absolute"
          alt="Picture of the author"
        />
        <Navbar />
        <AboutText/>
      </div>
    </section>
  );
}
