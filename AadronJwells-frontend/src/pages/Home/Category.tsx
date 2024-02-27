import { Link } from "react-router-dom"
import styles from "./Home.module.sass"
import images from "../../assets/images/head.png"
const category = () => {
  return (
    <div className={styles.category_container}>
      <div className={styles.title}>
        <h1>Shop By category</h1>
        <p>Browse through your favorite categories. We've got them all!</p>
      </div>
      
      <div className={styles.card_container}>
          <div className={styles.card}>
            <img src={images} alt="ring" />
            <Link to={"/category"}><div className={styles.heading}>Rings</div></Link> 
            <Link to={"/category"}><div className={styles.explo}>Explore</div></Link>
          </div>

          <div className={styles.card}>
            <img src={images} alt="ring" />
            <Link to={"/category"}><div className={styles.heading}>Rings</div></Link> 
            <Link to={"/category"}><div className={styles.explo}>Explore</div></Link>
          </div>

          <div className={styles.card}>
            <img src={images} alt="ring" />
            <Link to={"/category"}><div className={styles.heading}>Rings</div></Link> 
            <Link to={"/category"}><div className={styles.explo}>Explore</div></Link>
          </div>

          <div className={styles.card}>
            <img src={images} alt="ring" />
            <Link to={"/category"}><div className={styles.heading}>Rings</div></Link> 
            <Link to={"/category"}><div className={styles.explo}>Explore</div></Link>
          </div>

          <div className={styles.card}>
            <img src={images} alt="ring" />
            <Link to={"/category"}><div className={styles.heading}>Rings</div></Link> 
            <Link to={"/category"}><div className={styles.explo}>Explore</div></Link>
          </div>

          <div className={styles.card}>
            <img src={images} alt="ring" />
            <Link to={"/category"}><div className={styles.heading}>Rings</div></Link> 
            <Link to={"/category"}><div className={styles.explo}>Explore</div></Link>
          </div>
      </div>
    </div>
  )
}

export default category
