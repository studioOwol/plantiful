import { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import AddPage from './pages/AddPage';
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import NavBar from './components/NavBar';

const Layout = () => {
  return (
    <>
      <NavBar />
      <br />
      <br />
      <br />
      <Outlet />
    </>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path='login' element={<LoginPage />} />
          <Route path='add' element={<AddPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
