import {useDispatch} from 'react-redux'
import { createNewChat, clearChat } from '../features/chatSlice'
// import { useState } from 'react'
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

// const [isOpen,setIsOpen] = useState(true)

// const handleOpen = () =>{
//   setIsOpen(!isOpen)
// }

  return (
     
    <div className=  'w-54 h-screen bg-gradient-to-r from-violet-600 to-indigo-700 flex flex-col  duration-250'   >   
    
      <div className= 'bg-gray-700 flex  py-3 w-full'>
          
        
        {/* <div><h2>ChatBot</h2> </div> */}
      </div>
       
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
        
    </div>

  )
}

export default Sidebar


