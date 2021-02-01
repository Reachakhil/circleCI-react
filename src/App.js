import logo from './logo.svg';
import './App.css';
import Counter1 from './Counter1';
import Counter2 from './Counter2';
import  ClickCounter  from "./ClickCounter";
import  HoverCounter  from "./HoverCounter";
function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Counter1/>
       <Counter2/>
       <ClickCounter/>
       <HoverCounter/>
      </header>
    </div>
  );
}

export default App;
