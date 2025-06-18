export const getTodos = () => fetch("http://localhost:3000/todo").then(async res => await res.json());

export const changeTodo = (id: number) => fetch(`http://localhost:3000/todo/${id}`, {
  method: "PUT"
}).then(async res => await res.json());

