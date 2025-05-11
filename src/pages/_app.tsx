import { CacheProvider, EmotionCache } from '@emotion/react';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import CssBaseline from '@mui/material/CssBaseline';
import {
  ThemeProvider,
  StyledEngineProvider,
  createTheme,
} from '@mui/material/styles';
import store from '../store';
import { Provider } from 'react-redux';
import '../../styles/globals.css';
import createEmotionCache from '@/utils/util-cache';
import { Inter } from 'next/font/google';

const clientSideEmotionCache = createEmotionCache();

export interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}
const inter = Inter({ subsets: ['latin'] });

const theme = createTheme({
  cssVariables: {
    colorSchemeSelector: 'class',
  },
  colorSchemes: {
    light: true,
  },
});

const MyApp: React.FC<MyAppProps> = (props: MyAppProps) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <main className={inter.className}>
      <CacheProvider value={emotionCache}>
        <Head>
          <title>Behive Assignment</title>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        <Provider store={store}>
          <StyledEngineProvider injectFirst>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              {<Component {...pageProps} />}
            </ThemeProvider>
          </StyledEngineProvider>
        </Provider>
      </CacheProvider>
    </main>
  );
};

export default MyApp;
