import React from "react"

export default function Header() {
    return(
        <header>
            <img src={require("../img/martini-glass.png")} className="header-logo" />
            <h1>Cocktail Recipe Finder</h1>
        </header>
    )
}