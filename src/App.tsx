import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import './scss/app.scss';
import MainLayouts from './layouts/MainLayouts';
import { lazy, Suspense } from 'react';

const FullProduct = lazy(() => /* webpackChunkName: "FullProduct" */ import('./pages/FullProduct'));
const Cart = lazy(() => /* webpackChunkName: Cart */ import('./pages/Cart'));
const NotFound = lazy(() => /* webpackChunkName: "NotFound" */ import('./pages/NotFound'));

function App() {
  return (
    <Suspense fallback={<div>Идет загрузка</div>}>
      <Routes>
        <Route path="/" element={<MainLayouts />}>
          <Route path="" element={<Home />} />
          <Route path="cart" element={<Cart />} />
          <Route path="product/:id" element={<FullProduct />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
