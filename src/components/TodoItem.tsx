import React from "react";
import classes from "./TodoItem.module.css";

const TodoItem: React.FC<{
  text: string;
  id: number | string;
  onRemoveTodo: () => void;
}> = (props) => {
  return (
    <li className={classes.item}>
      {props.text}
      <button onClick={props.onRemoveTodo}>remove</button>
    </li>
  );
};

export default TodoItem;
