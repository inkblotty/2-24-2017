import React from 'react';
import store from '../store.js';

import TopNav from './TopNav';

class TopNavContainer extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			activeFilter: '',
			store: [],
			filters: [],
		}
	};

	processFilters = (dataArray) => {
		let end = dataArray.map((recipe) => {
			return recipe.categories;
		}).reduce((a,b) => {
			return a.concat(b);
		});

		end = end.filter((filt, i) => {
			return end.indexOf(filt) === i;
		});

		return end || [];
	};

	componentWillReceiveProps = (newProps) => {
		if (newProps.params.filter !== this.props.params.filter) {
			this.setState({
				activeFilter: this.props.params.filter,
			});
		}
	};

	componentDidMount = () => {
		let availableFilters = this.processFilters(store.user.recipes);

		this.setState({
			activeFilter: this.props.params.filter,
			filters: availableFilters,
			store: store,
		});
	};

	render = () => {
		return (
			<TopNav store={ this.state.store } filters={ this.state.filters } activeFilter={ this.state.activeFilter }
				children={ this.props.children } />
		);
	};
}

export default TopNavContainer;
