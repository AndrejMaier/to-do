const Task = ({value}) => {
	return (
		<li className="tasks__item" draggable="true" >
			<p>{value}</p>
			<button className="btn--edit"></button>
		</li>
	)
}


//<input type="text" value={value} />
//onDragStart="event.dataTransfer.setData('text/plain',null)"

export default Task;