import React from 'react'
import "./maincardheader.scss"
import down from "../../../assets/images/Base.svg"

export const Maincardheader = () => {
  return (
    <div className='maincard-header'>
        <ul className='maincard-header-list'>
            <li className='maincard-header-item '>
                <a className='maincard-header-link active' href="/">Hot Dishes</a>
            </li>
            <li className='maincard-header-item '>
                <a className='maincard-header-link' href="/">Cold Dishes</a>
            </li>
            <li className='maincard-header-item '>
                <a className='maincard-header-link' href="/">Soup</a>
            </li>
            <li className='maincard-header-item '>
                <a className='maincard-header-link' href="/">Grill</a>
            </li>
            <li className='maincard-header-item '>
                <a className='maincard-header-link' href="/">Appetizer</a>
            </li>
            <li className='maincard-header-item '>
                <a className='maincard-header-link' href="/">Dessert</a>
            </li>
        </ul>

        <div className='mainheader-content'>
            <h3 className='mainheader-title'>Choose Dishes</h3>
            <select class="mainheader-select"  aria-label="select">
                <option selected>Dine In</option>
                <option value="one">One</option>
                <option value="two">Two</option>
                <option value="three">Three</option>
            </select>
        </div>
    </div>
  )
}
