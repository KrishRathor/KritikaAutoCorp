import Banner from "@/components/Banner";
import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"
import Image from "next/image";

const Contact: React.FC = () => {
    return (
        <div>
            <Banner />
            <Navbar />
            <div className="h-[59vh] bg-[#EEF2FF] " >
                <h3 className="text-center text-3xl"  >Contact us</h3>
                <div className="flex flex-col md:flex-row md:justify-around" >
                    <div className="md:w-[25vw] mt-16 p-4" >
                        <div className="flex items-center mx-auto" >
                        <Image src={'/phone.png'} width={50} height={50} alt="phone" className="mt-4" />
                        <p className="text-2xl ml-4" >+91-9555000365</p>
                        </div>
                        <div className="flex items-center " >
                        <Image src={'/email.png'} width={50} height={50} alt="phone" className="mt-4" />
                        <p className="text-2xl ml-4" >Stopsafe@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Contact;