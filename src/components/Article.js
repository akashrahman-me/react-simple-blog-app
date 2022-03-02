import image from '../images/image.png'
import RelatedCategories from './RelatedCategories'
import { Link } from 'react-router-dom'

const categories = [
	{ path: '/category', name: 'Care' },
	{ path: '/category', name: 'Featured' },
]

export default function Article({ withCol }) {
	return (
		<div className={withCol !== false ? 'col-12 col-md-6 mb-5' : ''}>
			<div>
				<img width="100%" src={image} alt="" />
				<RelatedCategories categories={categories} />
				<h3 className="fs-5 text-center hover-opacity">
					<Link to="/single" className="text-white text-decoration-none">
						10 WAYS YOU CAN PRACTICE SELF-CARE ON A BUDGET
					</Link>
				</h3>
				<small className="text-secondary text-center d-block">January 19, 2022</small>
				<div className="text-center">
					<hr className="embed-hr" />
				</div>
				<div className="text-center">
					<Link to="/single" className="readmore hover-opacity">
						Read more
						<span className="fa fa-angle-double-right" />
					</Link>
				</div>
			</div>
		</div>
	)
}
