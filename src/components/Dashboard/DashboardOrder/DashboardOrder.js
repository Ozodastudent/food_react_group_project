import React from 'react'
import "./dashboardOrder.scss"
import meal from "../../../assets/images/order_img3.png"
import diagram from "../../../assets/images/elemets/diagram.svg" 

export const DashboardOrder = () => {
  return (
    <div className='bodycolors'>
      <div className='dashboard-order-box'>
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

        <div className='dapexpart'>
        <div className='d-flex justify-content-between align-items-center contenttop'>
                <h3 className='orderedtitle'>Most Type of Order</h3>
                <select className='orderedselect'>
                    <option value="today">Today</option>
                    <option value="today">Yesterday</option>
                </select>
        </div>

        <div className='ddiagram'>
            <img src={diagram} alt="diagram" />
            <ul className='diagram-infolist text-white'>
                <li className='diagram-infoitem'>
                       <span className='dinein '></span>
                       <div>
                       <p className='mb-0 diagram-sorting'>Dine In</p>
                        <p className='mb-0 number-diagram'>200 customers</p>
                       </div>
                </li>
                <li className='diagram-infoitem'>
                    <span className='togo'></span>
                        <div>
                        <p className='mb-0 diagram-sorting'>To Go</p>
                        <p className='mb-0 number-diagram'>122 customers</p>
                        </div>
                </li>
                <li className='diagram-infoitem'>
                    <span className='delivery'></span>
                       <div>
                       <p className='mb-0 diagram-sorting'>Delivery</p>
                        <p className='mb-0 number-diagram'>264 customers</p>
                       </div>
                </li>
            </ul>
        </div>
         
        </div>
      </div>
    </div>
  )
}
