import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { Toaster } from 'react-hot-toast';

const Home = lazy(() => import('./pages/Home/Home'));
const Catalog = lazy(() => import('./pages/Catalog/Catalog'));
const CamperDetails = lazy(() => import('./pages/CamperDetails/CamperDetails'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage'));

function App() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/catalog/:id" element={<CamperDetails />}>
            <Route path="features" element={<>FEATURES</>} />
            <Route path="reviews" element={<>REVIEWS</>} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
      <Toaster position="top-right" />
    </>
  );
}

export default App;
