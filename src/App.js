import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="app-header">
        <h1>דניאל שיווק צנרת</h1>
      </header>
      <div className='page-body'>
        <h1>ברוכים הבאים</h1>
      </div>
      <div className='flex-row'>
       <img src='./pictures/picture.jpg' height="300px" width="200px" className='image'/>
       <img src='./pictures/picture2.jpg' height="300px" width="200px"/>
      </div>
    </div>
  );
}

export default App;
