import { useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../contexts/Auth/AuthContext";
import { userLogout, userGet } from "../app/features/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import Drawer from "./Drawer";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Button from "@mui/material/Button";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";

export default function MenuAppBar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const { success } = useSelector((state) => state.user);
  const { logout, user, accessToken } = useContext(AuthContext);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { jwtToken } = useSelector((state) => state.user);
  
  useEffect(() => {
    if (accessToken) {
      if (jwtToken === accessToken) {
        dispatch(userGet(user))
        console.log(user)
      }
    }
  }, [accessToken]);

  const handleLogout = async () => {
    await logout();
    dispatch(userLogout());
    setAnchorEl(null);
    navigate("/");
  };

  const handleProfile = () => {
    navigate("/user-profile");
    setAnchorEl(null);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Box component="button" sx={{ marginRight: "2rem" }}>
            <Drawer />
          </Box>
          <Typography
            variant="h6"
            sx={{ marginRight: "2rem", flexGrow: 1, fontWeight: "bold" }}
          >
            <b className="text-[#C6EBC5] text-2xl uppercase">🪴Plant</b>Project
          </Typography>
          {success ? (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleProfile}>Profile</MenuItem>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </Menu>
            </div>
          ) : (
            <Button color="inherit" onClick={() => navigate("/login")}>
              Login
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
