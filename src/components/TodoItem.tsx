import type { Todo } from "../types/types";

interface TodoItemProps {
  todo: Todo
  onToggle: (id: number) => void;
}

const TodoItem = ({ todo, onToggle }: TodoItemProps) => {
  return (
    <div>
        <li
          onClick={() => onToggle(todo.id)}
          style={{ textDecoration: todo.completed ? 'line-through' : 'none' , cursor: 'pointer' }}
        >{todo.name}</li>
    </div>
  )
}

export default TodoItem
