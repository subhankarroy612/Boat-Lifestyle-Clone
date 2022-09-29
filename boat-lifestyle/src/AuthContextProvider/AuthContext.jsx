import React, { Children, createContext, useState } from 'react'

export let AuthContext = createContext()

export default function AuthContextProvider({ children }) {
    let [data, setData] = useState({});
    return (<AuthContext.Provider value={{ data, setData }}>{children}</AuthContext.Provider>)
}
