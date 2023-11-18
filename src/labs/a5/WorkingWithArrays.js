import React, { useState, useEffect } from 'react';
import axios from 'axios';
function WorkingWithArrays() {
	const [error, setError] = useState('');
	const [todos, setTodos] = useState([]);

	const createTodo = async () => {
		try {
			const response = await axios.post('http://localhost:4000/a5/todos', { title: 'New Todo', completed: false });
			setTodos([...todos, response.data]);
		} catch (error) {
			console.error(error);
			setError(error.message);
		}
	};

	const fetchTodos = async () => {
		try {
			const response = await axios.get('http://localhost:4000/a5/todos');
			setTodos(response.data);
		} catch (error) {
			console.error(error);
			setError(error.message);
		}
	};

	const deleteTodo = async (id) => {
		try {
			const response = await axios.delete(`http://localhost:4000/a5/todos/${id}`);

			if (response.status !== 200) {
				throw new Error(response.statusText);
			}

			setTodos(response.data);
		} catch (error) {
			console.error(error);
			setError(error.message);
		}
	};
	useEffect(() => {
		fetchTodos();
	}, []);

	const completeTodo = async (id, completed) => {
		try {
			const response = await axios.put(`http://localhost:4000/a5/todos/${id}`, { completed: completed });

			if (response.status !== 200) {
				throw new Error(response.statusText);
			}

			setTodos(response.data);
		} catch (error) {
			console.error(error);
			setError(error.message);
		}
	};

	const editTodoLocal = (id, title) => {
		const index = todos.findIndex((todo) => todo.id === id);
		const newTodos = [...todos];
		newTodos[index].title = title;
		setTodos(newTodos);
	};

	const editTodo = async (id) => {
		try {
			const index = todos.findIndex((todo) => todo.id === id);
			const response = await axios.put(`http://localhost:4000/a5/todos/${id}`, { title: todos[index].title });

			if (response.status !== 200) {
				throw new Error(response.statusText);
			}

			setTodos(response.data);
		} catch (error) {
			console.error(error);
			setError(error.message);
		}
	};

	return (
		<div>
			<h2 className="App-header mb-3">Working with Arrays</h2>
			<button className="btn btn-primary mb-3" onClick={createTodo}>
				Create Todo
			</button>
			{error && <div className="alert alert-danger">{error}</div>}
			<ul className="list-group mb-3">
				{todos.map((todo) => (
					<li className="list-group-item" key={todo.id}>
						<button className="btn btn-danger float-end" onClick={() => deleteTodo(todo.id)}>
							Delete
						</button>
						<button className="btn btn-warning float-end me-2" onClick={() => editTodo(todo.id)}>
							Edit
						</button>
						<div className="input-group w-25">
							<div className="input-group-text">
								<input
									className="form-check-input"
									type="checkbox"
									checked={todo.completed}
									onChange={() => completeTodo(todo.id, !todo.completed)}
								/>
							</div>
							<input className="form-control" type="text" value={todo.title} onChange={(e) => editTodoLocal(todo.id, e.target.value)} />
						</div>
					</li>
				))}
			</ul>
			<pre>{JSON.stringify(todos, null, 2)}</pre>
		</div>
	);
}

export default WorkingWithArrays;
