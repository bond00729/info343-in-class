import React from "react";

import UserCard from "./user-card.jsx";
<<<<<<< HEAD
import {store, removeFavorite} from "./shared-state.js"
=======
import {store, removeFavorite} from "./shared-state.js";
>>>>>>> 8be6c5196175ccb9e732587d7a867491294a6545

export default class extends React.Component {
    constructor(props) {
        super(props);

        this.state = store.getState();
    }

    componentDidMount() {
        this.unsub = store.subscribe(() => this.setState(store.getState()));
    }

    componentWillUnmount() {
        this.unsub();
    }

    render() {
        var userCards;
        if (this.state.favorites) {
            userCards = this.state.favorites.map(record => 
                <UserCard key={record.id} 
                    user={record}>
                    <button onClick={() => store.dispatch(removeFavorite(record.id))}>
                        Remove
                    </button>
                </UserCard>);
        }
        return (
            <div className="container">
                <h1>My Favorites</h1>
                {userCards}
            </div>
        );
    }
}
