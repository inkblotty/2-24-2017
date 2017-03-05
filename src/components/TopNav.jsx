import React from 'react';
import { Link } from 'react-router';

const TopNav = (props) => {
	let filter = props.activeFilter;
	let children = props.children;

	let links = props.filters ? props.filters.map((filter, i) => {
		return (
			<Link className='btn-link' to={ filter } key={ `recipe-filter-${i}` }>
				{ filter }
			</Link>
		)
	}) : [];

	return (
		<div>
			<div className="header">
				<div>
					<span className="head-title">
						my recipes
					</span>
				</div>
				<div className='btn-container'>
					<h6>filter by:</h6>
					<Link className='btn-link' to='all'>
						all
					</Link>
					{ links }
				</div>
			</div>
			{ React.cloneElement(children, { filter: filter }) }
		</div>
	)
}

export default TopNav;
