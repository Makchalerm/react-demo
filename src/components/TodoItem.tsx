import { useState } from "react";
import { Todo } from "../features/todo/types";
import { useTodoStore } from "../store/todoStore";

type Props = {
  todo: Todo;
};

export const TodoItem = ({ todo }: Props) => {
  const toggleTodo = useTodoStore((state) => state.toggleTodo);
  const deleteTodo = useTodoStore((state) => state.deleteTodo);
  const updateTodo = useTodoStore((state) => state.updateTodo);

  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleUpdate = () => {
    if (editText.trim() === "") return;
    updateTodo(todo.id, editText);
    setIsEditing(false);
  };

  return (
    <div className="flex flex-col bg-white p-5 rounded shadow">
      <div className="flex items-center justify-between">
        <div className="w-[90%] break-words">
          {isEditing ? (
            <input
              className="w-full break-words"
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
              onBlur={handleUpdate}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleUpdate();
              }}
              autoFocus
            />
          ) : (
            <span
              className={`cursor-pointer`}
              onClick={() => setIsEditing(true)}
            >
              {todo.text}
            </span>
          )}
        </div>
        <div className="w-[10%] flex justify-end">
          <button
            onClick={() => deleteTodo(todo.id)}
            title="Delete"
            className="text-red-500 hover:text-red-700 ml-2"
          >
            Delete
          </button>
        </div>
      </div>

      <div className="flex justify-between text-xs text-gray-500 mt-1">
        <p>Created: {new Date(todo.createdAt).toLocaleString()}</p>
        <p>Updated: {new Date(todo.updatedAt).toLocaleString()}</p>
      </div>
    </div>
  );
};
