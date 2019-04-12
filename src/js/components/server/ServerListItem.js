import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {REQUEST_STATUS, SERVER_STATUS} from "../../utilities/constants";
import {checkoutOrRelease} from "../../utilities/httpService";

export class ServerListItem extends Component {

    constructor(props) {
        super(props);

        this.state = {
            serverStatus: this.props.serverStatus
        };

        this.handleCheckout = this.handleCheckout.bind(this);
        this.handleRelease = this.handleRelease.bind(this);
    }

    handleCheckout() {
        checkoutOrRelease(this.props.serverId)
            .then((result) => {
                this.setState({
                    serverStatus: SERVER_STATUS.CHECKED_OUT
                });
            })
            .catch(() => {
                //todo: error handling
            })
    }

    handleRelease() {
        checkoutOrRelease(this.props.serverId)
            .then((result) => {
                this.setState({
                    serverStatus: SERVER_STATUS.AVAILABLE
                });
            })
            .catch(() => {
                //todo: error handling
            })
    }

    render() {

        let itemClass = "d-flex row mb-1 list-group-item";

        if(this.props.serverStatus === SERVER_STATUS.DOWN) {
            itemClass += " list-group-item-disabled"
        }

        let button;
        let statusClass;

        if(this.state.serverStatus === SERVER_STATUS.AVAILABLE) {
            button = <button
                        type="button"
                        className="btn btn-outline-primary"
                        onClick={this.handleCheckout}>
                        Check Out
                    </button>;
            statusClass = "";

        }

        if(this.state.serverStatus === SERVER_STATUS.CHECKED_OUT) {
            button = <button
                        type="button"
                        className="btn btn-outline-warning"
                        onClick={this.handleRelease}>
                        Release
                    </button>;

            statusClass = "text-warning"
        }

        if(this.state.serverStatus === SERVER_STATUS.DOWN) {
            statusClass = "text-danger";
        }

        return(
            <li className={itemClass}>
                <div className="w-15 col-2 flex-center">
                    {this.props.serverId}
                </div>
                <div className="w-15 col-3 flex-center">
                    <i className="fas fa-server mr-2"/>
                    {this.props.serverName}
                </div>
                <div className={"w-15 col-3 flex-center " + statusClass }>
                    {this.state.serverStatus}
                </div>
                {(this.props.serverStatus !== SERVER_STATUS.DOWN) ?
                    <div className="w-15 col-4 flex-center">
                        {button}
                    </div>
                : null}
            </li>
        )
    }
}

ServerListItem.propTypes = {
    serverId: PropTypes.number,
    serverName: PropTypes.string,
    serverStatus: PropTypes.string
};

ServerListItem.defaultProps = {
    serverId: 1234,
    serverName: "default Server Name",
    serverStatus: "default Available"
};