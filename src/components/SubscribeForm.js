export default function SubscribeForm() {
	return (
		<>
			<div className="mb-4">
				<p className="text-center" style={{ color: '#b1b1b1' }}>
					Get the latest beauty tips straight to your inbox. Can't wait to connect!
				</p>
			</div>
			<form>
				<div className="form-gorup mb-4">
					<input
						type="text"
						className="form-control rounded-0 text-light bg-dark border-secondary fs-7 px-3 py-2"
						placeholder="Name..."
					/>
				</div>
				<div className="form-gorup mb-4">
					<input
						type="email"
						className="form-control rounded-0 text-light bg-dark border-secondary fs-7 px-3 py-2"
						placeholder="Email..."
					/>
				</div>
				<div className="form-gorup mb-3">
					<button
						type="submit"
						className="btn rounded-0 text-light comment-submit fs-7 px-3 py-2 fw-medium w-100"
					>
						SUBSCRIBE
					</button>
				</div>
			</form>
		</>
	)
}
