export default function HeadingBar({ title, mt }) {
	return (
		<div className={`heading-bar ${mt ? `mt-${mt}` : ''}`}>
			<span>{title}</span>
		</div>
	)
}
