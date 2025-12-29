import React from 'react';
import { FOLDERS } from '../constants';
import { Folder } from './Folder';

export const ArchiveHome: React.FC = () => {
  return (
    <div className="max-w-[1000px] mx-auto px-6 py-20">
      <header className="mb-20">
        <span className="text-[0.7rem] tracking-[0.2em] font-medium text-secondary-text block mb-4">
          EST. 2025 — VOL. I
        </span>
        <h1 className="font-serif text-6xl md:text-7xl mb-6">Bhavy’s Archive</h1>
        <p className="font-serif text-xl md:text-2xl text-secondary-text max-w-lg leading-relaxed">
          A monumental place for his experiences, thoughts and creations.
        </p>
      </header>

      <section className="flex flex-col">
        {FOLDERS.map((folder, idx) => (
          <Folder key={folder.id} data={folder} isFirst={idx === 0} />
        ))}
      </section>
    </div>
  );
};