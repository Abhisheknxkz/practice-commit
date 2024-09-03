// src/App.js
import React from 'react';
import TodosList from './features/todos/TodoList';
import Header from './components/Header';

function App() {
  return (
    <div className="container mx-auto p-4">
      <Header />
      <TodosList />
    </div>
  );
}

export default App;
