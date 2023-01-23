import styles from './index.modules.scss'
import reactImage from './images/react-image.png'

const Hello = () => {
  return (
    <>
      <h1 className={styles['some-class']}>Hello from Julia!!!</h1>;
      <img src={reactImage} alt='react image' />
    </>
  )
}

export default Hello
