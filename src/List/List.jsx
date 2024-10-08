import PropTypes from 'prop-types'
import styles from './List.module.css'
function List(props) {
	const category = props.category
	const items = props.items
	const listItems = items.map((fruit) => (
		<li key={fruit.id} className={styles.listItem}>
			{fruit.name} : <b>{fruit.calories}</b> Calories
		</li>
	))
	return (
		<>
			<h2 className={styles.categoryName}>{category}</h2>
			<ol>{listItems}</ol>
		</>
	)
}
export default List
List.propTypes = {
	items: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number,
			name: PropTypes.string,
			calories: PropTypes.number,
		})
	),
	category: PropTypes.string,
}
List.defaultProps = {
	items: [],
	category: 'Category',
}
