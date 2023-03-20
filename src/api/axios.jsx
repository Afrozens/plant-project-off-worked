import axios from "axios";

/* const config = {
    headers: {
        Authorization: import.meta.env.VITE_TREFLE_PLANT_TOKEN,
      },
} */

export const getPlantPage = async (pageParam = 1) => {
  const response = await axios.get(
    `https://perenual.com/api/species-list?page=${pageParam}&key=${
      import.meta.env.VITE_TREFLE_PLANT_TOKEN
    }`
  );

  return response.data;
};
