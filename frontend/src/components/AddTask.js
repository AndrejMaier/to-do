import axios from "axios";
import { useState } from "react";

const AddTask = () => {
	const [text, setText] = useState({});
	const sendData = (e) => {
		e.preventDefault();
		const config = {
			url: 'http://localhost:5000/tasks',
			data: {
				textOfTask: text
			},
			headers: { 'content-type': 'application/x-www-form-urlencoded' }
		}
		axios.post(config);
	}
	console.log(text)
  return(
    <form className="add-task" onSubmit={sendData}>
      <h2>Neue Aufgabe</h2>
      <input type="text" name="textOfTask" className="add-task__field" placeholder="Name der Aufgabe" onChange={(e) => setText(e.target.value)} />
      <button className="add-task__btn">Hinzufügen</button>
    </form>
  )
}

export default AddTask;