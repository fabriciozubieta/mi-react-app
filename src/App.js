//import './App.css';
import React from 'react';
import {TodoCounter} from './TodoCounter';
import {TodoSearch} from './TodoSearch';
import {TodoList} from './TodoList';
import {TodoItems} from './TodoItems';
import {CreateTodoButton} from './CreateTodoButton';

const todos = [
  { text: 'Cortar Cebolla', completed: false },
  { text: 'Tomar curso de Cebolla', completed: false },
  { text: 'Random Cebolla', completed: false },
  { text: 'Palabras menos', completed: false },
]

function App() {
  return (
    
    <React.Fragment>

      <TodoCounter />
        
        <TodoSearch />
        
        <TodoList>
          {todos.map(todo => ( 
            <TodoItems key={todo.text} text={todo.text} />
          ))}
        </TodoList>

        <CreateTodoButton />

    </React.Fragment>

  );
}

export default App;
