import { useState } from 'react'

function MyComponent() {
	const [name, setName] = useState('Guest')
	const [age, setAge] = useState(0)
    const [alias, setAlias] = useState('Guest')
    const [quantity, setQuantity] = useState(1)
    const [payment,setPayment]=useState('')
	const updateName = () => {
		setName('Ahmed')
	}
	const updateAge = () => {
		setAge(22)
	}
	const incrementAge = () => {
		setAge(age + 1)
	}
	const aliasChangeHandler = (event) => {
		setAlias(event.target.value)
    }
    const quantityChangeHandler = (event) => {
		setQuantity(event.target.value)
    }
    const paymentChangeHandler = (event) => {
        setPayment(event.target.value)
    }
	return (
		<div>
			<p className="paragraph">
				Name:<b>{name}</b>{' '}
			</p>
			<button onClick={updateName} className="custom-button">
				Set Name
			</button>
			<p className="paragraph">
				Age: <b>{age}</b>
			</p>
			<button onClick={updateAge} className="custom-button">
				Set Age
			</button>
			<button onClick={incrementAge} className="custom-button">
				Increment
			</button>
			<br />
			<input value={alias} onChange={aliasChangeHandler}></input>
			<p className="paragraph">
				Alias : <b>{alias}</b>
            </p>
            <input value={quantity} onChange={quantityChangeHandler} type='number'></input>
			<p className="paragraph">
				Quantity : <b>{quantity}</b>
            </p>
            <select value={payment} onChange={paymentChangeHandler}>
                <option value=''>Select an option</option>
                <option value='Visa'>Visa</option>
                <option value='Master Card'>Master Card</option>
                <option value='Gift Card'>Gift Card</option>
            </select>
            <p className="paragraph">
				Payment : <b>{payment}</b>
            </p>
		</div>
	)
}
export default MyComponent
