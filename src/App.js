import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Import BrowserRouter instead of createBrowserRouter
import Index from './pages/Index';
import Home from './components/home/Home';
import Cart from './components/cart/Cart';
import ProductDetail from './components/product/ProductDetail';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}> {/* Set the basename here */}
      <Routes>
        <Route path="/" element={<Index />}>
          <Route index element={<Home />} />
          <Route path="cart" element={<Cart />} />
          <Route path="product/:productId" element={<ProductDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
