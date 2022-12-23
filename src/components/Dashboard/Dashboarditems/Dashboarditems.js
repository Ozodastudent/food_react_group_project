import React from 'react'
import avatar from "../../../assets/images/Avatar.svg"
import "./dashboarditems.scss"

export const Dashboarditems = () => {
  return (
    <li className='ditem'>
        <div className='ditems row'>    
            <div className='d-flex align-items-center col-3'>
                <img className='ditems-img' width="50" height="50" src={avatar} alt="avatar" />
                <p className='ditems-name mb-0'>Eren Jaegar</p>
            </div>
            <p className='ditems-desc col-3 text-center mb-0'>Spicy seasoned seafood noodles </p>
            <p className='ditems-pric col-3 text-center mb-0'>$125</p>
            <p className='col-3 text-center mb-0 align-self-center'><span className='ditems-done'>Completed</span></p>
        </div>
    </li>
  )
}
