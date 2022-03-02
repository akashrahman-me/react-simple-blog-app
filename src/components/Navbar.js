import { useEffect, useRef, useState } from 'react'
import Offcanvas from 'react-bootstrap/Offcanvas'
import { Link } from 'react-router-dom'
import logo from '../images/logo.jpg'

const links = [
	{
		path: '/',
		name: 'home',
	},
	{
		path: '/category',
		name: 'featured',
	},
	{
		path: '/category',
		name: 'makeup',
	},
	{
		path: '/category',
		name: 'skin',
	},
	{
		path: '/category',
		name: 'care',
	},
	{
		path: '/category',
		name: 'hair',
	},
	{
		path: '/category',
		name: 'quiz',
	},
	{
		path: '/category',
		name: 'shop',
	},
]

export default function Navbar() {
	const [menu, setMenu] = useState(false)
	const toggleMenu = () => setMenu(!menu)
	const [width, setWidth] = useState(0)
	const [staticSearch, setStaticSearch] = useState(false)
	const toggleStaticSearch = e => {
		e.preventDefault()
		setStaticSearch(!staticSearch)
	}

	const navbar = useRef(null)

	useEffect(() => {
		setWidth(document.body.clientWidth)
		window.addEventListener('scroll', function () {
			if (navbar.current) {
				if (window.scrollY > 70) {
					navbar.current.classList.add('active')
				} else {
					navbar.current.classList.remove('active')
				}
			}
		})
	}, [])

	return (
		<nav
			className="navbar navbar-expand-md bg-dark justify-content-between static-navbar py-0 sticky-top"
			ref={navbar}
		>
			<div className="container-xl align-items-center position-relative">
				<Link to="/" className="navbar-brand py-0">
					<img className="rounded-circle" height="60" src={logo} alt="LOGO" />
				</Link>
				{width >= 768 && (
					<ul className="navbar-nav static-navbar-nav py-0">
						{links.map(link => (
							<li className="nav-item" key={link.name}>
								<Link to={link.path} className="nav-link">
									{link.name}
								</Link>
							</li>
						))}
					</ul>
				)}

				<ul className="list-unstyled d-flex static-icon mb-0 align-items-center">
					{width >= 450 && (
						<>
							<li>
								<a href="#">
									<span className="fa fa-facebook" />
								</a>
							</li>
							<li>
								<a href="#">
									<span className="fa fa-twitter" />
								</a>
							</li>
							<li>
								<a href="#">
									<span className="fa fa-instagram" />
								</a>
							</li>
							<li>
								<a href="#">
									<span className="fa fa-pinterest" />
								</a>
							</li>
							<li>
								<a href="#">
									<span className="fa fa-linkedin" />
								</a>
							</li>
							<li>
								<a href="#">
									<span className="fa fa-youtube-play" />
								</a>
							</li>
							<li>
								<a href="#">
									<span className="fa fa-envelope" />
								</a>
							</li>
						</>
					)}
					{width <= 768 && (
						<li className="mx-1" onClick={toggleMenu}>
							<a href="#">
								<span style={{ fontSize: '16px' }} className="fa fa fa-bars" />
							</a>
						</li>
					)}
					<li>
						<a href="#" onClick={toggleStaticSearch}>
							<span style={{ fontSize: '16px' }} className="fa fa-search" />
						</a>
					</li>
				</ul>

				{staticSearch && (
					<form
						className="position-absolute w-100 bg-dark"
						style={{ zIndex: 9999, left: 0, right: 0 }}
					>
						<div className="d-flex">
							<input
								className="w-100 px-2 py-3 border-0 bg-dark text-white"
								type="text"
								placeholder="Search ..."
							/>
							<button type="submit" className="btn px-4" onClick={toggleStaticSearch}>
								<span className="fa fa-close text-white" />
							</button>
						</div>
					</form>
				)}

				{width <= 768 && (
					<Offcanvas
						placement="end"
						show={menu}
						onHide={toggleMenu}
						className="text-light"
						style={{ maxWidth: 300, backgroundColor: '#212121' }}
					>
						<Offcanvas.Header className="flex-column">
							<div className="d-block text-start w-100">
								<button type="button" class="btn" onClick={toggleMenu}>
									<span className="fa fa-close text-light fs-5"></span>
								</button>
							</div>
							<Offcanvas.Title>
								<Link to="/">
									<img src={logo} alt="LOGO" width="100" className="rounded-circle" />
								</Link>
							</Offcanvas.Title>
						</Offcanvas.Header>
						<Offcanvas.Body>
							<div className="list-group list-group-flush">
								{links.map(link => (
									<Link
										to={link.path}
										className="list-group-item list-group-item-action text-light text-uppercase fs-7 fw-medium py-3 px-0"
										style={{ backgroundColor: '#212121', borderColor: '#333' }}
										key={Math.random()}
									>
										{link.name}
									</Link>
								))}
							</div>
							<p className="my-4 text-color">
								Copyright &copy; 2022 SUGAR Cosmetics. All rights reserved.
							</p>
							<div className="d-flex pb-3">
								<a href="#" className="mx-1 fs-7">
									<span className="fa fa-facebook" />
								</a>
								<a href="#" className="mx-1 fs-7">
									<span className="fa fa-twitter" />
								</a>
								<a href="#" className="mx-1 fs-7">
									<span className="fa fa-instagram" />
								</a>
								<a href="#" className="mx-1 fs-7">
									<span className="fa fa-linkedin" />
								</a>
								<a href="#" className="mx-1 fs-7">
									<span className="fa fa-youtube-play" />
								</a>
							</div>
						</Offcanvas.Body>
					</Offcanvas>
				)}
			</div>
		</nav>
	)
}
