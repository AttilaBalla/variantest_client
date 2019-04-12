import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {REQUEST_STATUS} from "../utilities/constants";

export class NavBar extends Component {

    constructor(props) {
        super(props);

        this.state = {};

        this.refreshServerList = this.refreshServerList.bind(this);
    }

    refreshServerList() {

        this.setState({
           requestStatus: REQUEST_STATUS.PENDING
        });

        this.props.refreshServerList();

        setTimeout(() => {
            this.setState({requestStatus: REQUEST_STATUS.DONE})
        }, 1500)
    }

    render() {
        return (
            <nav className="navbar navbar-dark bg-dark">
                <span className="navbar-brand">Varian Test Project - Server Manager</span>
                <button
                    type="button"
                    className="btn btn-outline-light"
                    onClick={this.refreshServerList}
                    disabled={(this.state.requestStatus === REQUEST_STATUS.PENDING)}>
                    <i className="fas fa-sync mr-2"/>Refresh
                </button>
            </nav>
        )
    }
}

NavBar.propTypes = {
    refreshServerList: PropTypes.func
};
