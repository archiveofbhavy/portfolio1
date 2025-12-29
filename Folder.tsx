import React from 'react';
import { Link } from 'react-router-dom';
import { FolderData } from '../types';

interface FolderProps {
  data: FolderData;
  isFirst?: boolean;
}

export const Folder: React.FC<FolderProps> = ({ data, isFirst }) => {
  const tabPositionClasses = {
    'left': 'left-0',
    'center-left': 'left-[15%]',
    'center-right': 'left-[40%]',
    'right': 'right-0'
  };

  // Explicit rounding logic for seamless tab integration
  const bodyRoundingClasses = 
    data.tabPosition === 'left' ? 'rounded-tr-2xl rounded-br-2xl rounded-bl-2xl rounded-tl-none' :
    data.tabPosition === 'right' ? 'rounded-tl-2xl rounded-br-2xl rounded-bl-2xl rounded-tr-none' :
    'rounded-b-2xl rounded-t-none';

  return (
    <Link 
      to={data.path} 
      className={`
        group relative block w-full outline-none
        ${!isFirst ? '-mt-[10vh]' : ''}
      `}
      style={{ zIndex: 10 - data.index }}
    >
      {/* 
        Unified Transformation Container:
        This prevents the tab and body from detaching during animations.
      */}
      <div className="relative transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:-translate-y-12 group-hover:z-[60]">
        
        {/* The Tab */}
        <div className={`
          absolute -top-[39px] h-[40px] px-10 flex items-center rounded-t-2xl
          text-[0.6rem] tracking-[0.2em] uppercase font-bold
          transition-colors duration-300
          ${tabPositionClasses[data.tabPosition]}
          ${data.color}
          /* 1px overlap ensures no sub-pixel gaps */
          z-10 -bottom-[1px]
        `}>
          {data.title}
          <div className="absolute inset-x-0 top-0 h-[1px] bg-white/10 rounded-t-2xl" />
        </div>

        {/* The Folder Body */}
        <div 
          className={`
            relative w-full shadow-2xl transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]
            /* Initial height vs Expanded hover height */
            h-[24vh] group-hover:h-[48vh]
            ${bodyRoundingClasses}
            ${data.color}
            overflow-hidden
          `}
        >
          {/* Physical Detail Layers */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="folder-texture absolute inset-0 opacity-10 mix-blend-overlay" />
            <div className={`absolute inset-0 border-t border-white/10 ${bodyRoundingClasses}`} />
          </div>

          {/* Large decorative index number */}
          <div className="absolute top-12 right-12 text-[12rem] font-serif leading-none opacity-5 pointer-events-none transition-all duration-700 group-hover:opacity-10 group-hover:scale-110">
            {data.index}
          </div>

          {/* Content Area */}
          <div className="absolute bottom-0 left-0 right-0 p-12 z-20">
            <div className="flex flex-col transform translate-y-2 group-hover:translate-y-0 transition-transform duration-700 ease-out">
              <h2 className="font-serif text-5xl md:text-6xl mb-4 transition-all duration-500 group-hover:tracking-tight">
                {data.title}
              </h2>
              <p className="text-xs md:text-sm opacity-60 tracking-[0.25em] font-medium uppercase transition-opacity duration-500 group-hover:opacity-90 max-w-md">
                {data.description}
              </p>
            </div>
          </div>
        </div>

        {/* Ambient occlusion shadow cast on lower folders */}
        <div className="absolute -bottom-24 left-0 right-0 h-24 bg-gradient-to-b from-black/20 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
      </div>
    </Link>
  );
};