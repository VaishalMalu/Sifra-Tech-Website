"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Tilt from "react-parallax-tilt";

const industries = [
  {
    name: "Construction & Real Estate",
    geo: "UAE · Qatar · KSA",
  },
  {
    name: "Oil, Gas & Petrochemicals",
    geo: "Qatar · KSA · UAE",
  },
  {
    name: "Marine & Shipping",
    geo: "UAE · Qatar",
  },
  {
    name: "Government & Public Sector",
    geo: "GCC-wide",
  },
];

export function Industries() {
  return (
    <section id="industries" className="w-full bg-slate-50 py-32 px-8 relative overflow-hidden border-t border-slate-100">
      {/* Premium GCC Architecture Background */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-[0.05] mix-blend-multiply grayscale"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-[10px] font-bold text-slate-500 tracking-[0.3em] uppercase mb-6 flex items-center gap-4">
              <span className="w-8 h-[1px] bg-slate-400"></span> Sectors
            </div>
            <h2 className="text-4xl md:text-6xl font-sans font-bold text-slate-900 tracking-tighter">
              Industries We Elevate.
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-sm text-slate-600 max-w-sm md:text-right leading-relaxed"
          >
            Delivering deep, sector-specific Oracle architectures to the most critical industries driving the GCC economy.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((ind, i) => (
            <motion.div
              key={ind.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
            >
              <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} perspective={1000} transitionSpeed={1000} scale={1.02} glareEnable={true} glareMaxOpacity={0.1} glareColor="#1DA57A" glarePosition="all" className="h-full rounded-sm">
                <div className="border border-slate-200 p-8 bg-white shadow-sm relative group overflow-hidden transition-all duration-500 hover:shadow-md hover:border-[#1DA57A]/50 rounded-sm h-full flex flex-col justify-between min-h-[220px]">
                  <div className="absolute top-0 right-0 p-8 text-slate-300 font-mono text-[10px] opacity-50">
                    0{i + 1}
                  </div>
                  
                  <div className="relative z-10 flex flex-col justify-between h-full">
                    <h3 className="text-xl font-bold text-slate-900 mb-6 leading-tight pr-4">{ind.name}</h3>
                    <div className="text-[10px] font-semibold text-slate-500 uppercase tracking-widest flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-[#1DA57A] rounded-full"></span>
                      {ind.geo}
                    </div>
                  </div>
                </div>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
