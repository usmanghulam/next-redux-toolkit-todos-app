import { useSelector } from "react-redux";

const TodosList = () => {
  const { todos } = useSelector((state: any) => state.todos);
  const renderTodos = Array.isArray(todos) && todos.length > 0 && todos.map(todo => {
      return <div key={todo.id}>
        <p>{todo.title}</p>
        <p>{todo.body}</p>
      </div>
  })
  return (
    <>
      <div>{renderTodos}</div>
    </>
  );
};

export default TodosList;
