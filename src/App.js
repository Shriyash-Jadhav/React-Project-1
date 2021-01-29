import React, {useEffect, useState} from "react";
import Recipes from "./Recipes";
import './App.css';

const App = () => {

const APP_ID = "7455d5f3";
const APP_KEY = "733b7154320172cca957b6885b534f78";
 
const [recipes, setRecipes]= useState([]);
const [search, setSearch]= useState("");
const [query, setQuery]= useState('chicken');

useEffect(() => {
  getRecipes();
}, [query]);

const getRecipes = async () => {
 const response = await fetch(
   `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free`
 );

 const data = await response.json();
setRecipes(data.hits);
console.log(data.hits);
};
 
const updateSearch = e =>{
  setSearch(e.target.value);
};

const getSearch = e =>{
  e.preventDefault();
  setQuery(search);
  setSearch("");
}

  return (  
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="text" value={search} onChange={updateSearch} />
        <button className="search-button" type="submit">
          Search
          </button>  
      </form>
      <div className="recipes">
      {recipes.map(recipes => (
        <Recipes
        key= {recipes.recipe.label}
        title= {recipes.recipe.label} calories={recipes.recipe.calories}
        image={recipes.recipe.image}
        ingredients={recipes.recipe.ingredients}
        />
      ) )}
      </div>
    </div>
  );
};
 

export default App;
