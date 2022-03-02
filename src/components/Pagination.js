export default function Pagination() {
	return (
		<div className="col-12 text-center pagination-post mb-5">
			<a className="diabled">
				<span className="fa fa-angle-left" />
				NEWER POSTS
			</a>
			<span className="mx-3">&nbsp;/&nbsp;</span>
			<a href="#">
				OLDER POSTS
				<span className="fa fa-angle-right" />
			</a>
		</div>
	)
}
