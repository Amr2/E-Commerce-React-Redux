import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { StoreData } from "./features/Reducers/storereducer/StoreAction"


function App() {
  const dispatcher = useDispatch(); 
  useEffect(()=>{
    dispatcher(StoreData())
  },[dispatcher])
  return (
    <div className="App">
      <header className="App-header"></header>
    </div>
  );
}

export default App;
