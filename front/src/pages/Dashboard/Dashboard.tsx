import { useEffect, useState } from "react";
import Todo from "@components/Todo";
import Add from "@components/Add";
import { type todo } from "../../types";
import { data } from "../../data";

const Dashboard = () => {
  const [todos, setTodos] = useState(data);

  return <>
    <h2>Dashboard</h2>
    {
      todos.map(({ key, label, deadline, done, tags }: todo) =>
        <Todo key={key} label={label} tags={tags} deadline={deadline} done={done} />)
    }
    <Add setTodos={setTodos} />
  </>
}

export default Dashboard;