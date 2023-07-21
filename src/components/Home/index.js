import React, { useEffect, useState } from "react";
import Card from "./Card/index.js";

import { useContext } from "react";
import { store } from "../../App.js";
// import Cookies from "js-cookie";

const Home = () => {
  const [todoArray, setTodoArray] = useState([]);
  const [todo, setTodo] = useState("");

  const [count, setCount] = useContext(store);
  // console.log(count, setCount);

  const todoHandler = () => {
    if (todo) {
      setTodoArray([...todoArray, todo]);
      setTodo("");
      // localStorage.setItem("todolist", JSON.stringify(todoArray));

      // let parseTodoList = localStorage.getItem("todolist");
      // console.log(parseTodoList);
      // let resTodo = JSON.parse(parseTodoList);
      // console.log(resTodo);

      // setTodoArray(resTodo);
    }
  };

  // useEffect(() => {
  //   const storedData = JSON.parse(localStorage.getItem(todoArray));
  //   setTodoArray(storedData);
  // }, []);
  useEffect(() => {
    localStorage.setItem("todoArray", todoArray);
  }, [todoArray]);

  const onDelete = (id) => {
    console.log(id);
    const filterTodo = todoArray.filter((_, i) => i !== id);
    setTodoArray(filterTodo);
  };
  // if (todoArray.length > 0) {
  //   setCount(todoArray.length);
  // }

  return (
    <div>
      <input
        type="text"
        value={todo}
        placeholder="enter todo name"
        onChange={(e) => setTodo(e.target.value)}
      />
      <button onClick={todoHandler} style={{ margin: "0px 20px" }}>
        add
      </button>
      <br />

      {todoArray.length ? (
        <ul>
          {todoArray.map((e, idx) => (
            <>
              <Card
                key={idx}
                task={e}
                onDelete={() => onDelete(idx)}
                id={idx}
              />
              {/* <button onClick={() => console.log(e)}>get id</button> */}
            </>
          ))}
        </ul>
      ) : (
        "no todo"
      )}
    </div>
  );
};

export default Home;
