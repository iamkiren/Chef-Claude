import React from "react";
import "./Main.css";

const Main = () => {
	const [ingredients, setIngredients] = React.useState([
		"Chicken",
		"Oregano",
		"Tomatoes",
	]);

	const ingredientsListItems = ingredients.map((ingredient) => (
		<li key={ingredient}>{ingredient}</li>
	));

	function handleAddIngredients(formData) {
		const newIngredient = formData.get("ingredient");
		const newIngredients = [...ingredients, newIngredient];
		setIngredients(newIngredients);
	}

	return (
		<main>
			<form className="add-ingredient-form" action={handleAddIngredients}>
				<input
					type="text"
					placeholder="e.g. oregano"
					aria-label="Add Ingredient"
					name="ingredient"
				/>
				<button type="button">Add ingredients</button>
			</form>
			<ul>{ingredientsListItems}</ul>
		</main>
	);
};

export default Main;
