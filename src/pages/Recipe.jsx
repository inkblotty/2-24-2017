import React from 'react';
import { Link } from 'react-router';

function Recipe(props) {
    return (
        <li>
        	<Link to={ props.data.source }>
	            <div className="pic">
	                <img src={ props.data.img } alt={ props.data.name } />
	            </div>
	            <div className="title">{ props.data.name }</div>
	        </Link>
        </li>
    )
}

export default Recipe;