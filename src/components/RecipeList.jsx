import React from 'react';
import Recipe from './Recipe';

function RecipeList(props) {
    let thumbList = props.activeRecipes.map((recipe, index) => { 
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
