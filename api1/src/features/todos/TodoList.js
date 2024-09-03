// src/features/todos/TodosList.js
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchTodos } from './todosSlice';

const TodosList = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.items);
  const status = useSelector((state) => state.todos.status);
  const error = useSelector((state) => state.todos.error);

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  return (
    <div>
      {status === 'loading' && <p>Loading...</p>}
      {status === 'failed' && <p>Error: {error}</p>}
      {status === 'succeeded' && (
        <ul className="list-disc list-inside space-y-2">
          {todos.map((todo) => (
            <li key={todo.id} className="p-2 border rounded shadow-sm">
              <p className="text-lg font-medium">ID: {todo.id}</p>
              <p className="text-md">{todo.todo}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TodosList;
