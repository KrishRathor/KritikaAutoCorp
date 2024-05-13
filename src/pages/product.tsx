import Banner from "@/components/Banner";
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"

const Product: React.FC = () => {
    return (
        <div>
            <Banner />
            <Navbar />
            <div className="h-[59vh]" >
                product
            </div>
            <Footer />
        </div>
    )
}

export default Product;