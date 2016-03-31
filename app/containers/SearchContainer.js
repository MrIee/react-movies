var React = require('react');

var SearchContainer = function(props) {
    return (
        <div id='searchContainer'>
            {props.children}
        </div>
    )
};

module.exports = SearchContainer;