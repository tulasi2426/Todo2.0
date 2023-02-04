import React from 'react'

export default function ListRender(props) {
  return (
    <>
        {props.list.map((list)=>{
            return (
                <div className='box' key={list.number}>
                    <ul className='task'>
                    <li> {list.title} ({list.date.toLocaleDateString()})</li>
                   
                    </ul>

                </div>
            )
        })}
    </>
  )
}
