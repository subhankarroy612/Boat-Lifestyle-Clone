import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Content from '../Pages/Content'
import Login from '../Pages/Login'
import Signup from '../Pages/Signup'

export default function AllRoutes() {

    return (<Routes>
        <Route path='/' element={<Content />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/signup' element={<Signup />}></Route>
    </Routes>)
}
