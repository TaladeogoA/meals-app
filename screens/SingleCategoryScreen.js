import { FlatList, StyleSheet, View } from "react-native";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import SingleMealCard from "../components/SingleMealCard";
import { useLayoutEffect } from "react";

const SingleCategoryScreen = ({ navigation, route }) => {
  const { categoryId } = route.params;

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === categoryId
    ).title;
    navigation.setOptions({ title: categoryTitle });
  }, [navigation, categoryId]);

  const categoryMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(categoryId) >= 0
  );

  const renderSingleMeal = (itemData) => {
    const item = itemData.item;
    const singleMealProps = {
      mealTitle: item.title,
      imageUrl: item.imageUrl,
      complexity: item.complexity,
      affordability: item.affordability,
      duration: item.duration,
      id: item.id,
    };

    // const handlePress = () => {
    //   navigation.navigate("SingleMeal", {
    //     mealId: item.id,
    //   });
    // };

    return <SingleMealCard mealItem={singleMealProps} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={categoryMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderSingleMeal}
        style={{ width: "100%" }}
      />
    </View>
  );
};

export default SingleCategoryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
  },
});
