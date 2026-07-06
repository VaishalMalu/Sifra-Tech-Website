import Link from "next/link";
import Image from "next/image";
// Icons implemented as inline SVGs below
import logoImg from "@/assets/sifratech logo.png";

export function Footer() {
  return (
    <footer className="bg-white pt-20 pb-10 px-8 border-t border-slate-200 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[1px] bg-gradient-to-r from-transparent via-[#1DA57A]/30 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-12">
        <div className="md:col-span-2">
          <Link href="/" className="flex items-center mb-6">
            <Image src={logoImg} alt="Sifratech Logo" width={180} height={50} className="object-contain" />
          </Link>
          <p className="text-xs text-slate-600 leading-relaxed max-w-xs">
            Delivering world-class enterprise AI, Oracle ERP, and Digital Transformation solutions.
          </p>
        </div>

        <div>
          <h5 className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-4">Services</h5>
          <div className="flex flex-col gap-3">
            <Link href="#" className="text-xs text-slate-600 hover:text-[#1DA57A] transition-colors">Oracle ERP</Link>
            <Link href="#" className="text-xs text-slate-600 hover:text-[#1DA57A] transition-colors">AI Solutions</Link>
            <Link href="#" className="text-xs text-slate-600 hover:text-[#1DA57A] transition-colors">Digital Twin</Link>
            <Link href="#" className="text-xs text-slate-600 hover:text-[#1DA57A] transition-colors">Data Engineering</Link>
          </div>
        </div>

        <div>
          <h5 className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-4">Company</h5>
          <div className="flex flex-col gap-3">
            <Link href="#" className="text-xs text-slate-600 hover:text-slate-900 transition-colors">About Us</Link>
            <Link href="#events-careers" className="text-xs text-slate-600 hover:text-slate-900 transition-colors">Careers</Link>
            <Link href="#case-studies" className="text-xs text-slate-600 hover:text-slate-900 transition-colors">Case Studies</Link>
            <a href="mailto:info@sifratc.com" className="text-xs text-slate-600 hover:text-slate-900 transition-colors">Contact</a>
          </div>
        </div>

        <div>
          <h5 className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-4">Connect</h5>
          <div className="flex gap-4">
            <a href="https://twitter.com/sifratech" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-md bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-400 hover:text-[#1DA1F2] hover:border-[#1DA1F2] hover:shadow-[0_0_10px_rgba(29,161,242,0.3)] hover:-translate-y-1 transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
            </a>
            <a href="mailto:info@sifratc.com" className="w-8 h-8 rounded-md bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-400 hover:text-[#1DA57A] hover:border-[#1DA57A] hover:shadow-[0_0_10px_rgba(29,165,122,0.3)] hover:-translate-y-1 transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
            </a>
            <a href="tel:+971586007669" className="w-8 h-8 rounded-md bg-slate-50 border border-slate-200 flex items-center justify-center text-slate-400 hover:text-[#1DA57A] hover:border-[#1DA57A] hover:shadow-[0_0_10px_rgba(29,165,122,0.3)] hover:-translate-y-1 transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-[10px] text-slate-500">
          © {new Date().getFullYear()} SIFRATECH. All rights reserved.
        </p>
        <div className="flex gap-6">
          <Link href="#" className="text-[10px] text-slate-500 hover:text-slate-900 transition-colors">Privacy Policy</Link>
          <Link href="#" className="text-[10px] text-slate-500 hover:text-slate-900 transition-colors">Terms of Service</Link>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full bg-[#1DA57A] text-white text-center py-2 text-[10px] uppercase tracking-[0.3em] font-bold">
        Website Under Construction
      </div>
    </footer>
  );
}
