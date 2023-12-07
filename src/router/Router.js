import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from '../App'
import Main from '../components/Main'
import New from '../components/new'
import Stores from '../components/Stores'
import PrivateRoute from '../utils/PrivateRoute'
import Login from '../components/Login'
import ClerkDashboard from '../components/ClerkDashboard'

const Router = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                <Route element={<PrivateRoute />}>
                    <Route path="/" element={<App />}>
                        <Route index element={<Main />} />
                        <Route path='/stores' element={<Stores />} />
                        <Route path='/clerk' element={<ClerkDashboard />} />

                    </Route>
                </Route>
                <Route path='/login' element={<Login/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Router