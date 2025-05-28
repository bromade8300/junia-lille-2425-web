import Todo from "@components/Todo";
import { type todo } from "../../types";
import { data } from "../../data";

const Dashboard = () => {
  return <>
    <h2>Dashboard</h2>
    {
      data.map(({ key, label, deadline, done, tags }: todo) =>
        <Todo key={key} label={label} tags={tags} deadline={deadline} done={done} />)
    }

  </>
}

export default Dashboard;