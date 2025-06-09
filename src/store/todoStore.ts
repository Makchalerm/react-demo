import{create} from 'zustand';
import { persist } from 'zustand/middleware';
import {Todo} from '../features/todo/types';

interface TodoState {
    todos: Todo[];
    addTodo: (todo: Todo) => void;
    toggleTodo: (id: string) => void;
    deleteTodo: (id: string) => void;
    updateTodo: (id: string, updatedTodo: string) => void;
}

export const useTodoStore = create<TodoState>()(
    persist(
        (set) => ({
            todos: [],
            addTodo: (todo) => set((state) => ({todos: [...state.todos, todo]})),
            toggleTodo : (id) =>
                set((state) => ({
                    todos: state.todos.map((todo) =>
                        todo.id === id ? {...todo, completed: !todo.completed, updatedAt: new Date().toISOString} : todo
                    )
                })),
            deleteTodo: (id) =>
                set((state) => ({
                    todos: state.todos.filter((todo) => todo.id !== id)
                })),
            updateTodo: (id, updatedTodo) =>
                set((state) => ({
                    todos: state.todos.map((todo) =>
                        todo.id === id
                            ? { ...todo, text: updatedTodo, updatedAt: new Date().toISOString() }
                            : todo
                    ),
                })),
        }),
        {
            name: 'todo-storage',
        }
    )
);
