import classNames from "classnames";

import styles from './EqualBtn.module.css'


type Props = {
  inactive?: boolean
  setResult?: (title: string) => void
}

export const EqualBtn = ({inactive, setResult = () => console.log('error')}: Props) => {

  const classesForButton = classNames(styles.equalButton, {
    [styles.inactiveEqualButton]: inactive,
  })

  return (
    <div className={styles.equalContainer}>
      <button onClick={() => setResult('=')} disabled={inactive} className={classesForButton}>=</button>
    </div>
  )

}