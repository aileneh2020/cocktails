import React from "react"
import Results from "./Results"

export default function Search() {

    const [search, setSearch] = React.useState("")
    const [searchResults, setSearchResults] = React.useState([
        {
            idDrink: "000",
            strDrink: "Empty",
        }
    ])

    function handleChange(event) {
        const {value} = event.target

        setSearch(value)
    }

    function handleSubmit(event) {
        const searchName = search.trim().replaceAll(' ', '&')

        fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchName}`)
        
        // if search result returns null, populate searchResults with dummy data
        .then(response => response.json())
        .then(data => {
            data.drinks === null ? 
            setSearchResults([{idDrink:"111","strDrink": "No Drink Found"}]) :
            setSearchResults(data.drinks)
        })
        .catch(error => console.log(error))
        event.preventDefault()
    }

    return (
        <div className="main-container">
            <form className="search-form" onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    name="search" 
                    placeholder="Enter Cocktail Name" 
                    value={search}
                    onChange={handleChange} />
                <button>Find Recipe</button>
            </form>
            <div>  
                {searchResults[0].idDrink === "000" ? 
                <p className="results-message"></p> : 
                    (searchResults[0].idDrink === "111" ? 
                    <p className="results-message">No Results Found. Try Another Search.</p> : 
                    <Results searchResults={searchResults} />
                    )
                }
            </div>
        </div>
    )
}