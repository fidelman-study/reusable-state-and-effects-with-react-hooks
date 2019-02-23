import React, { useState } from "react";
import NewTodo from "./NewTodo";
import TodoItem from "./TodoItem";
import { Container, List } from "./Styled";

export default function TodoList() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  function handleNewChange(e) {
    setNewTodo(e.target.value);
  }

  function handleNewSubmit(e) {
    e.preventDefault();
    setTodos(prevState => [
      ...prevState,
      { id: Date.now(), text: newTodo, completed: false }
    ]);
    setNewTodo('');
  }
  function handleDelete(id) {
    setTodos(prevState => prevState.filter(todo => todo.id !== id))
  }
  function handleCompletedToggle(id) {
    setTodos(prevState => prevState.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ))
  }

  return (
    <Container todos={todos}>
      <NewTodo
        onSubmit={handleNewSubmit}
        value={newTodo}
        onChange={handleNewChange}
      />
      {!!todos.length && (
        <List>
          {todos.map(todo => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onChange={() => handleCompletedToggle(todo.id)}
              onDelete={() => handleDelete(todo.id)}
            />
          ))}
        </List>
      )}
    </Container>
  );
}
