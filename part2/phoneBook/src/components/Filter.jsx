export default function Filter({ filter, setFilter }) {
	return (
		<>
			<label htmlFor='search'>Filter names with:</label>
			<input
				id='search'
				placeholder='Search'
				value={filter}
				onChange={(event) => setFilter(event.target.value)}
			/>
		</>
	);
}
