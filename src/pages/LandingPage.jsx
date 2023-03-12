import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import plantImage from "../assets/plant-one.png";
import plantImageTwo from "../assets/plant-two.png";

const LandingPage = () => {
  return (
    <>
      <Grid container xs={12} paddingBottom={"6rem"}>
        <Grid xs={12} sm={6} spacing={4} paddingBottom={"1rem"}>
          <img src={plantImage} alt="plant image" />
        </Grid>
        <Grid xs={12} sm={6} paddingBottom={"1rem"} paddingTop={"2rem"}>
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
      <Grid container xs={12}>
        <Grid xs={12}>
          <h2 className="text-xl font-bold text-center leading-10 tracking-widest mb-2">
            Lorem ipsum dolor sit amet 
          </h2>
          <span className="text-gray-400 text-base text-center mb-4">Lorem ipsum dolor sit amet.</span>
          <img src={plantImageTwo} alt="image plant two" />
        </Grid>
        <Grid xs={12}></Grid>
        <Grid xs={12}></Grid>
        <Grid xs={12}></Grid>
      </Grid>
    </>
  );
};

export default LandingPage;
