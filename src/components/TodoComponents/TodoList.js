// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';

import ToDo from './ToDo';

const ToDoList = props => {
    return (
        <div>
            {props.toDoItems.map(toDo => {
                return (
                    <ToDo 
                        toDoItem={toDo} 
                        key={toDo.id} 
                        markComplete={props.markComplete} 
                    />
                );
            })}
        </div>
    );
}

export default ToDoList;