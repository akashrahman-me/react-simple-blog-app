import React from 'react'
import { Link } from 'react-router-dom'

export default function RelatedCategories({ categories }) {
	return (
		<div className="text-center pt-3 pb-2" style={{ fontSize: '14px' }}>
			{categories.map((category, index) => (
				<React.Fragment key={Math.random()}>
					<Link to={category.path} className="color-primary text-decoration-none">
						{category.name}
					</Link>
					{index !== categories.length - 1 && (
						<span
							className="color-primary fa fa-life-bouy mx-2 d-inline-block"
							style={{ fontSize: '6px', transform: 'translateY(-2px)' }}
						/>
					)}
				</React.Fragment>
			))}
		</div>
	)
}
