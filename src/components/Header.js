import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <header style={headerStyle} className="header">
                <h1>📝Todo List</h1>
                <p>A simple to do list made with react</p>
            </header>
        )
    }
}


const headerStyle = {
    textAlign:"center",
    paddingTop:'2rem',
    color:'white',

}