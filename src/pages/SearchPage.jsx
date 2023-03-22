import {  useRef } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux"
import { useInfiniteQuery } from "@tanstack/react-query";
import { getPlantPage } from "@/api/axios";
import {CardPlant, ButtonUp, SearchPlants} from "@/components";
import { Grid, Avatar, Divider, Button, CircularProgress } from "@mui/material";
import GrassIcon from "@mui/icons-material/Grass";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import perenualIcon from "@/assets/perenualIcon.png";

const SearchPage = () => {
  const {userInfo} = useSelector((state) => state.user)
  const {
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    data: plantsData,
    status,
    error,
  } = useInfiniteQuery({
    queryKey: ["plants"],
    queryFn: ({ pageParam = 1 }) => getPlantPage(pageParam),
    getNextPageParam: (page) => (page.current_page === page.last_page ? undefined : page.current_page + 1),
    select: (plantsData) => ({
      pages: [...plantsData.pages].reverse(),
      pageParams: [...plantsData.pageParams].reverse()
    }),
    staleTime: 0
  });

  console.log(plantsData)
  const intObserver = useRef();
  const lastPlantRef = (plant) => {
      if (isFetchingNextPage) return;

      if (intObserver.current) intObserver.current.disconnect();

      intObserver.current = new IntersectionObserver((plant) => {
        if (plant[0].isIntersecting && hasNextPage) {
          console.log("Volviendo a pedir data");
          fetchNextPage();
        }
      });

      if (plant) intObserver.current.observe(plant);
    }

  const content = plantsData?.pages.map((pg) => {
    const { data } = pg;
    return data.map((plant, i) => {
      if (data.length === i + 1) {
        return <CardPlant ref={lastPlantRef} key={plant.id} plant={plant} />;
      }
      return <CardPlant key={plant.id} plant={plant} />;
    });
  });

  return (
    <main className="">
      <div className="flex w-full h-12 justify-between">
        <h4 className="text-lg tracking-widest text-gray-500"><Link to="/home" className="cursor-pointer hover:underline hover:text-black">Home</Link> / Search</h4>
        <h4 className="text-lg tracking-widest">Welcome <b className=" underline">{userInfo.username}</b></h4>
      </div>
      <ButtonUp />
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
          <div className="flex mb-4 items-center">
            <Avatar sx={{ bgcolor: "primary", marginRight: "0.5rem" }}>
              <GrassIcon />
            </Avatar>
            <Divider
              orientation="vertical"
              variant="middle"
              flexItem
              sx={{ marginLeft: "1rem" }}
            />
            <img
              src={perenualIcon}
              alt="perenual icon database api"
              className="w-16 h-16 ml-2"
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
          <SearchPlants />
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
            <span className="ml-4 text-lg">{plantsData ? plantsData?.pages.length * 30 : 0 } Results</span>{" "}
            <Button
              variant="contained"
              endIcon={<ExpandMoreIcon />}
              color="info"
              sx={{ marginRight: "1rem" }}
            >
              Sort
            </Button>
          </div>
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 sm:gap-2 md:grid-cols-3 md:gap-6 lg:grid-cols-4 lg:gap-2 xl:gap-4 sm:px-4 justify-center">
            {content}
            {isFetchingNextPage && <CircularProgress color="primary" sx={{margin: "0 auto"}}/>}
          </div>
        </div>
      </Grid>
    </main>
  );
};

export default SearchPage;
