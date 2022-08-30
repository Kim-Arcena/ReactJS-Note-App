import './App.css';
import { useState } from 'react';
import Sidebar from './Sidebar';
import Main from './Main';


function App() {
  const [notes, setNotes] = useState([]);


  return (
    <div className="App"> 
      <Sidebar notes={notes}/>
      <Main/>
    </div>
  );
}

export default App;
