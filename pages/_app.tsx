import '../styles/globals.scss';
import '../styles/transition.scss';
import '../styles/Nprogress.scss';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'next-themes';
import { LazyMotion, domAnimation } from 'framer-motion';
import Router from 'next/router';
import NProgress from 'nprogress';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

NProgress.configure({ showSpinner: false });

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<LazyMotion features={domAnimation} strict>
			<ThemeProvider enableSystem={true}>
				<Head>
					<link rel='icon' href='my_favicon.ico' />
					<link
						rel='apple-touch-icon'
						sizes='180x180'
						href='/apple-touch-icon.png'
					/>
					<link
						rel='icon'
						type='image/png'
						sizes='32x32'
						href='/favicon-32x32.png'
					/>
					<link
						rel='icon'
						type='image/png'
						sizes='16x16'
						href='/favicon-16x16.png'
					/>
					<link rel='manifest' href='/site.webmanifest' />
					<link rel='mask-icon' href='/safari-pinned-tab.svg' color='#5bbad5' />
					<meta name='msapplication-TileColor' content='#da532c' />
				</Head>
				<Component {...pageProps} />
			</ThemeProvider>
		</LazyMotion>
	);
}

export default MyApp;
