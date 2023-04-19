import React from 'react';
import './App.css';
import { Routes,Route, Navigate, Router} from 'react-router-dom';
import Navbar from './components/Navbar';
import UserList from './components/UserList';
import UserDetails from './components/UserDetails';
import About from './components/About';
import LoginComponent from './components/LoginComponent';
import ChangePasswordComponent from './components/ChangePasswordComponent';
import EditBlogEntryComponent from './components/EditBlogEntryComponent';

function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path={'/'} element={<Navigate to={'/contacts/list'}/>}/>
        <Route path={'/contacts/list'} element={<UserList/>}/>
        <Route path={'/contacts/:id'} element={<UserDetails/>}/>
        <Route path={'/about'} element={<About/>}/>
        <Route path={'/login'} element={<LoginComponent/>}/>
        <Route path={'/change'} element={<ChangePasswordComponent/>}/>
        <Route path={'/entry'} element={<EditBlogEntryComponent id={2}/>}/>

      </Routes>
    </>
  ); 
}

export default App;
