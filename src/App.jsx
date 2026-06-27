
import './App.css'
import ChatWindow from './components/ChatWindow'
import Sidebar from './components/Sidebar'
import { initializeGemini } from './services/geminiService'
import { useEffect } from 'react'
function App() {

useEffect(() => {
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY

  if(!apiKey) {
    console.log("API not found");
     }
     else{
      initializeGemini(apiKey)
     }
}
 ,[])


  return (
    <div className='h-screen flex overflow-hidden'>
    <Sidebar/>
    <ChatWindow  />
    </div>
  )
}

export default App


