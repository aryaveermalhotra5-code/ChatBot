import './App.css'
import ChatWindow from './components/ChatWindow'
import Sidebar from './components/Sidebar'
import { initializeGroq } from './services/groqService'
import { useEffect, useState } from 'react'

function App() {
  const [showSidebar, setShowSidebar] = useState(false)

  useEffect(() => {
    const apiKey = import.meta.env.VITE_GROQ_API

    if (!apiKey) {
      console.log("❌ Groq API key not found. Add VITE_GROQ_API_KEY to your .env file");
    } else {
      initializeGroq(apiKey)
    }
  }, [])

  return (
    <div className='h-screen w-screen flex overflow-hidden bg-neutral-300'>
      {/* Mobile Sidebar - FIXED POSITION */}
      <div className={`fixed md:relative md:w-54 h-screen bg-black transition-all duration-300 ${showSidebar ? 'w-54 z-40' : 'w-0 z-40'} md:block overflow-hidden`}>
        <Sidebar />
      </div>

      {/* Mobile Overlay - closes sidebar */}
      {showSidebar && (
        <div 
          onClick={() => setShowSidebar(false)}
          className='md:hidden fixed inset-0 bg-black bg-opacity-50 z-30'
        />
      )}

      {/* Chat Window - Main Area */}
      <div className='flex-1 flex flex-col relative w-full h-screen overflow-hidden'>
        {/* Mobile Menu Button - HIGHER Z-INDEX */}
        <button 
          onClick={() => setShowSidebar(!showSidebar)}
          className='md:hidden absolute top-4 left-4 z-50  bg-blue-400 hover:bg-blue-700 text-white p-2 rounded-lg text-lg'
        >
          {showSidebar ? "✕" : "☰"}
        </button>

        {/* Chat Window Content */}
        <ChatWindow />
      </div>
    </div>
  )
}

export default App