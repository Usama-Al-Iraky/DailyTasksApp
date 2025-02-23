import { Pressable, Text, View } from "react-native";
import React from "react";
import styles from "./style";
import Icon from "react-native-vector-icons/Entypo";
import { useNavigation } from "@react-navigation/native";
const StartScreen = () => {
  const { navigate } = useNavigation();
  return (
    <View style={styles.mainBox}>
      <Text style={styles.textMain}>Welcome in my First App</Text>
      <Text style={styles.discText}>
        This is my first app to demonstrate what I have come up with using React
        Native. The app includes to do list and prayer times.
      </Text>
      <Pressable
        style={styles.mainBtn}
        onPress={() => {
          navigate("TabStack");
        }}
      >
        <Text style={styles.mainBtnText}>Let`s Go</Text>
        <Icon
          style={styles.mainBtnIcon}
          name="chevron-right"
          size={30}
        />
      </Pressable>
    </View>
  );
};
export default StartScreen;
