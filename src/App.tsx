import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Tasks from "./pages/Tasks";
import TasksForm from "./pages/Tasks/Form";
import TasksDetail from "./pages/Tasks/Detail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tarefas" element={<Tasks />} />
        <Route path="/tarefas_cadastro" element={<TasksForm />} />
        <Route path="/tarefas_cadastro/:id" element={<TasksForm />} />
        <Route path="/tarefas/:id" element={<TasksDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
