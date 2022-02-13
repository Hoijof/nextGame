import React from 'react';
import { CacheProvider } from '@emotion/react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { Grid, Link } from '@system';

import createEmotionCache from '../lib/createEmotionCache';
import lightTheme from '../styles/theme/lightTheme';
// import '../styles/globals.css';

const clientSideEmotionCache = createEmotionCache();

const MyApp = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={lightTheme}>
        <CssBaseline />
        <Grid container spacing="2" sx={{ height: '100%' }}>
          <Grid item xs={2} container direction="column" sx={{ backgroundColor: 'secondary.main' }}>
            <Grid item><Link href="/">Home</Link></Grid>
            <Grid item><Link href="/cards/create">Create Card</Link></Grid>
            <Grid item><Link href="/cards/list">List Card</Link></Grid>
          </Grid>
          <Grid item xs={10}>
            <Component {...pageProps} />
          </Grid>
        </Grid>
      </ThemeProvider>
    </CacheProvider>
  );
};

export default MyApp;