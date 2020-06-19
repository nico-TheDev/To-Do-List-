import React from "react";
import Header from "./components/Header";
import Item from "./components/Item";
import AddItem from "./components/AddItem";
import "./css/style.css";
import { v4 as uuidv4 } from "uuid";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            list: this.getList(),
        };
    }

    addItem = (text) => {
        if (text === "") return;

        const newItem = {
            id: uuidv4(),
            text,
            completed: false,
        };
        this.setState({ list: [...this.state.list, newItem] });

        localStorage.setItem("list", JSON.stringify(this.state.list));
    };

    taskDone = (id) => {
        console.log("this task is done", id);
        this.setState({
            list: [
                ...this.state.list.map((item) => {
                    if (item.id === id) {
                        item.completed = !item.completed;
                    }
                    return item;
                }),
            ],
        });

        localStorage.setItem("list", JSON.stringify(this.state.list));
    };

    deleteTask = (id) => {
        console.log(`remove this ${id}`);
        this.setState({
            list: [
                ...this.state.list.filter((item) => {
                    if (item.id !== id) {
                        return item;
                    }
                }),
            ],
        });
        localStorage.setItem("list", JSON.stringify(this.state.list));
    };

    getList = () => {
        if (localStorage.getItem("list")) {
            return JSON.parse(localStorage.getItem("list"));
        } else {
            return [];
        }
    };

    render() {
        const listOfItems = this.state.list.map((item) => (
            <Item
                key={item.id}
                details={item}
                taskDone={this.taskDone}
                deleteTask={this.deleteTask}
            />
        ));

        return (
            <div className="app">
                <Header />
                <AddItem addItem={this.addItem} />
                {listOfItems}
            </div>
        );
    }
}

export default App;
