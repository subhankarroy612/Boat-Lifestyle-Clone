import { createContext, useState } from "react";

export let CartContext = createContext();

let CartContextProvider = ({children}) => {

    let [cart, setCart] = useState({})

    return <CartContext.Provider value={{cart, setCart}}>{children}</CartContext.Provider>
}

export default CartContextProvider;