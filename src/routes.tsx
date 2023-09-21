import { Routes, Route } from 'react-router-dom';
import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';
import { ProductsProvider } from './contexts/ProductsContext';
import { ShopPage } from './pages/ShopPage';
import { NotFoundPage } from './pages/Not Found';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route element={<ProductsProvider />}>
        <Route path="/shop" element={<ShopPage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
