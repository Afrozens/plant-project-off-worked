import { Grid, TextField, Avatar, Divider, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import GrassIcon from "@mui/icons-material/Grass";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import TrefleIcon from "@/assets/TrefleIcon.svg";

const HomePage = () => {
  return (
    <main className="">
      <div className="flex w-full h-12 justify-between">
        <h4 className="text-lg tracking-widest">Home / </h4>
        <h4 className="text-lg tracking-widest">Welcome User</h4>
      </div>
      <Grid
        container
        columns={16}
        sx={{
          justifyContent: "center",
          height: "12rem",
          paddingTop: "1rem",
          marginBottom: "5rem",
        }}
      >
        <Grid
          item
          xs={12}
          sx={{ justifyContent: "center", alignCenter: "center" }}
        >
          <div className="flex mb-4">
            <Avatar sx={{ bgcolor: "primary", marginRight: "0.5rem" }}>
              <GrassIcon />
            </Avatar>
            <Divider orientation="vertical" variant="middle" flexItem />
            <img
              src={TrefleIcon}
              alt="trefle icon"
              className="w-10 h-10 ml-2"
            />
          </div>

          <h2 className="text-2xl font-bold leading-10 tracking-widest mb-6 sm:text-4xl ">
            Find Your{" "}
            <b className="underline decoration-[#629b65] text-[#629b65]">
              Plant
            </b>
          </h2>
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="search-plant"
            label="Search now"
            variant="filled"
            color="success"
            sx={{ marginBottom: "1rem", width: "100%" }}
          />
          <Button
            variant="contained"
            endIcon={<SearchIcon />}
            sx={{ margin: "0, auto" }}
          >
            Search
          </Button>
        </Grid>
      </Grid>
      <Grid container columns={16}>
        <Grid item xs={12}>
          <h3 className="font-bold text-lg my-8">
            Plant <b className="text-[#629b65] mx-2">Botanical data</b>
          </h3>
        </Grid>
        <div className="w-full h-full bg-slate-200 mx-auto flex items-center flex-col ">
          <div className="w-full height-36 flex justify-between items-center my-4 ">
            <span className="ml-4">10 Result</span>{" "}
            <Button
              variant="contained"
              endIcon={<ExpandMoreIcon />}
              color="info"
              sx={{ marginRight: "1rem" }}
            >
              Sort
            </Button>
          </div>
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 sm:gap-2 md:grid-cols-3 md:gap-2 lg:grid-cols-4 lg:gap-2 xl:gap-4 sm:px-4">
           
          </div>
        </div>
      </Grid>
    </main>
  );
};

export default HomePage;
