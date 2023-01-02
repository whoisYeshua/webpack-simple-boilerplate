import styles from './CardData.module.css'

interface CardDataProperties {
  title: string
  example: string
}

const CardData = ({ title, example }: CardDataProperties) => {
  return (
    <div className={styles['card-data']}>
      <h2>{title}</h2>
      <p>
        Example: <span>{example}</span>
      </p>
    </div>
  )
}

export default CardData
