
function MessageBubble({message}) {
    const isUser = message.role ==="user"

  return (

    <div className={`flex ${isUser? "justify-end ": "justify-start"} mb-3`}>
        <div
        className={`max-w-[70%] px-4 py-2 rounded-3xl text-2xl whitespace-pre-wrap ${
          isUser
            ? "bg-blue-600 text-white rounded-br-sm "
            : "bg-neutral-800 text-neutral-100 rounded-bl-sm"
        }`}
      >
        {message.content}
        </div>
    </div>

  )
}

export default MessageBubble