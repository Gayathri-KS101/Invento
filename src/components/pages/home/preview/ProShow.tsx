"use client";

import React, { useRef, useLayoutEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Title from "./Title";
import Fejo from "./Fejo";
import Haricharan from "./Haricharan";

gsap.registerPlugin(ScrollTrigger);

const ProShow: React.FC = () => {
    const triggerRef = useRef<HTMLDivElement>(null);
    const sectionRef = useRef<HTMLElement>(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            
            gsap.from(sectionRef.current, {
                y: -1200,          
                autoAlpha: 0,      
                duration: 1.5,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: triggerRef.current,
                    start: "top top",            
                    end: "bottom top",
                    toggleActions: "play none none reverse", 
                },
            });

        }, triggerRef); 

        return () => ctx.revert();
    }, []);

    return (
        <div ref={triggerRef} className="w-full h-full">
            
            <section
                ref={sectionRef}
                className="relative h-full w-full overflow-hidden"
            >
                <div className="absolute inset-0 -z-20">
                    <Image
                        src={"/home/preview/red-blur.png"}
                        alt="Hero background"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                <div className="relative z-10 pt-12 lg:pt-32 flex h-full lg:h-full flex-col items-center justify-start text-white">
                    <Title />
                    <Fejo />
                    <Haricharan />
                </div>
            </section>
        </div>
    );
};

export default ProShow;