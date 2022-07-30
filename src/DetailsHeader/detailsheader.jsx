import React from 'react'
import { NavLink } from 'react-router-dom';

 function DetailsHeader(props) {
    
    return (
        <div className="container">
            <div className='d-flex justify-content-between w-100 pt-3'>
                <h2>{props.from} - {props.to}</h2>
                <a><NavLink className= "btn btn-primary" to={'/'}> Back To Home </NavLink></a>
            </div>
           
        </div>
    )
}
export default DetailsHeader;