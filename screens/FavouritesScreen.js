import { useContext } from "react";
import { Text } from "react-native";
import { FavoritesContext } from "../store/context/favourites";
import MealsList from "./MealsList";
import { MEALS } from "../data/dummy-data";
const FavouritesScreen = () => {
  const favoritesContext = useContext(FavoritesContext);
  console.log(favoritesContext.ids);

  const favMeals = MEALS.filter((meal) =>
    favoritesContext.ids.includes(meal.id)
  );

  return <MealsList items={favMeals} />;
};

export default FavouritesScreen;
