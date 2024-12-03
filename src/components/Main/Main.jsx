import React from "react";
import "./Main.css";
import ClaudeRecipe from "../ClaudeRecipe/ClaudeRecipe";
import IngredientsList from "../IngredientsList/IngredientsList";
import { getRecipeFromChefClaude, getRecipeFromMistral } from "../../ai";

const Main = () => {
	const [ingredients, setIngredients] = React.useState([]);
	const [recipe, setRecipe] = React.useState("");

	async function getRecipe() {
		const recipeMarkdown = await getRecipeFromMistral(ingredients);
		setRecipe(recipeMarkdown);
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
				<IngredientsList ingredients={ingredients} getRecipe={getRecipe} />
			)}

			{recipe && <ClaudeRecipe recipe={recipe} />}
		</main>
	);
};

export default Main;
