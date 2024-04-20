import { FlatList, StyleSheet, View } from "react-native";
import SingleMealCard from "../components/SingleMealCard";

const MealsList = ({ items }) => {
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

    return <SingleMealCard mealItem={singleMealProps} />;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={renderSingleMeal}
        style={{ width: "100%" }}
      />
    </View>
  );
};

export default MealsList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
  },
});
