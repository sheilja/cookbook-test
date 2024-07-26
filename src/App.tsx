import "./App.css";
import { useEffect, useState } from "react";
import { data } from "./data";
import RecipeNavBar from "./Components/RecipeNavBar/RecipeNavBar";
import RecipeInfo from "./Components/RecipeInfo/RecipeInfo";
import { Recipe } from "./model/recipe-model";

function App() {
  const [recipeList, setRecipeList] = useState<Recipe[]>([]);
  const [selectedRecipeId, setSelectedRecipeId] = useState<number | null>(null);

  useEffect(() => {
    setRecipeList(data);
    setSelectedRecipeId(data[0].id);
  }, []);

  return (
    <div>
      {recipeList.length > 0 && selectedRecipeId && (
        <div className="main">
          <RecipeNavBar
            recipeList={recipeList}
            selectedRecipeId={selectedRecipeId}
            setSelectedRecipeId={setSelectedRecipeId}
          />
          <RecipeInfo details={recipeList[selectedRecipeId - 1]} />
        </div>
      )}
    </div>
  );
}

export default App;
