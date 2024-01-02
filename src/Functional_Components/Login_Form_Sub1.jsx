import '../Assets/Styles/Login_Form_Sub1.css';
import React from 'react';
import { FaTwitterSquare,FaLinkedin,FaInstagramSquare, FaGithubSquare } from 'react-icons/fa';

class Board extends React.Component{
    render(){
        return(
            <div className='login-form-sub1'>
                <div className='login-form-sub1-div'>
                    <p className='board'>Board.</p>
                    <div className='circles'>
                        <p className='circle'>M</p>
                        <p className='circle'>I</p>
                        <p className='circle'>5</p>
                    </div>
                    <div className='icons'>
                        <FaGithubSquare className='icon'/>
                        <FaTwitterSquare className='icon'/>
                        <FaLinkedin className='icon'/>
                        <FaInstagramSquare className='icon'/>
                    </div>
                </div>
            </div>
        )
    }
}
export default Board;