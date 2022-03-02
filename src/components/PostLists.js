import { Link } from 'react-router-dom'

export default function PostLists() {
	return (
		<div className="list-group bg-dark posts-titles">
			{[...Array(8)].map(title => (
				<Link
					to="/single"
					className="list-group-item list-group-item-action bg-dark text-light px-0"
					key={Math.random()}
				>
					The Ultimate Guide To Picking The Right Mascara Wand
				</Link>
			))}
		</div>
	)
}
