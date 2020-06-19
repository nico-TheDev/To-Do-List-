import React, { Component } from "react";

export default class AddItem extends Component {
    constructor() {
        super();
        this.state = {
            title: "",
        };
    }

    getInput = (e) => {
        this.setState({ title: e.target.value });
    };
    
    submitInput = (e) => {
        console.log(this.state.title);
        this.props.addItem(this.state.title);
        this.setState({ title: "" });
        e.target.firstElementChild.value = '';
        e.preventDefault();
    };

    render() {
        return (
            <form onSubmit={this.submitInput}>
                <input
                    onChange={this.getInput}
                    type="text"
                    className="inputField"
                    placeholder="Add Task..."
                />
                <button>
                    <i className="fa fa-plus-square" aria-hidden="true"></i>
                </button>
            </form>
        );
    }
}
