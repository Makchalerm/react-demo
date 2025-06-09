import { Todo } from "../features/todo/types";
import { useTodoStore } from "../store/todoStore";

type Props = {
  todo: Todo;
};

export const TodoItem = ({ todo }: Props) => {
  const toggleTodo = useTodoStore((state) => state.toggleTodo);
  const deleteTodo = useTodoStore((state) => state.deleteTodo);

  return (
    <div className="flex items-center justify-between p-2 border rounded-lg shadow-sm bg-white">
      <span
        className={`cursor-pointer flex-1 ${
          todo.completed ? "line-through text-gray-400" : ""
        }`}
        onClick={() => toggleTodo(todo.id)}
      >
        {todo.text}
      </span>
      <p className="text-xs text-gray-500 mt-1">
        Created: {new Date(todo.createdAt).toLocaleString()}
      </p>
      <p className="text-xs text-gray-500">
        Updated: {new Date(todo.updatedAt).toLocaleString()}
      </p>

      <button
        onClick={() => deleteTodo(todo.id)}
        className="ml-4 text-red-500 hover:text-red-700"
      >
        Delete
      </button>
    </div>
  );
};
