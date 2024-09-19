import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import TasksProvider from './contexts/TasksProvider/TasksProvider.tsx'
// import { StrictMode } from 'react'

createRoot(document.getElementById('root')!).render(
  // <StrictMode>
    <TasksProvider>
      <App />
    </TasksProvider>
  // </StrictMode>,
)
