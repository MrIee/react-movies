var axios = require('axios');
var url = "https://api.themoviedb.org/3/";
var API_KEY = "66fe0a2e16a8aa847afb6fcf8a9eb750";

var getMovieInfo = function(id) {
    return axios.get(url + 'movie/' + id + '?api_key=' + API_KEY)
        .catch(function(err) {
            console.warn('Error in getMovieDetails', err);
        });
}

var getMovieVideos = function(id) {
    return axios.get(url + 'movie/' + id + '/videos?api_key=' + API_KEY)
        .catch(function(err) {
            console.warn('Error in getMovieVideos', err);
        });
}

var getMovieCredits = function(id) {
    return axios.get(url + 'movie/' + id + '/credits?api_key=' + API_KEY)
        .catch(function(err) {
            console.warn('Error in getMovieCredits', err);
        });
}

var helpers = {
    getMovieList: function(movie) {
        return axios.get(url + 'search/movie?language=en&include_adult-false&query=' + movie + '&api_key=' + API_KEY)
            .catch(function(err) {
                console.warn('Error in getMovieList', err);
            });
    },
    getFullMovieInfo: function(id) {
        return axios.all([getMovieInfo(id), getMovieCredits(id), getMovieVideos(id)])
            .catch(function(err) {
                console.warn('Error in getMovieTrailer', err);
            });
    }
}

module.exports = helpers;