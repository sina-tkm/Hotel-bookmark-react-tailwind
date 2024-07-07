import { createContext, useContext, useReducer } from "react";
const FAKE_USER = {
    email :"user@gamil.com",
    password:"1234",
    name : "sina"

}
const INITIAL = {
  user: null,
  isAuthenticated: false,
};
function loginReducer(state,action) {
    switch (action.type) {
        case "login" :
            return {
                user: action.payload,
                isAuthenticated:true

            }
            case "logout" :
                return {
                    user: null,
                    isAuthenticated:false
    
                }
                default : throw new Error ("unknown action")
    }
}

const AuthProvider = createContext();


export default function AuthContextProvider({ children }) {
  const [{ user, isAuthenticated }, dispatch] = useReducer(
    loginReducer,
    INITIAL
  );
  function login(email,password) {
    if(email === FAKE_USER.email && password === FAKE_USER.password) {
        dispatch({type:"login",payload:FAKE_USER})

    }
  }
  function logout() {
    dispatch({type:"logout"})
  }
  return (
    <AuthProvider.Provider value={{ user, isAuthenticated ,login,logout}}>
      {children}
    </AuthProvider.Provider>
  );
}


export function useLogin(){
return useContext(AuthProvider)
}
