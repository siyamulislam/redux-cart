import './App.css';
import Cart from './components/Cart/Cart';
import Shop from './components/Shop/Shop';

function App() {
  return (
    <div class="App">
      <div class="left-side">
        <Shop></Shop>
      </div>
      <div class="right-side">
        <Cart></Cart>
      </div>
    </div>
  );
}

export default App;
