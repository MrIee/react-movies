var React = require('react');
var Link = require('react-router').Link;
var PropTypes = React.PropTypes;

var moviePoster = function(movie) {
    var posterPath = "http://image.tmdb.org/t/p/w300/" + movie.poster_path;
    return movie.poster_path ? posterPath : './app/images/noposter.jpg'
}

var releaseDate = function(movie) {
    return movie.release_date ? movie.release_date.slice(0,4) : 'n/a';
}

var reloadPage = function() {
    location.reload();
}

var SearchResult = function(props) {
    var link = '/movie/' + props.movie.id;
    return (
        <Link to={link} onClick={reloadPage}>
            <li>
                <img src={moviePoster(props.movie)} />
                <div>{props.movie.title} ({releaseDate(props.movie)})</div>
            </li>
        </Link>
    )
}

SearchResult.propTypes = {
    movie: PropTypes.object.isRequired
}

module.exports = SearchResult;