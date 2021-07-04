import { Component, useEffect, useState } from "react"
import { Col, Row } from "antd";
import Task from '../task/task'
import { addTaskToServer } from "../../utils";
import { v4 as uuid } from 'uuid';

const Container = (props)=>{
    const [input, setInput] = useState("")
    const [tasks, setTasks] = useState(props.tasks || [])

    useEffect(function(){
        setTasks(props.tasks)
    },[props])

    const handleChange =(e)=>{
        setInput(e.target.value)
    }
    const handleAddTask=(e)=>{
        e.preventDefault();

        if(input!=' '){
            let task = {
                id:uuid(),
                name:input,
                description:null
            }
           addTaskToServer(task)
        }
        setInput(' ')
    }
    console.log("inside",tasks)
    return(
        <div>
            <div>
              {tasks.map((task, index)=>{
                  return (
                      <>
                        <div >
                            <Task name={task.name} id={task.id} description={task.description}/>
                        </div>  
                      </>
                  )
              })}  
            </div>
            <Row> 
                <form onSubmit ={handleAddTask} className ="m-2">
                    <input value={input} onChange={handleChange} className ="p-2 m-2 w-60" placeholder="Add task" />
                    <button >Add</button>
                </form>
            </Row>
            
        </div>
    )
}
export default Container;