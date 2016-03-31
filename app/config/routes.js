var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;
var Main = require('../components/Main');
var Search = require('../components/Search');
var MovieContainer = require('../containers/MovieContainer');

var routes = (
    <Router history={hashHistory}>
        <Route path='/' component={Main}>
            <IndexRoute component={Search} />
            <Route path='movie/:movieId' component={MovieContainer}/>
        </Route>
    </Router>
);

module.exports = routes;