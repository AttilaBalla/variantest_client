import React, { Component } from 'react';
import '../css/App.css';
import {REQUEST_STATUS} from "./utilities/constants";
import {retrieveServerList} from "./utilities/httpService";
import {ServerList} from "./components/server/ServerList";
import {LoadingIndicator} from "./components/LoadingIndicator";
import {NavBar} from "./components/NavBar";

class App extends Component {

    constructor(props) {
        super(props);

        this.state = {
            status: "",
            servers: [],
        };

        this.getServers = this.getServers.bind(this);
    }

    componentDidMount() {
        this.getServers();
    }

    getServers() {
        this.setState({
            status: REQUEST_STATUS.PENDING
        });

        retrieveServerList()
            .then((result) => {
                this.setState({
                    servers:result,
                    status: REQUEST_STATUS.DONE
                });
            })
            .catch(() => {
                this.setState({
                    status: REQUEST_STATUS.FAILED
                });
            })
    }

    render() {

        let content;

        if(this.state.status === REQUEST_STATUS.FAILED) {
            //TODO: error component
        } else {
            content = <ServerList servers={this.state.servers}/>
        }

        return (
            <div className="App">
                <NavBar refreshServerList={this.getServers}/>
                <div className="container">
                    {(this.state.status === REQUEST_STATUS.PENDING)
                        ? <LoadingIndicator text={"Retrieving server list..."}/>
                        : content}
                </div>
            </div>
        );
    }
}

export default App;
