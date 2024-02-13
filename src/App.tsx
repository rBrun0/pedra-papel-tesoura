import './App.css'
import pedra from "./assets/pedra.jpg"
import tesoura from "./assets/scissor.png"
import papel from "./assets/papel.png"
import { useState } from 'react'



function App() {
   const [jogadaDaMaquina, setJogadaMaquina] = useState("")
   const [suaJogada, setSuaJogada] = useState("")
   const jogadasPossiveisDaMaquina:string[] = ["pedra","papel","tesoura"]

   
   function capturarJogada(e: any) {
  setSuaJogada(e.target.id)
  setJogadaMaquina(jogadasPossiveisDaMaquina[Math.floor(Math.random() * 3)]);
}

  return (

    <>
    <h1>Pedra, Papel ou Tesoura</h1>
    <div className='gameContainer'>
      <img src={pedra} alt="" className='opcaoDeJogadaImg' id='pedra'  onClick={(e) => capturarJogada(e)}/>
      <img src={papel} alt="" className='opcaoDeJogadaImg' id='papel' onClick={(e) => capturarJogada(e)}/>
      <img src={tesoura} alt="" className='opcaoDeJogadaImg' id='tesoura' onClick={(e) => capturarJogada(e)}/>
    </div>
    <p>voce jogou: {suaJogada}</p>
    <p>A maquina jogou: {jogadaDaMaquina}</p>

    </>
  )
}

export default App
