import { StyleSheet } from "react-native";
import { colors } from "../../mainUtilites/colors";
const { mbgc, boxBg, fontColor } = colors;
const styles = StyleSheet.create({
  mainBox: {
    flex: 1,
    backgroundColor: mbgc,
    justifyContent: "center",
    alignItems: "center",
  },
  textMain: {
    color: fontColor,
    fontSize: 30,
    fontWeight: "bold",
  },
  discText: {
    color: "#535353",
    fontSize: 20,
    textAlign: "center",
    padding: 20,
  },
  mainBtn: {
    backgroundColor: boxBg,
    padding: 10,
    borderRadius: 10,
    marginTop: 150,
    alignItems: "center ",
    justifyContent: "center",
    flexDirection: "row",
  },
  mainBtnText: {
    color: fontColor,
    fontSize: 20,
    fontWeight: "800",
  },
  mainBtnIcon: {
    color: fontColor,
    fontSize: 30,
    fontWeight: "800",
    backgroundColor: mbgc,
    borderRadius: 10,
    marginLeft: 10,
  },
});
export default styles;
