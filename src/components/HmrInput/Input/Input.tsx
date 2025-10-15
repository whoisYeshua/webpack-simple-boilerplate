import * as styles from './Input.module.css'

const Input = () => (
  <input
    type="string"
    name="hmr"
    className={styles.input}
    placeholder="Test HMR"
    title="Type something here and then change title above in your code editor"
  />
)

export default Input
