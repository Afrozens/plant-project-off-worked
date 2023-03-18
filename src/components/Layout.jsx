import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { Outlet } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { SnackbarProvider } from "notistack";
import Header from "./Header";

const theme = createTheme({
  palette: {
    primary: {
      main: "#81c784",
      contrastText: "#fff",
    },
  },
});

const myCache = createCache({
  key: "my-prefix-key",
  stylisPlugins: [],
  insertionPoint: document.getElementById("emotion-insertion-point"),
});

const Layout = () => {
  return (
    <>
      <CacheProvider value={myCache}>
        <ThemeProvider theme={theme}>
          <SnackbarProvider
            maxSnack={3}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
          >
            <Header />
            <section className="min-h-screen w-full bg-slate-100 px-12 pt-6 lg:px-36 md:px-16">
              <Outlet />
            </section>
          </SnackbarProvider>
        </ThemeProvider>
      </CacheProvider>
    </>
  );
};

export default Layout;
