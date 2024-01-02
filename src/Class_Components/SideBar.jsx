import '../Assets/Styles/SideBar.css';
import React from 'react';
import {AiOutlineSetting} from 'react-icons/ai';
import {FaDashcube,FaMoneyBillWave,FaCalendarTimes,FaRegUserCircle} from 'react-icons/fa'
import { Link } from 'react-router-dom';

class SideBar extends React.Component{
    render(){
        return(
            <div className='sidebar-div'>
                <span className='side-bar-board'>Board.</span>
                <ul className='sidebar-elements'>
                    <li>
                        <span className='sibe-bar-icon'><FaDashcube/></span>
                        <Link to='/dashboard' className='side-bar-link'>Dashboard</Link>
                    </li>
                    <li>
                        <span className='sibe-bar-icon'><FaMoneyBillWave/></span>
                        <Link to='/transaction' className='side-bar-link'>Transactions</Link>
                    </li>
                    <li>
                        <span className='sibe-bar-icon'><FaCalendarTimes/></span>
                        <Link to='/schedule' className='side-bar-link'>Schedules</Link>
                    </li>
                    <li>
                        <span className='sibe-bar-icon'><FaRegUserCircle/></span>
                        <Link to='/users' className='side-bar-link'>Users</Link>
                    </li>
                    <li>
                        <span className='sibe-bar-icon'><AiOutlineSetting/></span>
                        <Link to='/settings' className='side-bar-link'>Settings</Link>
                    </li>
                </ul>

                <ul className='side-bar-help-div'>
                    <li><Link className='side-bar-help'>Help</Link></li>
                    <li><Link className='side-bar-help'>Contact Us</Link></li>
                </ul>
            </div>
        )
    }
}
export default SideBar;