import React from 'react';
import '../../css/LoadingIndicator.css';

export function LoadingIndicator() {
    return (
        <h5>
            <i className="fas fa-cog mr-2 loading"/>Retrieving Server List...
        </h5>
    )
}