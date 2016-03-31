var React = require('react');

var MovieInfoWrapper = function(props) {
    return (
        <div className="movieInfo">
            {props.children}
        </div>
    )
}

module.exports = MovieInfoWrapper;