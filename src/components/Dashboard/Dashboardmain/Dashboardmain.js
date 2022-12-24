import React from 'react'
import { Dashboarditems } from '../Dashboarditems/Dashboarditems'
import "./dashboardmain.scss"

export const Dashboardmain = () => {
  let fakeitems = Array(12).fill(1)
  return (
    <div className='dashmadin-body'>
        <div>
          <div className='dashmaintop'>
            <h3 className='orderreport'>Order Report</h3>

            <button className='filterbtn'>Filter Order</button>
          </div>
          <ul className='dmenu-list list-unstyled row'>
            <li className='dmenu-item col-3'><p className='ptext'>Customer</p></li>
            <li className='dmenu-item col-3 text-center'>Menu</li>
            <li className='dmenu-item col-3 text-center'>Total Payment</li>
            <li className='dmenu-item col-3 text-center'>Status</li>
          </ul>
        </div>

        <ul className='list-unstyled mainitemslist'>
        {
                fakeitems.map(item => <Dashboarditems/> )
            }
            
        </ul>
    </div>
  )
}
