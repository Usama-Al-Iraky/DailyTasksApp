import { StyleSheet } from "react-native";
import { colors } from "../../../mainUtilites/colors";
const { mbgc, fontColor } = colors;
const color = {
  mbgc: "#d3cffb",
  sc: "#6c5dfb",
  textColor: "white",
};
const styles = StyleSheet.create({
  sectionA: {
    container: {
      backgroundColor: mbgc,
      height: "300",
      borderBottomEndRadius: 70,
      borderBottomStartRadius: 70,
      justifyContent: "center",
      alignItems: "center",
    },
    text: {
      color: fontColor,
      fontSize: 20,
      fontWeight: "bold",
    },
  },
  form: {
    container: {
      backgroundColor: color.mbgc,
      width: "80%",
      height: "100%",
      margin: "auto",
      marginTop: "-70",
      borderRadius: 70,
    },
    form: {
      backgroundColor: color.sc,
      width: "117%",
      marginLeft: -29,

      borderRadius: 10,
    },
    inputs: {
      height: 40,
      margin: 12,

      padding: 10,
      borderRadius: 10,
      backgroundColor: color.textColor,
      textAlign: "center",
    },
    btn: {
      container: {
        flexDirection: "row",
        marginTop: "30",
        marginBottom: "10",
      },
      body: {
        margin: "auto",
        padding: 10,
        width: "150",
        backgroundColor: color.textColor,
        marginTop: "10",
        marginBottom: "10",
        borderRadius: 10,
      },
      text: {
        textAlign: "center",
      },
    },
  },
});
export default styles;
