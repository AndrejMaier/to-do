import AddTask from './components/AddTask';
import Header from './components/Header';
import TaskContainer from './components/TaskContainer';

function App() {
  return (
    <>
      <Header name={'Todo'} />
			<main className="container">
        <AddTask />
				<TaskContainer />
			</main>
    </>
  );
}

export default App;
