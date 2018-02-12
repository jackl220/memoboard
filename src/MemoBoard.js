import React, { Component } from "react";
import List from "./List";

class MemoBoard extends Component {
    render() {
        return (
            <div className="app">
                <List id="pending" title="pending"
                cards={this.props.cards.filter((card) => card.status === "in Progress")} />
                <List id="in-progress" title="In Progress"
                cards={this.props.cards.filter((card) => card.status === "In Progress")} />
                <List id="done"
                cards={this.props.cards.filter((card) => card.status === "Done")} />
                </div>
        );
    }
}
export default MemoBoard;