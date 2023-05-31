import { BrowserRouter, Routes, Route } from "react-router-dom";

// Styles Import:
import "./app.scss";

// Component Import:
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Routes Import:
import Index from "./routes/Index";
import Profile from "./routes/Profile";
import Login from "./routes/Login";
import Men from "./routes/Men";
import Electronics from "./routes/Electronics";
import Women from "./routes/Women";
import Jewelry from "./routes/Jewelry";

// Dynamic Routes Import:
import Product from "./dynamic-routes/Product";


function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* Regular Routes */}
          <Route path={"/"} element={<Index />} />
          <Route path={"/profile"} element={<Profile />} />
          <Route path={"/login"} element={<Login />} />
          <Route path={"/men"} element={<Men />} />
          <Route path={"/electronics"} element={<Electronics />} />
          <Route path={"/women"} element={<Women />} />
          <Route path={"/jewelry"} element={<Jewelry />} />
          {/* Dynamic Routes */}
          <Route path={"/product/:id"} element={<Product />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
