import React, { useState, useEffect, createContext } from "react";

export const DataContext = createContext();

function DataProvider(props) {
  const [todos, setTodos] = useState([
    { name: "cooking", complete: false },
    { name: "playing", complete: true },
  ]);
  //get the todos from localstorage.
  useEffect(() => {
    const todoStorage = JSON.parse(localStorage.getItem("todoStorage"));
    if (todoStorage) {
      setTodos(todoStorage);
      return setTodos;
    } else return [];
  }, []);

  useEffect(() => {
    localStorage.setItem("todoStorage", JSON.stringify(todos));
  }, [todos]);

  return (
    <DataContext.Provider value={[todos, setTodos]}>
      {props.children}
    </DataContext.Provider>
  );
}

export default DataProvider;
