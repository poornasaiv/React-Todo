import React from 'react';
import { StrictMode } from 'react'
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import TodoStore from './Homework_TodoListThunk/TodoStore'; 


createRoot(document.getElementById('root')).render(
 <React.StrictMode>
    <Provider store={TodoStore}>
      <App /> {/* or <TodoRedux /> directly */}
    </Provider>
   </React.StrictMode>,
)

