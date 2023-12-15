

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/home/Home';
import PrivateRoute from './utils/PrivateRoute';
import Main from './components/Main';
import StoresWrapper from './components/Stores';
import UserTable from './components/UserTable';
import Products from './components/AdminPages/Products';
import Clerks from './components/AdminPages/clerk/clerk';
import SupplyRequest from './components/AdminPages/supplyrequest/supplyrequest';
import ProductTable from './components/ProductTable';
import StoreByStore from './components/merchant/StoreByStore';
import Login from './components/Authentication/login';
import SignUpAdmin from './components/Authentication/signupAdmin';
import SignUpMerchant from './components/Authentication/signupMerchant';
import { useContext } from 'react';
import { sidebarcontext } from './context/SideBarContext';

function App() {
  const { toggleDrawer, decoded_user } = useContext(sidebarcontext)



  return (

    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<PrivateRoute />}>
            <Route path="" element={<Home />}>

              <Route index element={<Main userRole={decoded_user?.role} />} />
              <Route path='/stores' element={<StoresWrapper />} />
              <Route path='/users' element={<UserTable />} />
              <Route path='/products' element={<Products />} />
              <Route path='/clerks' element={<Clerks />} />
              <Route path='/supplyrequests' element={<SupplyRequest />} />


              <Route path='/merchantproducts' element={<ProductTable />} />
              <Route path='/storereports' element={<StoreByStore />} />


            </Route>
          </Route>
          <Route path='/login' element={<Login />} />
          <Route path='/signup/:emailtoken' element={<SignUpAdmin />} />
          <Route path='/signup' element={<SignUpMerchant />} />

        </Routes>
      </BrowserRouter>

    </div>



  );
}

export default App;