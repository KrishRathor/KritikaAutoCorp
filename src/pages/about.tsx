import About from "@/components/About";
import Banner from "@/components/Banner";
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"

const AboutUs: React.FC = () => {
    return (
        <div>
            <Banner />
            <Navbar />
            <div className="md:h-[59vh] md:block md:mt-4 md:w-full md:mx-auto" >
                <About />
            </div>
            <Footer />
        </div>
    )
}

export default AboutUs; 