import {Button} from "../../Buttons/Buttons";
import {numbers} from "../../../constants/numbers";

import styles from './Keyboard.module.css'


type Props = {
  inactive?: boolean
  setValue?: (title: string) => void
}

export const Keyboard = ({inactive, setValue = () => console.log('error')}: Props) => {

  return (
    <div className={styles.keyboardContainer}>
      {numbers
        .map((n, i) => <Button callBack={setValue} inactive={inactive} key={i} title={n}/>)
      }
      <Button callBack={(title) => setValue(title)} width={'152px'} title={0} inactive={inactive}/>
      <Button callBack={() => setValue('.')} title={','} inactive={inactive}/>
    </div>
  )

}