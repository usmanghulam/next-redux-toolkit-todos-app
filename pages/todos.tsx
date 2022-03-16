import React from "react";
import TodosList from "../components/todoslist";
import { wrapper } from "../store/store";
import { setAllTods } from "../store/todos/reducer";

const Todos = (props: any) => {
  return <TodosList />;
};
export const getStaticProps = wrapper.getStaticProps(
  ({ dispatch }) =>
    async ({ req, res, query }) => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      dispatch(setAllTods(data));
    }
);
export default Todos;
