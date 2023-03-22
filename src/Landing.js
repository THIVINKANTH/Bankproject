import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './Pagedesign.css'
import { Login } from './Loginpage'
import { useState } from 'react'
import LoginIcon from '@mui/icons-material/Login';
export const LandingPage=()=>
{
    const[goin,setGoin]=useState(false)
    // Landing page
    return(
        <>
        {(goin)?
        <>
        <Login/>
        </>
        :
        <>
        <div className="row justify-content-center mt-5 col-lg-12 col-md-10 col-sm-12">
        <span className="topline">Hello</span>
        <h1 className="ms-3">Welcome to<span class="multiText">Zealous Bank</span></h1>
        <p className="ms-5">We, at Zealous Bank, are committed to become the bank of choice by providing superior, proactive, innovative, state-of-art banking services with an attitude of care and concern for the customers and patrons.</p>
        <div className="col">
             {/* create card for landing page */}
            <div className="card bg-warning text-center col-8 mt-5 ms-5">
                <div className="card-boby">
                    <h4 className="card-title"><i class="bi bi-house-fill"></i> Home Loans</h4>
                    <p className="card-subtitle">Register Now!</p>
                     {/* card-image*/}
                    <img src="/Images/Loan-PNG.png" alt="home" class="card-image float-end"/>
                    <ul className="container text-start fw-bolder">
                        <li>We help to build your place called HOME</li>
                        <li>Visit your nearest Zealous Branch</li>
                        <li className="text-danger">Give A Missed Call for Home Loans @1234567890</li>
                    </ul>
                    {/*for using go through kyc register page*/}
                   <button className="btn btn-outline-danger" id="register" onClick={setGoin}><LoginIcon></LoginIcon>Login</button>
                </div>
            </div>
        </div>
        <div className="col">
            <div className="card bg-warning text-center col-8 mt-5 ms-5">
                <div className="card-boby">
                    <h4 className="card-title"><i class="bi bi-cash-coin"></i> Gold Loan</h4>
                    <p className="card-subtitle">Register Now!</p>
                    <img src="/Images/gold.png" alt="home" class="card-image float-end"/>
                    <ul className="container text-start fw-bolder">
                        <li>Jewel to Cash at express speed, visit Zealous today</li>
                        <li>Jewel Loans for Agriculture, MSME, Domestic purposes with lower interest rate and attractive features</li>
                    </ul>
                   <button className="btn btn-outline-danger" id="register" onClick={setGoin}><LoginIcon></LoginIcon>Login</button>
                </div>
            </div>
        </div>
    </div>
    
     </>}
 </>
    )
}