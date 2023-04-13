import { Navbar } from "react-bootstrap";
import "./App.css";
import React from "react";
import { Link } from "react-router-dom";

function App() {
  const todolist = () => {
    console.log("test");

    window.location.replace("http://localhost:3000/todo");
  };

  return (
    <div class="container" style={{ width: "main-width" }}>
      <Navbar style={{ margin: "2rem", justifyContent: "center" }}>
        <h1
          style={{
            fontFamily: " 'Dear Dreamer', sans-serif",
            color: "#FFBF00",
            fontWeight: "600",
            letterSpacing: "0.5rem",
          }}
        >
          Philomath web 方便
        </h1>
      </Navbar>
      <div class="container p-4">
        <div class="row row-cols-2 row-cols-2 gy-4 h-80" style={{}}>
          <div class="col">
            <div class="p-3" style={{ border: "1px solid #7FFF00" }}>
              <div style={{ textAlign: "center" }}>
                <h4>Todolist App</h4>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book
                </p>
                <Link to={"/todo"}>
                  <button
                    type="button"
                    class="btn btn-warning"
                    // onClick={todolist}
                  >
                    Todolist
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div class="col ">
            <div class="p-3 " style={{ border: "1px solid #7FFF00" }}>
              <div style={{ textAlign: "center" }}>
                <h4>My-Notes</h4>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book
                </p>
                <button type="button" class="btn btn-warning">
                  Warning
                </button>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="p-3" style={{ border: "1px solid #7FFF00" }}>
              <div style={{ textAlign: "center" }}>
                <h4>Calculator</h4>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book
                </p>
                <button
                  type="button"
                  class="btn btn-warning"
                  style={{ alignContent: "center" }}
                >
                  Warning
                </button>
              </div>
            </div>
          </div>
          <div class="col ">
            <div class="p-3" style={{ border: "1px solid #7FFF00" }}>
              <div style={{ textAlign: "center" }}>
                <h4>Text-To-Speech & Speech-To-Text</h4>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book
                </p>
                <button
                  type="button"
                  class="btn btn-warning"
                  style={{ alignContent: "center" }}
                >
                  Warning
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <Todo /> */}
    </div>
  );

  // return (
  //   <div>
  //     hello
  //     <Todo />
  //   </div>
  // );
}

export default App;
