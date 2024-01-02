import React from "react";
import '../Assets/Styles/ForgetPassword.css';
function ForgetPassword(){
    return(
        <React.Fragment>
            <center>
                <h1 className="forget-password-h1">Reset Your Password Here...</h1>
                <form className="forget-password-form">
                    <label htmlFor="email">Enter New Password...</label><br />
                    <input type="password" name="newPassword" placeholder="Enter New Password.."/><br /><br />

                    <label htmlFor="password">Re-enter Password......</label><br />
                    <input type="password" name="re-enter-Password" placeholder="Re-enter Password.."/><br />

                    <button type="submit" className='submit'>Submit</button>
                </form>
            </center>
        </React.Fragment>
    );
}
export default ForgetPassword;