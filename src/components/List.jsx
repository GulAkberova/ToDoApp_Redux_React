import React from 'react'
import { useDispatch, useSelector } from 'react-redux';


function List() {
  const dispatch = useDispatch();
  const alldata = useSelector((state) => state.toDoReducer);
  const handleDelete=(item)=>{
    dispatch({type: 'DELETE_DATA', payload:item })
  }
  const handleUpdate=()=>{
    
  }
  return (
    <>
    <div  className='todo_list_big'>
      <div className='todo_list_div'>
      <table className="customers">
  <tr>
    <th>Data</th>
    <th>Delete</th>
    <th>Update</th>
    
  </tr>
 {
  alldata.length ? alldata.map((i,key)=>(
    <tr key={key}>
    <td>{i}</td>
    <td><button onClick={()=>handleDelete(i)}>Delete</button></td>
    <td><button onClick={()=>handleUpdate(i)}>Update</button></td>
  
  </tr>
  )): <h1>Data not found...</h1>
 }
  </table>

      </div>

    </div>
    </>
  )
}

export default List