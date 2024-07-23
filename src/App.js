import './App.css';
import Login from './Login';
import React from 'react';
import{Routes,Route,BrowserRouter} from "react-router-dom";
import Register from "./Register";
import ForgetPassword from './ForgetPassword';

export default function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" exact element={<Login/>}></Route>
      <Route path="/register" exact element={<Register/>}></Route>
      <Route path="/reset-password" exact element={<ForgetPassword/>}></Route>
    </Routes>
    </BrowserRouter>

    </>
    
    );
  };
