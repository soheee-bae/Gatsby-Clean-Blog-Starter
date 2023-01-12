import React from 'react'
import './index.scss'
import {Link} from 'gatsby'
import Image from 'gatsby-image'


export const Bio = () => {

  const onClick = () => {
    window.open(`https://github.com/sohee28`, '_blank')
  }

  return (
    <div className='bio'>
    <Image
        className='bio-image'
    />
    <div className='bio-content'>
      <span className='bio-link' onClick={onClick}>@sohee28</span>
      <p className='bio-quote'>I want to learn</p>
    </div>
  </div>
  )
 
}