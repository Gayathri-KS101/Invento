"use client";

import Image from "next/image";
import main from "@/public/main.jpg";
import AboutText from "@/src/components/about";
import Navbar from "@/src/components/Navbar/navbar";

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
