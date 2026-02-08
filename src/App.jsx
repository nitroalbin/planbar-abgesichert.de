import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/ui/Layout';

// Lazy Load Pages for Performance
const AdvertorialPage = lazy(() => import('./pages/AdvertorialPage'));
const FunnelPage = lazy(() => import('./pages/FunnelPage'));
const ImpressumPage = lazy(() => import('./pages/ImpressumPage'));
const DatenschutzPage = lazy(() => import('./pages/DatenschutzPage'));

// Simple Loading Spinner
const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-brand-50">
    <div className="w-12 h-12 border-4 border-brand-200 border-t-brand-500 rounded-full animate-spin"></div>
  </div>
);

function App() {
  return (
    <Router>
      <Layout>
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            <Route path="/" element={<AdvertorialPage />} />
            <Route path="/check" element={<FunnelPage />} />
            <Route path="/impressum" element={<ImpressumPage />} />
            <Route path="/datenschutz" element={<DatenschutzPage />} />
          </Routes>
        </Suspense>
      </Layout>
    </Router>
  );
}

export default App;
