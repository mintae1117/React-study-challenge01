import styles from "./Marvel.module.css";


export default function Character({ id, coverImg, title, des, modified }) {
  return (
    <div className={styles.marvel}>
      <img src={coverImg} alt={title} className={styles.marvel__img} />
      <div>
        <h2 className={styles.marvel__title}>{title}</h2>
        <h3>Character id : {id}</h3>
        <p className={styles.marvel__year}>{des}</p>
        <p>{modified}</p>
      </div>
    </div>
  );
}
