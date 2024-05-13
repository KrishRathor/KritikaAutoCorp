import Image from "next/image";
import { Inter } from "next/font/google";
import About from "@/components/About";
import Banner from "@/components/Banner";
import Slider from "@/components/Carousel";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Products from "@/components/Products";
import Testimonials from "@/components/Testimonials";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <div>
        <Banner />
      </div>
      <div className="mt-[0.5px]">
        <Navbar />
      </div>
      <div><Slider /></div> 
      <div>
        <div className="mt-8">
          <About />
        </div>
        <div className="mt-8">
          <Products />
        </div>
        <div className="mt-8">
          <Testimonials />
        </div>
        <Footer /> 
      </div>
    </div>
  );
}
