import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <footer>
                Coffee Project {new Date().getFullYear()}

                <a>About</a>
            </footer>
        )
    }
}
