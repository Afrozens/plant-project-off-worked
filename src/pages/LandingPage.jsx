import { motion } from "framer-motion";
import { Grid, Button } from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import plantImage from "@/assets/plant-one.png";
import plantImageTwo from "@/assets/plant-two.png";
import plantImageThree from "@/assets/plant-three.png";
import plantImageFour from "@/assets/plant-four.png";
import { useState } from "react";

const LandingPage = () => {
  const [imageLoading, setImageLoading] = useState(true);
  const [pulsing, setPulsing] = useState(true);

  const imageLoaded = () => {
    setImageLoading(false);
    setTimeout(() => setPulsing(false), 600);
  };
  return (
    <>
      <Grid container paddingBottom={"6rem"}>
        <Grid item xs={12} sm={6} paddingBottom={"1rem"}>
          <div
            className={`${pulsing ? "pulse" : ""
              } overflow-hidden max-auto my-2`}
            style={{ width: "100%" }}
          >
            <motion.img
            src={plantImage}
            alt="plant image"
            initial={{ height: "200px", opacity: 0 }}
            animate={{
              height: imageLoading ? "200px" : "auto",
              opacity: imageLoading ? 0 : 1,
            }}
            transition={
              ({ height: { delay: 0, duration: 0.4 } },
              { opacity: { delay: 0.5, duration: 0.4 } })
            }
            onLoad={imageLoaded}
          />
          </div>
        </Grid>
        <Grid item xs={12} sm={6} paddingBottom={"1rem"} paddingTop={"2rem"}>
          <h1 className="text-3xl font-bold leading-10 tracking-widest mb-4 md:text-4xl lg:text-6xl lg:leading-[5rem] lg:tracking-[0.3rem]">
            Strengthen your knowledge about plants
          </h1>
          <p className="text-gray-400 text-lg mb-4 sm:text-xl lg:text-2xl lg:leading-10 lg:mb-8 lg:tracking-widest">
            Improve your knowledge of your plants at home, learn about their
            care and consume all the information with just one search 🌱
          </p>
          <Button
            variant="contained"
            endIcon={<ArrowRightAltIcon />}
            color="primary"
          >
            Join now
          </Button>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12}>
          <h2 className="text-xl font-bold text-center leading-10 tracking-widest mb-2 md:text-2xl">
            <a
              href="https://perenual.com/docs/api"
              className="hover:underline hover:decoration-lime-700 text-[#C2EBC5]"
            >
              PLANT DATABASE TREFLE
            </a>{" "}
            & RESTful API
          </h2>
          <p className="text-gray-400 text-base text-center mb-4 md:text-xl">
            Over 300+ plant details/images
          </p>
        </Grid>
        <Grid item xs={12} sm={4}>
          <img src={plantImageTwo} alt="image plant two" />
          <p className="text-gray-400 text-base text-center mb-4 md:text-lg">
            Get all item based on a category
          </p>
        </Grid>
        <Grid item xs={12} sm={4}>
          <img src={plantImageThree} alt="image plant three" />
          <p className="text-gray-400 text-base text-center mb-4 md:text-lg">
            Searches through all plants and returns the closest results matching
          </p>
        </Grid>
        <Grid item xs={12} sm={4}>
          <img src={plantImageFour} alt="image plant four" />
          <p className="text-gray-400 text-base text-center mb-4 md:text-lg">
            Returns a single plants data within an object.
          </p>
        </Grid>
      </Grid>
    </>
  );
};

export default LandingPage;
