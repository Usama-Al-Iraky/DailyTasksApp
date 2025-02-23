import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "../Styles/prayerStyle";
import stylesToDo from "../Styles/toDoStyle";
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
const ToDoBox = ({ title, describtion }) => {
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
        <TouchableOpacity style={stylesToDo.toDoBox.btn.body}>
          <Text style={stylesToDo.toDoBox.btn.text}>Done</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export { BoxOne, PrayerBox, ToDoBox };
