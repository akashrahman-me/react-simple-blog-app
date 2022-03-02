import { Link } from 'react-router-dom'

export default function CategoriesLists() {
	return (
		<div className="list-group posts-titles categories-names">
			{[...Array(6)].map(categoryTitle => (
				<Link
					to="/category"
					className="list-group-item list-group-item-action bg-dark text-decoration-none d-flex justify-content-between"
					key={Math.random()}
				>
					<div>
						<span className="fa fa-chevron-right fs-7" /> Care
					</div>
					<i className="text-secondary">(93)</i>
				</Link>
			))}
		</div>
	)
}
