import { useState, useRef } from "react";

import './App.css';
import logo from './logo.svg';

function App() {
	const [list, setList] = useState([]);
	const taskInputRef = useRef();
	
	const addTask = () => {
		const taskValue = taskInputRef.current.value;
		if (taskValue.trim() !== '') {
			setList((prevList) => [...prevList, taskValue]);
			taskInputRef.current.value = '';
		}
	};
	
	const removeTask = (index) => {
		const newList = [...list];
		newList.splice(index, 1);
		setList(newList);
	};
	
	return (
		<div className="App mw-75">
			<h1 class="mt-5 text-white">To-Do List</h1>
			<input class="w-50 p-2 mb-2" type="text" placeholder="Enter a to-do item" ref={taskInputRef} />
			<ul class="list">
				{list.map((task, index) => (
					<li class="list-item d-flex justify-content-between align-items-center border border-white rounded" key={index}>
						{task}
						<span class="list-btn" onClick={() => removeTask(index)}>X</span>
					</li>
				))}
			</ul>
			<div class="d-flex justify-content-center mt-2">
				<button class="w-50 btn btn-block btn-outline-secondary" onClick={addTask}>Add</button>
			</div>
			
			<div id="copyright">Background by BiZkettE1 on Freepik</div>
		</div>
	);
}

export default App;
