import React, { useState } from 'react';
import TaskList from './components/TaskList';
import { Item } from './models/item';
import TaskForm from './components/TaskForm';

function App() {
 const [items,setItems] = useState<Item[]>([])
  return (
    <div className="App">
      <TaskForm />
      <TaskList items={items} />
    </div>
  );
}

export default App;
