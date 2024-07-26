import React, { useEffect } from "react";
import { Recipe } from "../../model/recipe-model";
import "./RecipeNavBar.css";
import { useSelector } from "react-redux";

interface Props {
  recipeList: Recipe[];
  selectedRecipeId: number;
  setSelectedRecipeId: React.Dispatch<React.SetStateAction<number | null>>;
}

const RecipeNavBar = ({
  recipeList,
  selectedRecipeId,
  setSelectedRecipeId,
}: Props) => {
  const favourites = useSelector((state: any) => state.data.favourites);

  return (
    <div className="left-menu">
      {recipeList.map((recipe) => {
        return (
          <div
            className={`${
              selectedRecipeId === recipe.id ? "nav-item active" : "nav-item"
            }`}
            onClick={() => setSelectedRecipeId(recipe.id)}
          >
            <div>{recipe.title}</div>
            <div>{favourites.indexOf(recipe.id) > -1 && "❤️"}</div>
          </div>
        );
      })}
    </div>
  );
};

export default RecipeNavBar;
