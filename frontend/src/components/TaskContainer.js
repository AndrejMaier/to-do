import TaskList from "./TaskList";
import {useEffect} from 'react';

const TaskContainer = () => {

	useEffect(() => {
		const tasksContainer = document.querySelector('.tasks-container');
		const tasksElements = tasksContainer.querySelectorAll('.tasks__item');

		for(const task of tasksElements) {
			task.draggable = true;
		}

		tasksContainer.addEventListener('dragstart', (e) => {
			e.target.classList.add('selected');
		})
		tasksContainer.addEventListener('dragend', (e) => {
			e.target.classList.remove('selected');
		})
		tasksContainer.addEventListener('dragover', (e) => {
			e.preventDefault();
			const activeElement = tasksContainer.querySelector('.selected');
			const currentElement = e.target;
			console.log(currentElement);
			const isMoveable = activeElement !== currentElement && currentElement.classList.contains(`tasks__item`);
			if (!isMoveable) {
				return;
			}
			const nextElement = (currentElement === activeElement.nextElementSibling) ?
      currentElement.nextElementSibling : currentElement;
			tasksContainer.insertBefore(activeElement, nextElement);
		})
	}, [])

  return(
    <section className="tasks-container">
      <TaskList status={'backlog'} />
      <TaskList status={'in-process'}/>
      <TaskList status={'ready'}/>
      <TaskList status={'remove'}/>
    </section>
  )
}

export default TaskContainer;