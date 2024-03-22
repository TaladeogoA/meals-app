import React from "react";
import { Pressable, StyleSheet, Text, View, Platform } from "react-native";

const CategoryGridTile = ({ categoryTitle, categoryColor, onPress }) => {
  return (
    <View
      style={[styles.gridItemContainer, { backgroundColor: categoryColor }]}
    >
      <Pressable
        style={styles.pressableStyle}
        android_ripple={{
          color: "rgba(0,0,0,0.1)",
          borderless: true,
        }}
        onPress={onPress}
      >
        <View style={styles.innerGridContainer}>
          <Text style={styles.title}>{categoryTitle}</Text>
        </View>
      </Pressable>
    </View>
  );
};

export default CategoryGridTile;

const styles = StyleSheet.create({
  gridItemContainer: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    elevation: 4,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    backgroundColor: "white",
    overflow:
      Platform.OS === "android" && Platform.Version >= 21
        ? "hidden"
        : "visible",
  },
  pressableStyle: {
    flex: 1,
  },
  innerGridContainer: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
