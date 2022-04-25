const Task = ({value}) => {
	return (
		<li className="tasks__item" draggable="true" onDragStart="event.dataTransfer.setData('text/plain',null)">
			<p>{value}</p>
			<button className="btn--edit"></button>
		</li>
	)
}


//<input type="text" value={value} />

export default Task;