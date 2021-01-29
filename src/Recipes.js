import React from 'react';
import style from './recipes.module.css';

const Recipes = ({title, calories, image, ingredients}) => {
    return ( 
<div className={style.recipes}>
    <h1>{title}</h1>
    <ol>
        {ingredients.map (ingredient => (
            <li>{ingredient.text}</li>
        ))}
    </ol>
    <p><strong>Calories: </strong>{calories}</p>
<img className={style.image} src={image} alt=""/>
</div>
     );
};
 
export default Recipes;