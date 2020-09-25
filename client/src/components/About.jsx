import React, { Component } from 'react'

export default class About extends Component {
    render() {
        return (
            <main>
                <h1 id="font-1">Font Styles</h1>
                <h1 id="font-2">Font Styles</h1>
                <h1 id="font-3">Font Styles</h1>
                <div>
                    <div className="color-box" id="color1"></div>
                    <div className="color-box" id="color2"></div>
                    <div className="color-box" id="color3"></div>
                </div>
                <div>
                    <div className="color-box" id="color4"></div>
                    <div className="color-box" id="color5"></div>
                    <div className="color-box" id="color6"></div>
                </div>
            </main>
        )
    }
}
