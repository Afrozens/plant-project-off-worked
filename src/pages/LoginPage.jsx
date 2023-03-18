import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "@/app/features/user/userActions";
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
  Alert,
  Container,
} from "@mui/material";
import GrassIcon from "@mui/icons-material/Grass";

const initialStateLogin = {
  email: "",
  password: "",
};

const LoginPage = () => {
  const [login, setLogin] = useState(initialStateLogin);
  const [loginError, setLoginError] = useState("");
  const dispatch = useDispatch();
  const { success, loading, error } = useSelector((state) => state.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (success) {
      navigate("/home");
    }
  }, [navigate, success]);

  const handleChange = (e) => {
    setLogin({
      ...login,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoginError("");
    dispatch(userLogin(login));
    setLogin(initialStateLogin);

    if (error === "auth/internal-error") {
      setLoginError("Invalid email");
    } else if (error === "auth/wrong-password") {
      setLoginError("Wrong password");
    } //more validations here!
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

          {error && (
            <Alert variant="filled" severity="error">
              {loginError}
            </Alert>
          )}

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
              autoComplete="current-password"
              value={login.password}
              onChange={handleChange}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
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
              <Grid item xs>
                <Link
                  variant="body2"
                  onClick={() => navigate("/reset-password")}
                  component="button"
                >
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link
                  variant="body2"
                  onClick={() => navigate("/register")}
                  component="button"
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
