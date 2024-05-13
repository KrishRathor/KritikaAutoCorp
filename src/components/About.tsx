import Image from "next/image";

const About: React.FC = () => {

    return (
        <div className="flex md:flex-row flex-col border p-4 bg-[#EEF2FF]" >
            <img
                src={'http://www.dbibrakeparts.com/imges-newww/about-3.png'}
                alt="about image"
                width={500}
                height={500}
                className="md:ml-[10vw]"
            />
            <div className="md:ml-8 text-[#6B7280]" >
                <h3 className="md:text-3xl md:mt-8 mt-4" >About Us</h3>
                <p className="md:w-[40vw] md:text-xl md:ml-10 mt-2" >
                KRITIKA AUTO CORPORATION, We have been manufacturing o.e. Brake parts since 11 Years with world class technology, especially for all types of Three Wheelers & Four Wheelers. Since then over the years the company has achieved an impeccable reputation in terms of quality, reliability and delivery of its all types Brake Parts, with the result that the company at present is meeting the various requirements of all major automotive components. The brake parts that we offer are precisely engineered using the most advanced components and technology. These brake parts are best known for their smooth functioning. Fulfilling our Customer's needs for the best Quality products, we deliver our products according to their needs. We offer our wide range of products that are available in various specification and Sizes.
                </p>
            </div>
        </div>
    )
}

export default About;