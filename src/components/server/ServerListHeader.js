import React from 'react';

export function ServerListHeader() {
    return (
        <div className="d-flex mb-2">
            <div className="w-15 col-2">
                <span className="ml-2">Server ID</span>
            </div>
            <div className="w-15 col-3">
                Server Name
            </div>
            <div className="w-15 col-3">
                Status
            </div>
            <div className="w-15 col-4">
                Actions
            </div>
        </div>
    )
}