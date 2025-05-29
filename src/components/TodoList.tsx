import type { Todo } from "../types/types";
import TodoItem from "./TodoItem";

interface TodoListProps {
    todos: Todo[];
    onToggle: (id: number) => void;
};

const TodoList = ({ todos, onToggle }: TodoListProps) => {
    return (
        <div>
            <ol>
                {todos.map(todo => (
                    <TodoItem key={todo.id} todo={todo} onToggle={onToggle}/>
                ))}
            </ol>
        </div>
    )
};

export default TodoList;