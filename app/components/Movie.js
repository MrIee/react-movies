var React = require('react');
var PropTypes = React.PropTypes;
var MovieInfo = require('../components/MovieInfo');
var MovieInfoWrapper = require('../components/MovieInfoWrapper');
var Search = require('../components/Search');

var Movie = function(props) {
    return props.isLoading === true
        ?   <Search />
        :<div id='movieInfoWrapper'>
            <Search />
            <MovieInfoWrapper>
                <MovieInfo
                    info={props.info}
                    credits={props.credits}
                    videos={props.videos} />
            </MovieInfoWrapper>
        </div>
}

Movie.propTypes = {
    isLoading: PropTypes.bool.isRequired,
    info: PropTypes.object.isRequired,
    credits: PropTypes.object.isRequired,
    videos: PropTypes.array.isRequired
}

module.exports = Movie;