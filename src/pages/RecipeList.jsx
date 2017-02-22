import React from 'react';
import Recipe from './Recipe';

function RecipeList(props) {
    let thumbList = props.store.user.recipes.filter((recipe) => {
        if (props.filter != 'all') {
            return recipe.categories.indexOf(props.filter) > -1;
        } else {
            return recipe;
        }
    }).map(function(recipe, index) { 
        return (
            <div className="recipe" key={ `recipe-thumb-${index}` }>
                <Recipe data={ recipe } />
            </div>
        )
    });

    return (
        <ul className='recipe-container'>
            { thumbList }
        </ul>
    )
};

export default RecipeList;
