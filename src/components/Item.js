import React from "react";

export default class Item extends React.Component {
    constructor() {
        super();
    }

    itemStyle = () => {
        return {
            textDecoration: this.props.details.completed ? "line-through" : "",
            color: this.props.details.completed ? "gray" : "black",
        };
    };

    render() {
        const { id, completed, text } = this.props.details;

        return (
            <div className="item">
                <p className="item__task" style={this.itemStyle()}>
                    {text}
                </p>

                <button
                    className="check"
                    onClick={() => {
                        this.props.taskDone(id);
                    }}
                >
                    <i className="fa fa-check" aria-hidden="true"></i>
                </button>

                <button
                    className="remove"
                    onClick={() => {
                        this.props.deleteTask(id);
                    }}
                >
                    <i className="fa fa-trash" aria-hidden="true"></i>
                </button>
            </div>
        );
    }
}
