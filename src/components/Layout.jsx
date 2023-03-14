import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";

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
          <Header />
          <section className="min-h-screen w-full bg-slate-100 px-12 pt-6 lg:px-36 md:px-16">
            <Outlet />
          </section>
        </ThemeProvider>
      </CacheProvider>
    </>
  );
};

export default Layout;
