import Input from './Input'
import Message from './MessageList'

function ChatWindow() {
  return (
    <div className='w-full h-full flex flex-col bg-neutral-300 overflow-hidden'>
      {/* Messages Container - Scrollable */}
      <div className='flex-1 overflow-y-auto w-full'>
        <Message />
      </div>
      
      {/* Input Container - Fixed at Bottom, Full Width */}
      <div className='flex-shrink-0 w-full bg-neutral-900 border-t border-neutral-700'>
        <Input />
      </div>
    </div>
  )
}

export default ChatWindow