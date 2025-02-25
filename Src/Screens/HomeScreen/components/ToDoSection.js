import React, { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";
import styles from "../Styles/toDoStyle";
import { ToDoBox } from "../../../mainUtilites/Utilities";
import { NoToDo } from "../../../mainUtilites/Utilities";
import { useAuth } from "../../../Context/Provider";

const ToDoSection = () => {
  const { dispatch, toDos } = useAuth();

  const handelMoveToDoneTasks = (id) => {
    dispatch({
      type: "ADD_TO_DONE_TASKS",
      id: id,
    });
  };
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>What is To Do ?</Text>
      <View style={{ height: "440", marginTop: 20 }}>
        {toDos.length ? (
          <FlatList
            style={{ width: "117%", marginLeft: -29 }}
            data={toDos}
            renderItem={({ item }) => (
              <ToDoBox
                title={item.title}
                describtion={item.description}
                button
                btnText="Done"
                onPressFun={() => {
                  handelMoveToDoneTasks(item.id);
                }}
              />
            )}
            showsVerticalScrollIndicator={false}
          />
        ) : (
          <NoToDo />
        )}
      </View>
    </View>
  );
};
export default ToDoSection;
