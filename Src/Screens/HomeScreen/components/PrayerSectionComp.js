import React from "react";
import { Text, View } from "react-native";
import styles from "../Styles/prayerStyle";
import { BoxOne, PrayerBox } from "../../../mainUtilites/Utilities";
import { useAuth } from "../../../Context/Provider";

const PrayerSection = () => {
  const { prayers, sunrise, date, timeIn, nextPrayerIs, timeToNextPrayerIs } =
    useAuth();
  const prayersRight = prayers.reverse();
  return (
    <View style={styles.setionOne}>
      <View style={styles.setionOneA}>
        <View style={styles.PrayerSircle.container}>
          <View style={styles.PrayerSircle.sircle}>
            <Text style={styles.PrayerSircle.text}>{nextPrayerIs.name}</Text>
            <Text style={styles.PrayerSircle.text}>بعد</Text>
            <Text style={styles.PrayerSircle.text}>{timeToNextPrayerIs}</Text>
          </View>
        </View>
        <View style={styles.boxOne.container}>
          <BoxOne text={`${date.dayEn}   ${date.date}`} />
          <BoxOne
            text={`${date.dayAr}   ${date.hijriDay} ${date.monthHijri} ${date.hijriYear}`}
          />

          <BoxOne text={timeIn} />
          <BoxOne text={`الشروق     ${sunrise}`} />
        </View>
      </View>
      <View style={styles.prayerBox.container}>
        {prayersRight.map((item, index) => (
          <PrayerBox key={index} name={item.name} time={item.time} />
        ))}
      </View>
    </View>
  );
};
export default PrayerSection;
