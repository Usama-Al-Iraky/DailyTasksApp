import React from "react";
import { FlatList, Text, View } from "react-native";
import styles from "../Styles/toDoStyle";
import { ToDoBox } from "./Utilities";
import NoToDo from "./NoToDo";

const ToDoSection = () => {
  const test = [1,2,3,4,5,6,7,8,9];

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>What is To Do ?</Text>
      <View style={{height:'440', marginTop:20}}>
        {
          test.length? <FlatList
          style={{ width: "117%", marginLeft: -29 }}
          data={test}
          renderItem={({ item }) => (
            <ToDoBox
              title={`Title ${item}`}
              describtion={`Discribtion for task ${item} to do`}
            />
          )}
          showsVerticalScrollIndicator={false}
        />: <NoToDo/>
        }
      </View>
    </View>
  );
};
export default ToDoSection;
