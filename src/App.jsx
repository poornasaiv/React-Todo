import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AmazonCardParent from './AmazonCardParent.jsx'
import Counter from './Counter.jsx'
import LikeButton from './LikeButton.jsx'
import LudoBoard from './LudoBoard.jsx'
import TodoList from './TodoList.jsx'

function App() {
  

  return (
    <>
  {/* //AMAZON CARD EXAMPLE CODE (BELOW 4 LINES)
  // <div>
  //   <h2>Blockbuster Deals | Shop Now</h2>
  //   <AmazonCardParent />
  // </div>

  //BASIC COUNTER EXAMPLE USING useState HOOK (BELOW 1 LINE)
  //<Counter />

  //IMPLEMENTED LIKE BUTTON USING STATES (BELOW 1 LINE)
  //<LikeButton />

  //IMPLEMENTED A LUDO TYPE GAME WHICH TRACKS THE MOVES WHEN A COLOR IS CLICKED
  //<LudoBoard /> */}

  <TodoList />
  </>
  )
}

export default App;
