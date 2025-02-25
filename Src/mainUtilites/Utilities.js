import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "../Screens/HomeScreen/Styles/prayerStyle";
import stylesToDo from "../Screens/HomeScreen/Styles/toDoStyle";
const BoxOne = ({ text }) => {
  return (
    <View style={styles.boxOne.box}>
      <Text style={styles.boxOne.text}> {text} </Text>
    </View>
  );
};
const PrayerBox = ({ name, time }) => {
  return (
    <View style={styles.prayerBox.box}>
      <Text style={styles.prayerBox.text}> {name} </Text>
      <Text style={styles.prayerBox.text}> {time} </Text>
    </View>
  );
};
const ToDoBox = ({ title, describtion, button, btnText, onPressFun }) => {
  return (
    <View style={stylesToDo.toDoBox.container}>
      <Text style={stylesToDo.toDoBox.title}>{title}</Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Text style={stylesToDo.toDoBox.describtion}>{describtion}</Text>
        {button ? (
          <TouchableOpacity
            style={stylesToDo.toDoBox.btn.body}
            onPress={onPressFun}
          >
            <Text style={stylesToDo.toDoBox.btn.text}> {btnText}</Text>
          </TouchableOpacity>
        ) : null}
      </View>
    </View>
  );
};
const NoToDo = () => {
  return (
    <View style={stylesToDo.noToDo.container}>
      <Text style={stylesToDo.noToDo.text}>There is no To Do</Text>
    </View>
  );
};

export { BoxOne, PrayerBox, ToDoBox, NoToDo };
