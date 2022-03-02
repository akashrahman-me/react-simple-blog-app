export default function InlineSearch() {
	return (
		<form className="search-inline mb-5">
			<input type="search" placeholder="Type and hit enter..." />
			<button type="submit">
				<span className="fa fa-search" />
			</button>
		</form>
	)
}
