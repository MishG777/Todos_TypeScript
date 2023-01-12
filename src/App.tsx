import { useState } from "react";
import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import Todo from "./models/todo";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodosHandler = (todoText: string) => {
    const newTodo = new Todo(todoText);

    setTodos((prevTodos) => {
      return [...prevTodos, newTodo];
    });
  };

  const removeTodoHandler = (todoId: string) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== todoId);
    });
  };
  //console.log(todos);

  return (
    <div>
      <NewTodo onAddTodo={addTodosHandler} />
      <Todos items={todos} onRemoveTodoInApp={removeTodoHandler} />
    </div>
  );
}

export default App;
