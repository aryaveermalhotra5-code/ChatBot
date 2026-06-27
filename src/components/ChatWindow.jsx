import Input from './Input'
import Message from './MessageList'

function ChatWindow() {
  return (
    <div className='flex-1 flex flex-col h-full bg-slate-50 w-full overflow-hidden'>
      {/* Messages container - scrollable */}
      <div className='flex-1 overflow-y-auto'>
        <Message />
      </div>
      
      {/* Input container - fixed at bottom */}
      <div className='flex-shrink-0 w-full'>
        <Input />
      </div>
    </div>
  )
}

export default ChatWindow