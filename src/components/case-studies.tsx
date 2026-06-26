"use client";

import { motion } from "framer-motion";

const cases = [
  {
    client: "Energy Sector · Qatar",
    title: "Asset Management & Tagging Programme",
    tags: ["Oracle EBS", "Fixed Assets", "Power BI"],
    metrics: [
      { label: "Total Assets", value: "8K+" },
      { label: "Locations", value: "600+" },
      { label: "Accuracy", value: "98%" },
    ],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
  },
  {
    client: "Construction Group · UAE",
    title: "Oracle EBS Multi-Entity ERP Implementation",
    tags: ["Oracle EBS", "Financials", "SCM"],
    metrics: [
      { label: "Entities", value: "12+" },
      { label: "Time Saved", value: "30%" },
      { label: "Visibility", value: "100%" },
    ],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
  },
  {
    client: "Marine Sector · UAE",
    title: "Oracle Fusion SCM & Inventory Rollout",
    tags: ["Oracle Fusion", "SCM", "Inventory"],
    metrics: [
      { label: "Warehouses", value: "5" },
      { label: "Cost Reduction", value: "15%" },
      { label: "Tracking", value: "Real-time" },
    ],
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=2076&auto=format&fit=crop",
  },
  {
    client: "Government Entity · Qatar",
    title: "OIC Integration & Middleware Programme",
    tags: ["OIC", "Middleware", "APIs"],
    metrics: [
      { label: "Integrations", value: "50+" },
      { label: "Uptime", value: "99.9%" },
      { label: "Processing", value: "2x Faster" },
    ],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop",
  },
];

export function CaseStudies() {
  return (
    <section id="case-studies" className="w-full bg-slate-50 py-32 px-8 relative border-t border-slate-100">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24 flex flex-col md:flex-row justify-between items-end gap-8"
        >
          <div>
            <div className="text-[10px] font-bold text-slate-500 tracking-[0.3em] uppercase mb-6 flex items-center gap-4">
              <span className="w-8 h-[1px] bg-slate-400"></span> Proven Impact
            </div>
            <h2 className="text-4xl md:text-6xl font-sans font-bold text-slate-900 tracking-tighter">
              Executive Case Studies.
            </h2>
          </div>
          <p className="text-sm text-slate-600 max-w-sm md:text-right leading-relaxed mb-2">
            Real enterprise outcomes demonstrated through architectural precision and systemic integration.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {cases.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              className="border border-slate-200 bg-white shadow-sm group overflow-hidden transition-all duration-500 rounded-sm hover:shadow-md"
            >
              {/* Header */}
              <div className="p-8 flex justify-between items-start border-b border-slate-100">
                <div>
                  <div className="text-[10px] text-slate-500 uppercase tracking-widest font-semibold mb-3 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-[#1DA57A] rounded-full"></span>
                    {c.client}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 tracking-tight">{c.title}</h3>
                </div>
              </div>

              {/* Image / Metric Slot */}
              <div className="relative h-72 overflow-hidden border-b border-slate-100 bg-slate-50">
                <div className="absolute inset-0 bg-white/20 mix-blend-screen z-10 group-hover:bg-transparent transition-colors duration-700"></div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={c.image} 
                  alt={c.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 grayscale group-hover:grayscale-0 opacity-80 group-hover:opacity-100"
                />
                
                {/* Overlay metrics */}
                <div className="absolute bottom-6 left-6 right-6 z-20 flex gap-4">
                  {c.metrics.map(m => (
                    <div key={m.label} className="bg-white/90 backdrop-blur-md border border-slate-200 shadow-sm px-5 py-3 flex-1 flex flex-col justify-center rounded-sm">
                      <div className="text-xl font-bold text-slate-900 tracking-tight">{m.value}</div>
                      <div className="text-[9px] uppercase tracking-[0.2em] text-slate-500 mt-1">{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer */}
              <div className="p-8 bg-slate-50 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
                <div className="flex flex-wrap gap-3">
                  {c.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-semibold px-3 py-1.5 rounded-sm bg-white text-slate-600 border border-slate-200">
                      {tag}
                    </span>
                  ))}
                </div>
                <button className="text-[10px] font-bold text-slate-900 uppercase tracking-[0.2em] border-b border-slate-300 pb-1 hover:border-slate-900 transition-colors">
                  View Full Briefing
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
