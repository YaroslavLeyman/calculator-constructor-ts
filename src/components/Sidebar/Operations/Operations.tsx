import {Button} from "../../Buttons/Buttons";
import {operations} from "../../../constants/operations";

import styles from './Operations.module.css'


type Props = {
  inactive?: boolean
  saveOperation?: (title: string) => void
}

export const Operations = ({inactive, saveOperation = () => console.log('error')}: Props) => {

  return (
    <div className={styles.operationsContainer}>
      {operations
        .map((n, i) => <Button callBack={saveOperation} inactive={inactive} key={i} width={'52px'} title={n}/>)}
    </div>
  )

}