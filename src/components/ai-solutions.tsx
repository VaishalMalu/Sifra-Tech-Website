"use client";

import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { Canvas } from "@react-three/fiber";
import { NeuralNetwork } from "./neural-network";

const aiFeatures = [
  {
    title: "AI in Oracle Financials",
    desc: "Anomaly detection, smart reconciliation, predictive close",
  },
  {
    title: "AI in SCM & Inventory",
    desc: "Demand forecasting, supplier risk, automated reordering",
  },
  {
    title: "AI in HCM & HRMS",
    desc: "Smart hiring, attrition prediction, workforce planning",
  },
  {
    title: "AI in Reporting & BI",
    desc: "Natural language queries, AI narrative, anomaly alerts",
  },
];

const capabilities = [
  {
    title: "Generative AI Integration",
    desc: "Embed Gen AI capabilities into Oracle workflows — intelligent document processing, auto-summarisation, and AI-assisted approvals.",
  },
  {
    title: "Oracle Digital Assistant",
    desc: "AI chatbots and voice assistants built on Oracle Digital Assistant — enabling self-service transactions without manual navigation.",
  },
  {
    title: "Predictive Analytics",
    desc: "AI models layered onto OTBI and Power BI to move from descriptive to predictive — forecast cashflow, predict supply shortages.",
  },
  {
    title: "Intelligent Automation via OIC",
    desc: "AI-driven process automation through Oracle Integration Cloud — smart routing, exception handling, and self-healing integrations.",
  },
  {
    title: "AI-Assisted Compliance",
    desc: "Automated audit trail analysis, VAT/Zakat compliance checks, and regulatory reporting powered by AI.",
  },
  {
    title: "VBCS AI Applications",
    desc: "Custom AI-powered applications built on Visual Builder Cloud Service — intelligent forms, smart workflows, and Redwood UX.",
  },
];

const aiModules = [
  { name: "Oracle Financials", sub: "Smart GL, AP automation, predictive cashflow" },
  { name: "Supply Chain & Manufacturing", sub: "Demand sensing, supplier AI, inventory optimisation" },
  { name: "HCM & HRMS", sub: "AI hiring assistant, attrition models, learning recommendation" },
  { name: "Oracle PPM (Projects)", sub: "AI cost forecasting, risk flagging, resource optimisation" },
  { name: "OIC Middleware", sub: "Intelligent automation, self-healing integrations, smart routing" },
  { name: "VBCS & Redwood", sub: "AI-enhanced custom apps, Redwood AI extensions" },
  { name: "Reports & Analytics (OTBI / BI)", sub: "Predictive dashboards, AI narratives, NL query" },
  { name: "Oracle Digital Assistant", sub: "Conversational AI across Fusion and EBS transactions" },
];

export function AiSolutions() {
  return (
    <section id="ai-solutions" className="w-full bg-white py-32 px-8 relative overflow-hidden border-t border-slate-100">
      {/* Subtle lighting and 3D Neural Network */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.35]">
        <Canvas camera={{ position: [0, 0, 15] }}>
          <ambientLight intensity={0.5} />
          <NeuralNetwork />
        </Canvas>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-[10px] font-bold text-slate-500 tracking-[0.3em] uppercase mb-6 flex items-center gap-4">
              <span className="w-8 h-[1px] bg-slate-400"></span> Intelligence
            </div>
            <h2 className="text-4xl md:text-6xl font-sans font-bold text-slate-900 tracking-tighter">
              AI Integration.
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-sm text-slate-600 max-w-sm md:text-right leading-relaxed"
          >
            Embedding Artificial Intelligence into your Oracle environment — from assisted automation to purpose-built extensions.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* AI Features List */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col border-t border-slate-100"
          >
            {aiFeatures.map((feat, i) => (
              <div
                key={feat.title}
                className="py-8 border-b border-slate-100 group"
              >
                <div className="flex justify-between items-start">
                  <div className="flex gap-8">
                    <div className="text-xs font-mono text-slate-400 mt-1">0{i + 1}</div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-[#1DA57A] transition-colors">{feat.title}</h3>
                      <p className="text-sm text-slate-500 max-w-sm">{feat.desc}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Capabilities Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {capabilities.map((cap, i) => (
              <motion.div
                key={cap.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 + i * 0.1 }}
              >
                <Tilt tiltMaxAngleX={15} tiltMaxAngleY={15} perspective={1000} transitionSpeed={1000} scale={1.05} className="h-full">
                  <div className="border border-slate-200 p-8 bg-slate-50 shadow-sm group relative overflow-hidden rounded-sm hover:border-[#1DA57A]/50 hover:shadow-md transition-all h-full">
                    <div className="flex flex-col h-full relative z-10">
                      <h3 className="text-lg font-bold text-slate-900 mb-4 group-hover:text-[#1DA57A] transition-colors">{cap.title}</h3>
                      <p className="text-xs text-slate-600 leading-relaxed">{cap.desc}</p>
                    </div>
                  </div>
                </Tilt>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Modules Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-slate-50 border border-slate-200 rounded-sm p-10"
        >
          <div className="text-[10px] font-bold text-slate-900 tracking-widest uppercase mb-8">AI Support across every Oracle module</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
             {aiModules.map((mod, i) => (
               <Tilt key={i} tiltMaxAngleX={20} tiltMaxAngleY={20} perspective={800} transitionSpeed={1000} scale={1.05}>
                 <div className="flex gap-3 items-start p-4 bg-white border border-slate-100 rounded-sm shadow-sm h-full cursor-pointer hover:border-[#1DA57A]/50 transition-colors">
                   <div className="w-1.5 h-1.5 mt-1.5 bg-[#1DA57A] flex-shrink-0 rounded-full"></div>
                   <div>
                     <div className="text-xs font-bold text-slate-900 mb-1">{mod.name}</div>
                     <div className="text-[10px] text-slate-500">{mod.sub}</div>
                   </div>
                 </div>
               </Tilt>
             ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
