import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const CURD = () => {
  const [todo, setTodo] = useState([]);

  const [todoInput, setTodoInput] = useState("");

  const [updateItem, setUpdateItem] = useState({});

  const [editToggle, setEditToggle] = useState(false);

  useEffect(() => {}, [todoInput]);

  const addHandle = () => {
    if (todoInput) {
      setTodo([...todo, { id: uuidv4(), task: todoInput }]);
      setTodoInput("");
    }
    // console.log(todo);
  };

  const handleEdit = (id) => {
    // console.log(item);
    if (id) {
      setEditToggle(true);
      setUpdateItem(todo.find((e) => e.id === id));
      console.log(updateItem);
      setTodoInput(updateItem.task);
      //   console.log(todoInput);
    } else {
      alert("no object");
    }
  };

  const updateHandle = () => {
    setTodo(
      todo.map((e) => (e.id === updateItem.id ? { ...e, task: todoInput } : e))
    );
    setEditToggle(false);
    setTodoInput("");
  };

  const handleDelete = (id) => {
    // console.log(id);

    setTodo(todo.filter((e) => e.id !== id));
  };

  return (
    <div>
      <h1>curd</h1>
      <input
        onChange={(e) => setTodoInput(e.target.value)}
        name="task"
        value={todoInput}
        placeholder="enter your todo"
      />
      {!editToggle ? (
        <button onClick={addHandle}>add</button>
      ) : (
        <button onClick={updateHandle}>update</button>
      )}

      <br />

      {todo.length > 0 ? (
        <div>
          {todo.map((item) => (
            <div key={item.id}>
              <h3 style={{ display: "inline-block", marginRight: "10px" }}>
                {item.task}
              </h3>
              <button onClick={() => handleEdit(item.id)}>edit</button>
              <button onClick={() => handleDelete(item.id)}>delete</button>
            </div>
          ))}
        </div>
      ) : (
        "no todos"
      )}
    </div>
  );
};

export default CURD;
