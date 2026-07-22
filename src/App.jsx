import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrustedBy from "./components/TrustedBy";
import About from "./components/About";
import Services from "./components/Services";
import Industries from "./components/Industries";
import WhyUs from "./components/WhyUs";
import FutureProducts from "./components/FutureProducts";
import Portfolio from "./components/Portfolio";
import TechStack from "./components/TechStack";
import Roadmap from "./components/Roadmap";
import Founder from "./components/Founder";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="relative bg-base text-ink font-body overflow-hidden">
      <Navbar />
      <main>
        <Hero />
        <TrustedBy />
        <About />
        <Services />
        <Industries />
        <WhyUs />
        <FutureProducts />
        <Portfolio />
        <TechStack />
        <Roadmap />
        <Founder />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
