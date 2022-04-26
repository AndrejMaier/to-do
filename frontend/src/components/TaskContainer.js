import TaskList from "./TaskList";
import {useEffect, useState} from 'react';
import dragAndDrop from "../blocks/dragAndDrop";
import {getData, giveTasksByStatus} from "../blocks/getData";

const TaskContainer = () => {
	const [tasks, setTasks] = useState([]);
	const [backLogTasks, setBackLogTasks] = useState([]);
	const [inProcessTasks, setInProcessTasks] = useState([]);
	const [readyTasks, setReadyTasks] = useState([]);
	const [removeTasks, setRemoveTasks] = useState([]);

	useEffect(() => {
		getData('http://localhost:5000/tasks', setTasks);
	}, [])

	useEffect(() => {
		setBackLogTasks(() => giveTasksByStatus(tasks, 'backlog'));
		setInProcessTasks(() => giveTasksByStatus(tasks, 'in process'));
		setReadyTasks(() => giveTasksByStatus(tasks, 'ready'));
		setRemoveTasks(() => giveTasksByStatus(tasks, 'remove'));
	}, [tasks])

	useEffect(() => {
		// Drag and Drop
		dragAndDrop();
	}, [])
	
  return(
    <section className="tasks-container">
      <TaskList status={'backlog'} arr={backLogTasks}/>
      <TaskList status={'in-process'} arr={inProcessTasks}/>
      <TaskList status={'ready'} arr={readyTasks}/>
      <TaskList status={'remove'} arr={removeTasks}/>
    </section>
  )
}

export default TaskContainer;