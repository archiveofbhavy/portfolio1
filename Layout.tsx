
import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen relative flex flex-col">
      <main className="flex-grow">
        {children}
      </main>
      <footer className="py-12 px-4 text-center text-[0.65rem] tracking-[0.3em] text-secondary-text opacity-40 uppercase font-bold">
        © 2025 Bhavy's Archive — Established Vol. I
      </footer>
    </div>
  );
};