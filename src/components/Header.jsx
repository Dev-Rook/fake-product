

// Styles Import:
import styles from "../styles/comp-styles/header.module.scss"

// Media Import:
const video = "video"

const Header = ({title}) => {
  return (
    <div className={styles.header}>
      <div className={styles.background}>
        <video
          controls={false}
          autoPlay={"autoPlay"}
          loop
          muted
          type={"video/mp4"}
          src={video}
          className={styles.video}
        ></video>
      </div>
      <div className={styles.diffuser}></div>
      <div className={styles.contentContainer}>
        <h1 className={styles.title}>{title}</h1>
      </div>
    </div>
  )
}

export default Header