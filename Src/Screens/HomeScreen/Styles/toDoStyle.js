import { StyleSheet } from "react-native";
const colors = {
  mbgc: "#d3cffb",
  sc: "#6c5dfb",
  textColor: "white",
};
const stylesToDo = StyleSheet.create({
  container: {
    backgroundColor: colors.mbgc,
    width: "80%",
    height: "100%",
    margin: "auto",
    marginTop: -30,
    borderRadius: 30,
    position: "relative",
  },
  sectionTitle: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
    color: colors.sc,
  },
  toDoBox: {
    container: {
      backgroundColor: colors.sc,
      width: "100%",
      marginLeft: "0",
      padding: 10,
      borderRadius: 10,
      marginTop: 10,
    },
    title: {
      color: colors.textColor,
      fontSize: 15,
      fontWeight: "bold",
    },
    describtion: {
      fontSize: 13,
      marginTop: 10,
      fontWeight: "bold",
      color: "#38317f",
    },
    btn: {
      body: {
        backgroundColor: "white",
        padding: 5,
        borderRadius: 10,
      },
      text: {
        color: colors.sc,
      },
    },
  },
  noToDo: {
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    text: {
      fontSize: 30,
      fontWeight: "bold",
      color: "#38317f",
    },
  },
});
export default stylesToDo;
