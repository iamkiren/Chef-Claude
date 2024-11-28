import React from "react";
import "./Main.css";

const Main = () => {
	return (
		<main>
			<form className="add-ingredient-form">
				<input
					type="text"
					placeholder="e.g. oregano"
					aria-label="Add Ingredient"
				/>
				<button type="button">Add ingredients</button>
			</form>
		</main>
	);
};

export default Main;
