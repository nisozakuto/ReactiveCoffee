import React, { Component } from 'react'
const API_KEY = process.env.REACT_APP_API_KEY

export default class Home extends Component {

    componentDidMount() {
        this.getImages();
    }
    getImages = (req, res, next) => {
        fetch(`https://api.pexels.com/v1/search?query=coffeeshop`,
            { headers: { Authorization: API_KEY, }, })
            .then(fetchRes => fetchRes.json())
            .then(e => console.log(e))
    }


    render() {
        return (
            <main>
                <section id="first-section">
                    <article>
                        Spoon, con panna americano that coffee qui wings coffee cinnamon carajillo. Lungo, et, mazagran, macchiato breve kopi-luwak cream cultivar. Variety cream cup single shot qui percolator id sugar frappuccino single origin fair trade. Seasonal, coffee, blue mountain a, beans at aromatic roast saucer kopi-luwak. Cream, extra, trifecta et sugar qui aroma sit black decaffeinated body.
                    </article>
                </section>
                <section id="second-section" className="gray-background">
                    Robust, flavour, shop redeye, and carajillo eu, java espresso coffee coffee barista. Barista, aftertaste skinny extra blue mountain variety crema sugar. Redeye beans, macchiato black breve caramelization, et java blue mountain whipped blue mountain. Mazagran doppio spoon saucer coffee variety cappuccino whipped. Variety, con panna rich, seasonal, robust, bar arabica beans sit grinder.
                    </section>
                <section id="third-section">
                    Flavour caramelization iced viennese steamed latte barista. Organic bar, at kopi-luwak so flavour spoon. And cultivar organic robust organic milk sweet plunger pot a variety. Et, mug dripper cup, whipped a pumpkin spice milk kopi-luwak.
                    </section>
                <section className="gray-background">
                    Steamed coffee aftertaste, caffeine redeye body acerbic robusta filter crema cultivar. Rich, whipped mug cup, as, mazagran espresso percolator and iced. Skinny coffee cinnamon breve in, dripper, redeye americano kopi-luwak americano crema. Beans seasonal espresso con panna café au lait single shot cinnamon espresso.
                    </section>
            </main>
        )
    }
}