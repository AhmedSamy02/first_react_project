function Button() {
	const styles = {
		backgroundColor: 'hsl(200, 100%, 50%)',
		border: 'none',
		color: 'white',
		height: '70px',
		borderRadius: '5px',
		padding: '10px 20px',
		cursor: 'pointer',
		fontSize: '25px',
	}
	let count = 0
	const handleClick = (name = 'Guest') => {
		if (count < 5) {
			count++
			console.log(`Take care ${name} you clicked me ${count} time/s`)
		} else {
			console.error(`STOP ${name.toUpperCase()}!!!`)
		}
	}
	return (
		<button style={styles} onClick={() => handleClick('Ahmed')}>
			Click Me 😊
		</button>
	)
}
export default Button
