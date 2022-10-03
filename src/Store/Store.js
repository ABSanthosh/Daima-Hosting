import { createStore, action } from "easy-peasy";

const Store = createStore({
  theme: "github",

  setTheme: action((state, payload) => {
    state.theme = payload;
  }),
  // todo: [
  //   { id: 1, text: "Learn React", completed: true },
  //   { id: 2, text: "Learn Redux", completed: false },
  //   { id: 3, text: "Learn React-Redux", completed: false },
  // ],
  // addTodo: action((state, payload) => {
  //   state.todo.push({
  //     id: payload.id,
  //     text: payload.text,
  //     completed: payload.completed,
  //   });
  // }),
  // removeTodo: action((state, payload) => {
  //   state.todo = state.todo.filter((todo) => todo.id !== payload);
  // }),
  // toggleTodo: action((state, payload) => {
  //   state.todo.map((item) => {
  //     if (item.id === payload) {
  //       item.completed = !item.completed;
  //     }
  //   });
  // }),
});

export { Store };
