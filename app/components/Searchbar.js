var React = require('react');
var ReactDOM = require('react-dom');

var Searchbar = function(props) {
    return (
        <div className='searchbar'>
            <form onSubmit={props.onSubmitSearch}>
                <input value={props.movieTitle} type='text' className='searchbar-element' onChange={props.onSearchInput} />
                <button type='submit' className='searchbar-element'>Search</button>
            </form>
        </div>
    )
};

module.exports = Searchbar;