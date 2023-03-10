import classNames from "classnames";

import styles from './Display.module.css'


type Props = {
  inactive?: boolean
  inputValue?: string
}

export const Display = ({inactive, inputValue}: Props) => {

  const classesForContainer = classNames(styles.displayContainer, {[styles.inactiveItem]: inactive})

  return (
    <div className={classesForContainer}>
      <input value={inputValue} readOnly className={styles.displayInput}/>
    </div>
  )

}