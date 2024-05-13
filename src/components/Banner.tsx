import Image from "next/image";

const Banner: React.FC = () => {

    return (
        <div className="bg-[#EEF2FF] py-2 md:py-0 flex flex-col md:flex-row justify-around items-center">
            <div className="flex justify-center items-center mb-2 md:mb-0 md:mr-4">
                <Image
                    src={"/location.png"}
                    width={25}
                    height={25}
                    alt="location_logo"
                    className="mt-1"
                />
                <p className="ml-2 text-xs md:text-sm">Address: CW-367, Sanjay Gandhi Transport Nagar Delhi-110042</p>
            </div>
            <div className="flex justify-center items-center mb-2 md:mb-0 md:mr-4">
                <Image
                    src={"/phone.png"}
                    width={25}
                    height={25}
                    alt="phone_logo"
                    className="mt-1"
                />
                <p className="ml-2 text-xs md:text-sm">+91-9555000365</p>
            </div>
            <div className="flex justify-center items-center">
                <Image
                    src={"/email.png"}
                    width={25}
                    height={25}
                    alt="email_logo"
                    className="mt-1"
                />
                <p className="ml-2 text-xs md:text-sm">Stopsafe@gmail.com</p>
            </div>
        </div>
    )
}

export default Banner;
