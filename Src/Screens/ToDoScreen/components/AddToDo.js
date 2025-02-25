import React, { useState } from "react";
import { ToDoBox } from "../../../mainUtilites/Utilities";
import shortid from "shortid";
import styles from "../Styles/style";
import { useAuth } from "../../../Context/Provider";
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";
export const AddToDo = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [toDos, setToDos] = useState([]);
  const handelDone = () => {
    const toDo = {
      id: shortid.generate(),
      title: title,
      description: description,
    };
    if (title != "" && description != "") {
      setToDos([...toDos, toDo]);
      setTitle("");
      setDescription("");
    }
  };

  const { dispatch } = useAuth();
  const handelMoveToToDo = (id) => {
    const toDoindex = toDos.findIndex((i) => i.id === id);

    if (toDoindex !== -1) {
      dispatch({
        type: "ADD_TO_TODOS",
        toDo: toDos[toDoindex],
      });
      toDos.splice(toDoindex, 1);
    }
  };
  return (
    <View>
      <View style={styles.form.form}>
        <TextInput
          value={title}
          style={styles.form.inputs}
          placeholder="What to do"
          onChange={(e) => {
            setTitle(e.nativeEvent.text);
          }}
        />
        <TextInput
          value={description}
          style={styles.form.inputs}
          placeholder="Description"
          onChangeText={(value) => {
            setDescription(value);
          }}
        />
        <TouchableOpacity style={styles.form.btn.body} onPress={handelDone}>
          <Text style={styles.form.btn.text}>Done</Text>
        </TouchableOpacity>
      </View>
      <View style={{ height: "300", marginTop: 20 }}>
        <FlatList
          style={{ width: "117%", marginLeft: -29 }}
          data={toDos}
          renderItem={({ item }) => (
            <ToDoBox
              title={item.title}
              describtion={item.description}
              button
              btnText="Ok"
              onPressFun={() => {
                handelMoveToToDo(item.id);
              }}
            />
          )}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};
