"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { akira } from "@/src/lib/fonts";

gsap.registerPlugin(ScrollTrigger);

export default function ContactSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const bottomImageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const bottomImg = bottomImageRef.current;
    const section = sectionRef.current;

    if (!bottomImg || !section) return;

    // Set initial state - image below and invisible
    gsap.set(bottomImg, {
      y: 200,
      opacity: 0,
    });

    let timeoutId: NodeJS.Timeout;

    // Create scroll trigger animation
    const scrollTrigger = ScrollTrigger.create({
      trigger: section,
      start: "top 80%",
      end: "bottom 20%",
      onEnter: () => {
        // Clear any existing timeout
        clearTimeout(timeoutId);
        // Wait 1 second then animate
        timeoutId = setTimeout(() => {
          gsap.to(bottomImg, {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power2.out",
          });
        }, 1000);
      },
      onLeaveBack: () => {
        // Clear timeout if scrolling up before animation completes
        clearTimeout(timeoutId);
        // Immediately reverse animation
        gsap.to(bottomImg, {
          y: 200,
          opacity: 0,
          duration: 1,
          ease: "power2.out",
        });
      },
      onEnterBack: () => {
        // When scrolling back down, wait 1 second then animate
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
          gsap.to(bottomImg, {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power2.out",
          });
        }, 1000);
      },
      onLeave: () => {
        // When scrolling past, keep it visible
        clearTimeout(timeoutId);
      },
    });

    return () => {
      clearTimeout(timeoutId);
      scrollTrigger.kill();
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-screen overflow-hidden">
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: "100%",
          height: "100%",
          zIndex: 0,
          pointerEvents: "none",
          backgroundImage: "url('/contact/contact-bg.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      
      {/* Left Side Image */}
      <img
        src="/contact/contact-side.webp"
        alt=""
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 5,
          pointerEvents: "none",
          height: "100%",
          width: "auto",
        }}
      />
      
      {/* Bottom Image */}
      <img
        ref={bottomImageRef}
        src="/contact/contact-bottom.webp"
        alt=""
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 5,
          pointerEvents: "none",
          width: "100%",
          height: "auto",
          maxHeight: "clamp(300px, 50vh, 600px)",
        }}
      />
      
      {/* Top Right Text */}
      <p
        className={akira.className}
        style={{
          position: "absolute",
          width: "598px",
          height: "140px",
          top: "30px",
          right: "0",
          fontStyle: "normal",
          fontWeight: "800",
          fontSize: "20px",
          lineHeight: "30px",
          color: "#FFFFFF",
          zIndex: 20,
          margin: 0,
          padding: "20px",
        }}
      >
        Government Engineering College Sreekrishnapuram, Palakkad, Kerala - 678633
      </p>
      
      {/* Contact Us Heading */}
      <h1
        className={akira.className}
        style={{
          position: "absolute",
          width: "770px",
          height: "101px",
          left: "192px",
          top: "130px",
          fontStyle: "normal",
          fontWeight: "800",
          fontSize: "75px",
          lineHeight: "90px",
          color: "#FFFFFF",
          zIndex: 20,
          margin: 0,
        }}
      >
        CONTACT US
      </h1>
      
      {/* Instagram Logo */}
      <a
        href="https://www.instagram.com/invento_gecpalakkad"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: "absolute",
          left: "192px",
          top: "240px",
          zIndex: 20,
          cursor: "pointer",
          textDecoration: "none",
        }}
      >
        <img
          src="/contact/ig.svg"
          alt="Instagram"
          style={{
            width: "auto",
            height: "40px",
            display: "block",
          }}
        />
      </a>
      
      {/* YouTube Logo */}
      <a
        href="https://youtube.com/@inventogecpalakkad2600"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: "absolute",
          left: "320px",
          top: "240px",
          zIndex: 20,
          cursor: "pointer",
          textDecoration: "none",
        }}
      >
        <img
          src="/contact/yt.svg"
          alt="YouTube"
          style={{
            width: "auto",
            height: "40px",
            display: "block",
          }}
        />
      </a>
      
      {/* Facebook Logo */}
      <a
        href="https://www.facebook.com/share/17kUJeAfrY/"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: "absolute",
          left: "456px",
          top: "240px",
          zIndex: 20,
          cursor: "pointer",
          textDecoration: "none",
        }}
      >
        <img
          src="/contact/fb.svg"
          alt="Facebook"
          style={{
            width: "auto",
            height: "40px",
            display: "block",
          }}
        />
      </a>
      
      {/* LinkedIn Logo */}
      <a
        href="#"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: "absolute",
          left: "592px",
          top: "240px",
          zIndex: 20,
          cursor: "pointer",
          textDecoration: "none",
        }}
      >
        <img
          src="/contact/in.svg"
          alt="LinkedIn"
          style={{
            width: "auto",
            height: "40px",
            display: "block",
          }}
        />
      </a>
      
      {/* Email */}
      <p
        className={akira.className}
        style={{
          position: "absolute",
          width: "593px",
          height: "28px",
          left: "198px",
          top: "320px",
          fontStyle: "normal",
          fontWeight: "800",
          fontSize: "24px",
          lineHeight: "0px",
          color: "#FFFFFF",
          zIndex: 20,
          margin: 0,
        }}
      >
        inventogec@gmail.com
      </p>
      
      {/* Phone Number */}
      <p
        className={akira.className}
        style={{
          position: "absolute",
          width: "593px",
          height: "28px",
          left: "198px",
          top: "370px",
          fontStyle: "normal",
          fontWeight: "800",
          fontSize: "24px",
          lineHeight: "0px",
          color: "#FFFFFF",
          zIndex: 20,
          margin: 0,
        }}
      >
        1234567890
      </p>
      
      {/* About us */}
      <p
        className={akira.className}
        style={{
          position: "absolute",
          width: "172px",
          height: "40px",
          right: "400px",
          top: "250px",
          fontStyle: "normal",
          fontWeight: "800",
          fontSize: "20px",
          lineHeight: "40px",
          color: "#FFFFFF",
          zIndex: 20,
          margin: 0,
          padding: 0,
          whiteSpace: "nowrap",
        }}
      >
        About us
      </p>
      
      {/* The team */}
      <a
        href="#"
        style={{
          position: "absolute",
          width: "131px",
          height: "36px",
          right: "440px",
          top: "320px",
          fontFamily: "'Urbanist', sans-serif",
          fontStyle: "normal",
          fontWeight: "700",
          fontSize: "24px",
          lineHeight: "0px",
          color: "#9E9E9E",
          zIndex: 20,
          margin: 0,
          padding: 0,
          textDecoration: "none",
          whiteSpace: "nowrap",
        }}
      >
        The team
      </a>
      
      {/* Link 2 */}
      <a
        href="#"
        style={{
          position: "absolute",
          width: "131px",
          height: "36px",
          right: "440px",
          top: "360px",
          fontFamily: "'Urbanist', sans-serif",
          fontStyle: "normal",
          fontWeight: "700",
          fontSize: "24px",
          lineHeight: "0px",
          color: "#9E9E9E",
          zIndex: 20,
          margin: 0,
          padding: 0,
          textDecoration: "none",
          whiteSpace: "nowrap",
        }}
      >
        Events
      </a>
      
      {/* Link 3 */}
      <a
        href="#"
        style={{
          position: "absolute",
          width: "131px",
          height: "36px",
          right: "440px",
          top: "400px",
          fontFamily: "'Urbanist', sans-serif",
          fontStyle: "normal",
          fontWeight: "700",
          fontSize: "24px",
          lineHeight: "0px",
          color: "#9E9E9E",
          zIndex: 20,
          margin: 0,
          padding: 0,
          textDecoration: "none",
          whiteSpace: "nowrap",
        }}
      >
        FAQ
      </a>
      
      {/* Link 4 */}
      <a
        href="#"
        style={{
          position: "absolute",
          width: "131px",
          height: "36px",
          right: "440px",
          top: "440px",
          fontFamily: "'Urbanist', sans-serif",
          fontStyle: "normal",
          fontWeight: "700",
          fontSize: "24px",
          lineHeight: "0px",
          color: "#9E9E9E",
          zIndex: 20,
          margin: 0,
          padding: 0,
          textDecoration: "none",
          whiteSpace: "nowrap",
        }}
      >
        Contact
      </a>
      
      {/* About us - Right Side */}
      <p
        className={akira.className}
        style={{
          position: "absolute",
          width: "172px",
          height: "40px",
          right: "180px",
          top: "250px",
          fontStyle: "normal",
          fontWeight: "800",
          fontSize: "20px",
          lineHeight: "40px",
          color: "#FFFFFF",
          zIndex: 20,
          margin: 0,
          padding: 0,
          whiteSpace: "nowrap",
        }}
      >
        Useful links
      </p>
      
      {/* The team - Right Side */}
      <a
        href="#"
        style={{
          position: "absolute",
          width: "131px",
          height: "36px",
          right: "200px",
          top: "320px",
          fontFamily: "'Urbanist', sans-serif",
          fontStyle: "normal",
          fontWeight: "700",
          fontSize: "24px",
          lineHeight: "0px",
          color: "#9E9E9E",
          zIndex: 20,
          margin: 0,
          padding: 0,
          textDecoration: "none",
          whiteSpace: "nowrap",
        }}
      >
        The team
      </a>
      
      {/* Link 2 - Right Side */}
      <a
        href="#"
        style={{
          position: "absolute",
          width: "131px",
          height: "36px",
          right: "200px",
          top: "360px",
          fontFamily: "'Urbanist', sans-serif",
          fontStyle: "normal",
          fontWeight: "700",
          fontSize: "24px",
          lineHeight: "0px",
          color: "#9E9E9E",
          zIndex: 20,
          margin: 0,
          padding: 0,
          textDecoration: "none",
          whiteSpace: "nowrap",
        }}
      >
        Events
      </a>
      
      {/* Link 3 - Right Side */}
      <a
        href="#"
        style={{
          position: "absolute",
          width: "131px",
          height: "36px",
          right: "200px",
          top: "400px",
          fontFamily: "'Urbanist', sans-serif",
          fontStyle: "normal",
          fontWeight: "700",
          fontSize: "24px",
          lineHeight: "0px",
          color: "#9E9E9E",
          zIndex: 20,
          margin: 0,
          padding: 0,
          textDecoration: "none",
          whiteSpace: "nowrap",
        }}
      >
        FAQ
      </a>
      
      {/* Link 4 - Right Side */}
      <a
        href="#"
        style={{
          position: "absolute",
          width: "131px",
          height: "36px",
          right: "200px",
          top: "440px",
          fontFamily: "'Urbanist', sans-serif",
          fontStyle: "normal",
          fontWeight: "700",
          fontSize: "24px",
          lineHeight: "0px",
          color: "#9E9E9E",
          zIndex: 20,
          margin: 0,
          padding: 0,
          textDecoration: "none",
          whiteSpace: "nowrap",
        }}
      >
        Contact
      </a>
      
      {/* Your design will go here */}
    </section>
  );
}

