import * as React from  'react'

export const UserContext = React.createContext({
    authenticated: false,
    user:{},
    setNewUser : ()=>{},
})