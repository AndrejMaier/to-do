import TaskList from "./TaskList";
import {useEffect, useState} from 'react';
import axios from "axios";

const TaskContainer = () => {
	const [tasks, setTasks] = useState();
	const [backlogArr, setBacklogArr] = useState();
	const getData = async (url) => {
		await axios(url).then(res => setTasks(res.data))
	}
	const giveTasksByStatus = (arr, status) => arr.filter(item => item.status === status);
	
	useEffect(() => {
		getData('http://localhost:5000/tasks');
		setTimeout(() => {
			setBacklogArr(giveTasksByStatus(tasks, 'backlog'));
			console.log(backlogArr);
		}, 1000)
		
	}, [])
	useEffect(() => {

		// Drag and Drop
		const tasksLists = document.querySelectorAll('.tasks__list');
		const tasksContainer = document.querySelector('.tasks-container');
		let item;

		tasksContainer.addEventListener("dragstart", (e) => {
			e.target.classList.add('selected');
			item = e.target;
		}, false)

		tasksContainer.addEventListener("dragend", (e) => {
			e.target.classList.remove('selected');
		}, false)

		for(const tasksList of tasksLists) {
			tasksList.addEventListener('dragover', (e) => {
				e.preventDefault();
				const activeElement = tasksList.querySelector('.selected');
				const currentElement = e.target;
				const isMoveable = activeElement !== currentElement && currentElement.classList.contains('tasks__item') && !currentElement.classList.contains('tasks__item-empty');
				if (!isMoveable) {
					return;
				}
				const nextElement = (currentElement === activeElement.nextElementSibling) ?currentElement.nextElementSibling : currentElement;
				tasksList.insertBefore(activeElement, nextElement);
			})
		}

		tasksContainer.addEventListener("drop", (e) => {
			e.preventDefault();
			console.log(e.target);
			if(e.target.className === "tasks__item tasks__item-empty") {
				item.parentNode.removeChild(item);
				e.target.after(item)
			}
		})
	}, [])
	
  return(
    <section className="tasks-container">
      <TaskList status={'backlog'} array={backlogArr} />
      <TaskList status={'in-process'}/>
      <TaskList status={'ready'}/>
      <TaskList status={'remove'}/>
    </section>
  )
}

export default TaskContainer;