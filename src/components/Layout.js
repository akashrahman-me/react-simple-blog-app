import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout({ children }) {
	return (
		<>
			<Navbar />
			<main className="bg-dark text-white">
				<div className="container">{children}</div>
			</main>
			<Footer />
		</>
	)
}
