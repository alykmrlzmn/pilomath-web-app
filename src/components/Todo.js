import React from "react";
import "./Todo.css";
import FormInput from "./FormInput";
import List from "./List";
import Footer from "./Footer";
import DataProvider from "./DataProvider";
function Todo() {
  return (
    <DataProvider>
      <div className="Todo">
        <h2
          className="h2-todo"
          style={{
            fontFamily: " 'Dear Dreamer', sans-serif",
            letterSpacing: "0.5 rem",
          }}
        >
          TodoList{" "}
        </h2>
        <FormInput />
        <List />
        <Footer />
      </div>
    </DataProvider>
  );
}
export default Todo;
