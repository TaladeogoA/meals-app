import { MEALS, CATEGORIES } from "../data/dummy-data";
import { useLayoutEffect } from "react";
import MealsList from "./MealsList";

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

  return <MealsList items={categoryMeals} />;
};

export default SingleCategoryScreen;
