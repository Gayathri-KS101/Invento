import gsap from "gsap";
import { useEffect, useRef } from "react";
import { useGSAP } from "@gsap/react";

export default function AboutText() {
  const contextRef = useRef<HTMLElement | any>(null);

  useEffect(() => {
    gsap.to(".title", {
      y: -400,
      duration: 1,
    });
  }, []);

  return (
    <>
      <div
        ref={contextRef}
        className="title absolute top-174  font-bold text-[360px] left-16 opacity-25 text-amber-50"
      >
        <h1>ABOUT</h1>
      </div>
    </>
  );
}
