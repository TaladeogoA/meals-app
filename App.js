import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import SingleCategoryScreen from "./screens/SingleCategoryScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import SingleMealScreen from "./screens/SingleMealScreen";
import FavouritesScreen from "./screens/FavouritesScreen";
import { Ionicons } from "@expo/vector-icons";
// import FavoritesContextProvider from "./store/context/favourites";
import { Provider } from "react-redux";
import { store } from "./store/redux/store";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#4E6A4D",
        },
        headerTintColor: "white",
        sceneContainerStyle: {
          backgroundColor: "#FBF4EB",
        },
        drawerStyle: {
          backgroundColor: "#FBF4EB",
        },
        drawerActiveBackgroundColor: "#4E6A4D",
        drawerActiveTintColor: "#fff",
      }}
    >
      <Drawer.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="list" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Favourites"
        component={FavouritesScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="star" size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      {/* <FavoritesContextProvider> */}
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerStyle: {
                backgroundColor: "#4E6A4D",
              },
              headerTintColor: "white",
            }}
          >
            <Stack.Screen
              name="Drawer"
              component={DrawerNavigator}
              options={{
                headerShown: false,
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
                title: "Meal Details",
                headerRight: () => {
                  return (
                    <Button
                      onPress={() => alert("This is a button!")}
                      title="Save"
                    />
                  );
                },
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
      {/* </FavoritesContextProvider> */}
    </>
  );
}

const styles = StyleSheet.create({});
