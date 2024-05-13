import Banner from "@/components/Banner";
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"

const Contact: React.FC = () => {
    return (
        <div>
            <Banner />
            <Navbar />
            <div className="h-[59vh]" >
                contact
            </div>
            <Footer />
        </div>
    )
}

export default Contact;