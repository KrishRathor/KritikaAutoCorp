import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { CardMedia } from "@mui/material";

const Product: React.FC = () => {
  const images = [
    {
      url: "http://www.dbibrakeparts.com/imges-newww/thiree-wheelers/B-SHOE-HOLD-DOWN-KIT-BAJAJ-COMPACT.jpeg",
      text: "Brake Shoe Set Ape RH",
    },
    {
      url: "http://www.dbibrakeparts.com/imges-newww/thiree-wheelers/BRAKE-SHOE-ST-GC1000-MAXIMA-ATUL-SHAKTI-ACE.jpeg",
      text: "Brake Shoe Set Ape RH",
    },
    {
      url: "http://www.dbibrakeparts.com/imges-newww/thiree-wheelers/RESERVOIR-ASEMBLY-FOR-MAXIMA-COMPACT-GC-1000-OPTIMA.jpeg",
      text: "Brake Shoe Set Ape RH",
    },
    {
      url: "http://www.dbibrakeparts.com/imges-newww/thiree-wheelers/RESERVOIR-ASEMBLY-FOR-MAXIMA-COMPACT-GC-1000-OPTIMA.jpeg",
      text: "Brake Shoe Set Ape RH",
    },
    {
      url: "http://www.dbibrakeparts.com/imges-newww/thiree-wheelers/RESERVOIR-ASEMBLY-FOR-MAXIMA-COMPACT-GC-1000-OPTIMA.jpeg",
      text: "Brake Shoe Set Ape RH",
    },
  ];

  return (
    <div>
      <Banner />
      <Navbar />
      <div className="bg-[#EEF2FF] flex md:flex-row flex-col md:justify-around flex-wrap">
        {
            images.map((img, index) => {
                return (
                    <div key={index} className="w-[25vw] m-2" >
                        <ImageCard url={img.url} text={img.text} />
                    </div>
                )
            })
        }
      </div>
      <Footer />
    </div>
  );
};

interface ImageCardProps {
  url: string;
  text: string;
}

const ImageCard: React.FC<ImageCardProps> = (props) => {
  const { url, text } = props;

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="iamge"
        height="140"
        image={url}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {text}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Product;
