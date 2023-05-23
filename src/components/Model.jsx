import React,{useState} from 'react'
import "./model.css"
import Home from '../Home';
const Model = () => {
    const [login,setLogin] =useState(false);
    const [isLoggedIn,setIsLoggedIn] =useState(false);
    const [data,setData] = useState({username: '', password:''});
    const check=(e)=>{
        e.preventDefault();
        console.log(data);
        setIsLoggedIn(true);
    }
    // const submitHandler =()=>{
    //     setLogin(!login);
    // }
    const loginHandler=(e)=>{
        setLogin(!login);
    }

    
  return (
    <>{isLoggedIn?<Home userName={data.username}/>:
    <form id='formlogin'>
      <div className="login_form_container">
      <div className="login_form">
        <h2>{login?"SignUp":"Login"}</h2>
        <div className="input_group">
          <i className="fa fa-user"></i>
          <input
            type="text"
            placeholder={login ?"Set Username":"Username"}
            className="input_text"
            autocomplete="off"
            value={data.username}
            name="username" 
           onChange={(e)=> setData({...data,[e.target.name]:e.target.value})}
           required
          />
        </div>
        <div className="input_group">
          <i className="fa fa-unlock-alt"></i>
          <input
            type="password"
            placeholder={login ?"Set Password":"Password"}
            className="input_text"
            autocomplete="off"
            value={data.password} 
            name="password" 
           onChange={(e)=> setData({...data,[e.target.name]:e.target.value})}
           required
          />
        </div>
        <div className="button_group" id="login_button">
          <button type='submit' onClick={check}>Submit</button>
        </div>
        <div className="fotter">
            {login?<></>:<button>Forgot Password ?</button>}
          
          <button onClick={loginHandler}>{login?"Login":"SignUp"}</button>
        </div>
      </div>
    </div>
    </form>
}
    </>
  )
}

export default Model
