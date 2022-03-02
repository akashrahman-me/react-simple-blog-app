import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import thumbnail from '../images/thumbnail.jpg'
import { Link } from 'react-router-dom'

const responsive = {
	desktop: {
		breakpoint: { max: 5000, min: 992 },
		items: 4,
	},
	tablet: {
		breakpoint: { max: 992, min: 576 },
		items: 2,
	},
	mobile: {
		breakpoint: { max: 576, min: 0 },
		items: 1,
	},
}

export default function PostsSlider() {
	return (
		<div className="posts-slider py-3 text-center">
			<Carousel responsive={responsive} autoPlay>
				{[...Array(15)].map(post => (
					<div
						key={Math.random()}
						className="position-relative bg-dark"
						style={{ padding: '0 0.1em' }}
					>
						<img src={thumbnail} alt="THUMBNAIL" width="100%" style={{ aspectRatio: '3/4' }} />
						<Link to="/single" className="position-absolute d-block slider-post-title fw-medium">
							THE ULTIMATE GUIDE TO PICKING THE RIGHT MASCARA WAND
						</Link>
					</div>
				))}
			</Carousel>
		</div>
	)
}
