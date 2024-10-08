import styles from './Card.module.css'
import profilePic from '../assets/card.jpg'
function Card() {
	return (
		<div className={styles.card}>
			<img
				src={profilePic}
				alt="Profile Picture"
				className={styles.cardPicture}
			></img>
			<h2 className={styles.cardTitle}>Ahmed Samy</h2>
			<p className={styles.cardContent}>
				I&apos;m a computer engineering Student, I&apos;m studying react now for
				my course laws and consultation
			</p>
		</div>
	)
}
export default Card
