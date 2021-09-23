import React, { createContext, useReducer, useState } from 'react';
/* import { useState } from 'react/cjs/react.development'; */
import { Reducer as Reducer, InitialState } from './Reducer'

const MyContext = React.createContext();

const MyContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(Reducer, InitialState)

    function addToCart(item) {
        var movie = [item]
        setCart(movie)

    }





    return (
        <MyContext.Provider value={{
            state, dispatch
        }}>
            {children}
        </MyContext.Provider>
    )
}

export { MyContextProvider, MyContext };