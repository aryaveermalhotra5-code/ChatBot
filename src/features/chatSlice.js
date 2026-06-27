import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";
const initialState = {
    id: 1,
    message : [],
    error : null,
    conversations:[],
    currentChatId:null,
    isloading:false

}

const chatSlice = createSlice({
    name: "Chatbot",
    initialState,
    reducers : {
        addMessage : (state , action) => {
                const newmessage= {
                    id : nanoid(),
                    role: action.payload.role,
                    content: action.payload.content
                }
                state.message.push(newmessage)
              },
            

        clearChat :(state) => {
            state.message= []
        },

        createNewChat : (state) =>{
            const conversation={
                id: nanoid(),
                title:"New Chat",
                message:[],
            }
            state.conversations.push(conversation)
            state.currentChatId = conversation.id
            state.message = []
        },

        setLoading : (state,action)=>{
            state.isloading = action.payload
        },

        setCurrentChat: (state,action) => {
            state.currentChatId = action.payload
            const selectedChat = state.conversations.find(
                (chat)=> chat.id ===action.payload
            )

            state.message = selectedChat? selectedChat.message :
            []
        },

        deleteChat: (state,action) => {
            state.conversations = state.conversations.filter(
                (chat) => chat.id!= action.payload.id
            )
        }


    }
})




export const { addMessage, clearChat, createNewChat, setLoading, setCurrentChat, selectedChat,
    deleteChat
 } = chatSlice.actions
export default chatSlice.reducer