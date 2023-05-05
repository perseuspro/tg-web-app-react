import { useEffect } from 'react';
import './App.css';
import { useTelegram } from "../src/hooks/useTelegram";



function App() {
  const {onTogleButton, tg} = useTelegram()

  useEffect(()=>{
    tg.ready()
  },[])

  
  return (
    <div className="App">
      <button onClick={onTogleButton}>toggle</button>
    </div>
  );
}

export default App;
