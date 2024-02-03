import { FlatList, Text } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";

const renderGridItem = (itemData) => {
  return (
    <CategoryGridTile
      categoryTitle={itemData.item.title}
      categoryColor={itemData.item.color}
    />
  );
};
const CategoriesScreen = () => {
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
