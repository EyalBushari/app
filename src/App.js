import { useState } from 'react';
import './App.css';
import { AboutUs } from './components/AboutUs';
import { Home } from './components/Home';
import { Store } from './components/Store/Store';
import { Product } from './components/Product';

function App() {
  const [page, setPage] = useState("home");
  const [product, setProduct] = useState(null);
  function updateState(newPage, newProduct) {
    setPage(newPage);
    if (newProduct != null) {
      setProduct(newProduct);
      
    }
  }
  return (
    <div className="App">
      <header className="app-header">
        <div>
          <button onClick={function () { setPage("store") }}>חנות</button>
          <button onClick={function () { setPage("aboutus") }}>אודות</button>
        </div>

        <h1 onClick={function () { setPage("home") }}>דניאל שיווק צנרת</h1>
      </header>
      {page == "home" && <Home updatePage={updateState} />}
      {page == "store" && <Store updatePage={updateState} />}
      {page == "aboutus" && <AboutUs />}
      {page == "product" && <Product productId={product} />}
    </div>

  );

}

export default App;
