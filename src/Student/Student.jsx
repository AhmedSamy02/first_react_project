import PropTypes from 'prop-types'
import styles from './Student.module.css'
function Student(props) {
	return (
		<div className={styles.student}>
			<p>
				Name: <b>{props.name}</b>
			</p>
			<p>
				Age: <b>{props.age}</b>
			</p>
			<p>
				isStudent: <b>{props.isStudent ? 'Yes' : 'No'}</b>
			</p>
		</div>
	)
}
Student.propTypes = {
	name: PropTypes.string,
	age: PropTypes.number,
	isStudent: PropTypes.bool,
}
Student.defaultProps = {
	name: 'Guest',
	age: 0,
	isStudent: false,
}
export default Student
