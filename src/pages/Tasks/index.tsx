import React, { useState, useEffect } from 'react';
import { Table } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import api from '../../services/api';
import moment from 'moment';
import './index.css';

interface ITask {
  id: number;
  title: string;
  description: string;
  finished: boolean;
  created_at: Date;
  updated_at: Date;
}

const Tasks: React.FC = () => {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const history = useHistory();

  useEffect(() => {
    loadTasks();
  }, []);

  async function loadTasks() {
    const response = await api.get('/tasks');
    console.log(response);
    setTasks(response.data);
  }

  function formatDate(date: Date) {
    return moment(date).format('DD/MM/YYYY');
  }

  function newTask() {
    history.push('/tarefas_cadastro');
  }

  function editTask(id: number) {
    history.push(`/tarefas_cadastro/${id}`);
  }

  function viewTask(id: number) {
    history.push(`/tarefas/${id}`);
  }

  async function finishedTask(id: number) {
    await api.patch(`/tasks/${id}`);
    loadTasks();
  }

  async function deleteTask(id: number) {
    await api.delete(`/tasks/${id}`);
    loadTasks();
  }

  return (
    <div className="container">
      <br />
      <div className="task-header">
        <h1>Tarefas</h1>
        <button className="btn btn-dark" onClick={newTask}>
          Nova Tarefa
        </button>
      </div>
      <br />
      <Table striped bordered hover className="text-center">
        <thead>
          <tr>
            <th>ID</th>
            <th>Título</th>
            <th>Data de Atualização</th>
            <th>Status</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr key={task.id}>
              <td>{task.id}</td>
              <td>{task.title}</td>
              <td>{formatDate(task.updated_at)}</td>
              <td>{task.finished ? 'Finalizado' : 'Pendente'}</td>
              <td>
                {task.finished ? (
                  <span className="disabled-link">Editar</span>
                ) : (
                  <Link to={`/tarefas_cadastro/${task.id}`} className="btn btn-primary">
                    Editar
                  </Link>
                )}{' '}
                {task.finished ? (
                  <button className="btn btn-success disabled" disabled>
                    Finalizar
                  </button>
                ) : (
                  <button className="btn btn-success" onClick={() => finishedTask(task.id)}>
                    Finalizar
                  </button>
                )}{' '}
                <Link to={`/tarefas/${task.id}`} className="btn btn-warning">
                  Visualizar
                </Link>{' '}
                <button className="btn btn-danger" onClick={() => deleteTask(task.id)}>
                  Remover
                </button>{' '}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>)}

export default Tasks;
