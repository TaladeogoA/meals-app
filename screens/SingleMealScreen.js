import { Image, StyleSheet, Text, View } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";

const SingleMealScreen = ({ route }) => {
  const { mealId } = route.params;
  const meal = MEALS.find((meal) => meal.id === mealId);
  console.log(meal);
  const {
    title,
    imageUrl,
    duration,
    complexity,
    affordability,
    ingredients,
    steps,
  } = meal;

  return (
    <View style={styles.container}>
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
      <View style={styles.stepContainer}>
      <Text style={styles.subtitle}>Ingredients</Text>
      {ingredients.map((ingredient) => (
        <Text key={ingredient}>{ingredient}</Text>
      ))}
      <Text style={styles.subtitle}>Steps</Text>
      {steps.map((step, index) => (
        <Text key={step}>{`${index + 1}. ${step}`}</Text>
      ))}

      </View>
    </View>
  );
};

export default SingleMealScreen;

const styles = StyleSheet.create({
  stepContainer: {
    padding: 8,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 15,
  },
});
