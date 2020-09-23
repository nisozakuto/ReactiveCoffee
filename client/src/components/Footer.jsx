import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <footer>
                <p>Coffee Project {new Date().getFullYear()}</p>
                <div className="bottom-nav">
                    <ul>
                        <h4>About</h4>
                    </ul>
                    <ul>
                        <h4>Our Locations</h4>
                        <li>number 1</li>
                        <li>number 2</li>
                        <li>number 3</li>
                        <li>number 4</li>
                    </ul>
                    <ul>
                        <h4>Dummy Title</h4>
                        <li>Dummy</li>
                        <li>Dummy</li>
                        <li>Dummy</li>
                        <li>Dummy</li>
                    </ul>
                </div>
            </footer>
        )
    }
}
