import Category from "./Category"
import Latest from "./Latest"
import Testimonial from "./Testimonial"
import styles from "./Home.module.sass"

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.head}>
      </div>
      <Category/>
      <Latest/>
      <div className={styles.expo}></div>
      <Testimonial/>
    </div>
  )
}

export default Home
