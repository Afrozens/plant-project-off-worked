import { Alert, Box, Button, Container, TextField, Typography } from "@mui/material";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../contexts/AuthContext";

const ResetPage = () => {
  const [error, setError] = useState("");
  const [reset, setReset] = useState({});
  const [isAccept, setIsAccept] = useState(true);
  const { resetPassword } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleResetPassword = async (email) => {
    try {
      if (!error.code) {
        await resetPassword(email);
        setIsAccept(true);
        setError("")
        
        setInterval(() => {
            setIsAccept(false)
            navigate("/login")
        }, 3500);
      }
      //Falta notistack
    } catch (error) {
        if (error.code === "auth/user-not-found") {
            setError("User not found, try again");
        } else if (error.code === "auth/invalid-email") {
            setError("Yout email is invalid, try again")
        }
    }
  };

  const handleChange = (e) => {
    setReset({
      ...reset,
      [e.target.name]: e.target.value,
    });
  };
  /* 
  const handleGoLogin = () => {
    setIsAccept(false);
    navigate("/login");
  };
 */
  return (
    <>
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {isAccept ? (
            <>
              <Typography
                variant="h5"
                sx={{ flexGrow: 1, fontWeight: "bold", marginBottom: "1rem" }}
              >
                Email sent
              </Typography>
              <Typography sx={{ flexGrow: 1, marginBottom: "1rem" }}>
                We sent an email to <b className="bold">{reset.input}</b>! If
                this email is connected to a PlantProject account, you'll be
                able to reset your password.
              </Typography>
              <Box>
                <Button
                  type="submit"
                  variant="contained"
                  sx={{ mt: 3, mb: 2, mr: 2 }}
                  color="warning"
                  onClick={() => setIsAccept(false)}
                >
                  Try Again
                </Button>
                {/* <Button
                  type="submit"
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  onClick={handleGoLogin}
                >
                  Back to Login
                </Button> */}
              </Box>
            </>
          ) : (
            <>
              {error && (
                <Alert variant="filled" severity="error" sx={{marginBottom: "1rem"}}>
                  {error}
                </Alert>
              )}
              <Typography
                variant="h6"
                sx={{ flexGrow: 1, fontWeight: "bold", marginBottom: "1rem" }}
              >
                Enter your email address{" "}
                <b className="text-[#C6EBC5]">PlantProject</b>
              </Typography>
              <TextField
                id="input"
                variant="outlined"
                name="input"
                required
                placeholder="email@gmail.com"
                type="email"
                onChange={handleChange}
                value={reset.input}
              />
              <Button
                type="submit"
                onClick={() => handleResetPassword(reset.input)}
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Reset Password
              </Button>
            </>
          )}
        </Box>
      </Container>
    </>
  );
};

export default ResetPage;
