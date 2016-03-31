var React = require('react');
var SearchResult = require('../components/SearchResult');
var PropTypes = React.PropTypes;

var generateRows = function(movie, props) {
    return movie.slice(0,8).map(function(m) {
        return <SearchResult key={m.id} movie={m} />;
    });
}

var SearchWrapper = function(props) {
    return props.isLoading === true
        ? <div></div>
        : <div className='searchResults'>
            <ul>
                {generateRows(props.movie, props)}
            </ul>
        </div>
}

SearchWrapper.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    movie: PropTypes.array.isRequired
}

module.exports = SearchWrapper;