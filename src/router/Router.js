import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from '../App'
import Main from '../components/Main'
import New from '../components/new'

const Router = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<App />}>
                        <Route index element={<Main />} />
                        <Route path='/new' element={<New />} />

                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default Router