import React from "react"

export default function Results(props) {
    const recipeCards = props.searchResults.map(item => (
        <div className="drink-card" key={item.idDrink}>
            <img className="drink-image" alt={item.strDrink} src={item.strDrinkThumb} />
            <div className="drink-info">
                <h3 className="drink-name">{item.strDrink}</h3>
                <p className="drink-glass">{item.strGlass}</p>
                <h4 className="drink-subheading">INGREDIENTS: </h4>
                {item.strIngredient1 && <p>{item.strMeasure1} {item.strIngredient1}</p>}
                {item.strIngredient2 && <p>{item.strMeasure2} {item.strIngredient2}</p>}
                {item.strIngredient3 && <p>{item.strMeasure3} {item.strIngredient3}</p>}
                {item.strIngredient4 && <p>{item.strMeasure4} {item.strIngredient4}</p>}
                {item.strIngredient5 && <p>{item.strMeasure5} {item.strIngredient5}</p>}
                {item.strIngredient6 && <p>{item.strMeasure6} {item.strIngredient6}</p>}
                {item.strIngredient7 && <p>{item.strMeasure7} {item.strIngredient7}</p>}
                {item.strIngredient8 && <p>{item.strMeasure8} {item.strIngredient8}</p>}
                {item.strIngredient9 && <p>{item.strMeasure9} {item.strIngredient9}</p>}
                {item.strIngredient10 && <p>{item.strMeasure10} {item.strIngredient10}</p>}
                {item.strIngredient11 && <p>{item.strMeasure11} {item.strIngredient11}</p>}
                {item.strIngredient12 && <p>{item.strMeasure12} {item.strIngredient13}</p>}
                {item.strIngredient14 && <p>{item.strMeasure14} {item.strIngredient14}</p>}
                {item.strIngredient15 && <p>{item.strMeasure15} {item.strIngredient15}</p>}
                <h4 className="drink-subheading">DIRECTIONS: </h4>
                <p>{item.strInstructions}</p>
            </div>
        </div>
    ))

    return (
        <div>
            <p className="results-message">{recipeCards.length} {recipeCards.length === 1 ? "result" : "results"} found</p>
            <div className="cards-container">
                {recipeCards.length && recipeCards}
            </div>
        </div>
    )
}