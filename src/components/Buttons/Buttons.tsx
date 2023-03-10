import classNames from "classnames";

import styles from './Buttons.module.css'


type Props = {
  title: number | string
  width?: string
  inactive?: boolean
  callBack: (title: string) => void
}

export const Button = ({title, width, inactive, callBack}: Props) => {

  const buttonClasses = classNames(styles.button, {
    [styles.inactiveButton]: inactive,
  })
  const clickHandler = () => callBack(title as string)
  
  return <>
    <button style={{width}} className={buttonClasses} onClick={clickHandler}>{title}</button>
  </>

}