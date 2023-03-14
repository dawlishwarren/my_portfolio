import '../styles/globals.scss';
import '../styles/transition.scss';
import '../styles/Nprogress.scss';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from 'next-themes';
import { LazyMotion, domAnimation, MotionConfig } from 'framer-motion';
import Router from 'next/router';
import NProgress from 'nprogress';
import { Work_Sans } from 'next/font/google';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());
NProgress.configure({ showSpinner: false });

const workSans = Work_Sans({
	subsets: ['latin'],
});

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<LazyMotion features={domAnimation} strict>
			<MotionConfig reducedMotion='user'>
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
						<link
							rel='mask-icon'
							href='/safari-pinned-tab.svg'
							color='#5bbad5'
						/>
						<meta name='msapplication-TileColor' content='#da532c' />
					</Head>
					<main className={workSans.className}>
						<Component {...pageProps} />
					</main>
				</ThemeProvider>
			</MotionConfig>
		</LazyMotion>
	);
}

export default MyApp;
