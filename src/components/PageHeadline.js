export default function PageHeadline({ title, subtitle }) {
	return (
		<div className="col-12 text-center mb-3 text-color">
			<h1 className="fs-4 fw-medium ">
				<span>{title}:&nbsp;</span>
				<span className="color-primary">{subtitle}</span>
			</h1>
		</div>
	)
}
