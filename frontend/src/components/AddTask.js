const AddTask = () => {
  return(
    <form action="" className="add-task">
      <h2>Neue Aufgabe</h2>
      <input type="text" className="add-task__field" placeholder="Name der Aufgabe" />
      <button className="add-task__btn">Hinzufügen</button>
    </form>
  )
}

export default AddTask;