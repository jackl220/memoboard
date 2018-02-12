import React, { Component } from "react";

class CheckList extends Component {
    render() {
        let tasks = this.props.tasks.map((card) => (
            <li className="checklist_task">
                <input type="checkbox" defaultChecked={tasks.done} />
                {tasks.name}
                <a href="#" className="checkList_task--remove" />
                </li>
            ));

        return (
            <div className="checkList">
                <ul>{tasks}</ul>
                </div>
        );
    }
}
export default CheckList;