import React, {KeyboardEvent, ChangeEvent, useState} from 'react';
import {FilterValueType} from "../App";

type TodoListPropsType = {
   tasks: Array<TaskPropsType>
   group: string
   collapsed: boolean
   removeTask : (isId: number) => void
   addNewTask: (newT: string) => void
   filterTask: (filterValue: FilterValueType) => void
}

type TaskPropsType = {
   id: number
   title: string
   isDone: boolean
}

export const TodoList = (props: TodoListPropsType) => {
   const [newTitle, setNewTitle] = useState('')

   const onClickHandler = (value: number) => {
      props.removeTask(value)
   }

   const onClickAddHandler = (val: string) => {
      props.addNewTask(val)
      setNewTitle('')
   }

   const onChangeAddHandler = (event: ChangeEvent<HTMLInputElement>) => {
      setNewTitle(event.currentTarget.value)
   }

   const onKeyDownHandler = (event: KeyboardEvent<HTMLInputElement>) => {
      if (event.key === 'Enter') {
        onClickAddHandler(newTitle)
      }
   }

   return (
      <div>
         <h3>{props.group}</h3>
         <input
            value={newTitle}
            onChange={onChangeAddHandler}
            onKeyDown={onKeyDownHandler}
         />
         <button onClick={() => onClickAddHandler(newTitle)}>+</button>
         <ul>
            {
               props.tasks.map(el => {
                  if (props.collapsed) {
                     return (
                        <li key={el.id}>
                        </li>
                     )
                  } else {
                     return (
                        <li key={el.id}>
                           <button onClick={() => onClickHandler(el.id)}>X</button>
                           {el.title}
                           <input type="checkbox" checked={el.isDone}/>
                        </li>
                     )
                  }
               })
            }
         </ul>
         <button onClick={() => props.filterTask('all')}>all</button>
         <button onClick={() => props.filterTask('active')}>active</button>
         <button onClick={() => props.filterTask('completed')}>completed</button>
      </div>
   );
};

