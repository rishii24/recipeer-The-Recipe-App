import React from 'react';
import './App.css';

//The recipe display section
const Recipe = ({key,title, calories, image, ingredients,url }) => {
    return (
        <div className="food-item">

            <div className="food-head">
                <img src={image} alt="" />
                <h3>{title}</h3>
            </div>

            <div className="list-elements">
                <div className="ingredients-head"><b>Ingredients required</b></div>
                <ul>
                    {ingredients.map((ingredient) => (
                        <div><li className="food-li" key={key}>{ingredient.text}</li></div>
                    ))}
                </ul>
                <p className="food-li"><b>Calories :</b> {calories}</p>
            </div>
            <div className="url-block">You can watch the preparation <a href={url} target="blank"> here..</a></div>

        </div>
    );
}

export default Recipe