import React, {useState} from 'react';
import './App.css';
import {PageTitle} from "./components/PageTitle";
import {Rating, RatingValueType} from "./components/Rating";
import {Accordion} from "./components/Accordion";
import {TodoList} from "./components/TodoList";
import {OnOff} from "./components/OnOff";
import {UncontrolledAccordion} from "./components/UncontrolledAccordion";
import {UncontrolledRating} from "./components/UncontrolledRating";

export type FilterValueType = 'all' | 'active' | 'completed'

function App() {
   const [task, setTask] = useState([
      {id: 1, title: 'Spartak', isDone: false},
      {id: 2, title: 'Lokomotiv', isDone: true},
      {id: 3, title: 'Zenit', isDone: true},
      {id: 4, title: 'Ufa', isDone: false},

   ])


   const [filter, setFilter] = useState<FilterValueType>('all')

   let collapsed = task
   if (filter === 'active') {
      collapsed = task.filter(ts => ts.isDone)
   }
   if (filter === 'completed') {
      collapsed = task.filter(ts => !ts.isDone)
   }

   const filterTask = (filterValue: FilterValueType) => {
      setFilter(filterValue)
   }

   const addNewTask = (newT: string) => {
      let newTask = {id: 1, title: newT, isDone: false}
      setTask([newTask, ...task])
   }

   const removeTask = (isId: number) => {
      console.log(isId)
      setTask(task.filter(t => t.id !== isId))
   }

   const [num, setNum] = useState(0)


   function Time() {
      return (
         <div>
            <h3>{num}</h3>
            <button disabled={false} onClick={() => setNum(num + 1)}>Inc</button>
            <button disabled={true} onClick={() => setNum(0)}>Reset</button>
         </div>
      )
   }

   const [chosen, setChosen] = useState <RatingValueType>(0)

   let [collapsedAccordion, setCollapsedAccordion] = useState<boolean>(false)

   const [on, setOn] = useState<boolean>(false)


   return (
      <div className="App">
         {/*<Accordion title={'Menu'} collapsed={collapsedAccordion} onClick={() => setCollapsedAccordion(!collapsedAccordion)}/>*/}
         <OnOff on={on} onChange={setOn}/>
         {/*<Time/>*/}
         {/*<TodoList*/}
         {/*   removeTask={removeTask}*/}
         {/*   tasks={collapsed}*/}
         {/*   group={'Group A'}*/}
         {/*   collapsed={false}*/}
         {/*   addNewTask={addNewTask}*/}
         {/*   filterTask={filterTask}*/}
         {/*/>*/}
         {/*<OnOff />*/}
         {/*<UncontrolledAccordion title={'Menu'} />*/}
         {/*<UncontrolledAccordion title={'Settings'} />*/}
         {/*<Rating value={chosen} onClick={setChosen}/>*/}
         {/*<UncontrolledRating/>*/}

         {/*<PageTitle title={'This is APP Component'}/>*/}

         {/*<Accordion title={'Menu'} />*/}
         {/*<Accordion title={'User'} collapsed={true}/>*/}
         {/*<Rating value={0}/>*/}
         {/*<Rating value={1}/>*/}
         {/*<Rating value={2}/>*/}
         {/*<Rating value={3}/>*/}
         {/*<Rating value={4}/>*/}
         {/*<Rating value={5}/>*/}
      </div>
   );
}


export default App;
