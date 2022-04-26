import Task from './Task';

const TaskList = ({status, arr}) => {
	let title = '';
	switch(status) {
		case 'backlog':
			title = 'Backlog';
			break;
		case 'in-process':
			title = 'In process';
			break;
		case 'ready':
			title = 'Ready';
			break;
		case 'remove':
			title = 'Remove';
			break;
		default:
			break;
	}
	return (
		<section className={`tasks tasks--${status}`}>
      <h3 className="tasks__title">{title}</h3>
			<ul className={"tasks__list"}>
				{status === "backlog" &&
					<li className="tasks__item tasks__item-empty">Create a new task or drag an old one</li>
				}
				{status === "in-process" &&
					<li className="tasks__item tasks__item-empty">Drag the card</li>
				}
				{status === "ready" &&
					<li className="tasks__item tasks__item-empty">Drag the card</li>
				}
				{status === "remove" &&
					<li className="tasks__item tasks__item-empty">Drag the card to remove</li>
				}
				{arr.map(task => <Task value={task.textOfTask} key={task.id} />)}
			</ul>
			{status === 'remove' &&
				<button className="btn--remove">Clear</button>
			}
		</section>
	)
}

{/* <Task value='First task'/>
<Task value='Second task'/>
<Task value='Thirty task'/> */}

export default TaskList;

