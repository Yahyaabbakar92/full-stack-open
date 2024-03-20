import { useState } from 'react';
import Person from './components/Person';

const App = () => {
	const [persons, setPersons] = useState([{ name: 'Arto Hellas' }]);
	const [newName, setNewName] = useState('');
	const [newNumber, setNewNumber] = useState('');

	const addPersons = (event) => {
		event.preventDefault();
		if (!persons.some((person) => person.name === newName)) {
			const personObject = {
				name: newName,
				number: newNumber,
			};
			setPersons([...persons, personObject]);
			setNewName('');
			setNewNumber('');
		} else {
			alert(`${newName} is already added to phone book`);
		}
	};

	const handlePersonChange = (event) => {
		setNewName(event.target.value);
	};
	const handleNumberChange = (event) => {
		setNewNumber(event.target.value);
	};
	return (
		<div>
			<h2>Phone Book</h2>
			<form onSubmit={addPersons}>
				<div>
					name:{' '}
					<input type='text' value={newName} onChange={handlePersonChange} />
				</div>
				<div>
					number:{' '}
					<input type='tel' value={newNumber} onChange={handleNumberChange} />
				</div>
				<div>
					<button type='submit' aria-label='Add new person'>
						add
					</button>
				</div>
			</form>
			<h2>Numbers</h2>
			{persons.map((person, i) => (
				<Person key={i} person={person} />
			))}
			<div>
				debug: {newName} {newNumber}
			</div>
		</div>
	);
};

export default App;
