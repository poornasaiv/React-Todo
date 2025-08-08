import React from 'react';
import { StrictMode } from 'react'
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import store from './TodoList_ReduxCore/store'; 


createRoot(document.getElementById('root')).render(
 <React.StrictMode>
    <Provider store={store}>
      <App /> {/* or <TodoRedux /> directly */}
    </Provider>
   </React.StrictMode>,
)
