import { useEffect, useState } from "react";
import Todo from "@components/Todo";
import Add from "@components/Add";
import { type todo } from "../../types";
// import { data } from "../../data";

const Dashboard = () => {
  const [todos, setTodos] = useState<todo[]>([]);
  const [error, setError] = useState<null | string>(null);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const res = await fetch("http://localhost:3000/todo");
      console.log(res);
      if (!res.ok) {
        setIsLoading(false);
        setError("Une erreur est survenue");
      } else {
        const result = await res.json();
        setIsLoading(false);
        setTodos(result);
      }
    }
    fetchData();
  }, []);

  const [filterByNotDone, setFilterByNotDone] = useState(true);
  return <>
    <h2>Dashboard</h2>
    {
      isLoading ? error && <p>{error}</p> : <ul>
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
      </ul>
    }

    <label htmlFor="displayAllTodos">Afficher toutes les todos</label> <input type="checkbox" name="displayAllTodos" id="displayAllTodos" checked={!filterByNotDone} onChange={() => setFilterByNotDone(filterByNotDone => !filterByNotDone)} />

    <Add setTodos={setTodos} />
  </>
}

export default Dashboard;