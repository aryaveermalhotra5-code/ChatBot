import './App.css'
import ChatWindow from './components/ChatWindow'
import Sidebar from './components/Sidebar'
import { initializeGroq } from './services/groqService'
import { useEffect } from 'react'

function App() {
  useEffect(() => {
    const apiKey = import.meta.env.VITE_GROQ_API

    if (!apiKey) {
      console.log("❌ Groq API key not found. Add VITE_GROQ_API_KEY to your .env file");
    } else {
      initializeGroq(apiKey)
    }
  }, [])

  return (
    <div className='h-screen flex overflow-hidden'>
      <Sidebar />
      <ChatWindow />
    </div>
  )
}

export default App