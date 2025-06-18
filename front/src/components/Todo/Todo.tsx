import { v4 as uuidv4 } from 'uuid';
import { type todo } from '../../types';
import style from "./todo.module.scss";
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { changeTodo } from "@services/index";

const Todo = ({ id, label, tags, deadline, done }: todo) => {
  const queryClient = useQueryClient()
  const { mutate } = useMutation({
    mutationFn: changeTodo,
    onSuccess: data => {
      queryClient.setQueryData(['todos'], data);
    }
  })
  return (
    <li className={style.todo} aria-label={`todo : ${label}`}>
      <input type="checkbox" name="done" aria-label={`check ${label}`} checked={done} className={style.check} onChange={() => {
        mutate(id);
      }} />
      <div className="info">
        <h3 className={style.title}>{label}</h3>
        <div className={style.meta}>
          <ul className={style.tags}>
            {tags.map((tag) => <li key={uuidv4()} className={style.tag}>#{tag}</li>)}
          </ul>
          <span className={style.date}>{new Intl.DateTimeFormat("fr-FR", {
            dateStyle: "full"
          }).format(new Date(deadline))}</span>
        </div>
      </div>
    </li>
  )
}

export default Todo;