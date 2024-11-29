import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import './scss/app.scss';
import MainLayouts from './layouts/MainLayouts';
import { lazy, Suspense } from 'react';

const FullPiiza = lazy(() => /* webpackChunkName: "FullPizza" */ import('./pages/FullPiiza'));
const Cart = lazy(() => /* webpackChunkName: Cart */ import('./pages/Cart'));
const NotFound = lazy(() => /* webpackChunkName: "NotFound" */ import('./pages/NotFound'));

function App() {
  return (
    <Suspense fallback={<div>Идет загрузка</div>}>
      <Routes>
        <Route path="/" element={<MainLayouts />}>
          <Route path="" element={<Home />} />
          <Route path="cart" element={<Cart />} />
          <Route path="pizza/:id" element={<FullPiiza />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
