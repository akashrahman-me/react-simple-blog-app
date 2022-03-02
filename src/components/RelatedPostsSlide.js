import 'react-multi-carousel/lib/styles.css'
import image from '../images/image.png'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import { Link } from 'react-router-dom'

const responsive = {
	desktop: {
		breakpoint: { max: 5000, min: 992 },
		items: 3,
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

export default function RelatedPostsSlide() {
	return (
		<div className="position-relative pb-5 pt-2">
			<h4 className="fs-5 text-center my-4">YOU MAY ALSO LIKE</h4>
			<Carousel responsive={responsive} showDots renderDotsOutside={true} arrows={false} autoPlay>
				{[...Array(6)].map(post => (
					<div className="px-2" key={Math.random()}>
						<img className="w-100" src={image} alt="THUMBNAIL" />
						<Link className="pt-3 pb-1 fs-6 d-block text-center lh-sm" to="/single">
							The Ultimate Guide To Picking The Right Mascara...
						</Link>
						<small className="text-muted d-block text-center">January 20, 2022</small>
					</div>
				))}
			</Carousel>
		</div>
	)
}
