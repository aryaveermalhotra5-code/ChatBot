
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addMessage, setLoading } from '../features/chatSlice'
import Button from './Button'
import { sendMessageToGemini } from '../services/geminiService'

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
      const response = await sendMessageToGemini(text)
      
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
    <div className="flex flex-col gap-2 p-3 bg-neutral-900 border-t border-neutral-700">
      {/* {error && (
        <div className="bg-red-900 text-red-100 px-3 py-2 rounded-md text-sm ">
          ⚠️ {error}
        </div>
      )} */}

      <div className="flex items-center gap-2">
        <input
          type="text"
          placeholder="Start typing"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={handleKeyDown}
          autoFocus
          className="text-center text-2xl flex-1 bg-neutral-800 text-white px-4 py-3 rounded-md outline-none placeholder-neutral-500"
        />

        <Button
          label="send"
          className="bg-blue-600 hover:bg-blue-500 text-2xl text-white px-4 py-3 rounded-md cursor-pointer shadow-lg active:shadow-sm active:translate-y-0.5 transition-all"
          onclick={handleSend}
        />
      </div>
    </div>
  )
}

export default Input




