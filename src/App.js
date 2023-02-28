//import {useState} from "react"
//import Cards from "./Cards";
import Flashcards from "./Flashcards";
import Concluidos from "./Concluidos";
import raio from "./assets/logo.png";

function App() {
  return (
    <div className="app">
      <div className="logo">
        <img src={raio} />
        <div className="zap"> ZapRecall </div>
      </div>
      
      <Flashcards />
      <Concluidos />
    </div>
  );
}

export default App;
