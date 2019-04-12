import React from 'react';
import {ServerListItem} from "./ServerListItem";
import {ServerListHeader} from "./ServerListHeader";
import PropTypes from "prop-types";
import '../../../css/ServerList.css';

export function ServerList(props) {

    return (
        <React.Fragment>
            <ServerListHeader/>
            <ul className="list-group">
                {props.servers.map((server, key) => {

                    return(
                        <ServerListItem
                            key={key}
                            serverId={server.id}
                            serverName={server.name}
                            serverStatus={server.status}
                        />
                    )
                })}
            </ul>
        </React.Fragment>
    );
}

ServerListItem.propTypes = {
    servers: PropTypes.object
};