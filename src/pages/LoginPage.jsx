import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "@/app/features/user/userActions";
import { hiddenMessage, showMessage } from "../app/features/message/messageSlice";
import { getValidationError } from "../utilities/getValidationError";
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Grid,
  Box,
  Typography,
  Container,
} from "@mui/material";
import GrassIcon from "@mui/icons-material/Grass";

import { useSnackbar } from "notistack";
const initialStateLogin = {
  email: "",
  password: "",
};

const LoginPage = () => {
  const [login, setLogin] = useState(initialStateLogin);
  const dispatch = useDispatch();
  const { success, loading, error } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const location = useLocation()
  const { enqueueSnackbar } = useSnackbar()
  useEffect(() => {
    if (success && location.pathname === "/login") {
      navigate("/home");
    }
  }, [navigate, success]);

  useEffect(()=> {
    if (error && !success) {
      enqueueSnackbar(getValidationError(error), { variant: "error" })
    }
  }, [error])

  const handleChange = (e) => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    dispatch(userLogin(login));
    dispatch(showMessage("You are logged in correctly"))
    setTimeout(() => {
      dispatch(hiddenMessage())
    }, 5000);
    //clean states
    setLogin(initialStateLogin);

  };

  return (
    <>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "primary" }}>
            <GrassIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>

          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              error={Boolean(error)}
              autoFocus
              value={login.email}
              onChange={handleChange}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              error={Boolean(error)}
              autoComplete="current-password"
              value={login.password}
              onChange={handleChange}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              disabled={loading}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item>
                <Link
                  variant="body2"
                  sx={{ cursor: "pointer" }}
                  onClick={() => navigate("/register")}
                >
                  Don't have an account? Sign Up
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default LoginPage;
