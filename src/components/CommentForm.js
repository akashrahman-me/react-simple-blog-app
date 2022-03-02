export default function CommentForm() {
	return (
		<>
			<h4 className="fs-5 text-center my-4">LEAVE A COMMENT</h4>
			<form>
				<textarea
					className="form-control bg-dark rounded-0 border-secondary fs-7 p-3"
					name="comment"
					rows={4}
					placeholder="Your Comment"
					defaultValue={''}
				/>
				<div className="row my-4">
					<div className="col-12 col-md-6 col-lg-4">
						<input
							type="text"
							placeholder="Name*"
							className="form-control bg-dark text-secondary fs-7 rounded-0 py-2 border-secondary"
						/>
					</div>
					<div className="col-12 col-md-6 col-lg-4">
						<input
							type="email"
							placeholder="Email*"
							className="form-control bg-dark text-secondary fs-7 rounded-0 py-2 border-secondary"
						/>
					</div>
					<div className="col-12 col-lg-4">
						<input
							type="url"
							placeholder="Website"
							className="form-control bg-dark text-secondary fs-7 rounded-0 py-2 border-secondary"
						/>
					</div>
				</div>
				<p className="form-check">
					<input className="form-check-input" type="checkbox" id="save-user" defaultChecked />
					<label htmlFor="save-user" className="text-color">
						Save my name, email, and website in this browser for the next time I comment.
					</label>
				</p>
				<div className="text-center mt-3">
					<button
						className="btn comment-submit text-light rounded-0 py-2 px-5 fs-7 fw-medium"
						type="submit"
					>
						SUBMIT
					</button>
				</div>
			</form>
		</>
	)
}
