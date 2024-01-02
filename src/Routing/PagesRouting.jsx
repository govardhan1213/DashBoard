import React from 'react';
import { BrowserRouter ,Routes, Route} from 'react-router-dom';
import LoginPage from '../Functional_Components/Login_Main';
import { DashBoard } from '../Pages/DashBoard';
import ForgetPassword from '../Functional_Components/ForgetPassword';
import RegisterNow from '../Functional_Components/RegisterNow';
import Transaction from '../Pages/Transaction';
import Schedule from '../Pages/Schedule';
import Users from '../Pages/Users';
import Settings from '../Pages/Settings';

class PagesRouting extends React.Component{
    render(){
        return(
            <BrowserRouter className='pagerouting'>
                <Routes>
                    <Route exact path='/' element={<LoginPage />} />    
                    <Route exact path='forget-password' element={<ForgetPassword />} />    
                    <Route exact path='register-now' element={<RegisterNow />} />    
                    <Route exact path='dashboard' element={<DashBoard />} />    
                    <Route exact path='transaction' element={<Transaction />} />    
                    <Route exact path='schedule' element={<Schedule />} />    
                    <Route exact path='users' element={<Users />} />    
                    <Route exact path='settings' element={<Settings />} />    
                </Routes>
            </BrowserRouter>
        );
    }
}
export default PagesRouting;