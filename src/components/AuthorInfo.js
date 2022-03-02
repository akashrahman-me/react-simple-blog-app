import author from '../images/author.jpeg'
import { Link } from 'react-router-dom'

export default function AuthorInfo() {
	return (
		<div className="d-flex align-items-center">
			<img src={author} alt="AUTHOR" className="rounded-circle" />
			<div className="ms-4">
				<Link to="/author">AKRUTI</Link>
				<p className="text-color">
					Like a carefree soul, she flies, with mascara in her eyes and words in her mind.
				</p>
			</div>
		</div>
	)
}
