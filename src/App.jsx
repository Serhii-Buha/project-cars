import { lazy } from 'react';
import { Route, Routes } from 'react-router';
import Layout from 'components/layout/Layout';

const HomePage = lazy(() => import('pages/home/HomePage'));
const CatalogPage = lazy(() => import('pages/catalog/CatalogPage'));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="catalog" element={<CatalogPage />} />
        <Route path="favorites" element={<CatalogPage />} />
      </Route>
      <Route path="*" element={<HomePage />} />
    </Routes>
  );
};

export default App;
