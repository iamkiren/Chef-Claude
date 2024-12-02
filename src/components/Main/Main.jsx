import React from "react";
import "./Main.css";
import ClaudeRecipe from "../ClaudeRecipe/ClaudeRecipe";

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
				<section>
					<h2>Ingredients on hand:</h2>
					<ul className="ingredients-list" aria-live="polite">
						{ingredientsListItems}
					</ul>
					{ingredients.length > 3 && (
						<div className="get-recipe-container">
							<div>
								<h3>Ready for a recipe?</h3>
								<p>Generate a recipe from your list of ingredients.</p>
							</div>
							<button onClick={toggleRecipeShown} type="button">
								Get a recipe
							</button>
						</div>
					)}
				</section>
			)}

			{recipeShown && <ClaudeRecipe />}
		</main>
	);
};

export default Main;
