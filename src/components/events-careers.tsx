"use client";

import { motion } from "framer-motion";

const blogs = [
  {
    cat: "Oracle Fusion Cloud",
    title: "Oracle Fusion 24D Release — What's new for GCC enterprises",
    date: "Jun 2026",
    link: "Read on LinkedIn",
    href: "https://www.linkedin.com/search/results/content/?keywords=Oracle+Fusion+24D+GCC+enterprises&sortBy=date",
  },
  {
    cat: "AI in Oracle",
    title: "How Oracle Financials AI is changing month-end close in the Middle East",
    date: "May 2026",
    link: "Read on LinkedIn",
    href: "https://www.linkedin.com/search/results/content/?keywords=Oracle+Financials+AI+month+end+close+Middle+East&sortBy=date",
  },
  {
    cat: "SCM & Supply Chain",
    title: "5 Oracle SCM trends shaping construction procurement in UAE 2026",
    date: "Apr 2026",
    link: "Read on LinkedIn",
    href: "https://www.linkedin.com/search/results/content/?keywords=Oracle+SCM+UAE+construction+procurement+2026&sortBy=date",
  },
  {
    cat: "Analytics & Reporting",
    title: "OTBI vs Power BI — which should your Oracle team use in 2026?",
    date: "Mar 2026",
    link: "Read on LinkedIn",
    href: "https://www.linkedin.com/search/results/content/?keywords=OTBI+vs+Power+BI+Oracle+2026&sortBy=date",
  },
];

const events = [
  {
    day: "25",
    mon: "OCT",
    title: "Oracle AI World 2026 — Las Vegas (Global)",
    type: "Oracle Official",
    loc: "Las Vegas, USA",
    href: "https://www.oracle.com/ai-world/",
  },
  {
    day: "07",
    mon: "DEC",
    title: "GITEX Global 2026 — Oracle & AI in Enterprise",
    type: "Alt-S Attending",
    loc: "Expo City Dubai, UAE",
    href: "https://www.gitex.com",
  },
  {
    day: "20",
    mon: "OCT",
    title: "Oracle SCM & Supply Chain GCC Roundtable",
    type: "Alt-S Speaking",
    loc: "Doha, Qatar",
    href: "https://www.oracle.com/events/",
  },
  {
    day: "05",
    mon: "NOV",
    title: "HR World Summit UAE 2026 — Oracle HCM & Workforce",
    type: "Oracle Official",
    loc: "Abu Dhabi, UAE",
    href: "https://www.exito-e.com",
  },
];

const jobs = [
  {
    title: "Oracle Fusion Financials Consultant",
    loc: "Dubai, UAE",
    type: "Full-time",
    exp: "5+ yrs",
  },
  {
    title: "Oracle SCM / Inventory Functional Consultant",
    loc: "Doha, Qatar",
    type: "Full-time",
    exp: "4+ yrs",
  },
  {
    title: "OIC / Middleware Integration Developer",
    loc: "Remote / GCC",
    type: "Contract",
    exp: "3+ yrs",
  },
  {
    title: "OTBI / Power BI Report Developer",
    loc: "Dubai, UAE",
    type: "Full-time",
    exp: "3+ yrs",
  },
];

