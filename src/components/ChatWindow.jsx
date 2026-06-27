import Input from './Input'
import Message from './MessageList'
function ChatWindow() {
  return (
    <div className='flex-1 flex flex-col h-screen bg-neutral-300'>
        <Message />
        <Input />
    </div>
  )
}

export default ChatWindow