import React, { useEffect, useState } from "react";
import { View, FlatList } from "react-native";
import { ToDoBox, NoToDo } from "../../../mainUtilites/Utilities";

import AsyncStorage from "@react-native-async-storage/async-storage";
import { useAuth } from "../../../Context/Provider";

const DoneTasks = () => {
  const { doneTasks } = useAuth();

  return (
    <View>
      <View style={{ height: "500" }}>
        {doneTasks.length ? (
          <FlatList
            style={{ width: "117%", marginLeft: -29 }}
            data={doneTasks}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <ToDoBox title={item.title} describtion={item.description} />
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
export default DoneTasks;
