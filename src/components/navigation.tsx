"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import logoImg from "@/assets/sifratech logo.png";

const links = [
  { name: "What We Offer", href: "#expertise" },
  { name: "Industries", href: "#industries" },
  { name: "Case Studies", href: "#case-studies" },
  { name: "AI Solutions", href: "#ai-solutions" },
  { name: "Events & Blog", href: "#events-careers" },
  { name: "Careers", href: "#events-careers", highlight: true },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Simple scrollspy
      const sections = ["expertise", "industries", "case-studies", "ai-solutions", "events-careers"];
      let current = "";
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= (element.offsetTop - 200)) {
          current = section;
        }
      }
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const target = document.getElementById(href.substring(1));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 transition-all duration-500",
        scrolled ? "py-3 backdrop-blur-xl border-b border-white/20 bg-white/80 shadow-[0_4px_30px_rgba(0,0,0,0.05)]" : "py-6 bg-transparent border-b border-transparent"
      )}
    >
      <Link href="/" className="flex items-center">
        <Image src={logoImg} alt="Sifratech Logo" width={160} height={40} className="object-contain" priority />
      </Link>

      <div className="hidden md:flex items-center gap-10">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={(e) => handleClick(e, link.href)}
            className={cn(
              "text-[10px] uppercase tracking-widest transition-colors cursor-pointer",
              link.highlight ? "font-bold text-slate-900 hover:text-[#1DA57A]" : "font-semibold text-slate-600 hover:text-slate-900",
              activeSection === link.href.substring(1) && !link.highlight ? "text-slate-900" : ""
            )}
          >
            {link.name}
          </a>
        ))}
      </div>

      <a 
        href="mailto:info@sifratc.com?subject=Discovery%20Call%20Request"
        className="hidden md:flex items-center justify-center px-7 py-3 text-[10px] font-bold text-white bg-gradient-to-r from-[#1DA57A] to-[#117655] hover:shadow-[0_0_20px_rgba(29,165,122,0.5)] hover:scale-[1.02] transition-all duration-300 rounded-sm uppercase tracking-[0.2em]"
      >
        Book a Call
      </a>
    </motion.nav>
  );
}
