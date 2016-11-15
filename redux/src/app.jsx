import React from "react";

//import our CSS file so it gets included in the bundle
import "./css/main.css";

import {Link, IndexLink} from "react-router";
<<<<<<< HEAD
import {store} from "./shared-state.js"
=======
import {store} from "./shared-state.js";
>>>>>>> 8be6c5196175ccb9e732587d7a867491294a6545

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = store.getState();
    }

    componentDidMount() {
        this.unsub = store.subscribe(() => this.setState(store.getState()));
    }

<<<<<<< HEAD
    comonentWillUnmount() {
=======
    componentWillUnmount() {
>>>>>>> 8be6c5196175ccb9e732587d7a867491294a6545
        this.unsub();
    }

    render() {
        return (
            <div>
                <nav>
                    <ul>
                        <li>
                            <IndexLink to="/" activeClassName="active">
                                Users
                            </IndexLink>
                        </li>
                        <li>
                            <Link to="/favorites" activeClassName="active">
                                Favorites ({this.state.favorites.length})
                            </Link>
                        </li>
                    </ul>
                </nav>
                <main>
                    {this.props.children}
                </main>
            </div>
        );
    }
}
