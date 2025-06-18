import { type todo } from '../types';

export const getTodos = () => fetch("http://localhost:3000/todo").then(async res => await res.json());

export const changeTodo = (id: number) => fetch(`http://localhost:3000/todo/${id}`, {
  method: "PUT"
}).then(async res => await res.json());

export const addTodo = (todo: todo) => fetch("http://localhost:3000/todo", {
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  method: "POST",
  body: JSON.stringify(todo)
}).then(async res => await res.json());