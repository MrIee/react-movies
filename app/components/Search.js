var React = require('react');
var movieDBHelpers = require('../utils/movieDBHelpers');
var SearchContainer = require('../containers/SearchContainer');
var SearchWrapper = require('../components/SearchWrapper');
var Searchbar = require('../components/Searchbar');

var Search = React.createClass({
    contextTypes: {
        router: React.PropTypes.object.isRequired
    },
    getInitialState: function() {
        return {
            isLoading: true,
            movieId: '',
            movie: [],
            showSearchResults: true
        }
    },
    toggleSearchResults: function() {
        window.onclick = function() {
            this.setState({
                showSearchResults: !this.state.showSearchResults
            });
        }.bind(this);
    },
    handleSearchInput: function(e) {
        var searchText = e.target.value;

        if (searchText.length !== 0 || searchText.trim()) {
            movieDBHelpers.getMovieList(searchText)
                .then(function(info) {
                    this.setState({
                        isLoading: false,
                        movieId: info.data.results[0].id,
                        movie: info.data.results
                    });
                }.bind(this));
        } else {
            this.setState({
                movie: []
            });
        }

        this.setState({ showSearchResults: true });
    },
    handleSubmitSearch: function(e) {
        e.preventDefault();

        if (this.state.movie) {
            this.context.router.push('/movie/' + this.state.movieId);
            location.reload();
        }
    },
    render: function() {
        this.toggleSearchResults();
        var searchWrapper =
        this.state.showSearchResults
                ? <SearchWrapper
                    isLoading={this.state.isLoading}
                    movie={this.state.movie} />
                : '';

        return (
            <SearchContainer>
                <Searchbar
                    onSearchInput={this.handleSearchInput}
                    onSubmitSearch={this.handleSubmitSearch}
                    movieTitle={this.state.movieTitle} />
                {searchWrapper}
            </SearchContainer>
        )
    }
});

module.exports = Search;