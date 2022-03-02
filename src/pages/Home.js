import Layout from '../components/Layout'
import Article from '../components/Article'
import Pagination from '../components/Pagination'
import Aside from '../components/Aside'
import 'react-multi-carousel/lib/styles.css'
import PostsSlider from '../components/PostsSlider'
import HeadingBar from '../components/HeadingBar'

export default function Home() {
	return (
		<Layout>
			<PostsSlider />
			<div className="row">
				<div className="col-12 col-lg-8">
					<div className="row pt-5">
						<div className="col-12">
							<HeadingBar title="LATEST POSTS" />
						</div>
						{[...Array(8)].map(article => (
							<Article key={Math.random()} />
						))}
						<Pagination />
					</div>
				</div>
				<Aside />
			</div>
		</Layout>
	)
}
