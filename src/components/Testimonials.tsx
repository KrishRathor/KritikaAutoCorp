import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

const card = (
  <React.Fragment>
    <CardContent className="md:w-[400px] md:h-[200px]" >
      <Typography color={'#644222'} className="" variant="h5" component="div">
        By Auto Company
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        Delhi
      </Typography>
      <Typography variant="h6">
        Very Good service and owner is very kind
        <br />
      </Typography>
    </CardContent>
  </React.Fragment>
);

const Testimonials: React.FC = () => {
  return (
    <div className="bg-[#EEF2FF] md:h-[30vh] mt-8 p-4">
      <h3 className="text-2xl text-[#6B7280] text-center">Testimonials</h3>
      <div className="flex mt-2 md:flex-row flex-col md:justify-around" >
        <Card variant="outlined">{card}</Card>
        <Card variant="outlined">{card}</Card>
        <Card variant="outlined">{card}</Card>
        <Card variant="outlined">{card}</Card>
      </div>
    </div>
  );
};

export default Testimonials;
