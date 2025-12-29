
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { ArchiveHome } from './components/ArchiveHome';
import { GraphicDesignGrid } from './components/GraphicDesignGrid';
import { CaseStudyDetail } from './components/CaseStudyDetail';
import { Placeholder } from './components/Placeholder';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<ArchiveHome />} />
          <Route path="/graphic-design" element={<GraphicDesignGrid />} />
          <Route path="/graphic-design/:id" element={<CaseStudyDetail />} />
          <Route path="/sketches" element={<Placeholder title="Sketches" />} />
          <Route path="/poetry" element={<Placeholder title="Poetry" />} />
          <Route path="/experiments" element={<Placeholder title="Experiments" />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
