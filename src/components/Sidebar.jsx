import {useDispatch} from 'react-redux'
import { createNewChat, clearChat } from '../features/chatSlice'
import { useState } from 'react'
import Button from './Button'
function Sidebar() {
  const dispatch = useDispatch()

  function createChat() {
    dispatch(createNewChat())
  }

  // function selectChat(id) { 
  //   dispatch(setCurrentChat(id))
  // }

  function clearChats(){
    dispatch(clearChat())
  }
  // function delete_Chat(id){
  //   dispatch(deleteChat(id))
  // }

const [isOpen,setIsOpen] = useState(false)

const handleOpen = () =>{
  setIsOpen(!isOpen)
}

  return (
     
    <div className={ isOpen? 'w-54 h-screen bg-black text-neutral-200 flex flex-col  duration-250 ' :
      'w-16 h-screen bg-black flex flex-col  duration-300'
}      
    >
      <div className= 'bg-gray-700 flex  py-3 w-full'>
          
        <button className='cursor-pointer text-5xl '  
        onClick={handleOpen} >
           {isOpen ? "◀" : "▶" } 
        </button>
        {/* <div><h2>ChatBot</h2> </div> */}
      </div>
      {isOpen ? <>
      <Button label="+ Create New Chat"
       onclick={createChat}
      className={"text-2xl py-4 hover:bg-amber-50 hover:text-black cursor-pointer transition-all duration-300 ease-in-out hover:scale-105 active:scale-95"}
       />
       {/* <Button label="Select Chat"
       onclick={selectChat}
      className={"text-2xl py-4 hover:bg-amber-50 hover:text-black cursor-pointer transition-all duration-300 ease-in-out hover:scale-105 active:scale-95"}
       /> */}

       <Button label="Clear Chat"
       onclick={clearChats}
      className={"text-2xl py-4 hover:bg-amber-50 hover:text-black cursor-pointer transition-all duration-300 ease-in-out hover:scale-105 active:scale-95"} />
       <Button label="Delete Chat"
       onclick={clearChats}
      className={"text-2xl py-4 hover:bg-amber-50 hover:text-black cursor-pointer transition-all duration-300 ease-in-out hover:scale-105 active:scale-95"}
       />
      

       </>
        : 
        <>
        <br/>
         <Button label=" ➕ "
          onclick={createChat}
      className={"text-3xl py-4 hover:bg-amber-50 hover:text-black cursor-pointer"} />
        <br/>
       <Button label=" 🗑️ "
       onclick={clearChats}
      className={"text-3xl py-4 hover:bg-amber-50 hover:text-black cursor-pointer"} />
        

        
        </>

        
        }



        
    </div>

  )
}

export default Sidebar


