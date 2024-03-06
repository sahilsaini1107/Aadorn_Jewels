import Category from "./Category"
import Latest from "./Latest"
import Testimonial from "./Testimonial"
import styles from "./Home.module.sass"
import Carousel from 'react-material-ui-carousel'
import Handpicked from "./Handpicked"
import BestSeller from "./BestSeller"
import Connect from "../../components/Connect"

const Home = () => {

  var items = [
    {
       source: "../../../public/images/bcg.png"
    },
    {
       source: "../../../public/images/head.png"
    }
  ]


  return (
    <div className={styles.container}>
      <div className={styles.head}>
      <Carousel
          indicators = {false}
          className={styles.carousel} // apply custom styles to the carousel
        >
          {items.map((item, i) => (
            <img key={i} src={item.source} className={styles.carouselImage} alt="Banner" />
          ))}
        </Carousel>
      </div>
      <Handpicked/>
      <BestSeller/>
      <Category/>
      <Latest/>
      <div className={styles.expo}></div>
      <Testimonial/>
      <Connect/>
    </div>
  )
}

export default Home
