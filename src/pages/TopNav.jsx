import React, { Component } from 'react';
import { Link } from 'react-router';

import SearchBox from '../components/SearchBox';
import store from '../store.js';

class TopNav extends Component {
	constructor(props) {
		super(props);

		this.state = {
			showSearch: false,
		}
	}

	render() {
		let props = this.props;
		let children = props.children;
		let availableFilters = store.user.recipes.map((recipe) => {
			return recipe.categories;
		}).reduce((a,b) => {
			return a.concat(b);
		});

		availableFilters = availableFilters.filter((filt, i) => {
			return availableFilters.indexOf(filt) == i;
		});

		let links = availableFilters.map((filter) => {
			return (
				<Link className='btn-link' to={ filter }>
					{ filter }
				</Link>
			)
		})
		return (
			<div>
				<div className="header">
					<div>
						<i className="fa fa-cutlery"></i>
						<span className="head-title">recipe box</span>
						<i className="fa fa-spoon"></i>
					</div>
					{ this.state.showSearch ? 
						<SearchBox onKeyUp={ props.search } />
						:
						<div className='btn-container'>
							<Link className='btn-link' to='all'>
								all
							</Link>
							{ links }
						</div>
					}
				</div>
				{ React.cloneElement(children, { store: store, filter: props.params.filter }) }
			</div>
		)
	}
}

export default TopNav;
