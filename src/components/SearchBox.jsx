import React from 'react';

function SearchBox(props) {
	return (
		<input type='text' onKeyUp={ props.onSearch } />
	)
}

export default SearchBox;