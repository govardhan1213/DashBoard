import '../Assets/Styles/Pages/DashBoard.css';
import Govardhan from'../Assets/Images/Govardhan.jpeg';
import React from 'react';
import { FaMoneyBill, FaRegBell,FaSearch} from 'react-icons/fa';
import { AiOutlineLike, AiOutlineTransaction, AiOutlinePlus} from 'react-icons/ai';
import { PiUsers ,PiXBold} from 'react-icons/pi';
import SideBar from '../Class_Components/SideBar';

const DashboardData = [
    {
        id:1,
        icon: <FaMoneyBill />,
        tag: 'Total Revenues',
        count: '$2,129,430',
        tax: '+2.5%'
    }, {
        id:2,
        icon: <AiOutlineTransaction />,
        tag: 'Total Transactions',
        count: '1,520',
        tax: '+1.7%'
    }, {
        id:3,
        icon: <AiOutlineLike />,
        tag: 'Total Likes',
        count: '9,721',
        tax: '+1.4%'
    }, {
        id:4,
        icon: <PiUsers />,
        tag: 'Total Users',
        count: '9,721',
        tax: '+4.2%'
    }
];
export class DashBoard extends React.Component {
    constructor(props){
        super(props)
        this.state={
            addNewProfileModal:false
        }
        this.addNewProfile=this.addNewProfile.bind(this);
        this.removeProfile=this.removeProfile.bind(this);
    }

    addNewProfile(){
        document.querySelector('.dashboard-div').classList.toggle('modal-open');
        this.setState({
            addNewProfileModal:true
        })
    }
    removeProfile(){
        document.querySelector('.dashboard-div').classList.toggle('modal-open');
        this.setState({
            addNewProfileModal:false
        })
    }

    render() {
        return (
            <React.Fragment>
                <div className='dashboard-div'>
                    <SideBar />
                    <div className='dashboard-content'>
                        <div className='dashboard-header'>
                            <p className='dashboard-header-name'>DashBoard</p>
                            <form>
                                <input type="text" className='dashboard-header-search' placeholder='Search...' />
                                <FaSearch className='dashboard-search-icon' />
                            </form>
                            <FaRegBell className='dashboard-bell-icon'/>
                            <img src={Govardhan} alt="venkatasai" className='dashboard-header-img'/>
                        </div>

                        <div className='dashboard-cards'>
                            {DashboardData.map((obj) => (
                                <div key={obj.id}>
                                    <p className='dashboard-icon'>{obj.icon}</p>
                                    <p className='dashboard-tag'>{obj.tag}</p>
                                    
                                   
                                   


                                    <p className='dashboard-count'>{obj.count}</p>
                                    <p className='dashboard-tax'>{obj.tax}</p>
                                </div>
                            ))}
                        </div>
                        
                        <div className='dashboard-profile-card'>
                            <AiOutlinePlus className='profile-card-plus-icon' onClick={this.addNewProfile} />
                            <p>Add Profile</p>
                        </div>
                    </div>
                </div>

                {this.state.addNewProfileModal && <AddNewProfile modalChange={this.removeProfile}/>}
            </React.Fragment>
        )
    }
}


class AddNewProfile extends React.Component{
    constructor(props){
        super(props)
        this.state={
            basicData:true,
            socialData:false
        }
        this.openBasic=this.openBasic.bind(this);
        this.closeModal=this.closeModal.bind(this);
        this.openSocial=this.openSocial.bind(this);
    }

    

    openBasic(){
        let borderBottom=document.querySelectorAll('.profile-border-bottom')
        borderBottom[0].style.backgroundColor='blue';
        borderBottom[1].style.backgroundColor='rgba(192, 192, 192,0.7)';
        document.querySelector('.add-new-profile').style.height='58vh'
        this.setState({
            basicData:true,
            socialData:false
        })
    }
    openSocial(){
        let borderBottom=document.querySelectorAll('.profile-border-bottom');
        borderBottom[0].style.backgroundColor='rgba(192, 192, 192,0.7)';
        borderBottom[1].style.backgroundColor='blue';
        document.querySelector('.add-new-profile').style.height='46.5vh';
        this.setState({
            basicData:false,
            socialData:true
        })
    }
    closeModal(){
        const {modalChange}=this.props;
        modalChange();
    }

    render(){
        return(
            <div className='add-new-profile'>
                <p className='new-profile-name'>Add New Profile... <span className='profile-x-icon' onClick={this.closeModal}>{<PiXBold />}</span></p>
                <p className='horizantal-row'></p>
                <div className='profile-basic-social'>
                    <div>
                        <span className='profile-basic' onClick={this.openBasic}>Basic</span> 
                        <p className='profile-border-bottom' style={{backgroundColor:'blue'}}></p>
                    </div>
                    <div>
                        <span className='profile-social' onClick={this.openSocial}>Social</span>
                        <p className='profile-border-bottom'></p>
                    </div>
                </div>
                {this.state.basicData && <form className='profile-form1'>
                    <span>Enter Name *</span><br/>
                    <input type="text" name='name' placeholder='E.g Venkata Sai' /><br /><br />

                    <span>Enter Email *</span><br />
                    <input type="email" name='email' placeholder='E.g sai@gmail.com' /><br /><br />

                    <span>Enter Phone *</span><br />
                    <input type="tel" name='phone' placeholder='E.g 9391143939' /><br />

                    <p className='horizantal-row'></p>
                    <button type='button' className='profile-next-button'>Next</button>
                </form>}

                {this.state.socialData && <form className='profile-form2'>
                    <span>Instagram Link(Optional) *</span><br />
                    <input type="text" name='name' placeholder='E.g instagram.com/username' /><br /><br />

                    <span>Youtube Link(Optional) *</span><br />
                    <input type="text" name='name' placeholder='E.g youtube/username' /><br />

                    <p className='horizantal-row'></p>
                    <button type='button' className='profile-back-button'>Back</button>
                    <button type='button' className='profile-done-button'>Done</button>
                </form>}
                
            </div>
        )
    }
}