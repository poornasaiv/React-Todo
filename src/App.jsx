import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AmazonCardParent from './AmazonCardParent.jsx'
import Counter from './Counter.jsx'
import LikeButton from './LikeButton.jsx'
import LudoBoard from './LudoBoard.jsx'
import TodoList from './TodoList.jsx'
import TodoPractice from './TodoPractice.jsx'
import Homework_TodoList from './Homework_TodoList.jsx'

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

  {/* IMPLEMENTED A TODO LIST APP WITH ADD/EDIT/DELETE/MARK AS DONE FEATURES
  <TodoList /> */}

  {/* IMPLEMENTED A TODO LIST APP WITH ADD/EDIT/DELETE FEATURES BUT THIS USES SAME STATE FOR BOTH ADD AND EDIT TASKS. IT HAS A SIDE EFFECT THOUGH
  IDEAL CASE IS TO USE SEPARATE STATES LIKE IN THE ABOVE CREATED TODO LIST (<TodoList /> example)
  <TodoPractice /> */}

  {/* IMPLEMENTED A TODO LIST APP WITH ADD/EDIT/DELETE FEATURES BUT LEVERAGES useState, useEffect, useRef, useCallback, useMemo features 
  <Homework_TodoList /> */}

  

  </>
  )
}

export default App;
