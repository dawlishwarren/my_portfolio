import Link from 'next/link';
import Layout from '../components/layout/Layout';
import styles from '../styles/404.module.scss';

export default function Custom404() {
	return (
		<Layout title='404 - Page not found' inner>
			<div className={styles.container}>
				<div className={styles.blob}>
					<svg
						viewBox='0 0 800 500'
						preserveAspectRatio='none'
						xmlns='http://www.w3.org/2000/svg'
						xmlnsXlink='http://www.w3.org/1999/xlink'
						width='100%'
						id='blobSvg'>
						<g transform='translate(156.06833267211914, 5.6094818115234375)'>
							<defs>
								<linearGradient id='gradient' x1='0%' y1='0%' x2='0%' y2='100%'>
									<stop
										offset='0%'
										style={{ stopColor: 'rgb(241, 219, 75)' }}
									/>
									<stop
										offset='100%'
										style={{ stopColor: 'rgb(195, 66, 63)' }}
									/>
								</linearGradient>
							</defs>
							<path fill='url(#gradient)'>
								<animate
									attributeName='d'
									values='M429.5,331.5Q380,413,298,406Q216,399,151.5,363.5Q87,328,111.5,261.5Q136,195,172,130.5Q208,66,294.5,75.5Q381,85,430,167.5Q479,250,429.5,331.5Z;

                M411,314Q352,378,281.5,400.5Q211,423,172,364.5Q133,306,126,246.5Q119,187,157.5,100.5Q196,14,272.5,70Q349,126,409.5,188Q470,250,411,314Z;

                M414.5,308.5Q344,367,275,404Q206,441,160.5,378Q115,315,99.5,242.5Q84,170,142,100.5Q200,31,279.5,72Q359,113,422,181.5Q485,250,414.5,308.5Z;

                M431.5,344.5Q400,439,297.5,466Q195,493,128,417Q61,341,77.5,258Q94,175,152,125.5Q210,76,284,95Q358,114,410.5,182Q463,250,431.5,344.5Z;
            
                M429.5,331.5Q380,413,298,406Q216,399,151.5,363.5Q87,328,111.5,261.5Q136,195,172,130.5Q208,66,294.5,75.5Q381,85,430,167.5Q479,250,429.5,331.5Z'
									repeatCount='indefinite'
									dur='15s'></animate>
							</path>
						</g>
					</svg>
				</div>
				<div className={styles.content}>
					<h1>404 Page not found</h1>
					<Link href='/'>
						<button>Take me home</button>
					</Link>
				</div>
			</div>
		</Layout>
	);
}
