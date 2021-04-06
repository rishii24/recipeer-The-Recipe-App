import React, { useEffect, useState } from 'react';
import './App.css';
import Recipe from './Recipe';
require('dotenv').config()

console.log(process.env)




const App = () => {
  const app_id = process.env.REACT_APP_API_ID
  const app_key = process.env.REACT_APP_API_KEY


  const [recipe, setRecipe] = useState([])
  const [search, setSearch] = useState('')
  const [query, setQuery] = useState('')


  const updateSearch = e => {
    setSearch(e.target.value)
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search)
    setSearch('')
  }


  const getData = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${app_id}&app_key=${app_key}`);
    const data = await response.json();
    setRecipe(data.hits)
    // console.log(data.hits)
  }

  useEffect(() => {
    getData();
  }, [query]);




  return (
    <div className="App">
      <div className="head">
        <h1><img src="https://img.icons8.com/color/96/000000/grocery-bag.png" alt="" />Welcome to recipeer'</h1>
        <p className="head-text">No need to wander anymore, just find what you love and cook.<br />
          <b>reciper'</b> provides you an ease in finding your favourite food, its ingredients and the way to cook.<br />
        With reciper you can discover alot more new recieps to add taste and diversity to your plate. </p>
      </div>
      <form onSubmit={getSearch} action="" className="search-form">
        <input className="search-bar" type="text" value={search} onChange={updateSearch} />
        <button className="search-btn" type="submit">Search</button>
      </form>
      <div className="result-text">Here you'll see the results for your search..</div>
      <div className="food-info">
        {recipe.map(recipe => (
          <Recipe key={recipe.recipe.index}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
            url={recipe.recipe.url}
          />
        ))}
      </div>
      <div className="footer">
        <p>	&#xA9;<b>recipeer'</b> 2021 | All rights reserved.  </p>
      </div>
    </div>
  )

}

export default App;
