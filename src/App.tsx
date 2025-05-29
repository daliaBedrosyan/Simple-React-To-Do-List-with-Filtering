import { useState } from "react"
import TodoInput from "./components/TodoInput"
import type { Filter, Todo } from "./types/types"
import FilterButtons from "./components/FilterButtons";
import TodoList from "./components/TodoList";
import './index.css'

const App = () => {

  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<Filter>('all tasks');

  const handleAddTask = (task: string) => {
    const newTodo: Todo = {
      id: Date.now(),
      name: task,
      completed: false
    }
    setTodos([...todos, newTodo]);
  }

  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') {
      return !todo.completed;
    } else if (filter === 'completed') {
      return todo.completed;
    } else {
      return true;
    }
  });

  const handleToggleTodoState = (id: number) => {
    setTodos(todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    }))
  }

  return (
    <div className="app-container">
      <h1>Todo List</h1>
      <FilterButtons currentFilterState={filter} onFilterChange={setFilter} />
      <TodoInput onAddTask={handleAddTask} />
      <TodoList todos={filteredTodos} onToggle={handleToggleTodoState} />
    </div>
  )
}

export default App
