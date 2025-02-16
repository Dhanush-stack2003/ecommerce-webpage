import { Route,Routes} from 'react-router-dom'
import Navbar from './components/navbar/Navbar';
import Cart from './pages/Cart'
import LoginSignup from './pages/LoginSignup'
import Shop from './pages/Shop';
import Product from './pages/Product'
import Shopcategory from './pages/Shopcategory';
import Footer from './components/footer/footer';
import kids_banner from './components/Assets/banner_kids.png'
import men_banner from './components/Assets/banner_mens.png'
import women_banner from './components/Assets/banner_women.png'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Shop />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<LoginSignup />} />
        <Route
          path="/men"
          element={<Shopcategory banner={men_banner} category={"men"} />}
        />
        <Route
          path="/women"
          element={<Shopcategory  banner={women_banner}
          category={"women"}/>}
        />
        <Route
          path="/kids"
          element={<Shopcategory  banner={kids_banner}
          category={"kids"}/>}
        />
        <Route path="/product" element={<Product />} >
        <Route path=":productID" element={<Product />} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
