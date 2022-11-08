import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html>
			<Head>
				<link
					href='//db.onlinewebfonts.com/c/89189dfaa150ac6a43dc6e9d5a047686?family=Neutraface+Text+Bold'
					rel='stylesheet'
					type='text/css'
				/>
				<link
					href='//db.onlinewebfonts.com/c/f929174bda22c1821db22ab9760b082a?family=Baskerville'
					rel='stylesheet'
					type='text/css'
				/>
				<link
					href='//db.onlinewebfonts.com/c/32475be7e7241b887c54d2aee5876af0?family=Work+Sans'
					rel='stylesheet'
					type='text/css'
				/>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
