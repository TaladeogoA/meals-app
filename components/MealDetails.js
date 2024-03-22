import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const MealDetails = ({
  mealTitle,
  duration,
  complexity,
  affordability,
  containerStyle,
  textStyle,
}) => {
  return (
    <View
      style={[
        {
          alignItems: "center",
          marginTop: 12,
        },
        containerStyle,
      ]}
    >
      <Text style={styles.title}>{mealTitle}</Text>
      <View style={{ flexDirection: "row" }}>
        <View style={styles.infoContainer}>
          <Icon name="time-outline" size={20} color="#333" />
          <Text style={[styles.infoText, textStyle]}>{duration} mins</Text>
        </View>
        <View style={styles.infoContainer}>
          <Icon name="layers-outline" size={20} color="#333" />
          <Text style={[styles.infoText, textStyle]}>
            {complexity.toUpperCase()}
          </Text>
        </View>
        <View style={styles.infoContainer}>
          <Icon name="wallet-outline" size={20} color="#333" />
          <Text style={[styles.infoText, textStyle]}>
            {affordability.toUpperCase()}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default MealDetails;

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 8,
  },
  infoContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 12,
  },
  infoText: {
    marginLeft: 4,
    fontSize: 16,
    color: "#666",
  },
});
