import { useState } from "react"
import styles from './ColorPicker.module.css'
function ColorPicker() {
    const [color, setColor] = useState('#1111f1')
    const changeColorHandler = (event) => {
        setColor(event.target.value)
    }
    return (
        <div className={styles.colorContainer}>
            <h1 className={styles.title}>Color Picker</h1>
            <div className={styles.colorDisplay} style={{
                backgroundColor:color
            }}>
                <p>Selected Color: {color}</p>
            </div>
            <p className={styles.colorLabel}>Select a Color:</p>
            <br></br>
            <input type="color" value={color} onChange={changeColorHandler}></input>
        </div>
    )
}
export default ColorPicker