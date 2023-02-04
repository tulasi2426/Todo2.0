import React, { useRef, useState } from "react";


export default function Inbox(props) {
    const [newTask, setNewTask] = useState(false)
    const titleref = useRef()
    const calendarref = useRef()
    const newtaskHandler = () => {
        setNewTask(true)
    }
    const addHandler=()=>{
        if(titleref.current.value === ""){
            window.alert("Task can not be empty");
            return;
        }
        const newObj = {
            number: props.list.length+1,
            title: titleref.current.value,
            date:new Date(calendarref.current.value)
        }
        props.append(newObj)
        setNewTask(false)
    }
    const cancleHandler=()=>{
        setNewTask(false)
    }
   
    
    return (
        <div>
            <h3>INBOX</h3>
            {!newTask && (
                <button className="new" onClick={newtaskHandler}>Add Note</button>
            )}
            {newTask && (
                <form className="buttons">
                    <input type="text" ref={titleref} />
                    <div className="buttons">
                        <button className="new" onClick={addHandler}>Add Task</button>
                        <button className="new" onClick={cancleHandler}>Cancle</button>
                        <input type="date" ref={calendarref} defaultValue="2023-02-04"/>
                    </div>
                </form>
            )}
           
            <div>
                {props.list.map((list)=>{
                    return(
                        <ul className="box" key={list.number} >
                            <li style={{ marginRight: "10px" }}>{list.title} ({list.date.toLocaleDateString()})</li>
                            <button  className="remove" onClick={() => props.remove(list.number)}>Task Done</button>
                        </ul>
                       
                    )
                })}
            </div>
        </div>
    )
}