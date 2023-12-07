import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from '../App'
import Main from '../components/Main'
import New from '../components/new'
import Stores from '../components/Stores'
import PrivateRoute from '../utils/PrivateRoute'
import Login from '../components/Login'
import UserTable from '../components/UserTable'

import ClerkDashboard from '../components/ClerkDashboard'
import ProductTable from '../components/ProductTable'

const Router = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                <Route element={<PrivateRoute />}>
                    <Route path="/" element={<App />}>
                        <Route index element={<Main userRole={'merchant'}/>} />
                        <Route path='/stores' element={<Stores />} />
                        <Route path='/users' element={<UserTable />} />
                        <Route path='/products' element={<ProductTable />} />
                        

                    </Route>
                </Route>
                <Route path='/login' element={<Login/>}/>
                
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Router