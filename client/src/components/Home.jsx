import React, { Component } from 'react'
import { BrowserRouter, Link, Route } from 'react-router-dom';

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
                    coffeeImages.push(e.src.medium)

                })
                this.setState({ images: coffeeImages })
            })
    }

    render() {
        return (
            <main>
                {this.state.auth ?
                    (<p>You are logged in</p>)
                    :
                    (<p>Log in <Link to="/login"> here </Link></p>)
                }

                <section id="first-section">
                    <article>
                        Spoon, con panna americano that coffee qui wings coffee cinnamon carajillo. Lungo, et, mazagran, macchiato breve kopi-luwak cream cultivar. Variety cream cup single shot qui percolator id sugar frappuccino single origin fair trade. Seasonal, coffee, blue mountain a, beans at aromatic roast saucer kopi-luwak. Cream, extra, trifecta et sugar qui aroma sit black decaffeinated body.
                    </article>
                    <img src={this.state.images[2]} alt="first-section" />
                </section>
                <section id="second-section" className="gray-background">
                    <img src={this.state.images[4]} alt="second-section" />
                    <article>
                        Robust, flavour, shop redeye, and carajillo eu, java espresso coffee coffee barista. Barista, aftertaste skinny extra blue mountain variety crema sugar. Redeye beans, macchiato black breve caramelization, et java blue mountain whipped blue mountain. Mazagran doppio spoon saucer coffee variety cappuccino whipped. Variety, con panna rich, seasonal, robust, bar arabica beans sit grinder.
                    </article>
                </section>
                <section id="third-section">
                    <article>
                        Flavour caramelization iced viennese steamed latte barista. Organic bar, at kopi-luwak so flavour spoon. And cultivar organic robust organic milk sweet plunger pot a variety. Et, mug dripper cup, whipped a pumpkin spice milk kopi-luwak.
                    </article>
                    <img src={this.state.images[6]} alt="third-section" />
                </section>

                <section className="gray-background">
                    <article>
                        Steamed coffee aftertaste, caffeine redeye body acerbic robusta filter crema cultivar. Rich, whipped mug cup, as, mazagran espresso percolator and iced. Skinny coffee cinnamon breve in, dripper, redeye americano kopi-luwak americano crema. Beans seasonal espresso con panna café au lait single shot cinnamon espresso.
                    </article>
                    <img src={this.state.images[3]} alt="fourth-section" />
                </section>
            </main>
        )
    }
}