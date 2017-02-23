import React from 'react';
import store from '../store.js';

import RecipeList from './RecipeList';

class RecipeListContainer extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			activeRecipes: [],
		};
	};

	componentWillReceiveProps = (newProps) => {
		let activeRecipes = store.user.recipes.filter((recipe) => {
			if (newProps.params.filter !== 'all') {
				return recipe.categories.indexOf(newProps.params.filter) > -1;
			} else {
				return recipe;
			}
		});

		this.setState({
			activeRecipes: activeRecipes || [],
		});
	};

	componentDidMount = () => {
		let activeRecipes = store.user.recipes.filter((recipe) => {
			if (this.props.params.filter !== 'all') {
				return recipe.categories.indexOf(this.props.params.filter) > -1;
			} else {
				return recipe;
			}
		});

		this.setState({
			activeRecipes: activeRecipes || [],
		});
	};

	render = () => {
		return (
			<RecipeList activeRecipes={ this.state.activeRecipes } />
		);
	}
}

export default RecipeListContainer;