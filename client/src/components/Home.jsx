import React, { Component } from 'react'
require('dotenv').config()


export default class Home extends Component {
    componentDidMount() {
        // this.getImages();
    }
    getImages = (req, res, next) => {
        fetch(`https://api.pexels.com/v1/search?query=coffeeshop`,
            { headers: { Authorization: process.env.API_KEY, }, })
            .then(fetchRes => fetchRes.json())
            .then(e => console.log(e))
    }


    render() {
        return (
            <main>
                <section id="first-section">
                    TOP SECTION
                </section>
                <section id="second-section">
                    SECOND SECTION
                </section>
                <section id="third-section">
                    THIRD SECTION
                </section>
                <section>
                    FOURTH SECTION
                </section>
            </main>
        )
    }
}