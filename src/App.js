import React,{useState} from 'react';
import './App.css'
import GoalList from './components/GoalList';
import NewGoal from './components/NewGoal/NewGoal'
const App= () => {
  const [CourseGoals,setCourseGoals] = useState([
{id:'cg1',text:'finish course'},
{id:'cg2',text:'learn all about the course'},
{id:'cg3',text:'help other students in the course q&a'}
]);
const addNewGoalHandler = (newGoal) => {
  setCourseGoals(CourseGoals.concat(newGoal))
  setCourseGoals((prevGoals) => {
    return prevGoals.concat(newGoal);
  })
};

  return <div className="Course-goals">
  <h2> Course Goals</h2> 
  <NewGoal onAddGoal ={addNewGoalHandler} />
  <GoalList goals={ CourseGoals} />
  
  </div>;  

};
// class App extends React.Component{
//   render()
//   {
//       return <h1>Hi, <span> this </span>is react js</h1>;  

//   }
// }

export default App;
