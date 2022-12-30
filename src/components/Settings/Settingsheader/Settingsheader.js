import React from 'react'
import { NavLink } from 'react-router-dom'
import { Settingitems } from '../Settingitems'
import "./Settingsheaderr.scss"

export const Settingsheader = () => {

    let fakeItems = Array(11).fill(1)

  return (
    <div>
        <>
        <div className='admin-header'>
            <h3 className='admin-title'>Products Management</h3>
            <button className='admin-btn'>Manage Categories</button>
        </div>
        <ul className='maincard-header-list'>
            <li className='maincard-header-item '>
                <NavLink className='maincard-header-link active' to="">Hot Dishes</NavLink>
            </li>
            <li className='maincard-header-item '>
                <NavLink className='maincard-header-link' to="">Cold Dishes</NavLink>
            </li>
            <li className='maincard-header-item '>
                <NavLink className='maincard-header-link' to="">Soup</NavLink>
            </li>
            <li className='maincard-header-item '>
                <NavLink className='maincard-header-link' to="">Grill</NavLink>
            </li>
            <li className='maincard-header-item '>
                <NavLink className='maincard-header-link' to="">Appetizer</NavLink>
            </li>
            <li className='maincard-header-item '>
                <NavLink className='maincard-header-link' to="">Dessert</NavLink>
            </li>
        </ul>
        </>

        <div className='d-flex'>



        <ul className='settingslists d-flex flex-wrap'>
            <li>
            <div className='addbtn-box'>
              <div className='addbtn-middle'>
              <button className='addbtn'>+</button>
              <p className='addbtn-text'>Add new dish</p>
              </div>
            </div>
            </li>
            {
            fakeItems.map(item => <Settingitems />)
        }
        </ul>

        </div>



    </div>


    
  )
}
