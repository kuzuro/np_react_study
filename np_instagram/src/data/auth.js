import { createContext, useContext, useState } from "react";

const UserIdContenxt = createContext(null);
const UserIdDispatchContext = createContext(null);

export const ContextProvider = ({children}) => { 

    const [userId, setUserId] = useState("");



    return (
        <UserIdContenxt.Provider value={userId}>
            <UserIdDispatchContext.Provider value={setUserId}>
                {children}
            </UserIdDispatchContext.Provider>
        </UserIdContenxt.Provider>
    );
}

export const useUserId = () => {
    const context = useContext(UserIdContenxt);
    if(!context) {
        throw new Error("Cannot find UserIdProvider");
    }
    return context.id;
}



export const useUserIdDispatch = () => {
    const context = useContext(UserIdDispatchContext);
    if(!context) {
        throw new Error("Cannot find UserIdProvider");
    }
    return context;
}

