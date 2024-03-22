import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import SingleCategoryScreen from "./screens/SingleCategoryScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SingleMealScreen from "./screens/SingleMealScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: "#f4511e",
            },
            headerTintColor: "white",
            headerTitleStyle: {
              fontWeight: "bold",
            },
          }}
          initialRouteName="Categories"
        >
          <Stack.Screen
            name="Categories"
            component={CategoriesScreen}
            options={{
              title: "Meal Categories",
            }}
          />
          <Stack.Screen
            name="SingleCategory"
            component={SingleCategoryScreen}
          />
          <Stack.Screen
            name="SingleMeal"
            component={SingleMealScreen}
            options={{
              title: "Single Meal",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({});
