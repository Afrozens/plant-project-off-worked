import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { SnackbarProvider } from "notistack";

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

export const AppWithProvider = ({ children }) => {
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
                        {children}
                    </SnackbarProvider>
                </ThemeProvider>
            </CacheProvider>
        </>
    )
}
