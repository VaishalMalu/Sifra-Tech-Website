import { Hero } from "@/components/hero";
import { WhatWeOffer } from "@/components/what-we-offer";
import { Industries } from "@/components/industries";
import { CaseStudies } from "@/components/case-studies";
import { AiSolutions } from "@/components/ai-solutions";
import { EventsCareers } from "@/components/events-careers";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <WhatWeOffer />
      <Industries />
      <CaseStudies />
      <AiSolutions />
      <EventsCareers />

      {/* CTA Section */}
      <section className="w-full bg-slate-50 py-24 px-8 border-t border-slate-200">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div>
            <h2 className="text-3xl md:text-5xl font-sans font-bold text-slate-900 tracking-tighter mb-4">
              Ready to architect<br />
              <span className="text-[#1DA57A]">your enterprise future?</span>
            </h2>
          </div>
          <div className="flex flex-col items-end gap-6 text-right">
            <p className="text-sm text-slate-600 max-w-xs leading-relaxed">
              Book a technical discovery session with our Oracle specialists to discuss your implementation or upgrade strategy.
            </p>
            <button className="px-8 py-4 bg-[#1DA57A] text-white text-[10px] font-bold uppercase tracking-[0.2em] rounded-sm hover:bg-[#158763] transition-colors w-full sm:w-auto">
              Book a Discovery Call
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
