import React from 'react'
import "./dheader.scss"

export const Dheader = () => {
  return (
    <div className='dashboard-header'>
        <div className='dashboard-top'>
            <h2 className='dashboard-title'>Dashboard</h2>
            <p className='dashboard-time'>Tuesday 2 Feb, 2021</p>
        </div>

        <ul className='list-unstyled dashboard-list'>
            <li className='dashboard-item'>
                <div className='d-flex align-items-center'>
                    <span className='first-icon'></span>
                    <span className='first-text'>+32.40%</span>
                    <span className='first-top'></span>
                </div>
                <p className='dmain-text'>$10,243.00</p>
                <p className='avenue'>Total Revenue</p>
            </li>
            <li className='dashboard-item'>
                <div className='d-flex align-items-center'>
                    <span className='first-icon bookmark'></span>
                    <span className='first-text middle'>-12.40%</span>
                    <span className='first-top middle-icon'></span>
                </div>
                <p className='dmain-text'>23,456</p>
                <p className='avenue'>Total Dish Ordered</p>
            </li>
            <li className='dashboard-item'>
                <div className='d-flex align-items-center'>
                    <span className='first-icon people'></span>
                    <span className='first-text'>+2.40%</span>
                    <span className='first-top'></span>
                </div>
                <p className='dmain-text'>1,234</p>
                <p className='avenue'>Total Customer</p>
            </li>
        </ul>
    </div>
  )
}
