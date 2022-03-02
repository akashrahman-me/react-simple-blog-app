import Layout from '../components/Layout'
import Article from '../components/Article'
import Pagination from '../components/Pagination'
import Aside from '../components/Aside'
import PageHeadline from '../components/PageHeadline'

import AuthorInfo from '../components/AuthorInfo'
import { useEffect } from 'react'

export default function Author() {
	useEffect(() => {
		return () => {
			window.scrollTo(0, 0)
		}
	}, [])

	return (
		<Layout>
			<div className="row">
				<div className="col-12 col-lg-8">
					<div className="row pt-5">
						<PageHeadline title="AUTHOR" subtitle="AKRUTI" />
						<div className="col-12 mb-4 pt-2 pb-3">
							<div className="p-3" style={{ border: '1px solid #383838' }}>
								<AuthorInfo />
							</div>
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
