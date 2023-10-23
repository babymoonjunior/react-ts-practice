import React from 'react';
import TaskList from './components/TaskList';

function App() {
  const items = [
    { id: 1, name: "เขียนโปรแกรม" },
    { id: 2, name: "ไปตลาด" },
    { id: 3, name: "อาบน้ำหมา" }
  ]
  return (
    <div className="App">
      <TaskList items={items} />
    </div>
  );
}

export default App;
