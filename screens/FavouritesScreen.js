// import { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
// import { FavoritesContext } from "../store/context/favourites";
import MealsList from "./MealsList";
import { MEALS } from "../data/dummy-data";
import { useSelector } from "react-redux";
const FavouritesScreen = () => {
  const favouriteMealIds = useSelector((state) => state.favouriteMeals.ids);
  // const favoritesContext = useContext(FavoritesContext);

  const favMeals = MEALS.filter((meal) => favouriteMealIds.includes(meal.id));

  if (favouriteMealIds.length === 0) {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>No favorite meals found.</Text>
        <Text style={styles.text}>Start adding some!</Text>
      </View>
    );
  }

  return <MealsList items={favMeals} />;
};

export default FavouritesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
  },
});
