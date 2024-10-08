import { useState } from 'react'

function CarComponent() {
	const [car, setCar] = useState({
		year: 2024,
		make: 'Lamborgini',
		model: 'Avendator',
	})
	const carYearHandler = (event) => {
		setCar((prevCar) => ({ ...prevCar, year: event.target.value }))
	}
	const carMakeHandler = (event) => {
		setCar((prevCar) => ({ ...prevCar, make: event.target.value }))
	}
	const carModelHandler = (event) => {
		setCar((prevCar) => ({ ...prevCar, model: event.target.value }))
	}
	return (
		<div>
			<p className="paragraph">
				Your Favourite car is :{' '}
				<b>
					{car.make} {car.model} {car.year}
				</b>
			</p>
			<input type="number" value={car.year} onChange={carYearHandler}></input>
			<br></br>
			<input type="text" value={car.make} onChange={carMakeHandler}></input>
			<br></br>
			<input type="text" value={car.model} onChange={carModelHandler}></input>
		</div>
	)
}
export default CarComponent
