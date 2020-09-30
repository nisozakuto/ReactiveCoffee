import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <footer>
                <p className="coffee-project">Coffee Project {new Date().getFullYear()}</p>
                <div className="bottom-nav">
                    <ul>
                        <h4>About</h4>
                        <p>
                            Reactive Coffee is made with Ruby and React combination. React Coffee is designed to be used by clients and orders to be fulfilled by the baristas.
                        </p>
                    </ul>
                    <ul>
                        <h4>Our Locations</h4>
                        <li>• New York</li>
                        <li>• San Francisco</li>
                        <li>• Chicago</li>
                        <li>• Toronto</li>
                    </ul>
                    <ul>
                        <h4>Links</h4>
                        <li>• Email to dev</li>
                        <li>• Github</li>
                        <li>• Portfolio</li>
                        <li>• LinkedIn</li>
                    </ul>
                </div>
            </footer>
        )
    }
}
