const Task = ({value}) => {
	return (
		<li className="tasks__item">
			<p>{value}</p>
			<input type="text" value={value} />
			<button className="btn--edit"></button>
		</li>
	)
}

export default Task;