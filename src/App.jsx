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
    <div className='h-dvh w-screen flex overflow-hidden bg-neutral-300'>
      <div className={` md:relative md:w-54 h-screen  transition-all duration-300 w-0 z-40 md:block overflow-hidden`}>
        <Sidebar />
      </div>

      

      <div className='flex-1 flex flex-col relative w-full h-screen overflow-hidden'>
        

        <ChatWindow />
      </div>
    </div>
  )
}

export default App