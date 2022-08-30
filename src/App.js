import './App.css';
import { useState } from 'react';
import Sidebar from './Sidebar';
import Main from './Main';


function App() {
  const [notes, setNotes] = useState([]);

  const onAddNote = () => {
    console.log("add")
  }

  return (
    <div className="App"> 
      <Sidebar notes={notes} onAddNote={onAddNote} />
      <Main/>
    </div>
  );
}

export default App;
