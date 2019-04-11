import React, {Component} from 'react';

export class ServerListItem extends Component {

    constructor(props) {
        super(props);

        this.state = {}
    }

    render() {
        return(
            <li className="d-flex row list-group-item">
                <div className="w-15 col-2">
                    <i className="fas fa-server"/>
                    <span className="ml-2">3432</span>
                </div>
                <div className="w-15 col-3">
                    server3
                </div>
                <div className="w-15 col-3">
                    Available
                </div>
                <div className="w-15 col-4">
                    <button type="button" className="btn btn-outline-primary">Check Out</button>
                </div>
            </li>
        )
    }
}