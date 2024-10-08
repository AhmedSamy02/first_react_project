import profile from './assets/card.jpg'
function Picture() {
	return (
        <img src={profile} style={{ maxHeight: '30em' }} onClick={(e) => {
            e.target.hidden = true
            console.log('بخ')
        }}></img>
	)
}
export default Picture
