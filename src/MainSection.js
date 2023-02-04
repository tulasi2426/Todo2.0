import React, { useState, useEffect } from 'react'
import Inbox from './Inbox'
import Next7Days from './Next7Days'
import Today from './Today'



export default function MainSection(props) {
    const [list, setList] = useState([
        { number: 1, title: "Lets Complete this", date: new Date("02/4/2023") },
        { number: 2, title: "should sleep at 9", date: new Date("02/8/2023") },
        { number: 3, title: "should complete react", date: new Date("02/06/2023") }
    ]);



    const [filteredList, setFilteredlist] = useState(list)
    const addToList = (obj) => {
        list.push(obj)
        setFilteredlist(list)
    }
    const remove = (number) => {
        setList(prevList => prevList.filter(task => task.number !== number));
        setFilteredlist(list);
    };
    useEffect(() => {
        setFilteredlist(list);
    }, [list]);



    return (
        <div className='main-section'>
            {props.active === "INBOX" && (
                <Inbox list={filteredList} append={addToList} remove={remove} />

            )}
            {props.active === "TODAY" && <Today list={filteredList} />}
            {props.active === "NEXT" && <Next7Days list={filteredList} />}

        </div>
    )
}