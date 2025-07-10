import { clsx } from 'clsx'
import * as styles from './CardData.module.css'

interface CardDataProperties {
  title?: string | null
  body?: string | null
  loading?: boolean
}

const CardData = ({ title, body, loading }: CardDataProperties) => {
  return (
    <div className={clsx(styles['card-data'], loading && styles['loading'])}>
      <h2>{title}</h2>
      <p>{body}</p>
    </div>
  )
}

export default CardData
