import React from "react"
import { Routes, Route } from 'react-router-dom'
import {HomePage, RegisterPage, LoginPage} from './pages'

export const RoutesComponent = () =>{
    return(
        <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/register' element={<RegisterPage/>}/>
            <Route path='/login' element={<LoginPage/>}/>
        </Routes>
    )
}