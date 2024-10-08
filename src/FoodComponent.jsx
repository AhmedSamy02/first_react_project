import { useState } from 'react'

function FoodComponent() {
	const [food, setFood] = useState(['Apple', 'Orange', 'Banana'])
	const handleAddFood = () => {
		const tf = document.getElementById('foodInput')
		const value = tf.value
		setFood((prevFood) => [...prevFood, value])
		tf.value = ''
	}
    const handleRemoveFood = (index) => {
        
		setFood(food.filter((_,i)=>i!=index))
	}
	return (
		<div>
			<h2>List Of Food</h2>
			<ul>
				{food.map((value, index) => {
					return <li key={index} onClick={()=>{handleRemoveFood(index)}}>{value}</li>
				})}
			</ul>
			<label>Add food: </label>
			<br></br>
			<input type="text" id="foodInput" placeholder="Enter food name"></input>
			<button onClick={handleAddFood}>Add Food</button>
		</div>
	)
}
export default FoodComponent
