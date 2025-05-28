import { v4 as uuidv4 } from 'uuid';
import { type todo } from '../../types';
import style from "./todo.module.scss";

const Todo = ({ label, tags, deadline, done }: todo) => {
  return (
    <div className={style.todo}>
      <input type="checkbox" name="done" checked={done} className={style.check} />
      <div className="info">
        <h3 className={style.title}>{label}</h3>
        <div className={style.meta}>
          <ul className={style.tags}>
            {tags.map(tag => <li key={uuidv4()} className={style.tag}>#{tag}</li>)}
          </ul>
          <span className={style.date}>{new Intl.DateTimeFormat("fr-FR", {
            dateStyle: "full"
          }).format(deadline)}</span>
        </div>
      </div>
    </div>
  )
}

export default Todo;