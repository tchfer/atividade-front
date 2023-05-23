import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Tasks from "./pages/Tasks";
import TasksForm from "./pages/Tasks/Form";
import TasksDetail from "./pages/Tasks/Detail";

const Routess: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tarefas" element={<Tasks />} />
      <Route path="/tarefas_cadastro" element={<TasksForm />} />
      <Route path="/tarefas_cadastro/:id" element={<TasksForm />} />
      <Route path="/tarefas/:id" element={<TasksDetail />} />
    </Routes>
  );
};

export default Routes;
