var React = require('react');
var PropTypes = React.PropTypes;

var moviePoster = function(poster_path) {
    var posterPath = "http://image.tmdb.org/t/p/w300/" + poster_path;
    return poster_path ? posterPath : './app/images/noposter.jpg'
}

var releaseDate = function(release_date) {
    return release_date ? release_date.slice(0,4) : 'n/a';
}

var videoLink = function(video) {
    return 'https://www.youtube.com/watch?v=' + video.key
}

var MovieInfo = function(movie) {
    return (
        <div>
            <img src={moviePoster(movie.info.poster_path)} />
            <div><h1>{movie.info.title}</h1></div>
            <div>
                <h3>Release Date</h3>
                {releaseDate(movie.info.release_date)}
            </div>
            <div>
                <h3>Rating</h3>
                {movie.info.vote_average}/10
            </div>
            {movie.info.tagline && <div>
                <h3>Tagline</h3>
                {movie.info.tagline}
            </div>}
            <div>
                <h3>Plot</h3>
                {movie.info.overview}
            </div>
            <div>
                <a href={videoLink(movie.videos[0])} target='_blank'>View Trailer</a>
            </div>
        </div>
    )
}

MovieInfo.propTypes = {
    info: PropTypes.shape({
        poster_path: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        release_date: PropTypes.string.isRequired,
        vote_average: PropTypes.number.isRequired,
        tagline: PropTypes.string,
        overview: PropTypes.string.isRequired,
    }),
    credits: PropTypes.shape({
        cast: PropTypes.array.isRequired,
        crew: PropTypes.array.isRequired
    }),
    videos: PropTypes.array.isRequired
}

module.exports = MovieInfo;