import { useEffect } from 'react';
import './App.css';
import { useTelegram } from "../../hooks/useTelegram";



function App() {
  const {onTogleButton, tg} = useTelegram()

  useEffect(()=>{
    tg.ready()
  },[])

  
  return (
    <div className="App">
      <button>toggle</button>
    </div>
  );
}

export default App;
