import React from "react";

import Todo from "../models/todo";
import TodoItem from "./TodoItem";
import classes from "./Todos.module.css";

const Todos: React.FC<{
  items: Todo[];
  onRemoveTodoInApp: (id: string) => void;
}> = (props) => {
  return (
    <ul className={classes.list}>
      {props.items.map((item) => (
        <TodoItem
          key={item.id}
          text={item.text}
          id={item.id}
          onRemoveTodo={props.onRemoveTodoInApp.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;

//FC = functional component
