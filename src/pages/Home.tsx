import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useTodoStore } from '../store/todoStore';
import { TodoItem } from '../components/TodoItem';
import { Todo } from '../features/todo/types';
import '../index.css';
const now = new Date().toISOString();

function Home() {
  const [text, setText] = useState('');
  const todos = useTodoStore((state) => state.todos);
  const addTodo = useTodoStore((state) => state.addTodo);

  const handleAdd = () => {
    if (text.trim() === '') return;

    const newTodo: Todo = {
      id: uuidv4(),
      text: text,
      completed: false,
      createdAt: now,
      updatedAt: now,
    };

    addTodo(newTodo);
    setText('');
  };

  return (
    <div className="max-w-xl mx-auto">
    <div className="space-y-4">
      <div className="flex gap-2">
        <input
          className="flex-1 p-2 border rounded"
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="What do you need to do?"
        />
        <button
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          onClick={handleAdd}
        >
          Add
        </button>
      </div>

      <div className="space-y-2">
        {todos.length === 0 ? (
          <p className="text-gray-500 text-center">No tasks yet.</p>
        ) : (
          todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)
        )}
      </div>
    </div>
    </div>
  );
}

export default Home;
