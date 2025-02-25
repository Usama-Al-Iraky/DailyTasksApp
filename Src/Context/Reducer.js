import AsyncStorage from "@react-native-async-storage/async-storage";

export const initialValues = {
  toDos: [],
  doneTasks: [],
};

export const Reducer = (state = initialValues, action) => {
  let newState;
  switch (action.type) {
    case "GET_SAVED_DATA":
      return {
        ...state,
        todos: action.todos,
        doneTasks: action.doneTasks,
      };
    case "ADD_TO_TODOS":
      newState = {
        ...state,
        toDos: [...state.toDos, action.toDo],
      };
      AsyncStorage.setItem("mainData", JSON.stringify(newState));
      return newState;
    case "ADD_TO_DONE_TASKS":
      const todos = state.toDos;
      let updatedToDos = [...todos];
      let newDoneTasks;
      const toDoIndex = todos.findIndex((i) => i.id === action.id);
      if (toDoIndex != -1) {
        newDoneTasks = [...state.doneTasks, todos[toDoIndex]];
        updatedToDos.splice(toDoIndex, 1);
      }
      newState = {
        ...state,
        toDos: updatedToDos,
        doneTasks: newDoneTasks,
      };
      AsyncStorage.setItem("mainData", JSON.stringify(newState));
      return newState;
  }
};
