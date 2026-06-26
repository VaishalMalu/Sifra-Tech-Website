"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const slides = [
  {
    tag: "Oracle ERP · GCC Region",
    title: (
      <>
        Oracle ERP.<br />Middle East.<br /><span className="text-slate-500">Done right.</span>
      </>
    ),
    desc: "End-to-end Oracle implementation and support for enterprises across UAE, Qatar, and KSA — delivered by specialists.",
    btn1: "Book a Discovery Call",
    btn2: "View Our Work",
    visual: (
      <div className="bg-white border border-slate-200 p-8 rounded-sm shadow-sm">
        <div className="flex gap-4 mb-4">
          <div className="flex-1 bg-slate-50 p-6 border border-slate-100">
            <div className="text-5xl font-sans font-bold text-slate-900 mb-2">15<span className="text-[#1DA57A]">+</span></div>
            <div className="text-[10px] text-slate-500 uppercase tracking-[0.2em]">Years Oracle</div>
          </div>
          <div className="flex-1 bg-slate-50 p-6 border border-slate-100">
            <div className="text-5xl font-sans font-bold text-slate-900 mb-2">8<span className="text-[#1DA57A]">K+</span></div>
            <div className="text-[10px] text-slate-500 uppercase tracking-[0.2em]">Assets tagged</div>
          </div>
        </div>
        <div className="flex gap-2 mb-4">
          {["UAE", "Qatar", "KSA"].map(geo => (
            <div key={geo} className="flex-1 bg-slate-50 border border-slate-100 p-4 text-center">
              <div className="text-[10px] font-bold text-slate-700 uppercase tracking-widest">{geo}</div>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-2">
          {["EBS", "Fusion", "SCM", "HCM", "PPM", "OIC"].map(mod => (
            <span key={mod} className="text-[9px] bg-slate-50 border border-slate-200 text-slate-600 px-3 py-1.5 font-semibold uppercase tracking-widest">
              {mod}
            </span>
          ))}
        </div>
      </div>
    )
  },
  {
    tag: "Oracle Modules · Deep Expertise",
    title: (
      <>
        Every Oracle<br />module.<br /><span className="text-slate-500">One firm.</span>
      </>
    ),
    desc: "Financials, SCM, HCM, PPM, OIC, VBCS, Redwood — full functional and technical depth across the entire Oracle stack.",
    btn1: "Explore Services",
    btn2: "Our Modules",
    visual: (
      <div className="bg-white border border-slate-200 p-8 rounded-sm shadow-sm">
        <div className="bg-slate-50 border border-slate-100 mb-6 h-48 overflow-hidden rounded-sm relative group">
           <img src="/fusion oracle dashboard.png" alt="Oracle Dashboard" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
           <div className="absolute inset-0 bg-white/10 mix-blend-overlay"></div>
        </div>
        <div className="flex flex-wrap gap-2">
          {["Oracle Financials", "Supply Chain", "HRMS", "Middleware", "Analytics"].map(mod => (
            <span key={mod} className="text-[9px] bg-slate-50 border border-slate-200 text-slate-600 px-3 py-1.5 font-semibold uppercase tracking-widest">
              {mod}
            </span>
          ))}
        </div>
      </div>
    )
  },
  {
    tag: "Artificial Intelligence · Oracle AI",
    title: (
      <>
        AI-powered<br />Oracle.<br /><span className="text-slate-500">Built for you.</span>
      </>
    ),
    desc: "We bring Artificial Intelligence into your Oracle environment — from intelligent automation to AI-assisted reporting and decision support.",
    btn1: "Explore AI Solutions",
    btn2: "Learn More",
    visual: (
      <div className="bg-white border border-slate-200 p-8 rounded-sm shadow-sm flex flex-col gap-3">
        {[
          "AI-assisted financial reconciliation & anomaly detection",
          "Intelligent procurement & SCM demand forecasting",
          "OTBI & Power BI AI narrative reporting",
          "Oracle Digital Assistant & VBCS AI chatbots"
        ].map((ai, i) => (
          <div key={i} className="bg-slate-50 border border-slate-100 p-5 flex items-center gap-4">
            <div className="w-1.5 h-1.5 rounded-full bg-[#1DA57A] flex-shrink-0"></div>
            <div className="text-[10px] text-slate-600 uppercase tracking-widest">{ai}</div>
          </div>
        ))}
      </div>
    )
  },
  {
    tag: "Careers · Join the Team",
    title: (
      <>
        Oracle careers.<br />GCC projects.<br /><span className="text-slate-500">Real impact.</span>
      </>
    ),
    desc: "Join a specialist Oracle firm working on complex, high-value enterprise programmes across the Gulf. We hire people who know Oracle in the field.",
    btn1: "View Open Roles",
    btn2: "About Us",
    visual: (
      <div className="bg-white border border-slate-200 p-8 rounded-sm shadow-sm flex flex-col gap-3">
        {[
          "GCC projects — UAE, Qatar, KSA delivery",
          "Oracle certification support for all team members",
          "Hiring: Financials, SCM, HCM, OIC, VBCS, BI",
          "Full-time, contract & remote engagement options"
        ].map((c, i) => (
          <div key={i} className="bg-slate-50 border border-slate-100 p-5 flex items-center gap-4">
            <div className="w-1 h-1 bg-[#1DA57A] flex-shrink-0"></div>
            <div className="text-[10px] text-slate-600 uppercase tracking-widest">{c}</div>
          </div>
        ))}
      </div>
    )
  }
];

export function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(c => (c + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full flex flex-col">
      {/* Hero Carousel Area */}
      {/* Hero Carousel Area */}
      <div className="relative w-full bg-slate-50 min-h-[700px] flex items-center pt-20 pb-16 overflow-hidden">
        
        {/* Video Background */}
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover opacity-[0.15] mix-blend-multiply z-0"
        >
          {/* Premium corporate/architecture background video for Sifratech */}
          <source src="https://videos.pexels.com/video-files/3255275/3255275-uhd_2560_1440_25fps.mp4" type="video/mp4" />
        </video>

        <div className="absolute inset-0 z-0 bg-white/50"></div>
        <div className="absolute inset-0 z-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)]"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-8 w-full mt-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
            >
              {/* Left text */}
              <div>
                <div className="inline-flex items-center gap-4 mb-8">
                  <div className="w-8 h-[1px] bg-slate-400"></div>
                  <span className="text-[10px] font-bold text-slate-500 tracking-[0.3em] uppercase">
                    {slides[current].tag}
                  </span>
                </div>
                
                <h1 className="text-5xl md:text-7xl font-sans font-bold text-slate-900 leading-[1.1] tracking-tighter mb-8">
                  {slides[current].title}
                </h1>
                
                <p className="text-sm text-slate-600 leading-relaxed max-w-md mb-12">
                  {slides[current].desc}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 mt-8">
                  <a 
                    href="mailto:info@sifratc.com?subject=Discovery%20Call" 
                    className="flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#1DA57A] to-[#117655] text-white text-[10px] font-bold uppercase tracking-[0.2em] rounded-sm hover:shadow-[0_0_20px_rgba(29,165,122,0.4)] hover:scale-[1.02] transition-all duration-300 w-full sm:w-auto"
                  >
                    {slides[current].btn1}
                  </a>
                  <a 
                    href="#case-studies"
                    className="flex items-center justify-center px-8 py-4 bg-white/20 backdrop-blur-md border border-slate-300/50 text-slate-800 text-[10px] font-bold uppercase tracking-[0.2em] rounded-sm hover:bg-white/40 hover:shadow-sm transition-all duration-300 w-full sm:w-auto"
                  >
                    {slides[current].btn2}
                  </a>
                </div>
              </div>

              {/* Right visual */}
              <div className="w-full perspective-[1000px] mt-8 lg:mt-0">
                {slides[current].visual}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Carousel Dots */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-4 z-20">
          {slides.map((_, i) => (
            <button 
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${i === current ? 'bg-[#1DA57A] scale-150' : 'bg-slate-300 hover:bg-slate-400'}`}
            />
          ))}
        </div>
      </div>

      {/* Marquee */}
      <div className="w-full bg-white border-y border-slate-100 overflow-hidden py-5">
        <div className="flex w-max animate-marquee whitespace-nowrap">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="flex gap-12 px-6 items-center text-[10px] text-slate-500 font-bold uppercase tracking-[0.2em]">
              <span>Oracle EBS</span>
              <span className="w-1 h-1 bg-[#1DA57A] rounded-full"></span>
              <span>Oracle Fusion Cloud</span>
              <span className="w-1 h-1 bg-[#1DA57A] rounded-full"></span>
              <span>OIC Middleware</span>
              <span className="w-1 h-1 bg-[#1DA57A] rounded-full"></span>
              <span>VBCS & Redwood</span>
              <span className="w-1 h-1 bg-[#1DA57A] rounded-full"></span>
              <span>OTBI & Power BI</span>
              <span className="w-1 h-1 bg-[#1DA57A] rounded-full"></span>
              <span>SCM & Manufacturing</span>
              <span className="w-1 h-1 bg-[#1DA57A] rounded-full"></span>
              <span>HCM & HRMS</span>
              <span className="w-1 h-1 bg-[#1DA57A] rounded-full"></span>
              <span>Oracle PPM</span>
              <span className="w-1 h-1 bg-[#1DA57A] rounded-full"></span>
              <span>AI Solutions</span>
              <span className="w-1 h-1 bg-[#1DA57A] rounded-full"></span>
              <span>Asset Management</span>
              <span className="w-1 h-1 bg-[#1DA57A] rounded-full"></span>
              <span>GCC Delivery</span>
              <span className="w-1 h-1 bg-[#1DA57A] rounded-full"></span>
            </div>
          ))}
        </div>
      </div>

      {/* Logo Strip */}
      <div className="w-full bg-slate-50 py-8 px-8 border-b border-slate-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-20">
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em] flex-shrink-0">
            Trusted by
          </span>
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-12">
             {["GCC GOVERNMENT", "GLOBAL RETAIL", "REGIONAL BANK", "MANUFACTURING", "LOGISTICS"].map((client, i) => (
               <div key={i} className="relative overflow-hidden group select-none">
                 {/* Shimmer/Pulse effect for suspense */}
                 <div className="absolute inset-0 bg-slate-200/50 animate-pulse group-hover:animate-none"></div>
                 <div className="relative text-xs font-sans font-bold text-slate-400 tracking-[0.4em] px-6 py-2 border border-slate-200 bg-slate-50 rounded-sm">
                   {client}
                 </div>
               </div>
             ))}
          </div>
        </div>
      </div>
    </div>
  );
}