export function EventsCareers() {
  return (
    <section id="events-careers" className="w-full bg-slate-50 py-32 px-8 relative border-t border-slate-100">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
        
        {/* Events & Blogs */}
        <div>
          <div className="text-[10px] font-bold text-slate-500 tracking-[0.3em] uppercase mb-6 flex items-center gap-4">
            <span className="w-8 h-[1px] bg-slate-400"></span> Stay Informed
          </div>
          <h2 className="text-4xl font-sans font-bold text-slate-900 tracking-tighter mb-4">
            Events & Insights
          </h2>
          <p className="text-sm text-slate-600 mb-12 max-w-sm leading-relaxed">
            Industry developments, Oracle product updates, and architecture patterns — connected directly to our LinkedIn presence.
          </p>

          <div className="flex flex-col gap-10">
            <div>
              <h3 className="text-xs font-bold text-slate-900 tracking-widest uppercase border-b border-slate-200 pb-4 mb-4">Latest Briefings</h3>
              <div className="flex flex-col gap-2">
                {blogs.map((b, i) => (
                  <motion.a
                    key={i}
                    href={b.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="group flex flex-col p-6 rounded-sm border border-slate-200 bg-white shadow-sm hover:shadow-md hover:border-[#1DA57A]/50 transition-all cursor-pointer"
                  >
                    <div className="text-[9px] font-bold text-[#1DA57A] uppercase tracking-[0.2em] mb-2">{b.cat}</div>
                    <div className="text-lg font-bold text-slate-900 group-hover:text-[#1DA57A] transition-colors leading-tight mb-4">{b.title}</div>
                    <div className="flex justify-between items-center text-[10px] text-slate-500 font-semibold tracking-wider">
                      <span>{b.date}</span>
                      <span className="flex items-center gap-1.5 text-slate-700 border-b border-slate-300 pb-0.5 group-hover:border-[#1DA57A] group-hover:text-[#1DA57A] transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>
                        {b.link}
                      </span>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xs font-bold text-slate-900 tracking-widest uppercase border-b border-slate-200 pb-4 mb-4">Upcoming Engagements</h3>
              <div className="flex flex-col gap-2">
                {events.map((e, i) => (
                  <motion.a
                    key={i}
                    href={e.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                    className="group flex gap-6 p-6 rounded-sm border border-slate-200 bg-white shadow-sm hover:shadow-md hover:border-[#1DA57A]/50 transition-all cursor-pointer items-center"
                  >
                    <div className="w-16 h-16 border border-slate-200 bg-slate-50 flex flex-col items-center justify-center flex-shrink-0 rounded-sm group-hover:bg-[#1DA57A]/5 group-hover:border-[#1DA57A]/30 transition-colors">
                      <span className="text-xl font-sans font-bold text-slate-900 leading-none group-hover:text-[#1DA57A] transition-colors">{e.day}</span>
                      <span className="text-[9px] font-bold text-slate-500 tracking-widest mt-1">{e.mon}</span>
                    </div>
                    <div className="flex-1">
                      <div className="text-base font-bold text-slate-900 group-hover:text-[#1DA57A] transition-colors leading-tight mb-3">{e.title}</div>
                      <div className="flex gap-4 flex-wrap">
                        <span className="text-[10px] text-slate-500 font-semibold tracking-wider">
                          {e.loc}
                        </span>
                        <span className="text-[10px] text-slate-500 font-semibold tracking-wider border-l border-slate-200 pl-4">
                          {e.type}
                        </span>
                      </div>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-300 group-hover:text-[#1DA57A] transition-colors flex-shrink-0"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Careers */}
        <div className="relative">
          
          <div className="relative z-10">
            <div className="text-[10px] font-bold text-slate-500 tracking-[0.3em] uppercase mb-6 flex items-center gap-4">
              <span className="w-8 h-[1px] bg-slate-400"></span> Careers
            </div>
            <h2 className="text-4xl font-sans font-bold text-slate-900 tracking-tighter mb-4">
              Careers at Alt-S Group
            </h2>
            <p className="text-sm text-slate-600 mb-12 leading-relaxed">
              Oracle professionals who want real GCC project exposure, strong module depth, and the ability to make a genuine impact on enterprise implementations.
            </p>

            <div className="flex flex-col gap-2">
              {jobs.map((job, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group flex flex-col sm:flex-row sm:items-center justify-between p-6 rounded-sm bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-[#1DA57A]/50 transition-all cursor-pointer"
                >
                  <div className="mb-4 sm:mb-0">
                    <div className="text-lg font-bold text-slate-900 mb-4 group-hover:text-[#1DA57A] transition-colors">{job.title}</div>
                    <div className="flex flex-wrap gap-4">
                      <span className="text-[10px] text-slate-500 font-semibold tracking-wider">
                        {job.loc}
                      </span>
                      <span className="text-[10px] text-slate-500 font-semibold tracking-wider border-l border-slate-200 pl-4">
                        {job.type}
                      </span>
                      <span className="text-[10px] text-[#1DA57A] font-semibold tracking-wider border-l border-slate-200 pl-4">
                        {job.exp}
                      </span>
                    </div>
                  </div>
                  <a 
                    href={`mailto:careers@sifratc.com?subject=Application for ${job.title}`}
                    className="text-[10px] font-bold text-slate-900 uppercase tracking-[0.2em] border-b border-transparent group-hover:border-[#1DA57A] group-hover:text-[#1DA57A] transition-colors"
                  >
                    Apply
                  </a>
                </motion.div>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-12 p-10 border border-slate-200 shadow-sm bg-white text-center rounded-sm"
            >
              <h3 className="text-xl font-bold text-slate-900 mb-3">Architect the Future</h3>
              <p className="text-sm text-slate-600 mb-8">We are continually seeking top-tier talent in Oracle ERP and AI engineering.</p>
              <a 
                href="mailto:careers@sifratc.com"
                className="inline-block px-8 py-4 bg-gradient-to-r from-[#1DA57A] to-[#117655] text-white text-xs font-bold uppercase tracking-widest rounded-sm hover:shadow-[0_0_20px_rgba(29,165,122,0.4)] hover:scale-[1.02] transition-all duration-300 w-full sm:w-auto"
              >
                View All Open Roles
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
