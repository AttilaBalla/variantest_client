import React from 'react';
import PropTypes from 'prop-types';
import '../../css/LoadingIndicator.css';

export function LoadingIndicator(props) {
    return (
        <span>
            <i className="fas fa-cog mr-2 loading"/>{props.text}
        </span>
    )
}

LoadingIndicator.propTypes = {
    text: PropTypes.string
};

LoadingIndicator.defaultProps = {
    text: "Loading..."
};