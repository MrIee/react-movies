var React = require('react');
var movieDBHelpers = require('../utils/movieDBHelpers');
var Movie = require('../components/Movie');
var axios = require('axios');

var MovieContainer = React.createClass({
    getInitialState: function() {
        return {
            isLoading: true,
            info: {},
            credits: {},
            videos: []
        }
    },
    componentDidMount: function() {
        movieDBHelpers.getFullMovieInfo(this.props.routeParams.movieId)
            .then(axios.spread(function(info, credits, videos) {
                this.setState({
                    isLoading: false,
                    info: info.data,
                    credits: credits.data,
                    videos: videos.data.results
                });
            }.bind(this)));
    },
    render: function() {
        return (
            <Movie
                isLoading={this.state.isLoading}
                info={this.state.info}
                credits={this.state.credits}
                videos={this.state.videos} />
        )
    }
});

module.exports = MovieContainer;