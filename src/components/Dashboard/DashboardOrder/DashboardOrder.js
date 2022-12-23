import React from 'react'
import "./dashboardOrder.scss"
import meal from "../../../assets/images/order_img3.png"
 
export const DashboardOrder = () => {
  return (
    <div className='bodycolors'>
        <div className='dashboardoreder-top'>
            <div className='d-flex justify-content-between align-items-center contenttop'>
                <h3 className='orderedtitle'>Most Ordered</h3>
                <select className='orderedselect'>
                    <option value="today">Today</option>
                    <option value="today">Yesterday</option>
                </select>
            </div>
            <ul className='list-unstyled orderedinfobox'>
                <li className='orderedinfos'>
                    <img className='mealimg' width="61" height="50" src={meal} alt="meal" />
                    <div>
                        <p className='orederedtextmeal'>Spicy seasoned seafood noodles</p>
                        <p className='orederedtextmeal2'>200 dishes ordered</p>
                    </div>
                </li>
                <li className='orderedinfos'>
                    <img className='mealimg' width="61" height="50" src={meal} alt="meal" />
                    <div>
                        <p className='orederedtextmeal'>Spicy seasoned seafood noodles</p>
                        <p className='orederedtextmeal2'>200 dishes ordered</p>
                    </div>
                </li>
                <li className='orderedinfos'>
                    <img className='mealimg' width="61" height="50" src={meal} alt="meal" />
                    <div>
                        <p className='orederedtextmeal'>Spicy seasoned seafood noodles</p>
                        <p className='orederedtextmeal2'>200 dishes ordered</p>
                    </div>
                </li>
            </ul>

            <button className='viewall'>View All</button>
        </div>
    </div>
  )
}
