
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { CASE_STUDIES } from '../constants';

export const GraphicDesignGrid: React.FC = () => {
  return (
    <div className="max-w-[1000px] mx-auto px-6 py-12">
      <Link to="/" className="inline-flex items-center gap-2 text-[0.7rem] tracking-widest uppercase text-secondary-text hover:text-primary-text mb-12 transition-colors">
        <ArrowLeft className="w-3 h-3" /> Archive
      </Link>

      <header className="mb-16">
        <h1 className="font-serif text-5xl mb-6">Graphic Design</h1>
        <p className="font-serif text-xl text-secondary-text max-w-lg leading-relaxed">
          Branding work and visual systems developed for independent studios.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {Object.values(CASE_STUDIES).map((study) => (
          <Link key={study.id} to={`/graphic-design/${study.id}`} className="group block">
            <div className="bg-white/40 border border-black/10 p-6 rounded-lg transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-xl group-hover:bg-white/60">
              <div className="aspect-[16/9] bg-black/5 rounded mb-8 overflow-hidden flex items-center justify-center">
                <img 
                  src={study.heroImage} 
                  alt={study.title} 
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                />
              </div>
              <h2 className="font-serif text-3xl mb-2">{study.title}</h2>
              <p className="text-xs text-secondary-text tracking-wide uppercase">{study.meta}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
