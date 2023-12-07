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
import SwipeableTemporaryDrawer from '../components/swipeabledrawer'
import SideBarContextProvider from '../context/SideBarContext'
import Products from '../components/AdminPages/Products'
import Clerks from '../components/AdminPages/clerk/clerk'
import SupplyRequest from '../components/AdminPages/supplyrequest/supplyrequest'
import ProductTable from '../components/ProductTable'

const Router = () => {
    return (
        <div>
               <SideBarContextProvider>
            <BrowserRouter>
                <Routes>
                <Route element={<PrivateRoute />}>
                    <Route path="/" element={<App />}>
                 
                        <Route index element={<Main userRole={'admin'}/>} />
                        <Route path='/stores' element={<Stores />} />
                        <Route path='/users' element={<UserTable />} />
                        <Route path='/products' element={<Products/>}/>
                        <Route path='/products' element={<Clerks/>}/>
                        <Route path='/products' element={<SupplyRequest/>}/>
                      
                  
                        <Route path='/products' element={<ProductTable />} />
                        

                    </Route>
                </Route>
                <Route path='/login' element={<Login/>}/>
                
                </Routes>
            </BrowserRouter>
            </SideBarContextProvider>
        </div>
    )
}

export default Router