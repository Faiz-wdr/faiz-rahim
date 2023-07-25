import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import MainPage from './Pages/MainPage';


function Router() {
  
    return (

        <Routes>
            <Route path="/" element={<MainPage/>} />
          </Routes>

    )
}

export default Router