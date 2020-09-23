import React, { Component } from 'react'

export default class Coffee extends Component {
    constructor(props) {
        super(props)
        this.state = {
            currentPage: null,
        }
    }
    render() {
        return (
            <main>
                <div>
                    <img src="https://globalassets.starbucks.com/assets/f12bc8af498d45ed92c5d6f1dac64062.jpg?impolicy=1by1_wide_1242" width="350px" />
                    <ul>
                        <li>lksjdfsl</li>
                        <li>lksjdfsl</li>
                        <li>lksjdfsl</li>
                        <li>lksjdfsl</li>
                        <li>lksjdfsl</li>
                        <li>lksjdfsl</li>
                    </ul>
                </div>
                <div>
                    <input type="submit" value="Add to Order" id="add-to-cart" />
                </div>
            </main>
        )
    }
}
