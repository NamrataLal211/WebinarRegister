import React, { createContext, useState, useEffect } from 'react';
import Dashboard from './Components/Dashborad';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import BasicCard from './VikramForms/Final';
import axios from 'axios';
import Verification from './VikramForms/Verification'
import NewPassword from './VikramForms/NewPassword';
import ForgotPasswordEmail from './VikramForms/ForgotPasswordEmail'
import Termsout from './VikramForms/Termout';
import Privacout from './VikramForms/Privacyout';

export const Context = createContext();
function App() {
  const [authState, setAuthState] = useState({
    authenticated: false,
    user: {},
  })
  useEffect(() => {
    const loggedInUser = localStorage.getItem("keewe.PO");
    if (loggedInUser) {
      const foundUser = JSON.parse(loggedInUser);
      console.log(foundUser)
      axios({
        //url: "https://lmsapi.keewesolutions.com/check",
        url: 'https://po.keewesolutions.com/check',
        method: "POST",
        data: {
          token: foundUser.user.idToken
        }
      }).then(res => {
        if (res.data.callStatusCode === 200) {
          let newAuthState = { ...authState }
          newAuthState.authenticated = true
          let newPayload = res.data.response
          let newUser = {
            id: newPayload['cognito:username'],
            name: newPayload.name,
            email: newPayload.email,
            phone: newPayload.phone,
            website: newPayload.website,
            idToken: foundUser.user.idToken,
            refreshToken: foundUser.user.refreshToken.token
          }
          newAuthState.user = newUser
          setAuthState(newAuthState)
          console.log("success check")
        } else {
          console.log("failed Check")
          //navigate('/login')
        }
      }).catch(e => console.log(e))


    }
  }, []);
  return (
    <Context.Provider value={{ authState, setAuthState }}>
    
        <Routes>
          {authState.authenticated ?
            <>
            <Route path="/" element={<Dashboard />} />
            <Route path="/Dashboard" element={<Dashboard />} />
  
              
            </>
            :
            <>
              <Route path="/" element={<BasicCard id={1} />} />
              <Route path="/register" element={<BasicCard id={0} />} />
              <Route path="/login" element={<BasicCard id={1} />} />
              <Route path="/verify" element={<Verification />} />
              <Route path="/forgotpassword" element={<ForgotPasswordEmail />} />
              <Route path="/changepassword" element={<NewPassword />} />
              <Route path='/privacyPolicy' element={<Privacout />} />
              <Route path='/termscondition' element={<Termsout />} />
            </>}
        </Routes>
    

    </Context.Provider>




  );
}

export default App;