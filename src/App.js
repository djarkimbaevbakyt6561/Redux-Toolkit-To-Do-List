import { Route, Routes } from "react-router";
import "./App.css";
import { Header } from "./components/header/Header";
import { Login } from "./components/login/Login";
import { Todos } from "./components/todos/Todos";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/todos" element={<Todos />} />
      </Routes>
    </div>
  );
}

export default App;