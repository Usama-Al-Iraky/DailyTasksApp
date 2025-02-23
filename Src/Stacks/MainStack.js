import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import StartScreen from "../Screens/StartScreen/Satrt.Screen";
import TabStack from "./TabsStack";

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="StartScreen" component={StartScreen} />
      <Stack.Screen name="TabStack" component={TabStack} />
    </Stack.Navigator>
  );
};
export default MainStack;
