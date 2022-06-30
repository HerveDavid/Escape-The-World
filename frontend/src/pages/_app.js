import Head from 'next/head';
import { CacheProvider } from '@emotion/react';
import { LocalizationProvider } from '@mui/x-date-pickers'
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { createEmotionCache } from '../utils/create-emotion-cache';
import { theme } from '../theme';
import { useRouter } from 'next/router';
import useAuthStore from 'src/hooks/auth-store';
import NotFound from 'src/pages/404';
import Tours from 'src/pages/tours';
import { CustomerLayout } from 'src/components/customer-layout';

const clientSideEmotionCache = createEmotionCache();

const App = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  // Check role of user
  let allowed = true;
  let getLayout = Component.getLayout ?? ((page) => page);
  let ComponentToRender = Component;
  const router = useRouter();
  const { user } = useAuthStore();

  // Forbidden some path
  if (router.pathname.startsWith("/dashboard") && user?.role != "ADMIN") {
    allowed = false;
  }
  if (router.pathname.startsWith("/settings") && user?.role != "ADMIN") {
    allowed = false;
  }
  if (router.pathname.startsWith("/customers") && user?.role != "ADMIN") {
    allowed = false;
  }

  if (router.pathname.startsWith("/rooms") && user?.role != "ADMIN") {
    ComponentToRender = Tours;
    getLayout = ((page) => <CustomerLayout>{page}</CustomerLayout>)
  }

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>
          Escape the World
        </title>
        <meta
          name="viewport"
          content="initial-scale=1, width=device-width"
        />
      </Head>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {allowed ? getLayout(<ComponentToRender {...pageProps} />) : <NotFound /> }
        </ThemeProvider>
      </LocalizationProvider>l
    </CacheProvider>
  );
};

export default App;
