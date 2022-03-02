import Layout from '../components/Layout'
import Article from '../components/Article'
import Pagination from '../components/Pagination'
import Aside from '../components/Aside'
import PageHeadline from '../components/PageHeadline'

export default function Category() {
	return (
		<Layout>
			<div className="row">
				<div className="col-12 col-lg-8">
					<div className="row pt-5">
						<PageHeadline title="CATEGORY" subtitle="CARE" />
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
