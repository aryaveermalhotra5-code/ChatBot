import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addMessage, setLoading } from '../features/chatSlice'
import { sendMessageToGroq } from '../services/groqService'

function Input() {
  const [text, setText] = useState("")
  const [error, setError] = useState("")
  const dispatch = useDispatch()

  async function handleSend() {
    if (text.trim() === "") return
    
    dispatch(addMessage({ role: "user", content: text }))
    setText("")
    setError("")
    dispatch(setLoading(true))

    try {
      const response = await sendMessageToGroq(text)
      
      dispatch(addMessage({ role: "bot", content: response }))
    } catch (err) {
      setError(err.message)
      console.error("Error:", err)
  
    } finally {
      dispatch(setLoading(false))
    }
  }

  function handleKeyDown(e) {
    if (e.key === "Enter" && !error) {
      handleSend()
    }
  }

  return (
    <div className="w-full flex flex-col gap-2 p-2 md:p-3 bg-neutral-900">
      <div className="flex items-center gap-2 w-full">
        <input
          type="text"
          placeholder="Start typing..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={handleKeyDown}
          autoFocus
          className="flex-1 text-sm md:text-2xl bg-neutral-800 text-white px-3 md:px-4 py-2 md:py-3 rounded-md outline-none placeholder-neutral-500 min-w-0"
        />

        <button
          onClick={handleSend}
          className="flex-shrink-0 bg-blue-600 hover:bg-blue-500 text-sm md:text-2xl text-white px-3 md:px-4 py-2 md:py-3 rounded-md cursor-pointer shadow-lg active:shadow-sm active:translate-y-0.5 transition-all whitespace-nowrap"
        >
          Send
        </button>
      </div>
    </div>
  )
}

export default Input