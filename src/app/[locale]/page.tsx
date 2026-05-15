import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Products from "@/components/sections/Products";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Products />
      <Contact />
      <Footer />
    </>
  );
}
