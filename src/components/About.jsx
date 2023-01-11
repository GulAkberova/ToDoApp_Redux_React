import React from 'react'
import { useSelector } from 'react-redux'

function About() {
  const alldata = useSelector((state)=>state.toDoReducer)
  console.log(alldata)
  return (
    <>
    <div className='todo_big'>
      <h1>There are {alldata.length} data here</h1>

    </div>
    
    </>
  )
}

export default About