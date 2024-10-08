import { useState } from 'react'

function Counter() {
	const [count, setCount] = useState(0)
	let incrementHandler = () => {
		setCount(count + 1)
		console.log(count)
	}
	let decrementHandler = () => {
		setCount(count - 1)
	}
	let resetHandler = () => {
		setCount(0)
	}
	const increment3Handler = () => {
		setCount(prevCount=>prevCount+1)
		setCount(prevCount=>prevCount+1)
		setCount(prevCount=>prevCount+1)
	}
	const decrement3Handler = ()=> {
		setCount(prevCount=>prevCount-1)
		setCount(prevCount=>prevCount-1)
		setCount(prevCount=>prevCount-1)
	}
	return (
		<>
			<h1 className="number-counter">{count}</h1>
			<button onClick={incrementHandler} className="custom-button" style={{
					width: '8em',
				}}>
				Increment
			</button>
			<button onClick={resetHandler} className="custom-button" style={{
					width: '8em',
				}}>
				Reset
			</button>
			<button onClick={decrementHandler} className="custom-button" style={{
					width: '8em',
				}}>
				Decrement
			</button>
			<br></br>
			<button
				onClick={increment3Handler}
				className="custom-button"
				style={{
					width: '47.5%',
				}}
			>
				Increment 3
			</button>
			<button
				onClick={decrement3Handler}
				className="custom-button"
				style={{
					width: '47.5%',
				}}
			>
				Decrement 3
			</button>
		</>
	)
}
export default Counter
