import { useNavigation } from "@react-navigation/native";
import { Image, Pressable, StyleSheet, View } from "react-native";
import MealDetails from "./MealDetails";

const SingleMealCard = ({
  mealItem: { imageUrl, mealTitle, complexity, affordability, duration, id },
}) => {
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate("SingleMeal", {
      mealId: id,
    });
  };

  return (
    <View style={styles.container}>
      <Pressable
        style={styles.pressableStyle}
        android_ripple={{
          color: "rgba(0,0,0,0.1)",
          borderless: true,
        }}
        onPress={handlePress}
      >
        <View style={styles.innerGridContainer}>
          <Image source={{ uri: imageUrl }} style={styles.image} />
        </View>
        <MealDetails
          mealTitle={mealTitle}
          duration={duration}
          complexity={complexity}
          affordability={affordability}
        />
      </Pressable>
    </View>
  );
};

export default SingleMealCard;

const styles = StyleSheet.create({
  container: {
    height: 300,
    marginBottom: 40,
    borderRadius: 8,
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    backgroundColor: "white",
  },
  pressableStyle: {
    height: "100%",
    borderRadius: 8,
  },
  innerGridContainer: {
    flex: 1,
    maxHeight: 210,
  },
  image: {
    height: "100%",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 8,
  },
});
