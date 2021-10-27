import React, { useState, useRef, useCallback, useEffect } from 'react';
import Template from "./components/Template";
import Insert from "./components/Insert";
import List from "./components/List";
import './App.css';

const App = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => { // localStroage 탐색
    const LOCAL_DATA = localStorage.getItem('todo') !== null ? JSON.parse(localStorage.getItem('todo')) : [];
    setTodos(LOCAL_DATA);
  }, []);

  useEffect(() => { // set todos
    localStorage.setItem("todo", JSON.stringify(todos));
  }, [todos]);

  const todoCnt = todos.map((todo) => todo.id); // id 생성
  // console.log(todoCnt);
  const todosCnt = Math.max.apply(null, todoCnt) + 1;
  // console.log(todosCnt);
  const nextId = useRef();
  todosCnt !== -Infinity ? nextId.current = todosCnt : nextId.current = 1;
  // console.log(nextId.current);

  const onInsert = useCallback(
    text => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      setTodos(todos.concat(todo));
      nextId.current++;
    },
    [todos],
  );

  const onRemove = useCallback(
    id => {
      setTodos(todos => todos.filter(todo => todo.id !== id));
    },
    [],
  );

  const onToggle = useCallback(
    id => {
      setTodos( todos =>
        todos.map(todo => 
            todo.id === id ? { ...todo, checked: !todo.checked } : todo,
          ),
      );
    },
    [],
  );

  return (
    <Template>
      <Insert onInsert={onInsert} />
      <List todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </Template>
  );
};

export default App;