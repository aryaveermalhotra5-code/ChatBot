
function MessageBubble({message}) {
    const isUser = message.role ==="user"

  return (

    <div className={`flex ${isUser? "justify-end ": "justify-start"} mb-3`}>
        <div
        className={`max-w-[70%] px-4 py-3 shadow-sm rounded-3xl text-2xl whitespace-pre-wrap  ${
          isUser
            ? "bg-gradient-to-r from-violet-600 to-indigo-600 text-white rounded-br-sm "
            : "bg-white text-slate-800 border border-slate-200 shadow-md rounded-bl-sm"
        }`}
      >
        {message.content}
        </div>
    </div>

  )
}

export default MessageBubble