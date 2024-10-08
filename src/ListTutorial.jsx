import List from './List/List.jsx'

function ListTutorial() {
	const fruits = [
		{ id: 1, name: 'Apple', calories: 97 },
		{ id: 2, name: 'Orange', calories: 103 },
		{ id: 3, name: 'Banana', calories: 87 },
		{ id: 4, name: 'Peach', calories: 65 },
		{ id: 5, name: 'Watermelon', calories: 45 },
		{ id: 6, name: 'Pineapple', calories: 35 },
	]
	const vegetables = [
		{ id: 7, name: 'Carrot', calories: 15 },
		{ id: 8, name: 'Cuecamber', calories: 57 },
		{ id: 9, name: 'Tomato', calories: 68 },
		{ id: 10, name: 'Beans', calories: 88 },
		{ id: 11, name: 'Potatoes', calories: 119 },
		{ id: 12, name: 'Broccoli', calories: 169 },
	]
	return (
		<>
			{fruits.length > 0 ? (
				<List items={fruits} category={'Fruits'}></List>
			) : null}
			<List items={vegetables} category={'Vegetables'}></List>
		</>
	)
}
export default ListTutorial
