import { Route, Routes } from "react-router-dom";
import Navbar from "./navbar";
import Homepage from "./homepage";
import Footer from "./footer";
import About from "./about";
import Contact from "./contact";
import Billing from "./billing";
import PrivacyPolicy from "./terms-and-privacy";
import ProductsPage from "./products-page";
import BlogOne from "./blog-one";
import BlogTwo from "./blog-two";
import BlogThree from "./blog-three";
import Donation from "./donation";

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<Homepage />}
        />
        <Route path="/about-us" element={<About />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route
          path="/billing"
          element={<Billing />}
        />
        <Route
          path="/donation"
          element={<Donation />}
        />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route
          path="/products"
          element={<ProductsPage/>}
        />
        <Route path="/blog/one" element={<BlogOne />} />
        <Route path="/blog/two" element={<BlogTwo />} />
        <Route path="/blog/three" element={<BlogThree />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
