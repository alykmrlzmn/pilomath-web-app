import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App";
import Todo from "./Todo";

function Routee() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}></Route>
          <Route path="/todo" element={<Todo />}></Route>
          <Route path="/calculator" element={<></>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Routee;
