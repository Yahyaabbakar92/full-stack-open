import { useState } from 'react';
import Person from './components/Person';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';

const App = () => {
	const initialPersons = [
		{ name: 'Arto Hellas', number: '040-123456', id: 1 },
		{ name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
		{ name: 'Dan Abramov', number: '12-43-234345', id: 3 },
		{ name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 },
	];
	const [persons, setPersons] = useState(initialPersons);
	const [newName, setNewName] = useState('');
	const [newNumber, setNewNumber] = useState('');
	const [filter, setFilter] = useState('');

	const createPerson = (name, number) => {
		if (!persons.some((person) => person.name === name)) {
			const personObject = {
				name,
				number,
			};
			setPersons([...persons, personObject]);
			setNewName('');
			setNewNumber('');
		} else {
			alert(`${name} is already added to phone book`);
		}
	};
	const addPersons = (event) => {
		event.preventDefault();
		createPerson(newName, newNumber);
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
			<Filter filter={filter} setFilter={setFilter} />
			<h2>Add a new</h2>
			<PersonForm
				addPersons={addPersons}
				newName={newName}
				handlePersonChange={handlePersonChange}
				newNumber={newNumber}
				handleNumberChange={handleNumberChange}
			/>
			<h2>Numbers</h2>
			{persons
				.filter(
					(e) =>
						e.name.toLowerCase().includes(filter.toLowerCase()) ||
						e.number.includes(filter)
				)
				.map((person, i) => (
					<Person key={i} person={person} />
				))}
			<div>
				debug: {newName} {newNumber}
			</div>
		</div>
	);
};

export default App;
