"use client";

import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

const products = [
  {
    name: "Oracle E-Business Suite (EBS)",
    desc: "On-premise ERP — financials, SCM, HRMS, projects and more",
    badge: "EBS",
  },
  {
    name: "Oracle Fusion Cloud",
    desc: "Modern cloud ERP — full lifecycle from design to go-live",
    badge: "Cloud",
  },
];

const modules = [
  {
    name: "Supply Chain & Manufacturing",
    desc: "Procurement, inventory, sourcing, WMS, manufacturing",
    badge: "SCM",
  },
  {
    name: "HCM & HRMS",
    desc: "Core HR, payroll, talent, absence, workforce management",
    badge: "HCM",
  },
  {
    name: "Oracle Financials",
    desc: "GL, AP, AR, FA, Cash Management, Tax",
    badge: "FIN",
  },
  {
    name: "Oracle PPM (Projects)",
    desc: "Project accounting, budgeting, costing, billing",
    badge: "PPM",
  },
  {
    name: "Middleware — OIC",
    desc: "Oracle Integration Cloud — APIs, integrations, workflows",
    badge: "OIC",
  },
  {
    name: "VBCS & Redwood",
    desc: "Visual Builder, Redwood UX design system, custom apps",
    badge: "Dev",
  },
  {
    name: "Reports & Analytics",
    desc: "OTBI, BI Publisher, Power BI dashboards",
    badge: "BI",
  },
];

export function WhatWeOffer() {
  return (
    <section id="expertise" className="w-full bg-white py-32 px-8 relative overflow-hidden border-t border-slate-100">
      {/* Background subtleties */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-slate-50 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-24 flex flex-col md:flex-row justify-between items-end gap-8"
        >
          <div>
            <div className="text-[10px] font-bold text-slate-500 tracking-[0.3em] uppercase mb-6 flex items-center gap-4">
              <span className="w-8 h-[1px] bg-slate-400"></span> What We Offer
            </div>
            <h2 className="text-4xl md:text-6xl font-sans font-bold text-slate-900 tracking-tighter">
              Oracle Products &<br /> Module Expertise.
            </h2>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Products Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} perspective={2000} transitionSpeed={1500} scale={1.01} className="h-full">
              <div className="border border-slate-200 bg-white shadow-sm flex flex-col h-full rounded-sm hover:shadow-md hover:border-[#1DA57A]/30 transition-all">
                <div className="relative h-48 border-b border-slate-100 rounded-t-sm overflow-hidden">
                  <div className="absolute inset-0 bg-slate-900/40 z-10 group-hover:bg-slate-900/20 transition-colors duration-500"></div>
                  <img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop" alt="Oracle Products" className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute bottom-6 left-6 z-20 flex items-center gap-6">
                    <div className="w-12 h-12 flex items-center justify-center bg-white/10 backdrop-blur-md border border-white/20 shadow-sm rounded-sm">
                      <span className="text-[10px] text-white font-bold tracking-widest">PROD</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white tracking-tight">Oracle Products</h3>
                      <p className="text-xs text-white/80 mt-1">Platforms we implement & support</p>
                    </div>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  {products.map((item, i) => (
                    <div key={item.name} className="flex items-center justify-between py-6 border-b border-slate-100 last:border-0 gap-6">
                      <div className="flex gap-4 items-start">
                        <div className="w-1.5 h-1.5 mt-2 bg-[#1DA57A] flex-shrink-0"></div>
                        <div>
                          <div className="text-sm font-semibold text-slate-900 mb-1">{item.name}</div>
                          <div className="text-xs text-slate-600 leading-relaxed max-w-[280px]">{item.desc}</div>
                        </div>
                      </div>
                      <div className="text-[9px] bg-slate-50 border border-slate-200 text-slate-600 px-3 py-1 font-semibold uppercase tracking-widest whitespace-nowrap rounded-sm">
                        {item.badge}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Tilt>
          </motion.div>

          {/* Modules Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} perspective={2000} transitionSpeed={1500} scale={1.01} className="h-full">
              <div className="border border-slate-200 bg-white shadow-sm flex flex-col h-full rounded-sm hover:shadow-md hover:border-[#1DA57A]/30 transition-all">
                <div className="relative h-48 border-b border-slate-100 rounded-t-sm overflow-hidden">
                  <div className="absolute inset-0 bg-slate-900/40 z-10 group-hover:bg-slate-900/20 transition-colors duration-500"></div>
                  <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop" alt="Module Expertise" className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute bottom-6 left-6 z-20 flex items-center gap-6">
                    <div className="w-12 h-12 flex items-center justify-center bg-white/10 backdrop-blur-md border border-white/20 shadow-sm rounded-sm">
                      <span className="text-[10px] text-white font-bold tracking-widest">MOD</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white tracking-tight">Module Expertise</h3>
                      <p className="text-xs text-white/80 mt-1">Deep functional & technical capabilities</p>
                    </div>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  {modules.map((item, i) => (
                    <div key={item.name} className="flex items-center justify-between py-5 border-b border-slate-100 last:border-0 gap-6">
                      <div className="flex gap-4 items-start">
                        <div className="w-1.5 h-1.5 mt-2 bg-[#1DA57A] flex-shrink-0"></div>
                        <div>
                          <div className="text-sm font-semibold text-slate-900 mb-1">{item.name}</div>
                          <div className="text-xs text-slate-600 leading-relaxed max-w-[280px]">{item.desc}</div>
                        </div>
                      </div>
                      <div className="text-[9px] bg-slate-50 border border-slate-200 text-slate-600 px-3 py-1 font-semibold uppercase tracking-widest whitespace-nowrap rounded-sm">
                        {item.badge}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Tilt>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
