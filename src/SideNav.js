import React  from 'react'

export default function SideNav(props) {
    
  return (
    <div className='side-nav'>
      <li className='active' onClick={()=>{props.change("INBOX")}}>
        INBOX
      </li>
      <li onClick={()=>{props.change("TODAY") }}>
        TODAY
      </li>
      <li onClick={()=>{props.change("NEXT")}}>
        NEXT 7 DAYS
      </li>
      
    </div>
  )
}