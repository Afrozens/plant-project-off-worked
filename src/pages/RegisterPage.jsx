import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userRegister } from "@/app/features/user/userActions";
import { useSnackbar } from "notistack";
import { hiddenMessage, showMessage } from "@/app/features/message/messageSlice";
import { getValidationError } from "@/utilities/getValidationError";
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

const initialStateRegister = {
  username: "",
  email: "",
  password: "",
};

const RegisterPage = () => {
  const [register, setRegister] = useState(initialStateRegister);
  const navigate = useNavigate();
  const location = useLocation()
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar()
  const { success, loading, error } = useSelector((state) => state.user);
//if there's success in the register
  useEffect(() => {
    if (success && location.pathname === "/register") {
      navigate("/home");
    }
  }, [navigate, success]);
//if there's error in the register
  useEffect(()=> {
    if (error && !success) {
      enqueueSnackbar(getValidationError(error), { variant: "error" })
    }
  }, [error])
  const handleChange = (e) => {
    setRegister({
      ...register,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    dispatch(userRegister(register));
    dispatch(showMessage("You have successfully registered"))
    setTimeout(() => {
      dispatch(hiddenMessage())
    }, 5000);
    //clean state
    setRegister(initialStateRegister);
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
            Sign up
          </Typography>

          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container>
              <Grid item xs={12} sx={{ mb: 3 }}>
                <TextField
                  autoComplete="name"
                  name="username"
                  required
                  fullWidth
                  error={Boolean(error)}
                  id="username"
                  label="Username"
                  onChange={handleChange}
                  value={register.username}
                />
              </Grid>
              <Grid item xs={12} sx={{ mb: 3 }}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  error={Boolean(error)}
                  autoComplete="email"
                  onChange={handleChange}
                  value={register.email}
                />
              </Grid>
              <Grid item xs={12} sx={{ mb: 3 }}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  error={Boolean(error)}
                  autoComplete="new-password"
                  onChange={handleChange}
                  value={register.password}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              disabled={loading}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link
                  variant="body2"
                  component="button"
                  onClick={() => navigate("/login")}
                >
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default RegisterPage;
