import { Avatar } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

const ButtonUp = () => {
  const handleUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
      <Avatar onClick={handleUp} variant="contained" sx={{borderRadius: "50%", position: "fixed", cursor: "pointer", bottom: "10px", right: "10px"}} color="primary"><ArrowUpwardIcon /></Avatar>
  );
};

export default ButtonUp;
