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
      <button
        onClick={() => deleteTodo(todo.id)}
        className="ml-4 text-red-500 hover:text-red-700"
      >Delete
      </button>
    </div>
  );
};
