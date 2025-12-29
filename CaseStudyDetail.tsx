
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, Download, X, Maximize2 } from 'lucide-react';
import { CASE_STUDIES } from '../constants';

export const CaseStudyDetail: React.FC = () => {
  const { id } = useParams();
  const study = id ? CASE_STUDIES[id] : null;
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [id, isModalOpen]);

  if (!study) return <div className="p-20 text-center font-serif text-2xl">Case study not found.</div>;

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="max-w-[1400px] mx-auto px-6 py-12 animate-in fade-in slide-in-from-bottom-8 duration-1000 ease-out">
      {/* Navigation */}
      <Link to="/graphic-design" className="inline-flex items-center gap-2 text-[0.7rem] tracking-widest uppercase text-secondary-text hover:text-primary-text mb-12 transition-colors font-bold">
        <ArrowLeft className="w-3 h-3" /> Graphic Design
      </Link>

      {/* Header */}
      <header className="mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12">
          <div className="max-w-3xl">
            <h1 className="font-serif text-6xl md:text-8xl mb-6 tracking-tighter leading-none">{study.title}</h1>
            <p className="font-serif text-xl md:text-2xl text-secondary-text leading-relaxed italic opacity-80">
              {study.description}
            </p>
          </div>
          <div className="text-[0.6rem] tracking-[0.4em] uppercase text-secondary-text pb-4 font-bold border-b border-black/10 min-w-[200px]">
            {study.meta}
          </div>
        </div>
      </header>

      {/* SECTION 1: LANDSCAPE BRANDING (Top) */}
      {study.previewPages && (
        <section className="mb-32">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-[0.6rem] tracking-[0.4em] font-bold uppercase text-secondary-text opacity-40">
              Visual System & Guidelines (Landscape)
            </h2>
            <button 
              onClick={openModal}
              className="text-[0.6rem] tracking-widest uppercase font-bold flex items-center gap-2 hover:opacity-60 transition-opacity"
            >
              Open Full Guidelines <Maximize2 className="w-3 h-3" />
            </button>
          </div>

          <div className="relative group/desk">
            <div className="flex flex-row gap-8 overflow-x-auto py-10 px-4 -mx-4 no-scrollbar scroll-smooth">
              {study.previewPages.map((page, i) => (
                <button 
                  key={i} 
                  onClick={openModal}
                  className="flex-shrink-0 w-[85vw] md:w-[550px] aspect-[1.6/1] bg-white shadow-xl p-3 group/page transition-all duration-700 ease-out hover:-translate-y-8 hover:shadow-[0_40px_80px_rgba(0,0,0,0.12)] text-left"
                  style={{ transform: `rotate(${(i % 2 === 0 ? 0.5 : -0.5)}deg)` }}
                >
                  <div className="w-full h-full border border-black/5 overflow-hidden relative bg-gray-50">
                    <img src={page} alt={`Guideline ${i + 1}`} className="w-full h-full object-cover transition-all duration-1000 group-hover/page:scale-105" />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover/page:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="bg-white/90 backdrop-blur px-4 py-2 rounded-full text-[0.6rem] tracking-widest uppercase font-bold flex items-center gap-2">
                        View Document <Maximize2 className="w-3 h-3" />
                      </div>
                    </div>
                    <div className="absolute bottom-4 right-4 text-[0.5rem] font-mono opacity-20 font-bold">
                      PAGE_{String(i + 1).padStart(2, '0')}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* SECTION 2: PORTRAIT DESIGNS (Bottom) */}
      <section className="space-y-32">
        <div className="pt-16 border-t border-black/5">
          <h2 className="text-[0.6rem] tracking-[0.4em] font-bold uppercase text-secondary-text opacity-40 mb-12">
            Design Selection (Portrait)
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {study.images.map((img, i) => (
              <div 
                key={i} 
                className={`group relative rounded-2xl overflow-hidden shadow-2xl aspect-[3/4] ${i % 4 === 0 ? 'lg:col-span-2 lg:aspect-[16/9]' : ''} transition-all duration-700 hover:shadow-primary-text/10`}
              >
                <img src={img} alt="" className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                <div className="absolute bottom-8 left-8 text-white opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-4 group-hover:translate-y-0">
                  <span className="text-[0.6rem] tracking-[0.3em] font-bold uppercase">Work Sample 0{i + 1}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FULL DOCUMENT MODAL (Vertical Scroll) */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[100] bg-paper overflow-y-auto animate-in fade-in zoom-in-95 duration-500 flex flex-col items-center">
          {/* Sticky Header for Modal */}
          <div className="sticky top-0 w-full bg-paper/80 backdrop-blur-md z-[110] px-8 py-6 flex items-center justify-between border-b border-black/5">
            <div className="flex flex-col">
              <h3 className="font-serif text-2xl">{study.title}</h3>
              <span className="text-[0.5rem] tracking-[0.3em] font-bold uppercase opacity-40">Brand Guidelines — Full Document</span>
            </div>
            <div className="flex items-center gap-6">
              <a href={study.pdfLink} className="text-[0.6rem] tracking-widest uppercase font-bold flex items-center gap-2 hover:opacity-60 transition-opacity hidden sm:flex">
                Download PDF <Download className="w-3 h-3" />
              </a>
              <button 
                onClick={closeModal}
                className="p-3 bg-black/5 hover:bg-black/10 rounded-full transition-colors flex items-center justify-center"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>
          
          {/* Vertical Stack of Pages */}
          <div className="w-full max-w-5xl px-4 py-16 space-y-12">
            {study.previewPages?.map((page, i) => (
              <div 
                key={i} 
                className="w-full aspect-[1.6/1] bg-white shadow-2xl p-4 md:p-8 animate-in slide-in-from-bottom-12 duration-700 fill-mode-both"
                style={{ animationDelay: `${i * 150}ms` }}
              >
                <div className="w-full h-full border border-black/5 overflow-hidden flex items-center justify-center bg-gray-50">
                  <img 
                    src={page} 
                    alt={`Page ${i + 1}`} 
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <div className="mt-4 flex justify-between items-center opacity-30 text-[0.5rem] font-mono font-bold tracking-widest uppercase">
                  <span>Section {String(i + 1).padStart(2, '0')}</span>
                  <span>{study.title} Archive // 2025</span>
                </div>
              </div>
            ))}
            
            <div className="py-20 text-center">
              <p className="text-[0.6rem] tracking-[0.4em] font-bold uppercase opacity-30">End of Documentation</p>
              <button 
                onClick={closeModal}
                className="mt-8 px-10 py-4 border border-black/10 rounded-full text-[0.6rem] tracking-[0.3em] font-bold uppercase hover:bg-primary-text hover:text-white transition-all"
              >
                Return to Study
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
