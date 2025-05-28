import { useState } from "react";
import Todo from "@components/Todo";
import Add from "@components/Add";
import { type todo } from "../../types";
import { data } from "../../data";

const Dashboard = () => {
  const [todos, setTodos] = useState(data);
  const [filterByNotDone, setFilterByNotDone] = useState(true);
  return <>
    <h2>Dashboard</h2>
    <label htmlFor="displayAllTodos">Afficher toutes les todos</label> <input type="checkbox" name="displayAllTodos" id="displayAllTodos" checked={!filterByNotDone} onChange={() => setFilterByNotDone(filterByNotDone => !filterByNotDone)} />
    {
      todos
        .filter(({ done }) => {
          if (filterByNotDone) {
            return !done
          }
          return true
        })
        .map(({ id, label, deadline, done, tags }: todo) =>
          <Todo key={id} id={id} label={label} tags={tags} deadline={deadline} done={done} setTodos={setTodos} />)
    }
    <Add setTodos={setTodos} />
  </>
}

export default Dashboard;