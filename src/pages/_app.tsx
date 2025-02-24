import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();

  useEffect(() => {
    // Redireciona para a página de login se a rota atual for a raiz
    if (router.pathname === '/') {
      router.push('/login');
    }
  }, [router]);

  useEffect(() => {
    // Redireciona para a ficha pré-anestésica em branco após login
    if (router.pathname === '/login' && pageProps.isLoggedIn) {
      sessionStorage.setItem('isNewLogin', 'true'); // Set flag for new login
      router.push('/new-patient-form');
    }
  }, [router, pageProps.isLoggedIn]);

  return <Component {...pageProps} />;
};

export default MyApp;
