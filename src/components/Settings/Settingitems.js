import React from 'react'
import img from "../../assets/images/main_food2.png"
import "./settingsitem.scss";

export const Settingitems = () => {
  return (
    <li className='settingsitems'>
       <div className=''>
        <div className='paddingitem'>
            <img className='ms-5' src={img} alt="img" />
            <p className='textsettings'>Spicy seasoned <br /> seafood noodles</p>
            <p className='text-center mb-0'><span className='spansettings'>$ 2.29</span><span className='spansettings'>20 Bowls</span></p>
        </div>
        <button className='settingsbtnedit'>
        Edit dish
        </button>
      </div> 
    </li>
  )
}
