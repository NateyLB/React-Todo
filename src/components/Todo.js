import React from 'react'
import './Todo.css'

const ToDo =props =>{


        return(
            <div>
                <form className="toDo">
                    <h4>{props.item.task}</h4>
                    <input   onClick={() => props.toggleItem(props.item.id)} type="checkbox" checked={props.item.completed} />
                </form>
            </div>
        )
    }

export default ToDo;