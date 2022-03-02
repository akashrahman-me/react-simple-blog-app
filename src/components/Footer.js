export default function Footer() {
	return (
		<footer className="bg-dark text-light py-5">
			<hr className="mb-5" />
			<div className="container">
				<ul className="list-group list-group-flush list-group-horizontal posts-titles justify-content-center flex-column flex-md-row">
					<a
						href="#"
						className="list-group-item list-group-item bg-dark d-flex flex-column align-items-center text-decoration-none hover-primary-group border-0"
					>
						<span className="fa fa-facebook mb-1" />
						<span className="fs-7 fw-medium">FACEBOOK</span>
					</a>
					<a
						href="#"
						className="list-group-item list-group-item bg-dark d-flex flex-column align-items-center text-decoration-none hover-primary-group border-0"
					>
						<span className="fa fa-twitter mb-1" />
						<span className="fs-7 fw-medium">TWITTER</span>
					</a>
					<a
						href="#"
						className="list-group-item list-group-item bg-dark d-flex flex-column align-items-center text-decoration-none hover-primary-group border-0"
					>
						<span className="fa fa-instagram mb-1" />
						<span className="fs-7 fw-medium">INSTAGRAM</span>
					</a>
					<a
						href="#"
						className="list-group-item list-group-item bg-dark d-flex flex-column align-items-center text-decoration-none hover-primary-group border-0"
					>
						<span className="fa fa-pinterest mb-1" />
						<span className="fs-7 fw-medium">PINTEREST</span>
					</a>
					<a
						href="#"
						className="list-group-item list-group-item bg-dark d-flex flex-column align-items-center text-decoration-none hover-primary-group border-0"
					>
						<span className="fa fa-linkedin mb-1" />
						<span className="fs-7 fw-medium">LINKEDIN</span>
					</a>
					<a
						href="#"
						className="list-group-item list-group-item bg-dark d-flex flex-column align-items-center text-decoration-none hover-primary-group border-0"
					>
						<span className="fa fa-youtube-play mb-1" />
						<span className="fs-7 fw-medium">YOUTUBE</span>
					</a>
				</ul>
				<hr style={{ backgroundColor: '#777' }} />
			</div>
			<div className="py-3 py-md-4" />
			<div className="text-center">
				<div>
					<a href="#" className="text-color text-decoration-none hover-primary mx-3">
						About
					</a>
					<a href="#" className="text-color text-decoration-none hover-primary mx-3">
						Contact
					</a>
				</div>
				<p className="text-secondary fs-7 mt-3">
					Copyright © 2022 SUGAR Cosmetics. All rights reserved
				</p>
			</div>
		</footer>
	)
}
