import { useSelector } from "react-redux";
import SearchIcon from "@mui/icons-material/Search";
import MenuBookIcon from '@mui/icons-material/MenuBook';
import YardIcon from '@mui/icons-material/Yard';

const HomePage = () => {
  const { userInfo } = useSelector((state) => state.user);
  return (
    <>
      <div className="flex w-full h-12 justify-between">
        <h4 className="text-lg tracking-widest text-gray-500 mr-16">Home /</h4>
        <h4 className="text-lg tracking-widest">
          Welcome <b className=" underline">{userInfo.username}</b>
        </h4>
      </div>
      <h2 className="uppercase text-2xl font-bold text-center my-8 sm:text-3xl lg:text-5xl">
        OVER 10,000+ SPECIES OF PLANTS AVAILABLE!
      </h2>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 sm:gap-2 md:grid-cols-3 md:gap-6  xl:gap-4 sm:px-4 justify-center">
        <div className="flex flex-col text-center p-6">
          <SearchIcon color="primary" sx={{ margin: "0 auto", width: "36px", height: "36px" }} />
          <h4 className="text-2xl font-semibold tracking-widest my-2 lg:text-3xl">Researchers</h4>
          <p className="text-gray-600 text-xl lg:text-2xl">Search over (almost) all the plants of the world over multiple criterias, and get up-to-date informations, taxonomical references and more</p>
        </div>
        <div className="flex flex-col text-center p-6">
          <MenuBookIcon color="primary" sx={{ margin: "0 auto", width: "36px", height: "36px" }} />
          <h4 className="text-2xl font-semibold tracking-widest my-2 lg:text-3xl">Students</h4>
          <p className="text-gray-600 text-xl lg:text-2xl">Get in touch! We try to support educational projects as much as we can!</p>
        </div>
        <div className="flex flex-col text-center p-6">
          <YardIcon color="primary" sx={{ margin: "0 auto", width: "36px", height: "36px" }} />
          <h4 className="text-2xl font-semibold tracking-widest my-2 lg:text-3xl">Gardeners & nature lovers</h4>
          <p className="text-gray-600 text-xl lg:text-2xl">Get detailed informations about how, when and where to grow your plants.</p>
        </div>
      </div>
    </>
  );
};

export default HomePage;
