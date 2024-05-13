import React from "react";

const Products: React.FC = () => {

    const images = [
        'http://www.dbibrakeparts.com/imges-newww/thiree-wheelers/B-SHOE-HOLD-DOWN-KIT-BAJAJ-COMPACT.jpeg',
        'http://www.dbibrakeparts.com/imges-newww/thiree-wheelers/BRAKE-SHOE-ST-GC1000-MAXIMA-ATUL-SHAKTI-ACE.jpeg',
        'http://www.dbibrakeparts.com/imges-newww/thiree-wheelers/RESERVOIR-ASEMBLY-FOR-MAXIMA-COMPACT-GC-1000-OPTIMA.jpeg'
    ]
  return (
    <div className="flex flex-col md:flex-row md:justify-around mt-2">
      {
        images.map(image => {
            return (
                <Product image={image} />
            )
        })
      }
    </div>
  );
};

interface ProdcutI {
    image: string
}

const Product: React.FC<ProdcutI> = (props) => {
  return (
    <div className="p-4">
      <div>
        <img
          src={props.image}
          alt="img"
          className="md:w-[25vw]"
        />
      </div>
      <div className="bg-[#EEF2FF] h-[5vh] text-center text-xl" >
        Brake Shoe Set Ape RH
      </div>
    </div>
  );
};

export default Products;
