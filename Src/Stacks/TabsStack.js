import React from "react";
import HomeScreen from "../Screens/HomeScreen/Home.Screen";
import ToDoScreen from "../Screens/ToDoScreen/ToDo.Screen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Feather";
import {colors} from "../mainUtilites/colors";
const {mbgc, boxBg, fontColor} = colors;
const Tab = createBottomTabNavigator();

const TabStack = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: mbgc },
        tabBarLabelStyle: { fontSize: 12, fontWeight: "bold" },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <Icon name="home" size={25} color={color} />
          ),
          tabBarActiveTintColor: boxBg,
          tabBarInactiveTintColor: fontColor,
        }}
      />
      <Tab.Screen
        name="ToDo"
        component={ToDoScreen}
        options={{
          tabBarLabel: "Add ToDo",
          tabBarIcon: ({ color }) => (
            <Icon name="edit-2" size={25} color={color} />
          ),
          tabBarActiveTintColor: boxBg,
          tabBarInactiveTintColor: fontColor,
        }}
      />
    </Tab.Navigator>
  );
};
export default TabStack;
