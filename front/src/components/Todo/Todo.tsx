import { v4 as uuidv4 } from 'uuid';
import { type todo } from '../../types';

const Todo = ({ label, tags, deadline, done }: todo) => {
  return (
    <div className="todo">
      <h3>{label}</h3>
      <ul>
        {tags.map(tag => <li key={uuidv4()}>{tag}</li>)}
      </ul>
      <p>{new Intl.DateTimeFormat("fr-FR", {
        dateStyle: "full"
      }).format(deadline)}</p>
      <input type="checkbox" name="done" checked={done} />
    </div>
  )
}

export default Todo;