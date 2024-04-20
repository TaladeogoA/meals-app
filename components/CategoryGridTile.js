import { Pressable, StyleSheet, Text, View, Platform } from "react-native";
import FaIcon from "react-native-vector-icons/FontAwesome";
import Fa5Icon from "react-native-vector-icons/FontAwesome5";
import Fa6Icon from "react-native-vector-icons/FontAwesome6";
import IoniconIcon from "react-native-vector-icons/Ionicons";
import EntypoIcon from "react-native-vector-icons/Entypo";
import FeatherIcon from "react-native-vector-icons/Feather";
import BoltIcon from "react-native-vector-icons/MaterialCommunityIcons";

const ICON_LIBRARIES = {
  pizza: {
    library: IoniconIcon,
    name: "pizza-outline",
  },
  bolt: {
    library: BoltIcon,
    name: "lightning-bolt-outline",
  },
  hamburger: {
    library: Fa5Icon,
    name: "hamburger",
  },
  beer: {
    library: Fa5Icon,
    name: "beer",
  },
  leaf: {
    library: EntypoIcon,
    name: "leaf",
  },
  globe: {
    library: EntypoIcon,
    name: "globe",
  },
  coffee: {
    library: FeatherIcon,
    name: "coffee",
  },
  rice: {
    library: Fa6Icon,
    name: "bowl-rice",
  },
  wine: {
    library: IoniconIcon,
    name: "wine-outline",
  },
  sun: {
    library: FaIcon,
    name: "sun-o",
  },
};

const CategoryGridTile = ({ categoryTitle, categoryIcon, onPress }) => {
  const Icon = ICON_LIBRARIES[categoryIcon].library;
  const iconName = ICON_LIBRARIES[categoryIcon].name;
  return (
    <View style={styles.gridItemContainer}>
      <Pressable
        style={styles.pressableStyle}
        android_ripple={{
          color: "rgba(0,0,0,0.1)",
          borderless: true,
        }}
        onPress={onPress}
      >
        <View style={styles.innerGridContainer}>
          <Icon name={iconName} size={45} color="#000" />
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
    fontSize: 14,
    fontWeight: "300",
  },
});
