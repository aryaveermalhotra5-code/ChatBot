import {useSelector} from 'react-redux'
// import { useState, useRef } from 'react'
import MessageBubble from './MessageBubble'
import { useEffect, useRef } from 'react'


function Message() {
const messages = useSelector((state) => state.message)
const isLoading = useSelector((state)=> state.isLoading)
const bottomRef = useRef(null)

useEffect( ()=> {
  bottomRef.current?.scrollIntoView({behavior: "smooth"})
} , [messages , isLoading])

  return (
    <div className='flex-1 overflow-y-auto px-4 py-4'>
      
      {messages.length === 0 && (
        <p className="text-center">
          Start a conversation
        </p>
      )}

      {messages.map((msg)=> (
        <MessageBubble key= {msg.id} message={msg} />
      ))}

      {isLoading && (
        <div className='flex justify-start mb-3'>
          <div className='bg-neutral-800 text-neutral-400 px-4 py-2
          rounded-2xl text-sm '>
            typing...
          </div>
        </div>
      )}
      
      <div ref={bottomRef} />
      </div>
  )
}

export default Message