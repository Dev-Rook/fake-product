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

// Dynamic Routes Import:
import Men from "./dynamic-routes/Men";
import Electronics from "./dynamic-routes/Electronics";
import Women from "./dynamic-routes/Women";
import Jewelry from "./dynamic-routes/Jewelry";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        {/* Regular Routes */}
        <Route path={"/"} element={<Index />} />
        <Route path={"/profile"} element={<Profile />} />
        <Route path={"/login"} element={<Login />} />
        {/* Dynamic Routes */}
        <Route path={"/men/:id"} element={<Men />} />
        <Route path={"/electronics/:id"} element={<Electronics />} />
        <Route path={"/women/:id"} element={<Women />} />
        <Route path={"/jewelry/:id"} element={<Jewelry />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
