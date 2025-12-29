
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

interface PlaceholderProps {
  title: string;
}

export const Placeholder: React.FC<PlaceholderProps> = ({ title }) => {
  return (
    <div className="max-w-[1000px] mx-auto px-6 py-32 text-center">
      <h1 className="font-serif text-6xl mb-8">{title}</h1>
      <p className="font-serif text-2xl text-secondary-text mb-12 italic">
        "This wing of the archive is currently being curated."
      </p>
      <Link to="/" className="inline-flex items-center gap-2 text-[0.7rem] tracking-widest uppercase text-secondary-text hover:text-primary-text transition-colors">
        <ArrowLeft className="w-3 h-3" /> Return to Archive
      </Link>
    </div>
  );
};
