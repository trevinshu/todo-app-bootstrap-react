import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Form from './components/Form';
import Header from './components/Header';
import TodoItem from './components/TodoItem';
import './index.css';

function App() {
  const [itemsList, setItemsList] = useState([]);

  const addTodoHandler = (title, message) => {
    setItemsList((prevItemsList) => {
      return [...prevItemsList, { title: title, description: message, id: Math.random().toString() }];
    });
  };
  return (
    <div className="App">
      <Header />
      <Form AddTodo={addTodoHandler} />
      <TodoItem items={itemsList} />
    </div>
  );
}

export default App;
