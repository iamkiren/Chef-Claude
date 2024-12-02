import React from "react";
import "./Main.css";
import ClaudeRecipe from "../ClaudeRecipe/ClaudeRecipe";
import IngredientsList from "../IngredientsList/IngredientsList";

const Main = () => {
	const [ingredients, setIngredients] = React.useState([
		"all the main spices",
		"pasta",
		"ground beef",
		"tomato paste",
	]);
	const [recipeShown, setRecipeShown] = React.useState(false);

	function toggleRecipeShown() {
		setRecipeShown((prevShown) => !prevShown);
	}

	const ingredientsListItems = ingredients.map((ingredient) => (
		<li key={ingredient}>{ingredient}</li>
	));

	function addIngredient(formData) {
		const newIngredient = formData.get("ingredient");
		setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
	}

	return (
		<main>
			<form action={addIngredient} className="add-ingredient-form">
				<input
					type="text"
					placeholder="e.g. oregano"
					aria-label="Add ingredient"
					name="ingredient"
				/>
				<button type="submit">Add ingredient</button>
			</form>

			{ingredients.length > 0 && (
				<IngredientsList
					ingredients={ingredients}
					toggleRecipeShown={toggleRecipeShown}
				/>
			)}

			{recipeShown && <ClaudeRecipe />}
		</main>
	);
};

export default Main;
