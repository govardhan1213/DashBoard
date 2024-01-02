import '../Assets/Styles/Login_Main.css';
import Board from './Login_Form_Sub1';
import { LOGIN_FORM } from './Login_Form_Sub2';
function LoginPage(){
    return(
        <div className='login-main-div'>
            <Board />
            <LOGIN_FORM />
        </div>
    )
}
export default LoginPage;