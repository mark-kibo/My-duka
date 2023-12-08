import React, { useContext } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from '../App'
import Main from '../components/Main'

import Stores from '../components/Stores'
import PrivateRoute from '../utils/PrivateRoute'
import UserTable from '../components/UserTable'
import SideBarContextProvider, { sidebarcontext } from '../context/SideBarContext'
import Products from '../components/AdminPages/Products'
import Clerks from '../components/AdminPages/clerk/clerk'
import SupplyRequest from '../components/AdminPages/supplyrequest/supplyrequest'
import ProductTable from '../components/ProductTable'
import Login from '../components/Authentication/login'

const Router = () => {
    const {toggleDrawer, decoded_user}= useContext(sidebarcontext)
    return (
        <div>
            <BrowserRouter>
                <Routes>
                <Route element={<PrivateRoute />}>
                    <Route path="/" element={<App />}>
                 
                        <Route index element={<Main userRole={decoded_user?.role}/>} />
                        <Route path='/stores' element={<Stores />} />
                        <Route path='/users' element={<UserTable />} />
                        <Route path='/products' element={<Products/>}/>
                        <Route path='clerks' element={<Clerks/>}/>
                        <Route path='/supplyrequests' element={<SupplyRequest/>}/>
                      
                  
                        <Route path='/merchantproducts' element={<ProductTable />} />
                        

                    </Route>
                </Route>
                <Route path='/login' element={<Login/>}/>
                
                </Routes>
            </BrowserRouter>

        </div>
    )
}

export default Router