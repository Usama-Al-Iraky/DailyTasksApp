import React from "react";
import PrayerSection from "./components/PrayerSectionComp";
import { View } from "react-native";
import ToDoSection from "./components/ToDoSection";
const HomeScreen = () => {
  return (
    <View>
      <PrayerSection />
      <ToDoSection/>
    </View>
  );
};
export default HomeScreen;
