import { Pressable, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/AntDesign";

const IconButton = ({ icon, color, onPress }) => {
  return (
    <Pressable onPress={onPress} style={styles.button}>
      <Icon name={icon} size={20} color={color} />
    </Pressable>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  button: {
    width: 50,
    height: 50,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
