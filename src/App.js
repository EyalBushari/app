import { useState } from 'react';
import './App.css';
import { Home } from './components/Home';
import { Store } from './components/Store';

function App() {
  const [page,setPage]=useState("home");
  return (
    <div className="App">
      <header className="app-header">
        <button onClick={function(){setPage("store")}}>חנות</button>
        <h1 onClick={function(){setPage("home")}}>דניאל שיווק צנרת</h1>
      </header>
      {page=="home" && <Home />}
      {page=="store" && <Store />}
    </div>

  );

}

export default App;
