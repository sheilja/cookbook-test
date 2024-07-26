import { Recipe } from "../../model/recipe-model";
import "./RecipeInfo.css";
import { useSelector, useDispatch } from "react-redux";
import { updateFavourite } from "./../../redux/actions";

interface Props {
  details: Recipe;
}

const RecipeInfo = ({ details }: Props) => {
  const { ingredients, image_url, steps, id } = details;
  const imagSrc = require(`../../images/${image_url}`);
  const favourites = useSelector((state: any) => state.data.favourites);
  const dispatch = useDispatch();

  const handleFavourite = (id: number) => {
    dispatch(updateFavourite(id));
  };

  return (
    <div className="right-content">
      <div className="content">
        <div className="part1">
          <div className="header-text">
            <div className="text-content">
              Make delicious food<br></br> and feel experience like a <br></br>
              professional chef.
            </div>
            <button
              className="favourite-button"
              onClick={() => handleFavourite(id)}
            >
              {favourites.indexOf(id) > -1
                ? "Remove From Favourites"
                : "Add To Favourites"}
            </button>
          </div>
          <div className="image">
            <img src={imagSrc} className="image"></img>
          </div>
        </div>
        <div className="part2">
          <div className="detailed1">
            <div className="header-text2">{`Ingredients`}</div>
            <div className="detailed-content">
              {ingredients.map((ingredients, index) => {
                return <li key={index}>{ingredients} </li>;
              })}
            </div>
          </div>
          <div className="detailed2">
            <div className="header-text2">{`Steps`}</div>
            <div className="detailed-content">
              {steps.map((step, index) => {
                return <li key={index}>{step} </li>;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeInfo;
