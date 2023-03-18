import { Button, CardActionArea } from "@mui/material";

const CardPlant = () => {
  return (
    <div className="max-w-sm min-h-[150px] flex flex-col border-[6px] bg-white p-[1rem] sm:p-[0.4rem] rounded-md sm:flex-row sm:flex-wrap">
      <CardActionArea>
        <img
          src="https://bs.plantnet.org/image/o/412bd61c649147d73745a8c67e0987357823dc50"
          alt=""
          className="w-full h-48 sm:h-40 mx-auto"
        />
        <div className="flex flex-col gap-2 mt-4">
          <span className="tracking-[0.2rem] text-md font-bold uppercase">
            Avena barbata
          </span>
          <span className="font-semibold  text-gray-300">asdasd</span>
          <Button variant="outlined">More info</Button>
        </div>
      </CardActionArea>
    </div>
  );
};

export default CardPlant;
