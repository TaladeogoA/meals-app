import { FlatList, Text } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";

const CategoriesScreen = ({ navigation }) => {
  const renderGridItem = (itemData) => {
    const handlePress = () => {
      navigation.navigate("SingleCategory", {
        categoryId: itemData.item.id,
      });
    };

    return (
      <CategoryGridTile
        categoryTitle={itemData.item.title}
        categoryIcon={itemData.item.icon}
        onPress={handlePress}
      />
    );
  };

  return (
    <FlatList
      data={CATEGORIES}
      renderItem={renderGridItem}
      keyExtractor={(item) => item.id}
      numColumns={2}
    />
  );
};

export default CategoriesScreen;
