import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/globals.css'
import Category from './pages/Category'
import Home from './pages/Home'
import Single from './pages/Single'
import Author from './pages/Author'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

export default function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/category" element={<Category />} />
					<Route path="/single" element={<Single />} />
					<Route path="/author" element={<Author />} />
				</Routes>
			</BrowserRouter>
		</>
	)
}
