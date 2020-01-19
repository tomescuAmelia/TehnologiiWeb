import React from 'react';

const SearchZone = (props) => {
    return (
        <div className="search-zone">
            <form onSubmit={props.bookSearch}>
                <input onChange={props.handleSearch} placeholder="Search a book..." type="text"/>
                <button type="submit">Search</button>
                <select value={props.sort} onChange={props.handleSort} >
                    <option value="" disabled selected>Sort</option>
                    <option value="Newest">Newest</option>
                    <option value="Oldest">Oldest</option>
                </select>
            </form>
        </div>
    );
}

export default SearchZone;