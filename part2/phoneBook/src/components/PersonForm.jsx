export default function PersonForm({
	addPersons,
	newName,
	handlePersonChange,
	newNumber,
	handleNumberChange,
}) {
	return (
		<>
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
		</>
	);
}
