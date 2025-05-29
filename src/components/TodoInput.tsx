import { useState } from "react";

interface TodoInputProps {
  onAddTask: (task: string) => void;
}

const TodoInput = ({ onAddTask }: TodoInputProps) => {

  const [input, setInput] = useState('');

  const handleAdd = () => {
    if (input) {
      onAddTask(input);
      setInput('')
    }
  }

  return (
    <div className="todo-input">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)} />
      <button className="add-task-button" onClick={handleAdd}>Add Task</button>
    </div>
  )
}

export default TodoInput
