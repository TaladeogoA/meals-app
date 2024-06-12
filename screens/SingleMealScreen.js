import {
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Button,
} from "react-native";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import { useContext, useLayoutEffect } from "react";
import IconButton from "../components/IconButton";
import { useDispatch, useSelector } from "react-redux";
import { addFavourite, removeFavourite } from "../store/redux/favourites";
// import { FavoritesContext } from "../store/context/favourites";

const SingleMealScreen = ({ route, navigation }) => {
  // const favoritesContext = useContext(FavoritesContext);
  const favouriteMealIds = useSelector((state) => state.favouriteMeals.ids);
  const dispatch = useDispatch();

  const { mealId } = route.params;
  const meal = MEALS.find((meal) => meal.id === mealId);
  const {
    title,
    imageUrl,
    duration,
    complexity,
    affordability,
    ingredients,
    steps,
  } = meal;

  const isFavorite = favouriteMealIds.includes(mealId);

  const addOrRemFav = () => {
    if (isFavorite) {
      // favoritesContext.removeFavorite(mealId);
      dispatch(removeFavourite({ id: mealId }));
    } else {
      // favoritesContext.addFavorite(mealId);
      dispatch(addFavourite({ id: mealId }));
    }
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            onPress={addOrRemFav}
            icon={isFavorite ? "star" : "staro"}
            color="#fff"
          />
        );
      },
    });
  }, [navigation, addOrRemFav]);

  return (
    <ScrollView style={styles.container}>
      <Image
        source={{
          uri: imageUrl,
        }}
        style={{ width: "100%", height: 200 }}
      />
      <MealDetails
        mealTitle={title}
        duration={duration}
        complexity={complexity}
        affordability={affordability}
        containerStyle={{ marginTop: 25 }}
      />

      <Text style={styles.subtitle}>Ingredients</Text>
      <View style={styles.ingredientContainer}>
        {ingredients.map((ingredient) => (
          <Text style={styles.ingredient} key={ingredient}>
            {ingredient}
          </Text>
        ))}
      </View>
      <View style={styles.stepContainer}>
        <Text style={styles.subtitle}>Steps</Text>
        {steps.map((step, index) => (
          <Text style={styles.steps} key={step}>{`${index + 1}. ${step}`}</Text>
        ))}
      </View>
    </ScrollView>
  );
};

export default SingleMealScreen;

const styles = StyleSheet.create({
  stepContainer: {
    marginVertical: 10,
  },
  subtitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 15,
    marginBottom: 10,
    textAlign: "center",
  },
  ingredientContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 5,
  },
  ingredient: {
    textAlign: "center",
    padding: 5,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    fontSize: 16,
  },
  steps: {
    padding: 10,
    fontSize: 16,
  },
});
