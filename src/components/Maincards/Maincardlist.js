import React from 'react'
import "./maincardlist.scss"
import { Maincard } from './Maincard'

export const Maincardlist = () => {

    let fakeCard = Array(32).fill(1)

  return (
    
    <ul className='list'>
        {
            fakeCard.map(item => <Maincard key={Math.random()} />)
        }
    </ul>
  )
}
