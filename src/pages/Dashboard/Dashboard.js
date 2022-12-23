import React from 'react'
import { Dashboardmain } from '../../components/Dashboard/Dashboardmain/Dashboardmain'
import { DashboardOrder } from '../../components/Dashboard/DashboardOrder/DashboardOrder'
import {  Dheader } from '../../components/Dashboard/Dheader/Dheader'
import "./dashboard.scss"


export const Dashboard = () => {
  return (
    <div className='dashboard-body'>
        <div className='d-flex justify-content-between'>
        <div className='dashboard-content'>
                <Dheader />
                <Dashboardmain />
        </div>  

        <div className='dashboard-oreder'>
          <DashboardOrder/>
        </div>

        </div>  
     </div>
  )
}
