import { Link } from 'react-router-dom'

export default function CommentLists() {
	return (
		<div className="list-group bg-dark posts-titles">
			{[...Array(8)].map(comment => (
				<li
					className="list-group-item bg-dark text-light list-group-item-action px-0"
					key={Math.random()}
				>
					<span>Bi Bi Quteja on </span>
					<Link to="/single">Quiz: This Is Your Next SUGAR Purchase</Link>
				</li>
			))}
		</div>
	)
}
