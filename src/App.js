import './App.css';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Index from './pages/Index';
import Home from './components/home/Home';
import Cart from './components/cart/Cart';
import ProductDetail from './components/product/ProductDetail';

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
          <Route path='/' element={<Index/>}>
            <Route path='' element={<Home/>}/>
            <Route path='cart' element={<Cart/>}/>
            <Route path='product/:productId' element={<ProductDetail/>}/>
          </Route>
      
        </Route>
    )
  )

    return (
      <>
        
          <RouterProvider router={router} />
        
      </>
    
    );
}

export default App;
