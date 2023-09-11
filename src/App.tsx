import Products from "./components/products/products";
import Hero from "./components/hero";
import Quote from "./components/quote";
import AboutUs from "./components/aboutus";
import Navbar from "./components/navigation/navbar";
import { CartProvider } from "react-use-cart";
import Footer from "./components/navigation/footer";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle("revealed", true);
          observer.unobserve(entry.target);
        });
      },
      { threshold: 1 }
    );

    const toRevealElements = document.querySelectorAll(".to-reveal");

    toRevealElements.forEach((element) => {
      observer.observe(element);
    });
  }, []);

  return (
    <CartProvider>
      <Navbar />

      <main>
        <Hero />
        <Quote />
        <AboutUs />
        <Products />
      </main>

      <Footer />
    </CartProvider>
  );
}

export default App;
