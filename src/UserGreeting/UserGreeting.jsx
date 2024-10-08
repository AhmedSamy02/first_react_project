import PropTypes from 'prop-types'
import styles from './UserGreeting.module.css'
function UserGreetings(props) {
	if (props.isLoggedIn) {
		return <h2 className={styles.welcomeMessage}>Hello {props.username}</h2>
	} else {
		return <h2 className={styles.loginPrompt}>Please log in to continue</h2>
	}
}
export default UserGreetings
UserGreetings.propTypes = {
	isLoggedIn: PropTypes.bool,
	username: PropTypes.string,
}
UserGreetings.defaultProps = {
	isLoggedIn: false,
	username: 'Guest',
}
