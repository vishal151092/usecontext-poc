import { createContext, useState } from "react";

const MessageContext = createContext(null);

const MessageProvider = ({children})=>{
    const [newMessage, setNewMessage] = useState('Namaste');

    const newMessageHandler = (msg)=>{
        setNewMessage(msg)
    }

    return (
        <>
            <MessageContext.Provider value={{newMessage, newMessageHandler}}>
                {children}
            </MessageContext.Provider>
        </>
    )
}

export { MessageProvider } ;

export default MessageContext;