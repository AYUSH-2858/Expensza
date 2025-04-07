import { useContext, useState ,createContext} from "react";



export const AuthContext = createContext()

export const useAuthContext = ()=>{
    return useContext(AuthContext)
}

export const AuthContextProvider = ({children})=>{
    const [authUser, setAuthUser] = useState(JSON.parse(localStorage.getItem("expensza-user")) || null)
    const [userDataState,setUserData] = useState(null)
    
    return(
    <AuthContext.Provider value={{authUser,setAuthUser,userDataState,setUserData}}>
       {children}
    </AuthContext.Provider>
    )
}
