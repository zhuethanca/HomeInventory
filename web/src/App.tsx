/** @jsxImportSource @emotion/react */
import React from 'react';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import {Routes, Route, Link} from "react-router-dom";
import {
    createTheme, ThemeProvider,
} from '@mui/material/styles';

import useMediaQuery from '@mui/material/useMediaQuery';
import {css} from '@emotion/react'
import CssBaseline from '@mui/material/CssBaseline';
import Navigation from "./Navigation";
import Inventory from "./Inventory";

export default function App() {
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
    const theme = React.useMemo(
        () => {
            const theme = createTheme({
                palette: {
                    primary: {
                        main: '#0bd6e6'
                    },
                    secondary: {
                        main: '#ff46ca'
                    },
                    mode: prefersDarkMode ? 'dark' : 'light',
                },
            })
            document.querySelector('meta[name="theme-color"]')?.setAttribute("content", theme.palette.background.default);
            return theme
        },
        [prefersDarkMode],
    );

    return (
        <ThemeProvider theme={theme}>
                <CssBaseline/>
                <div css={css`
                  background-color: ${theme.palette.background.default};
                `}>
                    <Routes>
                        <Route path="/" element={<Navigation />}>
                            <Route index element={<Inventory />} />
                            <Route path="about" element={<About />} />
                            <Route path="dashboard" element={<Dashboard />} />

                            {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
                            <Route path="*" element={<NoMatch />} />
                        </Route>
                    </Routes>
                </div>
        </ThemeProvider>

    );
}

function About() {
    return (
        <div>
            <h2>About</h2>
        </div>
    );
}

function Dashboard() {
    return (
        <div>
            <h2>Dashboard</h2>
        </div>
    );
}

function NoMatch() {
    return (
        <div>
            <h2>Nothing to see here!</h2>
            <p>
                <Link to="/">Go to the home page</Link>
            </p>
        </div>
    );
}