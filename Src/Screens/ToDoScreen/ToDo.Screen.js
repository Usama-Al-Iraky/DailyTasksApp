import React, { useState } from "react";
import { Pressable, Text, View } from "react-native";
import styles from "./Styles/style";
import { AddToDo } from "./components/AddToDo";
import DoneTasks from "./components/DoneTasks";

const ToDoScreen = () => {
  const [navigate, setNavigate] = useState("addToDo");
  return (
    <View>
      <View style={styles.sectionA.container}>
        <Text style={styles.sectionA.text}> {navigate === 'addToDo'? 'What do you want to do ?': 'Done Tasks'} </Text>
      </View>
      <View style={styles.form.container}>
        <View style={styles.form.btn.container}>
          <Pressable
            onPress={() => {
              setNavigate("addToDo");
            }}
            style={{
              ...styles.form.btn.body,
              backgroundColor: navigate === "addToDo" ? "#6c5dfb" : "#9795fc",
            }}
          >
            <Text style={styles.form.btn.text}>Add To DO</Text>
          </Pressable>

          <Pressable
            onPress={() => {
              setNavigate("doneTasks");
            }}
            style={{
              ...styles.form.btn.body,
              backgroundColor: navigate === "addToDo" ? "#9795fc" : "#6c5dfb",
            }}
          >
            <Text style={styles.form.btn.text}>Done Tasks</Text>
          </Pressable>
        </View>
        {navigate === "addToDo" ? <AddToDo /> : <DoneTasks />}
      </View>
    </View>
  );
};
export default ToDoScreen;
