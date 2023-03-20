import SearchIcon from "@mui/icons-material/Search";
import { TextField, Button} from "@mui/material";

const SearchPlants = () => {
  return (
    <>
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
    </>
  )
}

export default SearchPlants