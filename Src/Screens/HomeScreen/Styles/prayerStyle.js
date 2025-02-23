import { StyleSheet } from "react-native";
import { colors } from "../../../mainUtilites/colors";
const { mbgc, boxBg, fontColor } = colors;
const styles = StyleSheet.create({
  setionOne: {
    padding: 15,
    backgroundColor: mbgc,
    borderBottomEndRadius: 50,
    borderBottomStartRadius: 50,
  },
  setionOneA: {
    flexDirection: "row",
  },
  boxOne: {
    container: {
      width: "50%",
      gap: 30,
      alignItems: "flex-end",
      paddingTop: 10,
    },
    box: {
      backgroundColor: boxBg,
      justifyContent: "center",
      alignItems: "center",
      height: 30,
      borderRadius: 10,
      paddingHorizontal: 3,
    },
    text: {
      color: fontColor,
      fontSize: 13,
      fontWeight: "bold",
    },
  },
  PrayerSircle: {
    container: {
      width: "50%",
      justifyContent: "center",
    },
    sircle: {
      justifyContent: "space-around",
      padding: 20,
      alignItems: "center",
      width: 210,
      height: 210,
      borderWidth: 6,
      borderColor: boxBg,
      borderRadius: "50%",
    },
    text: {
      color: fontColor,
      fontSize: 25,
      fontWeight: "bold",
    },
  },
  prayerBox: {
    container: {
      paddingTop: 25,
      paddingBottom: 25,
      flexDirection: "row",
      justifyContent: "space-between",
    },
    box: {
      backgroundColor: boxBg,
      borderRadius: 10,
      padding: 10,
    },
    text: { color: fontColor, fontSize: 15, fontWeight: "bold" },
  },
});
export default styles;
