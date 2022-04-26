const dragAndDrop = () => {
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
		if(e.target.className === "tasks__item tasks__item-empty") {
			item.parentNode.removeChild(item);
			e.target.after(item)
		}
	})
}

export default dragAndDrop;