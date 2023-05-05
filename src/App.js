import { useEffect } from 'react';
import './App.css';
import { useTelegram } from "../src/hooks/useTelegram";
import Header from '../src/components/Header/Header'


function App() {
  const {onTogleButton, tg} = useTelegram()

  // useEffect(()=>{
  //   tg.ready()
  // },[])

  
  return (
    <div className="App">
      <Header />
      <button onClick={onTogleButton}>toggle</button>
    </div>
  );
}

export default App;
