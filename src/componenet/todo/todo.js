import {React,useState, useEffect} from 'react';
import ReactDOM, { render } from 'react-dom';
import "./todo.css";
import CardView from '../card/card'
const TodoComponnet=()=>
{
   const tasklist="mytask"
   const [todo,setTodo]=useState('')
   const [taskList, setTasklist]=useState(['pooja'])


   useEffect(() => {
    addTdoo()
  }, [])
const addTdoo=()=>{
  taskList.push(todo)
  console.log(taskList)
 

}
        return (
            <div>
                  <div className="wrapper">
                <div className="sidebar">
                  <div className="profile">
                    <img
                      src="https://1.bp.blogspot.com/-vhmWFWO2r8U/YLjr2A57toI/AAAAAAAACO4/0GBonlEZPmAiQW4uvkCTm5LvlJVd_-l_wCNcBGAsYHQ/s16000/team-1-2.jpg"
                      alt="profile_picture"
                    />
                    <h3 style={{color: "black"}}>Pooja Pandey</h3>
                    <p style={{color: "black"}}>Developer</p>
                  </div>
                  <ul>
                    <li>
                      <a href="#" className="active">
                        <span className="icon"><i className="fas fa-home"></i></span>
                        <span className="item">Home</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="icon"><i className="fas fa-desktop"></i></span>
                        <span className="item">My Dashboard</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="icon"><i className="fas fa-tachometer-alt"></i></span>
                        <span className="item">Perfomance</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="icon"><i className="fas fa-database"></i></span>
                        <span className="item">Development</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="icon"><i className="fas fa-user-shield"></i></span>
                        <span className="item">Admin</span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="icon"><i className="fas fa-cog"></i></span>
                        <span className="item">Settings</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="row">
                <h3>Todo App - Assesment</h3>
              </div>
              <div className="row1">
                <div className="column">
                  <h3>Todo List</h3>
                  <button onClick={()=>addTdoo()}>add</button>
                  <div>
                    <input type="text" id="task" value={todo } onChange={(e) => setTodo(e.target.value)} />
                  </div>
                  {taskList.length>0?
                  taskList.map(obj=>{
                    return(
                      <div className='cardouterdiv'>
                      <CardView task={obj}/>
                      </div>   )
                     
                  }):''}
                </div>
                <div className="column">
                  <h3>In Progress</h3>
                </div>
                <div className="column">
                  <h3>Completed List</h3>
                </div>
              </div>
            </div>
            )
 
}
 
export default TodoComponnet;