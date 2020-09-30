import React, { Component, } from 'react'

const API_KEY = process.env.REACT_APP_API_KEY
export default class Home extends Component {
    constructor() {
        super()
        this.state = {
            images: ''
        }
    }

    componentDidMount() {
        this.getImages();
    }

    getImages = (req, res, next) => {
        fetch(`https://api.pexels.com/v1/search?query=latte`,
            { headers: { Authorization: API_KEY, }, })
            .then(fetchRes => fetchRes.json())
            .then(parsedRes => {
                let coffeeImages = []
                parsedRes.photos.map((e) => {
                    return coffeeImages.push(e.src.medium)

                })
                this.setState({ images: coffeeImages })
            })
    }

    render() {
        return (
            <main className="home-main" id="home-main">
                < section id="first-section" >
                    <article>
                        <h2>It's the coffee season </h2>
                        <p>Reactive coffee is ready to brew some coffee for you. Browse the seasonal and year round coffees and place your order</p>
                        <form onSubmit={(e) => this.props.browse(e, 'coffees')} >
                            <input id="homepage-button" type="submit" value="Explore" />
                        </form>
                    </article>
                    <img src={this.state.images[2]} alt="first-section" />
                </ section>

                <section id="second-section" className="gray-background">
                    <img src={this.state.images[4]} alt="second-section" />
                    <article>
                        Reactive Coffee offers more than 10 different types of coffee.
                        What's your favorite type?
                    </article>
                </section>

                <section id="third-section">
                    <article>
                        <h2>Are you a member?</h2>
                        <p>It is so easy to become one! Follow the link below and start ordering</p>
                        <form onSubmit={(e) => this.props.browse(e, 'signup')} >
                            <input id="homepage-button" type="submit" value="Sign up" />
                        </form>
                    </article>
                    <img src={this.state.images[6]} alt="third-section" />
                </section>

                <section className="gray-background">
                    <article>
                        <h2>We are growing</h2>
                        <p>As we have more opportunities to serve you, we also increase our service area.</p>
                    </article>
                    <img src={this.state.images[3]} alt="fourth-section" />
                </section>
            </main >
        )
    }
}